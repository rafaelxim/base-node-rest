const express = require("express");
const auth = require("../middleware/auth");
const { Genre, validate } = require("../models/genre");
const router = express.Router();
/**
 * This function comment is parsed by doctrine
 * @route GET /api/genres
 * @group foo - Operations about user
 * @param {string} email.query.required - username or email - eg: user@domain
 * @param {string} password.query.required - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get("/", async (req, res) => {
    let genre = await Genre.find();
    res.send(genre);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let genre = new Genre({ name: req.body.name });
  genre = await genre.save();

  res.send(genre);
});

module.exports = router;
