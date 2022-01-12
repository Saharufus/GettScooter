const router = require("express").Router();
const ScooterModel = require("../Models/Scooters");

router.get("/getScooters", (req, res) => {
  ScooterModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.get("/getScooter/:scooterID", async (req, res, next) => {
  const { scooterID } = req.params;
  try {
    const scooters = await ScooterModel.find();
    const element = scooters.forEach((element) => {
      if (element.id == scooterID) {
        return res.send({ element });
      }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
