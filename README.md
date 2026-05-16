<div align="center">

# 🤖 AI Chatbot — Backend

### Desenvolvido por Alef Ramos

API REST do chatbot inteligente, construída com Node.js + Express e integrada ao OpenRouter para consumo de modelos de linguagem.

<br/>

<img src="https://img.shields.io/badge/status-em%20desenvolvimento-brightgreen?style=for-the-badge" />
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/openrouter-412991?style=for-the-badge&logo=openai&logoColor=white" />
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

</div>

---

## 📌 Sobre o projeto

Backend do AI Chatbot, responsável por receber as mensagens do frontend, processá-las e retornar respostas geradas por IA via OpenRouter API.

Desenvolvido com foco em organização, segurança e boas práticas de API REST.

---

## ✨ Funcionalidades

✅ Integração com OpenRouter API  
✅ Suporte a múltiplos modelos de linguagem  
✅ CORS configurável via variável de ambiente  
✅ Limitação de payload (10mb)  
✅ Health check endpoint  
✅ Tratamento de erros global  
✅ Encerramento gracioso do servidor  

---

## 🛠 Tecnologias utilizadas

- **Node.js**
- **Express**
- **CORS**
- **Dotenv**
- **OpenRouter API**

**Ferramentas**

- Git & GitHub
- Biome
- VSCode

---

## 📂 Estrutura do projeto

```
backend
├── routes
│   └── chat.routes.js
├── .env
├── .env.example
├── .editorconfig
├── .gitignore
├── app.js
└── package.json
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

Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

Execute:

```bash
npm run dev
```

---

## 🔑 Variáveis de ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```dotenv
PORT=3001
OPENAI_API_KEY=sua_chave_aqui
OPENAI_BASE_URL=https://openrouter.ai/api/v1
OPENAI_MODEL=meta-llama/llama-3.1-8b-instruct:free
APP_URL=http://localhost:3001
APP_NAME=Chatbot Backend
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:5174
```

> ⚠️ Nunca suba o `.env` real para o repositório.

---

## 🌐 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/health` | Verifica se a API está online |
| POST | `/api/chat` | Envia uma mensagem e recebe resposta da IA |

---

## 🔗 Repositório do Frontend

👉 [ai-chatbot (frontend)](https://github.com/AllefRamos14/ai-chatbot)

---

## 🚀 Melhorias futuras

- [ ] Streaming de respostas
- [ ] Histórico de conversas no banco de dados
- [ ] Autenticação de usuários
- [ ] Rate limiting por usuário
- [ ] Suporte a upload de imagens

---

## 👨‍💻 Desenvolvedor

Desenvolvido por **Alef Ramos**

[![GitHub](https://img.shields.io/badge/GitHub-AllefRamos14-181717?style=flat&logo=github)](https://github.com/AllefRamos14)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-allef--ramos-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/allef-ramos)
[![Portfólio](https://img.shields.io/badge/Portf%C3%B3lio-allef.dev-000?style=flat&logo=vercel)](https://portfolio-dev-alef-ramos.vercel.app)

---

<div align="center">

⭐ Se gostou do projeto, deixe uma estrela!

</div>
