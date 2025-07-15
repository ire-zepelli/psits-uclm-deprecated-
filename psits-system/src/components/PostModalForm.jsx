import { useEffect } from "react";
import { useState } from "react";

export default function PostModalForm({
  isOpen,
  onClose,
  mode,
  OnSubmit,
  postData,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
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

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const post_id = postData?.post_id || postData?.key;

      const newEventData =
        mode == "edit"
          ? {
              post_id,
              image: img,
              title,
              author,
              date,
              content,
              category,
              status,
            }
          : {
              image: img,
              title,
              author,
              date,
              content,
              category,
              status,
            };

      await OnSubmit(newEventData);
      onClose();
    } catch (err) {
      console.log("Error adding event", err);
    }
  };

  useEffect(() => {
    if (mode === "edit" && postData) {
      setImg(postData.image);
      setTitle(postData.title);
      setContent(postData.content);
      setCategory(postData.category);
      setDate(postData.date);
      setAuthor(postData.author);
      setStatus(postData.status);
    } else {
      setImg("");
      setTitle("");
      setContent("");
      setCategory("");
      setDate("");
      setAuthor("");
      setStatus("");
    }
  }, [mode, postData]);

  return (
    <>
      <dialog id="my_modal_2" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {mode === "edit" ? "Edit Post" : "Create New Post"}
          </h3>
          <p className="text-xs text-gray-400">
            {mode === "edit"
              ? "Update the post details below."
              : "Fill in the details to create a new post."}
          </p>

          <form
            className="flex flex-col gap-2 mt-6 mb-2"
            onSubmit={handleSubmit}
          >
            <legend className="fieldset-legend text-sm p-0">Post Title</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="ICT Congress"
              value={title}
              onChange={handleTitleChange}
            />
            <legend className="fieldset-legend text-sm p-0">Content</legend>
            <textarea
              className="textarea h-24 w-full"
              placeholder="Add content"
              value={content}
              onChange={handleContentChange}
            ></textarea>
            <div>
              <legend className="fieldset-legend text-sm">Category</legend>
              <select
                className="select"
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="">Select Catergory</option>
                <option value="0">Announcement</option>
                <option value="1">Blog</option>
                <option value="2">Academic</option>
                <option value="3">Featured</option>
              </select>
            </div>
            <div className="flex gap-2">
              <div>
                <legend className="fieldset-legend text-sm">Author</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="John Doe"
                  value={author}
                  onChange={handleAuthorChange}
                />
              </div>
              <div>
                <legend className="fieldset-legend text-sm ">Date</legend>
                <input
                  type="date"
                  className="input"
                  placeholder="ICT Congress"
                  value={date}
                  onChange={handleDateChange}
                />
              </div>
            </div>
            <div>
              <legend className="fieldset-legend text-sm">Image Link</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="url"
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
                <option value="">Select Status</option>
                <option value="0">Published</option>
                <option value="1">Draft</option>
                <option value="2">Archived</option>
              </select>
            </div>

            <div className="flex gap-2 mt-5 justify-end">
              <button className="btn btn-default" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-neutral" type="submit">
                {mode === "edit" ? "Update Post" : "Add Post"}
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
