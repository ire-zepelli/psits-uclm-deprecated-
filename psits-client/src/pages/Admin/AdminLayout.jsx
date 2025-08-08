import React, { useState } from "react";
import logo from "/psits logo.png";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import ReportIcon from "@mui/icons-material/Report";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import PrintIcon from "@mui/icons-material/Print";

export default function AdminLayout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/auth/status",
          {
            withCredentials: true,
          }
        );
        console.log("User is an admin.");

        if (!response.data.user_type) {
          navigate("/error/401 Forbidden");
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/logout"
      );
      if (response.status === 200) {
        console.log(response.data.msg);
        navigate("/");
      } else {
        console.warn("Unexpected response during logout");
      }
    } catch (err) {
      console.error("Logout error:", err.response?.data || err.message);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="border border-gray-300 p-4 flex items-center gap-4">
            <label htmlFor="my-drawer" className="btn drawer-button">
              <MenuIcon className="text-gray-700 text-sm" />
            </label>
            <img src={logo} alt="psits" className="w-10 h-10" />
            <h1 className="text-xl font-medium">PSITS - UCLM</h1>
          </div>
          <div className="flex flex-col p-5 gap-4">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
            <div className="flex w-full justify-center items-center gap-2">
              <img src={logo} alt="psits" className="w-15 h-15" />
              <div>
                <h1 className="text-xl font-bold">PSITS-UCLM</h1>
                <p className="text-m text-gray-500">Admin Side</p>
              </div>
            </div>
            <p className="text-gray-500 text-s mt-7">Overview</p>
            <li>
              <Link to="/admin" className="">
                <DashboardIcon className="text-gray-700 text-sm" />
                Dashboard
              </Link>
            </li>

            <p className="text-gray-500 text-s mt-7">Management</p>
            <li>
              <Link to="/admin/students" className="">
                <PeopleIcon className="text-gray-700 text-sm" />
                Students
              </Link>
            </li>
            <li>
              <Link to={"/admin/events"}>
                <EventIcon className="text-gray-700 text-sm" />
                Events
              </Link>
            </li>
            <li>
              <Link to={"/admin/posts"}>
                <EventIcon className="text-gray-700 text-sm" />
                Community Posts
              </Link>
            </li>

            <p className="text-gray-500 text-s mt-7">Services</p>
            <li>
              <Link to="/admin/printing" className="">
                <PrintIcon className="text-gray-700 text-sm" />
                Printing Service
              </Link>
            </li>

            <p className="text-gray-500 text-s mt-7">System</p>
            <li>
              <Link to="/admin/reports" className="">
                <ReportIcon className="text-gray-700 text-sm" />
                Reports
              </Link>
            </li>

            <li className="flex-1 justify-end">
              <Link to="/admin/settings" className="">
                <AdminPanelSettingsIcon className="text-gray-700 text-sm" />
                Admin-1
              </Link>
            </li>
            <li className="flex justify-end p-0">
              <button className="btn w-full border-none" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
