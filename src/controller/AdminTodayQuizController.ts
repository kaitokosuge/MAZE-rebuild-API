import express, { Request, Response } from "express";

import { createAdminTodayQuiz } from "../service/AdminTodayQuizService";

const router = express.Router();

router.post("/post", async (req: Request, res: Response) => {
    try {
        const response = await createAdminTodayQuiz(req.body);
        // eslint-disable-next-line no-console
        console.log("responseです", response);

        res.status(201).json("adminTodayQuizSaved");
    } catch (error: unknown) {
        // eslint-disable-next-line no-console
        console.log("エラー内容です", error);
        res.status(500).json("fail saved");
        // throw new Error("保存に失敗しました");
    }
});
export default router;
