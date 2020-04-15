import React, { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";

import "./style.css";

import QueryForm from "./QueryForm";
import columns from "./columns";
import { EmployeeRequest, EmployeeResponse } from "../../interfaces/employee";

const Employee = () => {
  const [employee, setEmployee] = useState<EmployeeResponse>(undefined);

  const getEmployees = (params: EmployeeRequest = {}) => {
    axios.get("/api/employees", { params }).then((res) => {
      setEmployee(res.data);
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <QueryForm getEmployees={getEmployees} />

      <Table columns={columns} dataSource={employee} className="table" />
    </>
  );
};

export default Employee;
