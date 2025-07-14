import React from "react";
import AdminLayout from "./AdminLayout";
import Button from "../../components/Button";
import StatCard from "../../components/StatCard";
import { Table } from "antd";
import Input from "../../components/Input";

export default function Report() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold">Reports</h1>
        <p className="text-l">View and Manage Student Concerns </p>
      </div>
      <Table
        className="shadow-lg border-gray-200"
        dataSource={dataSource}
        columns={columns}
      />
    </AdminLayout>
  );
}
