import { useEffect } from "react";
import { useState } from "react";

export default function EventModalForm({
  isOpen,
  onClose,
  mode,
  OnSubmit,
  eventData,
}) {
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [author, setAuthor] = useState();

  const handleImageChange = (e) => {
    setImg(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = eventData?.id || eventData?.key;

      const newEventData =
        mode == "edit"
          ? { id, image: img, title, description: desc, author }
          : { image: img, title, description: desc, author };
      await OnSubmit(newEventData);
    } catch (err) {
      console.log("Error adding event", err);
    }
  };

  useEffect(() => {
    if (mode === "edit" && eventData) {
      setImg(eventData.image);
      setTitle(eventData.title);
      setDesc(eventData.description);
      setAuthor(eventData.author);
    } else {
      setImg("");
      setTitle("");
      setDesc("");
      setAuthor("");
    }
  }, [mode, eventData]);

  return (
    <>
      <dialog id="my_modal_2" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {mode === "edit" ? "Edit Event" : "Event Details"}
          </h3>

          <form
            className="flex flex-col gap-2 mt-2 mb-2"
            onSubmit={handleSubmit}
          >
            <label className="input input-bordered flex items-center gap-2">
              Image
              <input
                type="text"
                className="grow"
                placeholder="image link here"
                value={img}
                onChange={handleImageChange}
              ></input>
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Title
              <input
                type="text"
                className="grow"
                placeholder="ICT Congress"
                value={title}
                onChange={handleTitleChange}
              ></input>
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Description
              <input
                type="text"
                className="grow"
                placeholder="hello hello hello"
                value={desc}
                onChange={handleDescChange}
              ></input>
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Author
              <input
                type="text"
                className="grow"
                placeholder="Benedict Avenido"
                value={author}
                onChange={handleAuthorChange}
              ></input>
            </label>

            <button className="btn btn-success" type="submit">
              {mode === "edit" ? "Save Changes" : "Add Event"}
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={onClose}>close</button>
        </form>
      </dialog>
    </>
  );
}
