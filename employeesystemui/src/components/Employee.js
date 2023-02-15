import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const text_right = "text-right";
  const tabledataStyle = "text-left px-6 py-4 whitespace-nowrap";
  const tabledataTextStyle = "text-sm text-gray-500";
  const actionText = "text-indigo-600 hover:text-indigo-800 px-6";

  const navigate = useNavigate();
  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <tr key={employee.id}>
      <td className={tabledataStyle}>
        <div className={tabledataTextStyle}>{employee.firstName}</div>
      </td>
      <td className={tabledataStyle}>
        <div className={tabledataTextStyle}>{employee.lastName}</div>
      </td>
      <td className={tabledataStyle}>
        <div className={tabledataTextStyle}>{employee.email}</div>
      </td>
      <td
        className={[tabledataStyle, text_right, "font-medium", "text-sm"].join(
          " "
        )}
      >
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          className={[actionText, "hover:cursor-pointer"].join(" ")}
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className={[actionText, "px-0", "hover:cursor-pointer"].join(" ")}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
