import { useState } from "react";

export default function LoginForm({ handleSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Username</label>
        <input
          type="text"
          className="input"
          placeholder="Email"
          value={username}
          onChange={handleUsernameChange}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button
          className="btn btn-neutral mt-4"
          onClick={() => {
            handleSubmit({ user: username, password });
          }}
        >
          Login
        </button>
      </fieldset>
    </>
  );
}
