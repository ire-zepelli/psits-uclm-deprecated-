import React from "react";
import NavBar from "../../components/NavBar";
import { useState } from "react";
import { Table } from "antd";
import EventModalForm from "../../components/EventsModalForm";
import axios from "axios";
import { useEffect } from "react";

export default function Events() {
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
      } catch (error) {
        console.err(error);
      }
    }
  };

  const handleSubmit = async (newEventData) => {
    if (modalMode == "add") {
      console.log("New Event", newEventData);
      try {
        const response = await axios.post(
          "http://localhost:3000/api/events/",
          newEventData
        );
        console.log("Event added: ", response.data);

        setTableData((prevData) => [...prevData, response.data]);
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
            event.id === newEventData.id
              ? {
                  image: response.data.image,
                  title: response.data.title,
                  description: response.data.description,
                  author: response.data.author,
                }
              : event
          )
        );
      } catch (error) {
        console.error("Error updating event", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [tableData]);

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
            className="w-24 h-24 object-cover rounded"
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
      key: "decription",
      ellipsis: true,
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
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

  return (
    <>
      <NavBar
        onOpen={() => {
          handleOpen("add");
        }}
      />
      <Table dataSource={tableData} columns={columns} />
      <EventModalForm
        isOpen={isOpen}
        mode={modalMode}
        onClose={handleClose}
        OnSubmit={handleSubmit}
        eventData={eventData}
      />
    </>
  );
}
