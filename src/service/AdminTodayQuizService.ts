import { save } from "../repository/AdminTodayQuizRepository";
import { AdminTodayQuiz } from "../types/Quiz";
import { strArrToNumObjctArr } from "../utils/strArrToNumObjctArr";

// クイズ保存処理
export const createAdminTodayQuiz = async (data: AdminTodayQuiz) => {
    const {
        text,
        level,
        userId,
        showDay,
        choices,
        techCategory,
        otherCategory,
    } = data;

    const saveTechCategory = strArrToNumObjctArr(techCategory);

    let saveotherCategory: { id: number }[] | undefined;
    if (otherCategory) {
        saveotherCategory = strArrToNumObjctArr(otherCategory);
    }

    const saveData = {
        text: text,
        level: Number(level),
        authorId: userId,
        showDay: showDay,
        choices: choices,
        techCategory: saveTechCategory,
        otherCategory: saveotherCategory,
    };
    const savedQuiz = await save(saveData);
    return savedQuiz;
};
