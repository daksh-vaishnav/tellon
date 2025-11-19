// utils/validation.ts
import { z } from "zod";
import type { Request, Response, NextFunction } from "express";

export const validateSchema = <T extends z.ZodTypeAny>(schema: T) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const zErr = result.error;
            const details = zErr.issues.map(e => ({
                path: e.path.join("."),
                message: e.message,
                code: e.code
            }));
            return res.status(400).json({
                success: false,
                message: "Invalid request body",
                error: {
                    code: "VALIDATION_ERROR",
                    details
                }
            });
        }
        req.body = result.data;
        next();
    };
}
