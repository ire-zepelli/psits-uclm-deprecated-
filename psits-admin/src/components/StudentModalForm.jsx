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
      onClose();
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
            {mode === "edit" ? "Edit Student" : "Add New Student"}
          </h3>
          <p className="text-xs text-gray-400">
            {mode === "edit"
              ? "Update the student details below."
              : "Fill in the details to add a new student."}
          </p>

          <form
            className="flex flex-col gap-2 mt-6 mb-2"
            onSubmit={handleSubmit}
          >
            <legend className="fieldset-legend text-sm p-0">Name</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="John Doe"
              value={name}
              onChange={handleNameChange}
            />
            <div className="flex justify-between gap-4 items-center">
              <div>
                <legend className="fieldset-legend text-sm p-1">
                  Student ID
                </legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter ID"
                  value={id}
                  onChange={handleIDChange}
                />
              </div>
              <div>
                <legend className="fieldset-legend text-sm p-1">Level</legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="BSIT-3E"
                  value={level}
                  onChange={handleLevelChange}
                />
              </div>
            </div>

            <legend className="fieldset-legend text-sm">Email</legend>
            <input
              type="email"
              className="input w-full"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />

            <legend className="fieldset-legend text-sm">Password</legend>
            <input
              type="password"
              className="input w-full"
              placeholder="secret :p"
              value={password}
              onChange={handlePasswordChange}
            />

            <div className="flex gap-2 mt-5 justify-end">
              <button className="btn btn-default" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-neutral" type="submit">
                {mode === "edit" ? "Update Student" : "Add Student"}
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={onClose}>Close</button>
        </form>
      </dialog>
    </>
  );
}
