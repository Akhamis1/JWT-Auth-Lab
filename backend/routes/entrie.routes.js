const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const Entry = require("../models/Entry");

router.post("/", verifyToken, async (req, res) => {
  try {
    const { title, entryBody } = req.body;
    console.log(req.user);
    req.body.isPublic = Boolean(req.body.isPublic);
    const newEntry = await Entry.create({
      title: title,
      entryBody: entryBody,
      isPublic: req.body.isPublic,
      owner: req.user._id,
    });

    res.status(201).json(newEntry);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", verifyToken, async (req, res) => {
  try {
    const foundEntries = await Entry.find({ isPublic: true });
    res.status(200).json(foundEntries);
  } catch (err) {
    console.log(err);
  }
});

router.get("/my-entries", verifyToken, async (req, res) => {
  try {
    const foundEntry = await Entry.find({ owner: req.user._id });
    res.status(200).json(foundEntry);
  } catch (err) {
    console.log(err);
  }
});

router.put("/my-entries/:id",verifyToken, async (req, res) => {
  try {

    const foundOne = await Entry.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json(foundOne);
  } catch (err) {
    res.status(403).json({ message: "Entry not found" });
    console.log(err);
  }
});

router.delete("/my-entries/:id",verifyToken, async (req, res) => {
  try {
    const deletedEntry = await Entry.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedEntry);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
