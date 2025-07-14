import { useState } from "react";
import { Table } from "antd";
import EventModalForm from "../../components/EventsModalForm";
import axios from "axios";
import { useEffect } from "react";
import AdminLayout from "./AdminLayout";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../components/Button";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export default function AdminEvents() {
  const [isOpen, setIsOpen] = useState(false);
  const [eventData, setEventData] = useState(null);
  const [modalMode, setModalMode] = useState("add");
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/events/");
      setTableData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpen = (mode, event) => {
    setEventData(event);
    setIsOpen(true);
    setModalMode(mode);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/events/${id}`);

        setTableData((prevData) => prevData.filter((event) => event.id !== id));
      } catch (error) {
        console.err(error);
      }
    }
  };

  const handleSubmit = async (newEventData) => {
    if (modalMode == "add") {
      console.log("New Event", newEventData);
      try {
        await axios.post("http://localhost:3000/api/events/", newEventData);
        console.log("Event added: ", newEventData);

        setTableData((prevData) => [...prevData, newEventData]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Modal Mode: Edit");
      console.log("Updating event with ID", newEventData["id"]);
      try {
        const response = await axios.put(
          `http://localhost:3000/api/events/${newEventData["id"]}`,
          newEventData
        );
        console.log("Event Updated: ", response.data);
        setTableData((prevData) =>
          prevData.map((event) =>
            event.id === newEventData.id ? { ...event, ...newEventData } : event
          )
        );
      } catch (error) {
        console.error("Error updating event", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text) => {
        return (
          <img
            src={text}
            alt="event"
            className="w-10 h-10 object-cover rounded"
          />
        );
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
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
      title: "Status",
      dataIndex: "status",
      key: "status",
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
              handleDelete(record.id);
            }}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

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

  return (
    <AdminLayout>
      <div className="flex items-center gap-4">
        <EventAvailableIcon
          className="text-green-700 bg-green-100"
          fontSize="large"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Events</h1>
          <p className="text-l">Create and manage school events</p>
        </div>
        <Button
          icon={<AddIcon />}
          styles={"bg-black text-white hover:bg-gray-900 rounded-lg"}
          handleClick={() => {
            handleOpen("add");
          }}
        >
          Add Event
        </Button>
      </div>
      <Table
        className="border border-gray-200 rounded shadow-sm"
        dataSource={tableData}
        columns={columns}
      />
      <EventModalForm
        isOpen={isOpen}
        mode={modalMode}
        onClose={handleClose}
        OnSubmit={handleSubmit}
        eventData={eventData}
      />
    </AdminLayout>
  );
}
