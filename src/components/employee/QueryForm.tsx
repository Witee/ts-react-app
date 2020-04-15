import React, { useState } from "react";
import { Form, Input, Button } from "antd";

import { EmployeeRequest } from "../../interfaces/employee";

interface Props {
  getEmployees(params: EmployeeRequest): void;
}

const QueryForm = (props: Props) => {
  const [name, setName] = useState<string>();

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = () => {
    props.getEmployees({ name });
  };

  return (
    <>
      <Form layout="inline">
        <Form.Item>
          <Input placeholder="姓名" value={name} onChange={handleNameChange}></Input>
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            查询
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default QueryForm;
