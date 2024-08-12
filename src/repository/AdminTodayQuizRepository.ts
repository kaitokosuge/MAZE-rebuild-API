import { PrismaClient } from "@prisma/client";
import { SaveAdminTodayQuiz } from "../types/Quiz";

const prisma = new PrismaClient();

export const getByLimit = async (pageNum: number) => {
    const allAdminTodayQuizCount = await prisma.adminTodayQuiz.count();
    const allPageCount = Math.ceil(allAdminTodayQuizCount / 10);
    const skipCount = 10 * (pageNum - 1);
    const allAdminTodayQuiz = await prisma.adminTodayQuiz.findMany({
        skip: skipCount,
        take: 10,
        include: { choices: true, author: true },
    });
    return { allAdminTodayQuiz, allPageCount, pageNum };
};

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
