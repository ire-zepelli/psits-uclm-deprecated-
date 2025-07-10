import { query } from "../db.js";

export const getEvents = async () => {
  const { rows } = await query("SELECT * from events ORDER BY id ASC");
  return rows;
};

export const createEvent = async (eventData) => {
  const { image, title, description, author } = eventData;

  const { rows } = await query(
    `INSERT INTO events (image, title, description, author) VALUES ($1, $2, $3, $4)`,
    [image, title, description, author]
  );
};

export const deleteEvent = async (eventId) => {
  const { rowCount } = await query(`DELETE from events WHERE id = $1`, [
    eventId,
  ]);

  return rowCount > 0;
};
export const updateEvent = async (eventData, eventID) => {
  const { image, title, description, author } = eventData;

  if (image == undefined) {
    const { rows } = await query(
      `UPDATE events SET title = $1, description = $2, author = $3 WHERE id = $4 RETURNING *`,
      [title, description, author, eventID]
    );

    return rows;
  } else {
    const { rows } = await query(
      `UPDATE events SET title = $1, description = $2, author = $3, image = $4 WHERE id = $5 RETURNING *`,
      [title, description, author, image, eventID]
    );
    return rows;
  }
};
