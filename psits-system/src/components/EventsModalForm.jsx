import { useEffect } from "react";
import { useState } from "react";

export default function EventModalForm({
  isOpen,
  onClose,
  mode,
  OnSubmit,
  eventData,
}) {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [img, setImg] = useState();
  const [dateTime, setDateTime] = useState();
  const [location, setLocation] = useState();
  const [status, setStatus] = useState();

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleImageChange = (e) => {
    setImg(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  function formatDateTime(dateString) {
    const date = new Date(dateString);
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - offset * 60000);
    return localDate.toISOString().slice(0, 16);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = eventData?.id || eventData?.key;

      const newEventData =
        mode == "edit"
          ? {
              id,
              image: img,
              title,
              description: desc,
              date_time: dateTime,
              location,
              status,
            }
          : {
              image: img,
              title,
              description: desc,
              date_time: dateTime,
              location,
              status,
            };

      await OnSubmit(newEventData);
      onClose();
    } catch (err) {
      console.log("Error adding event", err);
    }
  };

  useEffect(() => {
    if (mode === "edit" && eventData) {
      setImg(eventData.image);
      setTitle(eventData.title);
      setDesc(eventData.description);
      setDateTime(formatDateTime(eventData.date_time));
      setLocation(eventData.location);
      setStatus(eventData.status);
    } else {
      setImg("");
      setTitle("");
      setDesc("");
      setDateTime("");
      setLocation("");
      setStatus("");
    }
  }, [mode, eventData]);

  return (
    <>
      <dialog id="my_modal_2" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {mode === "edit" ? "Edit Event" : "Create New Event"}
          </h3>
          <p className="text-xs text-gray-400">
            {mode === "edit"
              ? "Update the event details below."
              : "Fill in the details to create a new event."}
          </p>

          <form
            className="flex flex-col gap-2 mt-6 mb-2"
            onSubmit={handleSubmit}
          >
            <legend className="fieldset-legend text-sm p-0">Event Title</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="ICT Congress"
              value={title}
              onChange={handleTitleChange}
            />
            <legend className="fieldset-legend text-sm p-0">Description</legend>
            <textarea
              className="textarea h-24 w-full"
              placeholder="Add desc"
              value={desc}
              onChange={handleDescChange}
            ></textarea>
            <div className="flex justify-between">
              <div>
                <legend className="fieldset-legend text-sm ">
                  Date and Time
                </legend>
                <input
                  type="datetime-local"
                  className="input"
                  placeholder="ICT Congress"
                  value={dateTime}
                  onChange={handleDateTimeChange}
                />
              </div>
              <div>
                <legend className="fieldset-legend text-sm">Location</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="ICT Congress"
                  value={location}
                  onChange={handleLocationChange}
                />
              </div>
            </div>
            <div>
              <legend className="fieldset-legend text-sm">Image Link</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="ICT Congress"
                value={img}
                onChange={handleImageChange}
              />
            </div>

            <div>
              <legend className="fieldset-legend text-sm">Status</legend>
              <select
                className="select"
                value={status}
                onChange={handleStatusChange}
              >
                <option selected>Select Status</option>
                <option>Upcoming</option>
                <option>Ongoing</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="flex gap-2 mt-5 justify-end">
              <button className="btn btn-default" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-neutral" type="submit">
                {mode === "edit" ? "Update Event" : "Add Event"}
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={onClose}>close</button>
        </form>
      </dialog>
    </>
  );
}
