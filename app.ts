import express, { Request } from "express";
import cors from "cors";
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!As");
});

app.post("/post/admin-quiz", async (req: Request, res) => {
    res.send("hello next");
    console.log("requestです", req.body);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
