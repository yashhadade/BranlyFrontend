import React from "react";

export interface InputInterface {
  placeholder: string;
  name: string;
  value: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "number" | "email" | "password";
}

export function Input(props: InputInterface) {
  return (
    <div>
      <input
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        className="px-4 py-2 border rounded-md m-2"
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}
