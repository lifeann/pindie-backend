const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const gamesRouter = require("./routes/games");
const usersRouter = require("./routes/users");
const categoriesRouter = require("./routes/categories");

app.use(
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  gamesRouter,
  usersRouter,
  categoriesRouter
);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
