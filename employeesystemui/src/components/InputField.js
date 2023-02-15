import React from "react";

const InputField = (props) => {
  return (
    <div className="items-center justify-center h-14 w-full my-4">
      <label className="block text-gray-600 text-sm font-normal">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="h-10 w-96 border mt-2 px-2 py-2"
      ></input>
    </div>
  );
};

export default InputField;
