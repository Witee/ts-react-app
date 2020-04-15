export interface EmployeeRequest {
  name?: string;
}

interface EmployeeInfo {
  id: number;
  key: number;
  name: string;
  department: string;
  hiredate: string;
  level: string;
}

export type EmployeeResponse = EmployeeInfo[] | undefined;
