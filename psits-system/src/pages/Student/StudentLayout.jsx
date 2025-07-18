import { Outlet } from "react-router-dom";
import Drawer from "../../components/Student/Drawer";
import Footer from "../../components/Student/Footer";
import Header from "../../components/Student/Header";
import { useState } from "react";

const StudentLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-[#1f0d1d] text-white">
      <Header onOpen={handleOpen} />
      <main className="flex-1 bg-[#1f0d1d]">
        <Outlet />
      </main>
      <Footer />
      <Drawer isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default StudentLayout;
