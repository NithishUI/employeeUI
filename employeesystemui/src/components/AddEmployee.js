import React, { useState } from "react";
import EmployeeService from "../service/EmployeeService";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import Employee from "./Employee";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const navigate = useNavigate();

  const saveEmployee = (e) => {
    e.preventDefault(); //prevent the refresh of the page
    const emailValue = employee.email;

    if (
      validator.isEmail(emailValue) &&
      isNaN(employee.firstName) &&
      isNaN(employee.lastName)
    ) {
      EmployeeService.savingEmployee(employee)
        .then((res) => {
          //console.log(employee.firstName);
          navigate("/employeeList");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("enter correct email");
    }
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({ id: "", firstName: "", lastName: "", email: "" });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          value={employee.firstName}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          value={employee.lastName}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={employee.email}
          onChange={(e) => handleChange(e)}
        />
        <div className="items-center justify-center h-14 w-full my-4 space-x-4  pt-4">
          <button
            className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
            onClick={saveEmployee}
          >
            Save
          </button>
          <button
            className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700"
            onClick={reset}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
