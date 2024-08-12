export type AdminTodayQuiz = {
    text: string;
    level: string;
    userId: string;
    showDay: string;
    choices: QuizChoice[];
    techCategory: string[];
    otherCategory?: string[];
};
export type SaveAdminTodayQuiz = {
    text: string;
    level: number;
    authorId: string;
    showDay: string;
    choices: QuizChoice[];
    techCategory: { id: number }[];
    otherCategory?: { id: number }[];
};
export type QuizChoice = {
    text: string;
    isTrue: boolean;
};
