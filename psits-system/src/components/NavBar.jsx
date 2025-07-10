import { Link } from "react-router-dom";

export default function NavBar({ onOpen }) {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex">
          <a className="btn btn-ghost text-xl">PSITS - UCLM</a>
        </div>
        <div className="flex-1">
          <Link className="px-3 hover:text-gray-500" to={"/admin/students"}>
            Students
          </Link>
          <Link className="px-3 hover:text-gray-500" to={"/admin/events"}>
            Events
          </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-primary" onClick={onOpen}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}
