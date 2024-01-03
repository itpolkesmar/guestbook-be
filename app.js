import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./index.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(8080, () => {
  console.log(`
  server ready at http://localhost:8080  
  `);
});
