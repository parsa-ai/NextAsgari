import React from "react";
import Button from "../components/Button/Button";

export default function Test() {
  return (
    <>
      <div className="text-center bg-slate-50 py-8">
        <h1 className="text-5xl mb-3.5">Buttons</h1>
        <Button varient="outline" text="درخواست مشاوره"></Button>
        <Button varient="contained" text="نرخ لحظه ای" icon="assest/image/chart-notification.svg"></Button>
      </div>
      <div className="text-center bg-slate-100 py-8">
        <h1 className="text-5xl mb-3.5">Product card</h1>
      </div>
      <div className="text-center bg-slate-200 py-8">
        <h1 className="text-5xl mb-3.5">Blog card</h1>
      </div>
      <div className="text-center bg-slate-300 py-8">
        <h1 className="text-5xl mb-3.5">course card</h1>
      </div>
    </>
  );
}
