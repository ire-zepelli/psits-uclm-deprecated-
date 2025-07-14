import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export default function StudentDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/auth/status",
          { withCredentials: true }
        );

        if (response.status === 200) {
          console.log("Already Authenticated");
          // navigate(-1);
        }
      } catch (err) {
        console.log("Not authenticated", err);
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <div>
      <h1>Welcome To Student Dashboard!</h1>
      <Link to={"/login"} className="hover:text-gray-200">
        Login
      </Link>
    </div>
  );
}
