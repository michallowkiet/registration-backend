const express = require("express");
const {
  getAllEvents,
  createEvent,
  deleteEvent,
} = require("./../controllers/events");

const router = express.Router();

router.route("/events").get(getAllEvents).post(createEvent);

router.route("/events/:id").delete(deleteEvent);

module.exports = router;
