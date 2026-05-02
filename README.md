# MERLIN — Voice AI Agent with Persistent Memory

> ⚠️ **Status: In Progress (Rebuild Phase)**

MERLIN é um agente de voz em tempo real com memória de longo prazo, projetado para manter contexto entre sessões utilizando arquitetura baseada em RAG.

---

## 🚧 Status Atual

Este projeto está atualmente em fase de **reconstrução da base de código**, com foco em:

- Reestruturação da arquitetura do agente
- Otimização da camada de memória persistente
- Refinamento do pipeline de processamento em tempo real

---

## 🧠 Proposta Técnica

O objetivo do MERLIN é resolver o problema de **context loss em agentes de voz**, através de:

- Persistência de memória entre sessões
- Extração automática de insights
- Injeção dinâmica de contexto em tempo real

---

## 🏗️ Arquitetura Planejada

- LiveKit → processamento de áudio em tempo real  
- Gemini → interpretação e geração de linguagem  
- Mem0 → armazenamento de memória vetorial  
- Pipeline assíncrono → persistência no shutdown  

---

## 📌 Roadmap

- [ ] Recriação do core do agente (LiveKit + Gemini)
- [ ] Integração com camada de memória (Mem0)
- [ ] Implementação de tool calling
- [ ] Testes de persistência entre sessões
- [ ] Deploy inicial

---

## 🎯 Objetivo

Demonstrar construção de um sistema de IA capaz de:

- Operar em tempo real  
- Manter estado entre sessões  
- Evoluir com base em interações passadas  

---

**Status:** em desenvolvimento ativo
