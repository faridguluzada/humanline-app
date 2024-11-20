"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SidebarForm from "@/ui/sidebar-form";

import { createEmployee } from "@/services/actions";

const AddEmployee = () => {
  const initialState = { message: null, errors: {} };
  const [{ message, errors }, dispatch] = useFormState(
    createEmployee,
    initialState
  );
  const ref = useRef<HTMLFormElement>(null);

  return (
    <SidebarForm
      ref={ref}
      action={dispatch}
      heading="Add new Employee"
      anchor="employee"
    >
      <TextField
        error={!!errors?.firstName?.at(0)}
        helperText={errors?.firstName?.at(0)}
        type="text"
        label="First Name"
        name="firstName"
      />

      <TextField
        type="text"
        label="Last Name"
        name="lastName"
        error={!!errors?.lastName?.at(0)}
        helperText={errors?.lastName?.at(0)}
      />
      <TextField
        type="email"
        label="Email Address"
        name="email"
        error={!!errors?.email?.at(0)}
        helperText={errors?.email?.at(0)}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker name="joinDate" defaultValue={new Date()} />
      </LocalizationProvider>
    </SidebarForm>
  );
};

export default AddEmployee;
