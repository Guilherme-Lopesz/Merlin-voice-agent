# MERLIN — Voice Agent that Remembers You

Most AI agents forget everything after you stop talking.  
**MERLIN doesn't.**

---

### ⚡ TL;DR
- Real-time voice agent com **memória persistente entre sessões (RAG)**
- Resolve um problema real: **context loss em LLMs**
- Pipeline assíncrono de **extração, estruturação e recuperação de memória**
- Arquitetura pensada para **sistemas conversacionais escaláveis**

---

### 💡 O Problema
Agentes de voz baseados em LLM operam em um modelo **stateless**.

Quando a sessão termina:
- Preferências do usuário são perdidas  
- Contexto desaparece  
- Interações não evoluem  

Resultado: experiências repetitivas e pouco inteligentes.

---

### ✨ A Solução
O **MERLIN** implementa uma arquitetura de **memória persistente baseada em RAG**:

- Extrai insights estruturados das conversas  
- Armazena em banco vetorial (**Mem0**)  
- Reinjeta contexto relevante em novas sessões  

→ O agente **aprende, evolui e mantém continuidade cognitiva**

---

### 🏗️ Arquitetura (Fluxo Simplificado)

1. **Input**: voz em tempo real (LiveKit / WebRTC)  
2. **Processamento**: LLM (Google Gemini)  
3. **Memória (write)**: extração assíncrona → Mem0  
4. **Memória (read)**: recuperação → injeção no contexto  

---

### 💎 Diferenciais Técnicos

- **Persistência via shutdown hook**  
  Garante salvamento de memória mesmo em desconexões inesperadas  

- **RAG aplicado a agentes conversacionais**  
  Extende limitações de contexto dos LLMs  

- **Pipeline assíncrono de insights**  
  Processamento desacoplado do fluxo principal  

- **Arquitetura orientada a ferramentas**  
  Integração com Search, Email e APIs externas  

---

### 🛠️ Stack

- **Realtime:** LiveKit (WebRTC)  
- **LLM:** Google Gemini  
- **Memória:** Mem0 (Vector DB)  
- **Linguagem:** Python (Asyncio)  

---

### 🚀 Execução

```bash
pip install -r requirements.txt
python agente.py
```

---

### 📚 Aprendizados Técnicos

- Design de sistemas com memória para LLMs (RAG)
- Processamento assíncrono em sistemas real-time
- Transformação de dados não estruturados em conhecimento reutilizável
- Gestão de ciclo de vida em agentes conversacionais

---

### 🎯 Para Recrutadores

Este projeto demonstra:

- Construção de sistemas de IA além de integrações simples
- Capacidade de resolver limitações reais de LLMs
- Pensamento arquitetural (memória, estado, escalabilidade)
- Engenharia aplicada a cenários de produção

---

**Desenvolvido por Guilherme**
