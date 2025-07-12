import axios from "axios";
import LoginForm from "../../components/LoginForm";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        userData,
        {
          withCredentials: true,
        }
      );

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
    <div className="flex justify-center align-center mt-40">
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
}
