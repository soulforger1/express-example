import express from "express";
import cors from "cors";
import { userRouter } from "./routers/user-router.js";
import { mongooseConnect } from "./utils/mongoose-connect.js";
import { foodRouter } from "./routers/food-router.js";
import { categoryRouter } from "./routers/category-router.js";

const app = express();
const port = 3000;

mongooseConnect();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/food", foodRouter);
app.use("/category", categoryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
  console.log("1");
  console.log("2");
});
