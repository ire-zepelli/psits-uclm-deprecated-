import React from "react";
import Card from "../Card";
import PrintIcon from "@mui/icons-material/Print";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const PrintActions = () => {
  const [pages, setPages] = useState();

  const handlePagesChange = (e) => {
    if (e.target.value >= 0) {
      setPages(e.target.value);
    }
  };
  return (
    <Card className="max-w-100">
      <h1 className="font-black text-2xl mb-8">Quick Actions</h1>
      <div className="mb-5">
        <h2 className="text-sm font-[600] mb-2">Print Pages</h2>
        <div className="flex gap-2 mb-2">
          <input
            value={pages}
            onChange={handlePagesChange}
            type="number"
            className="input w-full"
            placeholder="Pages"
          />
          <button className="btn btn-neutral">
            <PrintIcon />
            Print
          </button>
        </div>
        <p className="text-xs text-gray-500">Max: 20 pages • Total Pages: 20</p>
      </div>

      <div>
        <h2 className="text-sm font-[600] mb-2">Add Pages</h2>
        <div className="flex gap-2 mb-2">
          <input
            value={pages}
            onChange={handlePagesChange}
            type="number"
            className="input w-full"
            placeholder="Pages"
          />
          <button className="btn btn-neutral">
            <AddIcon />
            Top-up
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PrintActions;
