import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Drawer from "../../components/Drawer";
import { useState } from "react";
import Loading from "../../components/Loading";

export default function StudentLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#1f0d1d] min-h-screen">
      <Drawer isOpen={isOpen} onClose={handleClose} />
      <Header onClick={handleOpen} />
      {children}
      <Footer />
    </div>
  );
}
