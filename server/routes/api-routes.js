const router = require("express").Router();
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

router.get("/api/reviews", async (req, res) => {
  const response = await mongoose.connection.db
    .collection("TeraGen")
    .find({})
    .toArray();
  res.json(response).status(200);
});

router.post("/api/delete/:id", async (req, res) => {
  const response = await mongoose.connection.db
    .collection("TeraGen")
    .deleteOne({ _id: ObjectId(req.params.id) });
  res.json(response).status(200);
});

router.post("/api/create", async (req, res) => {
  const response = await mongoose.connection.db
    .collection("TeraGen")
    .insertMany([
      { title: "test1", description: "test1" },
      { title: "test2", description: "test2" },
    ]);
  res.json(response).status(200);
});
module.exports = router;
