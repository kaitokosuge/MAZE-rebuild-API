import express, { Request, Response } from "express";

import {
    createAdminTodayQuiz,
    getAdminTodayQuiz,
} from "../service/AdminTodayQuizService";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        if (typeof req.query.page !== "string") {
            res.status(500).json(`fail get`);
            return;
        }
        const response = await getAdminTodayQuiz(req.query.page);
        // eslint-disable-next-line no-console
        console.log("response 今日のクイズ", response);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json(`fail get:${error}`);
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const response = await createAdminTodayQuiz(req.body);
        res.status(201).json(response);
    } catch (error: unknown) {
        res.status(500).json(`fail saved:${error}`);
    }
});
export default router;
