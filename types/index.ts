import { EmployeeStatus } from "@prisma/client";

export type EmployeesTable = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  selected: boolean;
  image: string | null;
  status: EmployeeStatus;
  job: { title: string } | null;
  department: { name: string } | null;
  office: { name: string } | null;
  lineManager: { firstName: string; lastName: string } | null;
};

export interface ISelect {
  filterField: string;
  label: string;
  options: { label: string; value: string }[];
}

export interface Data {
  id: number;
  employeeName: string;
  employeeEmail: string;
  employeeImage: string;
  jobTitle: string;
  lineManager: string;
  departament: string;
  office: string;
  employeeStatus: string;
  account: string;
  selected: boolean;
}

export interface Column {
  id: keyof Data;
  label: string;
}

export interface ITable {
  data: any[];
  columns: any[];
  selection?: boolean;
  pagination?: boolean;
  action?: boolean;
}

export type Anchor = "employee" | "left" | "bottom" | "right";

export interface ISidebarContext {
  isOpen: {
    employee: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
  };
  toggleSidebar: (
    anchor: Anchor,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export interface ISidebar {
  heading: string;
  children: React.ReactNode;
  anchor: Anchor;
  action: (payload: FormData) => void;
  ref: any;
}

export interface ITabPanel {
  children?: React.ReactNode;
  index: number;
  value: number;
}
