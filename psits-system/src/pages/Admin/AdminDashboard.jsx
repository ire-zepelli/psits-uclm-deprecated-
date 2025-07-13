import Card from "../../components/Card";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import StatCard from "../../components/StatCard";
import AdminLayout from "../AdminLayout";
import PersonIcon from "@mui/icons-material/Person";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FlagIcon from "@mui/icons-material/Flag";
import EventIcon from "@mui/icons-material/Event";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { recent_events } from "./recent_events";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [tableData, setTableData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/events/recent"
      );
      setTableData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function formatDateTime(dateStr) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    return new Date(dateStr).toLocaleString("en-US", options);
  }

  const columns = [
    {
      title: "Event",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Date & Time",
      dataIndex: "date_time",
      key: "date_time",
      render: (_, record) => <div>{formatDateTime(record.date_time)}</div>,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <button
            className="btn btn-secondary"
            onClick={() => {
              console.log(record);
            }}
          >
            Update
          </button>
          <button
            className="btn btn-accent"
            onClick={() => {
              console.log(record);
            }}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-l">
          Welcome back User! Here's what's happening at your school.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-10">
        <StatCard
          icon={
            <PersonIcon
              className="text-blue-700 bg-blue-300 rounded-lg"
              fontSize="large"
            />
          }
          title="Students"
          data={21}
          desc="Total registered CCS students"
        />
        <StatCard
          icon={
            <EventAvailableIcon
              className="text-green-700 bg-green-100"
              fontSize="large"
            />
          }
          title="Upcoming Events"
          data={8}
          desc="Scheduled activities and events"
        />
        <StatCard
          icon={
            <FlagIcon className="text-red-700 bg-red-300" fontSize="large" />
          }
          title="Reports"
          data={30}
          desc="Reported Student Concerns"
        />
        <StatCard
          icon={<DynamicFormIcon className="text-blue-700" fontSize="large" />}
          title="Forms Online"
          data={2}
          desc="Available forms for submission"
        />
      </div>

      <div className="flex flex-row">
        <Card>
          <div className="flex items-center">
            <div className="flex-1">
              <h1 className="text-3xl font-bold">Recent Events</h1>
              <p className="text-l">Latest school events and activities</p>
            </div>
            <Link
              to={"/admin/events"}
              className="flex gap-4 border p-2 hover:bg-gray-200 rounded-lg border-gray-300"
            >
              <p>View All</p>
              <EventIcon />
            </Link>
          </div>
          <Table dataSource={tableData} columns={columns} />
        </Card>
      </div>
    </AdminLayout>
  );
}
