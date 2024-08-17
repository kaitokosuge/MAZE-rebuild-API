import { getByLimit, save } from "../repository/AdminTodayQuizRepository";
import { AdminTodayQuiz } from "../types/Quiz";
import { strArrToNumObjctArr } from "../utils/strArrToNumObjctArr";

//今日のクイズ取得処理
export const getAdminTodayQuiz = async (query: string) => {
    const pageNum = Number(query);
    const allAdminTodayQuiz = await getByLimit(pageNum);
    return allAdminTodayQuiz;
};

// 今日のクイズ保存処理
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

    let saveOtherCategory: { id: number }[] | undefined;
    if (otherCategory) {
        saveOtherCategory = strArrToNumObjctArr(otherCategory);
    }

    const saveData = {
        text: text,
        level: Number(level),
        authorId: userId,
        showDay: showDay,
        choices: choices,
        techCategory: saveTechCategory,
        otherCategory: saveOtherCategory,
    };
    const savedQuiz = await save(saveData);
    return savedQuiz;
};
