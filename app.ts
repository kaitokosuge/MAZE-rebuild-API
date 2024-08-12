import express from "express";
import cors from "cors";

import adminTodayQuizRouter from "./src/controller/AdminTodayQuizController";

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

app.use("/admin-today-quiz", adminTodayQuizRouter);

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`postはこちら ${port}`);
});
