export const strArrToNumObjctArr = (strArr: string[]) => {
    return strArr.map((strEl: string) => {
        return { id: Number(strEl) };
    });
};
