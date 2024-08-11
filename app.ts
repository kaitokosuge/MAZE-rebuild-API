import express, { Request } from "express";
import { PrismaClient } from "@prisma/client";

import cors from "cors";
const app = express();
const port = 3001;

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!As");
});

interface QuizChoice {
    text: string;
    isTrue: boolean;
}

app.post("/post/admin-quiz", async (req: Request, res) => {
    const {
        text,
        level,
        userId,
        showDay,
        choices,
    }: {
        text: string;
        level: string;
        userId: string;
        showDay: string;
        choices: QuizChoice[];
    } = req.body;
    const newAdminTodayQuiz = await prisma.adminTodayQuiz.create({
        data: {
            text: text,
            level: Number(level),
            authorId: userId,
            showDay: showDay,
        },
    });
    for (const choice of choices) {
        await prisma.adminTodayQuizChoice.create({
            data: {
                quizId: newAdminTodayQuiz.id,
                text: choice.text,
                isTrue: choice.isTrue,
            },
        });
    }

    res.status(201).json("done");
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Example app listening on port ${port}`);
});
