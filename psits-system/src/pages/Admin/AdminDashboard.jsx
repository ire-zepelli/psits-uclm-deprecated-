import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/auth/status",
          { withCredentials: true }
        );
        console.log("User authenticated:", response.data);
      } catch (err) {
        console.log(err);

        console.log("Not authenticated");
        navigate("/");
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link to={"/admin/students"}>Students</Link>
      <Link to={"/admin/Events"}>Events</Link>
    </div>
  );
}
