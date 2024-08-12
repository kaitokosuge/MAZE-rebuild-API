import { PrismaClient } from "@prisma/client";
import { SaveAdminTodayQuiz } from "../types/Quiz";

const prisma = new PrismaClient();

export const save = async (data: SaveAdminTodayQuiz) => {
    const { text, level, authorId, showDay, choices, techCategory } = data;
    const newAdminTodayQuiz = await prisma.adminTodayQuiz.create({
        data: {
            text: text,
            level: level,
            authorId: authorId,
            showDay: showDay,
            techCategory: { connect: techCategory },
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
    return newAdminTodayQuiz;
};
