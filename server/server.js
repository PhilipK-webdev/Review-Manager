const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/TeraGen";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("you are connected to mongodb"))
  .catch((err) => console.log(err));

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
