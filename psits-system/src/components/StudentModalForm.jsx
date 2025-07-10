import { useEffect } from "react";
import { useState } from "react";

export default function StudentModalForm({
  isOpen,
  onClose,
  mode,
  OnSubmit,
  studentData,
}) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleIDChange = (e) => {
    setId(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      const studentData = { id, name, password, level, email };
      setPassword("");
      await OnSubmit(studentData);
    } catch (err) {
      console.log("Error adding student", err);
    }
  };

  useEffect(() => {
    if (mode === "edit" && studentData) {
      setId(studentData.id);
      setName(studentData.name);
      setPassword(studentData.password);
      setLevel(studentData.level);
      setEmail(studentData.email);
    } else {
      setEmail("");
      setName("");
      setPassword("");
      setId("");
      setLevel("");
    }
  }, [mode, studentData]);

  return (
    <>
      <dialog id="my_modal_2" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {mode === "edit" ? "Edit Student" : "Student Details"}
          </h3>

          <form
            className="flex flex-col gap-2 mt-2 mb-2"
            onSubmit={handleSubmit}
          >
            <label className="input input-bordered flex items-center gap-2">
              ID
              <input
                type="number"
                className="grow"
                placeholder="123123"
                value={id}
                onChange={handleIDChange}
              ></input>
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                className="grow"
                placeholder="Benedict"
                value={name}
                onChange={handleNameChange}
              ></input>
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Password
              <input
                type="text"
                className="grow"
                placeholder="itsasecret"
                value={password}
                onChange={handlePasswordChange}
              ></input>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Yr & Section
              <input
                type="text"
                className="grow"
                placeholder="BSIT-3A"
                value={level}
                onChange={handleLevelChange}
              ></input>
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="benandben@gmail.com"
                value={email}
                onChange={handleEmailChange}
              ></input>
            </label>

            <button className="btn btn-success" type="submit">
              {mode === "edit" ? "Save Changes" : "Add Student"}
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
