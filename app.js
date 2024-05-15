const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const connectToDatabase = require("./database/connect");
const cors = require("./middlewares/cors");
const apiRouter = require("./routes/api");

const app = express();
const PORT = process.env.PORT;
connectToDatabase();

app.use(
  cors,
  bodyParser.json(),
  apiRouter,
  express.static(path.join(__dirname, "public")),
  );

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
