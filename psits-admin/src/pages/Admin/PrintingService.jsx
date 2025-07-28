import React from "react";
import Card from "../../components/Card";
import SearchIcon from "@mui/icons-material/Search";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useState } from "react";
import StudentInfo from "../../components/Admin/StudentInfo";
import PrintActions from "../../components/Admin/PrintActions";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Table } from "antd";

const PrintingService = () => {
  const [ID, setID] = useState(null);
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dataSource = [
    {
      key: "1",
      name: "Benedict Avenido",
      id: "17917790",
      pages: 2,
      time: "2025-07-27 10:34 AM",
      admin: "Ms. Dela Cruz",
    },
    {
      key: "2",
      name: "Benedict Avenido",
      id: "17917790",
      pages: 3,
      time: "2025-07-25 03:21 PM",
      admin: "Mr. Santos",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Pages",
      dataIndex: "pages",
      key: "pages",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Handled by",
      dataIndex: "admin",
      key: "admin",
    },
  ];

  const handleIDChange = (e) => {
    setID(e.target.value);
  };

  const onSearch = () => {
    setIsSubmitted(true);

    if (ID == null || ID == "") {
      return setError("Please enter a student ID");
    }

    if (ID == "17917790") {
      return setStudentData({
        name: "Benedict Avenido",
        id: "17917790",
        section: "BSIT-3E",
        member: true,
        pagesRemaining: 5,
        totalUsed: 20,
        joinDate: "12/12/12",
      });
    } else {
      return setError("Student not found. Please check the ID and try again.");
    }
  };

  return (
    <>
      <section className="mb-3">
        <h1 className="text-3xl font-black">Printing Service</h1>
        <p className="text-l">
          Check student membership status and manage printing credits
        </p>
      </section>
      <Card>
        <div className="flex gap-2">
          <SearchIcon className="" fontSize="large" />
          <h1 className="font-bold text-2xl">Student Lookup</h1>
        </div>
        <p className="mb-8 text-gray-500 text-sm">
          Enter a student ID to check membership status and remaining pages
        </p>
        <div>
          <h2 className="text-sm font-[600] mb-2">Student ID</h2>
          <div className="flex gap-2 mb-5">
            <input
              type="number"
              value={ID}
              onChange={handleIDChange}
              className="input w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="Enter Student ID"
            />
            <button className="btn btn-neutral" onClick={onSearch}>
              Search
            </button>
          </div>
          {isSubmitted && studentData == null && (
            <div className="border border-gray-300 rounded-lg p-4 flex-1">
              <div className="flex gap-4 items-center">
                <CancelOutlinedIcon />
                <h1 className="text-sm">{error}</h1>
              </div>
            </div>
          )}
        </div>
      </Card>

      {isSubmitted && studentData && (
        <div className="flex gap-7">
          <StudentInfo student={studentData} />
          <PrintActions />
        </div>
      )}

      <Card>
        <div className="flex items-center mb-5">
          <div className="flex-1">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <ScheduleIcon fontSize="large" />
              Recent Transactions
            </h1>
            <p className="mt-2 mb-8 text-gray-500">
              Latest printing service activities
            </p>
          </div>
        </div>
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </>
  );
};

export default PrintingService;
