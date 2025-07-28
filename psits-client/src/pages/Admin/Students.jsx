import { useState, useEffect } from "react";
import StudentModalForm from "../../components/StudentModalForm";
import { Table } from "antd";
import axios from "axios";
import Button from "../../components/Button";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import AdminLayout from "./AdminLayout";
import { useNavigate } from "react-router-dom";

export default function Students() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [studentData, setStudentData] = useState(null);
  const [tableData, setTableData] = useState([]);
  // const [error, setError] = useState(null);
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
      console.log("data:", response.data);

      setTableData(response.data);
    } catch (err) {
      // setError(err.message);
      console.log(err);
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
                  account_id: response.account_id,
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

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      try {
        console.log(id);

        await axios.delete(`http://localhost:3000/api/students/${id}`);

        setTableData((prevData) =>
          prevData.filter((student) => student.account_id !== id)
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const columns = [
    {
      title: "Student ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Grade & Section",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2 flex-wrap">
          <button
            className="btn btn-secondary"
            onClick={() => {
              handleOpen("edit", record);
            }}
          >
            Update
          </button>
          <button
            className="btn btn-accent"
            onClick={() => {
              handleDelete(record.account_id);
            }}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex items-center gap-4">
        <PersonIcon className="text-blue-700 bg-blue-100" fontSize="large" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Students</h1>
          <p className="text-l">Manage student records and information</p>
        </div>
        <Button
          icon={<AddIcon />}
          styles={"bg-black text-white hover:bg-gray-900 rounded-lg"}
          handleClick={() => {
            handleOpen("add");
          }}
        >
          Add Students
        </Button>
      </div>

      <Table
        className="border border-gray-200 rounded shadow-sm"
        dataSource={tableData}
        columns={columns}
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
