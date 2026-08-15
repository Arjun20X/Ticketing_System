import express from "express";
import { pinoHttp } from "pino-http";

import { logger } from "./shared/logger/logger.js";

const app = express();

app.use(
    pinoHttp({
        logger,
    }),
);

app.use(express.json());

app.get("/health", (_req, res) => {
    res.status(200).json({
        status: "ok"
    });
});

export default app;