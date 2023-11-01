import { createServer } from "http";
import app from "./express";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;
const server = createServer(app);

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => {
    console.info("DB connected");
    server.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
  })
  .catch((err) => console.error(err));
