'use client';

import { useState, useEffect } from 'react';
import {
  LiveKitRoom,
  RoomAudioRenderer,
  ControlBar,
  BarVisualizer,
  useVoiceAssistant,
} from '@livekit/components-react';
import '@livekit/components-styles';

export default function Home() {
  const [token, setToken] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  // Garante que o código só rodes após a montagem no navegador (evita erros de SSR/WebRTC)
  useEffect(() => {
    setIsClient(true);
  }, []);

  const connectToMerlin = async () => {
    try {
      console.log('Buscando token no backend FastAPI...');
      const res = await fetch('http://127.0.0.1:8000/api/token');
      const data = await res.json();
      
      if (data.token) {
        console.log('Token recebido com sucesso!');
        setToken(data.token);
      } else {
        alert('O backend respondeu, mas não enviou o token.');
      }
    } catch (err) {
      console.error('Erro ao conectar no backend:', err);
      alert('Não foi possível conectar ao backend na porta 8000. Verifique se o FastAPI está ativo!');
    }
  };

  if (!isClient) return null;

  const livekitUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-6">
      <div className="flex flex-col items-center max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Merlin Voice
        </h1>
        <p className="text-slate-400 text-sm mb-8">
          Assistente Virtual Multimodal em Tempo Real
        </p>

        {!token ? (
          <button
            onClick={connectToMerlin}
            className="w-full py-3.5 px-6 bg-purple-600 hover:bg-purple-500 font-semibold rounded-xl transition-all shadow-lg hover:shadow-purple-500/25 active:scale-95"
          >
            Iniciar Conversa por Voz
          </button>
        ) : (
          <LiveKitRoom
            serverUrl={livekitUrl}
            token={token}
            connect={true}
            audio={true}
            video={false}
            className="w-full flex flex-col items-center gap-6"
          >
            <AssistantVisualizer />
            <ControlBar controls={{ microphone: true, camera: false, screenShare: false }} />
            <RoomAudioRenderer />
          </LiveKitRoom>
        )}
      </div>
    </main>
  );
}

function AssistantVisualizer() {
  const { state, audioTrack } = useVoiceAssistant();

  return (
    <div className="flex flex-col items-center gap-4 w-full py-4 bg-slate-950/50 rounded-xl border border-slate-800">
      <p className="text-xs font-mono uppercase tracking-widest text-purple-400">
        Status: <span className="text-white">{state || 'conectando...'}</span>
      </p>

      <div className="h-16 flex items-center justify-center">
        <BarVisualizer
          state={state}
          trackRef={audioTrack}
          barCount={7}
          options={{ minHeight: 12 }}
        />
      </div>
    </div>
  );
}