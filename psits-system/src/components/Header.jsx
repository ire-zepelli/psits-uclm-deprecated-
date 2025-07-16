import MenuIcon from "@mui/icons-material/Menu";
import psits_logo from "/psits logo.png";
import ccs_logo from "/CCS logo.png";
import { Link } from "react-router-dom";

export default function Header({ onClick }) {
  return (
    <div className=" h-20 w-full flex items-center px-15 py-12 absolute z-20 ">
      <div className="flex-1 flex items-center gap-7">
        <a
          className="transition-transform duration-300 ease-in-out hover:scale-105"
          href="https://www.facebook.com/uclmpsitsofficial"
          target="_blank"
        >
          <img src={psits_logo} alt="psits" className="w-16 h-16" />
        </a>
        <a
          className="transition-transform duration-300 ease-in-out hover:scale-105"
          href="https://www.facebook.com/UCLMCollegeofComputerStudies"
          target="_blank"
        >
          <img src={ccs_logo} alt="ccs" className="w-14 h-14 " />
        </a>
        <Link to="http://localhost:5173/">
          <h1 className="font-bold text-2xl text-white">UCLM - PSITS</h1>
        </Link>
      </div>
      <button
        className="btn bg-transparent border-none shadow-none"
        onClick={onClick}
      >
        <MenuIcon
          className="text-white hover:text-[#C89900]"
          fontSize="large"
        />
      </button>
      <div className="absolute inset-0 bg-gradient-to-b from-[#412039]/100 to-transparent -z-10" />
    </div>
  );
}
