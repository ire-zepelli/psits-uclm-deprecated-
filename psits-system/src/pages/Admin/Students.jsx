import { useState, useEffect } from "react";
import StudentModalForm from "../../components/StudentModalForm";
import NavBar from "../../components/NavBar";
import Table from "../../components/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Students() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [studentData, setStudentData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);
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

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/students");

      setTableData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpen = (mode, student) => {
    setStudentData(student);
    setIsOpen(true);
    setModalMode(mode);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (newStudentData) => {
    if (modalMode == "add") {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/students",
          newStudentData
        );
        console.log("Student added: ", response.data);

        setTableData((prevData) => [...prevData, response.data]);
        console.log("Modal Mode: Add");
      } catch (error) {
        console.error("Error adding client: ", error);
      }
    } else {
      console.log("Modal Mode: Edit");
      console.log("Updating Student with ID: ", newStudentData["account_id"]);
      try {
        const response = await axios.put(
          `http://localhost:3000/api/students/${studentData["account_id"]}`,
          newStudentData
        );

        console.log("Student Updated: " + response.data);
        setTableData((prevData) =>
          prevData.map((student) =>
            student.id === studentData.id
              ? {
                  account_id: response["account_id"],
                  id: response.data.id,
                  name: response.data.name,
                  level: response.data.level,
                  email: response.data.email,
                  last_online: response.data.last_online,
                }
              : student
          )
        );
      } catch (error) {
        console.error("Error updating student: ", error);
      }
    }
  };

  return (
    <>
      <NavBar
        onOpen={() => {
          handleOpen("add");
        }}
      />
      <Table
        handleOpen={handleOpen}
        tableData={tableData}
        setError={setError}
        error={error}
      />
      <StudentModalForm
        isOpen={isOpen}
        onClose={handleClose}
        OnSubmit={handleSubmit}
        mode={modalMode}
        studentData={studentData}
      />
    </>
  );
}
