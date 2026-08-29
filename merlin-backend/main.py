import os
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from livekit import api

load_dotenv()

app = FastAPI(title="Merlin Token Server")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

LIVEKIT_URL = "https://asistente-de-voz-spy7nov4.livekit.cloud"

@app.get("/api/token")
async def get_token(
    room: str = Query(default="merlin-room"),
    username: str = Query(default="Usuario")
):
    api_key = os.getenv("LIVEKIT_API_KEY")
    api_secret = os.getenv("LIVEKIT_API_SECRET")

    if not api_key or not api_secret:
        return {"error": "Chaves do LiveKit não encontradas"}

    # 1. Solicita à nuvem para despachar o agente para esta sala
    try:
        async with api.LiveKitAPI(LIVEKIT_URL, api_key, api_secret) as lk_api:
            await lk_api.agent_dispatch.create_dispatch(
                api.CreateAgentDispatchRequest(
                    agent_name="my-agent",
                    room=room
                )
            )
    except Exception as e:
        print(f"Info dispatch: {e}")

    # 2. Gera o token de acesso do usuário para a mesma sala
    grant = api.VideoGrants(
        room_join=True,
        room=room,
        room_create=True,
    )

    token = (
        api.AccessToken(api_key=api_key, api_secret=api_secret)
        .with_identity(username)
        .with_grants(grant)
        .to_jwt()
    )

    return {"token": token}