import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { environments } from "./environments/environments";
import UsersRouter from "./routes/users.routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json())

app.use("/api/users", UsersRouter);

app.listen(environments.PORT, () => {
  console.log(`Serve on port ${environments.PORT}`);
});

export default app;
