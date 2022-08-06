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
  const { title, description } = req.body;
  const insertReview = {
    title,
    description,
  };
  const response = await mongoose.connection.db
    .collection("TeraGen")
    .insertMany([insertReview]);
  res.json(response).status(200);
});
module.exports = router;
