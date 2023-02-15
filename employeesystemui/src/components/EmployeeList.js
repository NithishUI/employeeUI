import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const tableheadStyle =
    "text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6";
  const text_right = "text-right";

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null); //usestate

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deletingEmployee(id).then((res) => {
      if (employees) {
        setEmployees((prev) => {
          return prev.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const res = await EmployeeService.gettingEmployee();
        setEmployees(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchdata();
  }, []);

  return (
    <div className="container mx-auto my-8 px-8">
      <div className="h-12">
        <button
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
          onClick={() => navigate("/addEmployee")}
        >
          Add Employee{" "}
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className={tableheadStyle}>FirstName</th>
              <th className={tableheadStyle}>LastName</th>
              <th className={tableheadStyle}>Email</th>
              <th className={[tableheadStyle, text_right].join(" ")}>
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {employees.map((employee) => (
                <Employee
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  key={employee.id}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
