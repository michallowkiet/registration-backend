const eventsModel = require("./../models/events");

const getAllEvents = async (req, res) => {
  const events = await eventsModel.find();
  res.status(200).json(events);
};

const createEvent = async (req, res, next) => {
  try {
    const event = await eventsModel.create(req.body);
    res.status(201).json({ event });
  } catch (error) {
    console.log(error);
  }
};

const deleteEvent = async (req, res, next) => {
  const { id: EventID } = req.params;
  const event = await eventsModel.findOneAndDelete({ _id: EventID });

  if (!event) {
    return res.status(404).json({ msg: `No event with id : ${EventID}` });
  }

  res.status(200).json({ event });
};

module.exports = {
  getAllEvents,
  createEvent,
  deleteEvent,
};
