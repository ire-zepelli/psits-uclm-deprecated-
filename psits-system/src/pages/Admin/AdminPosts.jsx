import AdminLayout from "./AdminLayout";
import StatCard from "../../components/StatCard";
import ArticleIcon from "@mui/icons-material/Article";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ArchiveIcon from "@mui/icons-material/Archive";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../components/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import Card from "../../components/Card";
import { Table } from "antd";
import CategoryCard from "../../components/CategoryCard";
import PostStatus from "../../components/PostStatusCard";
import PostModalForm from "../../components/PostModalForm";
import axios from "axios";

export default function AdminPosts() {
  const [tableData, setTableData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [postData, setPostData] = useState(null);

  const handleOpen = (mode, post) => {
    setPostData(post);
    setIsOpen(true);
    setModalMode(mode);
  };

  const handleDelete = async (post_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/api/posts/${post_id}`
        );

        console.log("Succefully deleted: ", response.data);

        setTableData((prevData) =>
          prevData.filter((post) => post.post_id !== post_id)
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (newPostData) => {
    if (modalMode == "add") {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/posts",
          newPostData
        );
        console.log("Post Created: ", response.data);

        setTableData((prevData) => [...prevData, response.data]);
      } catch (error) {
        console.error("Error adding posts: ", error);
      }
    } else {
      console.log("Edit Mode: ", postData.post_id);
      try {
        const response = await axios.put(
          `http://localhost:3000/api/posts/${postData["post_id"]}`,
          newPostData
        );
        console.log("Post Updated: ", response.data);

        setTableData((prevData) =>
          prevData.map((post) =>
            post.post_id === newPostData.post_id
              ? {
                  ...post,
                  ...newPostData,
                }
              : post
          )
        );
      } catch (error) {
        console.error("Error updating posts: ", error);
      }
    }
    console.log(tableData);
  };

  const formatDate = (date) => {
    const formatted = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formatted;
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/posts");
      setTableData(response.data);
    } catch (err) {
      console.err(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (_, record) => <h1 className="font-bold">{record.title}</h1>,
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (_, record) => <CategoryCard level={record.category} />,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => <PostStatus level={record.status} />,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (_, record) => <div>{formatDate(new Date(record.date))}</div>,
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2 flex-wrap">
          <button
            className="btn btn-neutral"
            onClick={() => {
              // handleOpen("edit", record);
            }}
          >
            <VisibilityIcon />
          </button>
          <button
            className="btn btn-neutral"
            onClick={() => {
              handleOpen("edit", record);
            }}
          >
            <EditIcon />
          </button>
          <button
            className="btn btn-neutral"
            onClick={() => {
              handleDelete(record.post_id);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div>
        <div>
          <h1 className="text-3xl font-bold">Posts Management</h1>
          <p className="text-l">
            Create and manage blog posts and announcements
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-10">
          <StatCard
            icon={
              <ArticleIcon
                className="text-gray-700 bg-gray-300 rounded-lg"
                fontSize="large"
              />
            }
            title="Total Posts"
            data={21}
          />
          <StatCard
            icon={
              <VisibilityIcon
                className="text-blue-700 bg-blue-300 rounded-lg"
                fontSize="large"
              />
            }
            title="Published Posts"
            data={21}
          />
          <StatCard
            icon={
              <BorderColorIcon
                className="text-green-700 bg-green-300 rounded-lg"
                fontSize="large"
              />
            }
            title="Drafts"
            data={21}
          />
          <StatCard
            icon={
              <ArchiveIcon
                className="text-orange-700 bg-orange-300 rounded-lg"
                fontSize="large"
              />
            }
            title="Archives"
            data={21}
          />
        </div>
        <Card className="mt-4">
          <div className="flex items-center gap-4 flex-wrap mb-4">
            <div className="flex-1 flex ">
              <h1 className="text-3xl font-bold">All Posts (21)</h1>
            </div>
            {/* Buttons */}
            <div className="flex flex-row gap-4">
              {/* Search Bar */}
              <label className="input">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" className="grow" placeholder="Search" />
              </label>

              <Button
                icon={<AddIcon />}
                styles={"bg-black text-white hover:bg-gray-900 rounded-lg"}
                handleClick={() => {
                  handleOpen("add");
                }}
              >
                Create Post
              </Button>
            </div>
          </div>

          {/* Table */}
          <Table columns={columns} dataSource={tableData} rowKey={"post_id"} />
          <PostModalForm
            isOpen={isOpen}
            mode={modalMode}
            onClose={handleClose}
            OnSubmit={handleSubmit}
            postData={postData}
          />
        </Card>
      </div>
    </AdminLayout>
  );
}
