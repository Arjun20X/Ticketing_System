import type { ErrorRequestHandler } from "express";

import { AppError } from "../errors/AppError.js";
import { logger } from "../logger/logger.js";

export const errorHandler: ErrorRequestHandler = (
    error,
    _req,
    res,
    _next,
) => {
    if (error instanceof AppError) {
        logger.warn(
            {
                error,
                code: error.code,
                statusCode: error.statusCode,
            },
            error.message,
        );

        res.status(error.statusCode).json({
            success: false,
            error: {
                code: error.code,
                message: error.message,
            },
        });

        return;
    }

    logger.error(
        { error },
        "Unhandled application error",
    );

    res.status(500).json({
        success: false,
        error: {
            code: "INTERNAL_SERVER_ERROR",
            message: "An unexpected error occurred.",
        },
    });
};