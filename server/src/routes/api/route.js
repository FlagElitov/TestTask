const express = require("express");
const router = express.Router();
// Post models

const Route = require("../../models/Route");

//Rest API
//Get
router.get("/", async (req, res) => {
  try {
    const route = await Route.find();
    if (!route) throw Error("Error find route");
    res.status(200).json(route);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
