import express from "express";
import OpenAI from "openai";

const router = express.Router();

const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;
const baseURL =
  process.env.OPENROUTER_BASE_URL ||
  process.env.OPENAI_BASE_URL ||
  "https://openrouter.ai/api/v1";

const model =
  process.env.OPENROUTER_MODEL ||
  process.env.OPENAI_MODEL ||
  "meta-llama/llama-3.1-8b-instruct:free";

const openai = apiKey
  ? new OpenAI({
      apiKey,
      baseURL,
      defaultHeaders: baseURL.includes("openrouter.ai")
        ? {
            "HTTP-Referer": process.env.APP_URL || "http://localhost:3001",
            "X-Title": process.env.APP_NAME || "AI Chatbot Backend",
          }
        : undefined,
    })
  : null;

const SYSTEM_PROMPT = `
Você é um assistente simpático e inteligente chamado DevCore AI.

Responda sempre em português brasileiro.

Seja amigável, útil e direto.

Formate as respostas para leitura em chat simples:
- Use parágrafos curtos.
- Use listas com hífen quando ajudar.
- Não use títulos Markdown com ###.
- Evite negrito com **.
- Evite blocos de código longos, a menos que o usuário peça código.
- Pule linhas entre seções para não virar um texto corrido.
`;

router.post("/", async (req, res) => {
  try {
    if (!openai) {
      return res.status(500).json({
        error: "Configure OPENROUTER_API_KEY no arquivo .env.",
      });
    }

    const { messages, image } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        error: "O campo messages é obrigatório.",
      });
    }

    const formattedMessages = messages.map((message, index) => {
      const isLastMessage = index === messages.length - 1;

      if (isLastMessage && image) {
        return {
          role: message.role,
          content: [
            {
              type: "text",
              text: message.content || "Analise esta imagem.",
            },
            {
              type: "image_url",
              image_url: {
                url: image,
              },
            },
          ],
        };
      }

      return {
        role: message.role,
        content: message.content,
      };
    });

    const stream = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        ...formattedMessages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
      stream: true,
    });

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Transfer-Encoding", "chunked");
    res.setHeader("Cache-Control", "no-cache");

    for await (const chunk of stream) {
      const content = chunk.choices?.[0]?.delta?.content || "";

      if (content) {
        res.write(content);
      }
    }

    return res.end();
  } catch (error) {
    console.error("Erro no chat:", error);

    if (!res.headersSent) {
      return res.status(500).json({
        error: error?.message || "Erro ao gerar resposta.",
      });
    }

    return res.end();
  }
});

export default router;