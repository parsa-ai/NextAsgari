import React from "react";
import { buttonProps } from "@/app/Types/Types";
import "./Button.css"
export default function Button({ varient, text, icon }: buttonProps) {
  return (
    <a href="#" className={`button ${varient}`} >
    {icon ? <img src={icon} className="ml-2" /> : null}
    {text}
  </a>
  )
}
