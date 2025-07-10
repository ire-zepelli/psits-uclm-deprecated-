import axios from "axios";
import LoginForm from "../../components/LoginForm";

export default function Login() {
  const handleSubmit = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        userData
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error Logging in: ", error);
    }
  };

  return (
    <div className="flex justify-center align-center mt-40">
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
}
