import { Column, Data } from "@/types";
import {
  EmployeeIcon,
  ClipboardListIcon,
  TimerIcon,
  CalendarIcon,
  TrendingUpIcon,
} from "@/public/assets/icons";

type MenuItem = {
  text: string;
  path: string;
  icon: any;
};

export const menuItems: MenuItem[] = [
  {
    text: "Employees",
    path: "/dashboard/employees",
    icon: EmployeeIcon,
  },
  {
    text: "Checklist",
    path: "/dashboard/checklist",
    icon: ClipboardListIcon,
  },
  {
    text: "Time Off",
    path: "/dashboard/time-off",
    icon: TimerIcon,
  },
  {
    text: "Attendance",
    path: "/dashboard/attendance",
    icon: CalendarIcon,
  },
  {
    text: "Setting",
    path: "/dashboard/setting",
    icon: TrendingUpIcon,
  },
];

export const statusOptions = [
  { label: "Active", value: "ACTIVE" },
  { label: "On Boarding", value: "ON_BOARDING" },
  { label: "Probation", value: "PROBATION" },
  { label: "On Leave", value: "ON_LEAVE" },
];

export const mockData: Data[] = [
  {
    id: 1,
    employeeName: "Farid Doe",
    employeeEmail: "john.doe@company.com",
    employeeImage: "https://example.com/image1.jpg",
    jobTitle: "Software Engineer",
    lineManager: "Manager 1",
    departament: "Engineering",
    office: "Office 1",
    employeeStatus: "active",
    account: "Account 1",
    selected: false,
  },
  {
    id: 2,
    employeeName: "Murad",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-boarding",
    account: "Account 2",
    selected: false,
  },
  {
    id: 3,
    employeeName: "Ilham",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-leave",
    account: "Account 2",
    selected: false,
  },
  {
    id: 4,
    employeeName: "Vaybe ",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "probation",
    account: "Account 2",
    selected: false,
  },
  {
    id: 5,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-leave",
    account: "Account 2",
    selected: false,
  },
  {
    id: 6,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "active",
    account: "Account 2",
    selected: false,
  },
  {
    id: 7,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "probation",
    account: "Account 2",
    selected: false,
  },
  {
    id: 8,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-leave",
    account: "Account 2",
    selected: false,
  },
  {
    id: 9,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-boarding",
    account: "Account 2",
    selected: false,
  },
  {
    id: 10,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-boarding",
    account: "Account 2",
    selected: false,
  },
];

export const columns: Column[] = [
  {
    id: "employeeName",
    label: "Employee Name",
  },
  {
    id: "jobTitle",
    label: "Job Title",
  },
  {
    id: "lineManager",
    label: "Line Manager",
  },
  {
    id: "departament",
    label: "Departament",
  },
  {
    id: "office",
    label: "Office",
  },
  {
    id: "employeeStatus",
    label: "Employee Status",
  },
];
