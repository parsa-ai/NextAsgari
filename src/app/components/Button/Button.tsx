import React from "react";
import { buttonProps } from "@/app/Types/Types";

export default function Button({ varient, text, icon }: buttonProps) {
  switch (varient) {
    case "outline":
      return (
        <a href="#" className="border border-solid border-main-950 py-2.5 px-4 rounded-3xl flex flex-row-reverse gap-1.5">
          {icon ? <img src={icon} className="ml-2" /> : null}
          {text}
        </a>
      );
    case "contained":
      return (
        <a href="#" className="bg-main-950 py-2.5 px-4 rounded-3xl text-white flex flex-row-reverse">
          {icon ? <img src={icon} className="ml-2" /> : null}
          {text}
        </a>
      );
    default:
      break;
  }
}
