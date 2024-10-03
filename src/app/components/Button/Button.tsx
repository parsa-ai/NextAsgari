import React from "react";
import { buttonProps } from "@/app/Types/Types";
import "./Button.css"
export default function Button({ varient, text, icon , cusClass , cusFunc }: buttonProps) {
  return (
    <button onClick={cusFunc} className={`button ${varient} ${cusClass}`} >
    {icon ? <img src={icon} className="w-5 h-5" /> : null}
    {text}
  </button>
  )
}
