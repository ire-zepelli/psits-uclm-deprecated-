import axios from "axios";
import LoginForm from "../../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import StudentLayout from "../Student/StudentLayout";

export default function Login() {
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
          navigate(-1);
        }
      } catch (err) {
        console.log("Not authenticated", err);
      }
    };
    checkAuth();
  }, [navigate]);

  const handleSubmit = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        userData,
        {
          withCredentials: true,
        }
      );

      console.log(response.data.isAdmin);
      if (response.status == 200) {
        if (response.data.isAdmin) {
          console.log("routing to admin");
          navigate("/admin");
        } else {
          console.log("routing to students");
          navigate("/");
        }
      } else {
        window.alert("Invalid Credentials!");
      }
    } catch (error) {
      console.error("Error Logging in: ", error);
      window.alert("Invalid Credentials!");
    }
  };

  return (
    <StudentLayout>
      <div
        data-theme="dracula"
        className="bg-[#1f0d1d] flex justify-center align-center pt-40"
      >
        <LoginForm handleSubmit={handleSubmit} />
      </div>
    </StudentLayout>
  );
}
