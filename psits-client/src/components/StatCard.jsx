import React from "react";
import Card from "./Card";
export default function StatCard({ title, data, desc, icon }) {
  return (
    <Card>
      <div className="flex item-center">
        <h1 className="flex-1 text-sm font-[600]">{title}</h1>
        {icon}
      </div>
      <h1 className="text-3xl font-bold">{data}</h1>
      <p className="text-sm text-gray-500">{desc}</p>
    </Card>
  );
}
