import * as eventService from "../services/event.services.js";

export const getEvents = async (req, res) => {
  try {
    const events = await eventService.getEvents();
    res.status(200).json(events);
  } catch (error) {
    console.err("Error fetching events: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getRecentEvents = async (req, res) => {
  try {
    const events = await eventService.getRecentEvents();
    res.status(200).json(events);
  } catch (error) {
    console.err("Error fetching events: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createEvent = async (req, res) => {
  try {
    const eventData = req.body;
    const newEventData = await eventService.createEvent(eventData);
    res.status(200).json(newEventData);
  } catch (error) {
    console.err("Error adding event", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const eventID = req.params.id;
    const deleted = await eventService.deleteEvent(eventID);

    if (!deleted) return res.status(400).json({ message: "Event not found." });

    res.status(200).json({ message: "Event deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const eventID = req.params.id;
    const eventData = req.body;

    const updatedEvent = await eventService.updateEvent(eventData, eventID);

    if (!updatedEvent)
      return res.status(404).json({ message: "Event not found." });

    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};
