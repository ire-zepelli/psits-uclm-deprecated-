import React from "react";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  return (
    <div>
      <h1>Welcome To Student Dashboard!</h1>
      <Link to={"/login"} className="hover:text-gray-200">
        Login
      </Link>
    </div>
  );
}
