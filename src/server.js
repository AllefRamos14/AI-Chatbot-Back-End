// import cors from "cors";
// import "dotenv/config";
// import express from "express";

// import chatRoutes from "./routes/chat.routes.js";

// const app = express();

// const PORT = process.env.PORT || 3001;

// const allowedOrigins = [
//   "http://localhost:5173",
//   "http://localhost:5174",
// ];

// app.use(
//   cors({
//     origin(origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       }

//       return callback(new Error("Origem não permitida pelo CORS"));
//     },
//     credentials: true,
//   })
// );

// app.use(express.json({limit: "10mb"}));
// app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// app.get("/", (req, res) => {
//   res.json({
//     status: "ok",
//     message: "Backend do chatbot rodando.",
//   });
// });

// app.get("/api/health", (req, res) => {
//   res.json({
//     status: "ok",
//     message: "API online.",
//   });
// });

// app.use("/api/chat", chatRoutes);

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

import cors from "cors";
import "dotenv/config";
import express from "express";

import chatRoutes from "./routes/chat.routes.js";

const app = express();

const PORT = process.env.PORT || 3001;

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : [
      "http://localhost:5173",
      "http://localhost:5174",
    ];

const corsOptions = {
  origin(origin, callback) {
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    if (origin.endsWith(".vercel.app")) {
      return callback(null, true);
    }

    return callback(new Error(`CORS bloqueado: ${origin}`));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "API online.",
  });
});

app.use("/api/chat", chatRoutes);


app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Rota não encontrada" });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Erro interno do servidor",
  });
});

const server = app.listen(PORT, () => {
  console.log(`✅ Chatbot Backend running on http://localhost:${PORT}`);
});

process.on("SIGTERM", () => {
  server.close(() => console.log("Servidor encerrado."));
});
