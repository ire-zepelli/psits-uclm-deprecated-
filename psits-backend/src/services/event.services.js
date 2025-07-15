import { query } from "../db.js";

export const getEvents = async () => {
  const { rows } = await query("SELECT * from events ORDER BY id ASC");
  return rows;
};

export const getRecentEvents = async () => {
  const { rows } = await query(
    "SELECT * FROM events ORDER BY date_time DESC LIMIT 5"
  );
  return rows;
};

export const createEvent = async (eventData) => {
  const { image, title, description, date_time, location, status } = eventData;

  const { rows } = await query(
    `INSERT INTO events (image, title, description, date_time, location, status) VALUES ($1, $2, $3, $4, $5, $6)`,
    [image, title, description, date_time, location, status]
  );

  return rows[0];
};

export const deleteEvent = async (eventId) => {
  const { rowCount } = await query(`DELETE from events WHERE id = $1`, [
    eventId,
  ]);

  return rowCount > 0;
};
export const updateEvent = async (eventData, eventID) => {
  const { image, title, description, date_time, location, status } = eventData;

  if (image == undefined) {
    const { rows } = await query(
      `UPDATE events SET title = $1, description = $2, date_time = $3, location = $4, status = $5 WHERE id = $6 RETURNING *`,
      [title, description, date_time, location, status, eventID]
    );

    return rows[0];
  } else {
    const { rows } = await query(
      `UPDATE events SET title = $1, description = $2, date_time = $3, image = $4, location = $5, status = $6 WHERE id = $7 RETURNING *`,
      [title, description, date_time, image, location, status, eventID]
    );
    return rows[0];
  }
};
