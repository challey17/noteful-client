import React from "react";
import "./NotefulForm.css";
// check git
export default function NotefulForm(props) {
  const { className, ...otherProps } = props;
  return (
    <form
      className={["Noteful-form", className].join(" ")}
      action="#"
      {...otherProps}
    />
  );
}
