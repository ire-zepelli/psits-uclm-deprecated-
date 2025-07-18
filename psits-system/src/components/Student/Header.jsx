import { Link } from "react-router-dom";
import psits_logo from "../../assets/psits logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ onOpen }) => {
  return (
    <header className="h-15 flex items-center p-2 z-50">
      <div className="flex items-center gap-4  font-black text-xl text-white w-full">
        <img src={psits_logo} alt="psits logo" className="w-10 h-10" />
        <Link to={"/"}>
          <h1>PSITS - UCLM</h1>
        </Link>
      </div>
      <button className="btn self-end btn-ghost" onClick={onOpen}>
        <MenuIcon fontSize="medium" className="text-[#C89900]" />
      </button>
    </header>
  );
};

export default Header;
