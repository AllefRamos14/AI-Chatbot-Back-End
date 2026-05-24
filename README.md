<div align="center">

# 🤖 AI Chatbot — Backend

### Desenvolvido por Alef Ramos

API REST do chatbot inteligente construída com Node.js + Express e integrada ao OpenRouter para consumo de modelos de linguagem.

<br/>

<img src="https://img.shields.io/badge/status-em%20desenvolvimento-brightgreen?style=for-the-badge" />
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/OpenRouter-AI-8B5CF6?style=for-the-badge" />
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

<br/>
<br/>

</div>

---

## 📌 Sobre o projeto

O **AI Chatbot Backend** é uma API REST responsável por processar mensagens enviadas pelo frontend, realizar comunicação com modelos de IA através do OpenRouter e retornar respostas em tempo real.

O projeto foi desenvolvido aplicando conceitos utilizados em aplicações reais de mercado, priorizando organização, escalabilidade, segurança e boas práticas de arquitetura.

Aplicados neste projeto:

- Estrutura escalável
- Integração com APIs externas
- Organização modular
- Variáveis de ambiente
- Tratamento global de erros
- CORS configurável
- Encerramento seguro do servidor
- Boas práticas REST

---

## 🏗 Fluxo da aplicação

```txt
Frontend React

        ↓

Express API

        ↓

OpenRouter API

        ↓

Modelo de IA

        ↓

Resposta formatada
```

---

## ✨ Funcionalidades

✅ Integração com OpenRouter API

✅ Suporte a múltiplos modelos de linguagem

✅ CORS configurável via variável de ambiente

✅ Limitação de payload

✅ Health Check endpoint

✅ Tratamento global de erros

✅ Encerramento gracioso do servidor

✅ Configuração por ambiente

✅ Estrutura modular

---

## 🛠 Tecnologias utilizadas

### Backend

- Node.js
- Express
- JavaScript
- Dotenv
- CORS

### Integrações

- OpenRouter API

### Ferramentas

- Git
- GitHub
- Biome
- VSCode

---

## 📂 Estrutura do projeto

```bash
backend
├── routes
│   └── chat.routes.js
│
├── services
│   └── openrouter.service.js
│
├── middlewares
│   └── errorHandler.js
│
├── .env
├── .env.example
├── .editorconfig
├── .gitignore
├── app.js
├── server.js
└── package.json
```

---

## 🌐 Endpoints

| Método | Endpoint | Descrição |
|----------|-----------------|----------------------------|
| GET | `/api/health` | Verifica status da API |
| POST | `/api/chat` | Processa mensagem do usuário |
| OPTIONS | `/api/chat` | Suporte CORS |

---

## 📨 Exemplo de requisição

Request:

```json
POST /api/chat

{
   "message":"Explique React Hooks"
}
```

Resposta:

```json
{
   "response":"React Hooks permitem utilizar recursos do React sem classes..."
}
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/AllefRamos14/ai-chatbot-backend.git
```

Entre na pasta:

```bash
cd ai-chatbot-backend
```

Instale as dependências:

```bash
npm install
```

Copie as variáveis:

```bash
cp .env.example .env
```

Execute:

```bash
npm run dev
```

---

## 🔑 Variáveis de ambiente

Crie um arquivo `.env`:

```env
PORT=3001

OPENROUTER_API_KEY=sua_chave_aqui

OPENROUTER_BASE_URL=https://openrouter.ai/api/v1

OPENROUTER_MODEL=meta-llama/llama-3.1-8b-instruct:free

APP_URL=http://localhost:3001

APP_NAME=AI Chatbot Backend

ALLOWED_ORIGINS=http://localhost:5173,http://localhost:5174
```

> ⚠️ Nunca envie o arquivo `.env` real para o GitHub.

---

## 🚀 Deploy

Backend hospedado utilizando:

- Render

Exemplo:

```txt
https://seu-back-end.onrender.com
```

---

## 🔗 Repositório do Frontend

👉 https://github.com/AllefRamos14/ai-chatbot

---

## 🚀 Melhorias futuras

- [ ] Streaming de respostas
- [ ] Histórico de conversas em banco
- [ ] Login e autenticação
- [ ] JWT
- [ ] Rate limiting
- [ ] Cache de respostas
- [ ] Upload de imagens
- [ ] Logs estruturados
- [ ] Monitoramento
- [ ] Múltiplos modelos IA

---

## 👨‍💻 Desenvolvedor

Desenvolvido por **Alef Ramos**

[![GitHub](https://img.shields.io/badge/GitHub-AllefRamos14-181717?style=flat&logo=github)](https://github.com/AllefRamos14)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-allef--ramos-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/allef-ramos)

[![Portfólio](https://img.shields.io/badge/Portfólio-Alef%20Ramos-000?style=flat&logo=vercel)](https://portfolio-dev-alef-ramos.vercel.app)

---

<div align="center">

### ⭐ Se gostou do projeto, deixe uma estrela

</div>
