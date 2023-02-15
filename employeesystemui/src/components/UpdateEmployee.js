import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import InputField from "./InputField";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    email: "",
  });
  const UpdateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updatingEmployee(employee, id)
      .then((res) => {
        navigate("/employeeList");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await EmployeeService.gettingEmployeeById(id);
        setEmployee(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Employee</h1>
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
            onClick={UpdateEmployee}
          >
            Update
          </button>
          <button
            onClick={() => navigate("/employeeList")}
            className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
