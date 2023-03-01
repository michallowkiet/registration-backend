const eventsModel = require("./../models/events");

const getAllEvents = async (req, res) => {
  const events = await eventsModel.find();
  res.status(200).json(events);
};

const createEvent = async (req, res, next) => {
  try {
    const { name, cities, courses } = req.body;
    const eventBody = { name, city: cities, course: courses };

    const event = await eventsModel.create(eventBody);
    res.status(201).json({ msg: `Registration was successful` });
  } catch (error) {
    res.status(400).json(error.errors);
  }
};

const deleteEvent = async (req, res, next) => {
  const { id: EventID } = req.params;
  const event = await eventsModel.findOneAndDelete({ _id: EventID });

  if (!event) {
    return res.status(404).json({ msg: `No event with id : ${EventID}` });
  }

  res.status(200).json({ msg: `Event with id: ${EventID} was deleted` });
};

module.exports = {
  getAllEvents,
  createEvent,
  deleteEvent,
};
