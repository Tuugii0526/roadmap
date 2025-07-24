import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { verifyToken } from "./middleware/verify-token.js";
import authRoute from "./routes/auth.route.js";
const corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200,
};
const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.get("/", verifyToken, (_, res) => {
  return res.json({
    success: true,
    message: "Authenticated",
  });
});
app.use("/", authRoute);
app.listen(3000, () => {
  console.log(`Server started http://localhost:3000`);
});
