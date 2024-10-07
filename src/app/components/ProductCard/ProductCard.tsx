"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import RangeSlider from "../RangeSlider/RangeSlider";
import { toPersianNumber } from "@/app/helpers/helper";
import "./ProductCard.css";

export default function ProductCard() {
  const [progress, setProgress] = useState(0);

  const handleIncrease = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  const handleDecrease = () => {
    setProgress((prev) => (prev > 0 ? prev - 10 : 0));
  };
  return (
    <section className="basis-full lg:basis-[31.5%] bg-light-50 rounded-3xl p-1 pb-4  group hover:bg-light-950 hover:transition-all hover:cursor-pointer">
      <section className="w-full h-[368px] bg-white rounded-[20px] p-6">
        <header className="border-b border-solid border-light-100 pb-6 mb-6 ">
          <p>طرح تولید انواع ربات های بازرسی صنعتی و ارائه خدمات بازرسی</p>
        </header>
        <section className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-light-500 text-sm font-bold">پیش بینی سود</p>
            <span className="text-light-950 text-sm">٪{toPersianNumber(34)}</span>
          </div>
          <div>
            <p className="text-light-500 text-sm font-bold">زمان باقی مانده</p>
            <span className="text-light-950 text-sm">{toPersianNumber(23)} روز</span>
          </div>
          <div>
            <p className="text-light-500 text-sm font-bold">دوره اجرا طرح</p>
            <span className="text-light-950 text-sm">{toPersianNumber(12)} ماه</span>
          </div>
          <div>
            <p className="text-light-500 text-sm font-bold">سرمایه گذاران</p>
            <span className="text-light-950 text-sm">{toPersianNumber(24)} نفر</span>
          </div>
          <div>
            <p className="text-light-500 text-sm font-bold">سرمایه گذاری (تومان)</p>
            <span className="text-light-950 text-sm">{toPersianNumber(1750000000)}</span>
          </div>
          <div>
            <p className="text-light-500 text-sm font-bold">مبلغ هدف (تومان)</p>
            <span className="text-light-950 text-sm">{toPersianNumber(5250000000)}</span>
          </div>
        </section>
        <RangeSlider />
      </section>
      <section className="flex gap-6 p-6 pb-0 items-center">
        <Image src="/images/Rectangle4302.svg" alt="product logo" width={50} height={50} />
        <div>
          <p className="text-sm text-light-950 group-hover:text-white font-bold">آریا فناوران آرتا بینش</p>
          <p className="text-sm  text-light-700 group-hover:text-white">سخت افزار</p>
        </div>
        <Image src="/images/arow.svg" className="mr-auto p-2.5 opacity-0 group-hover:opacity-100" alt="arow" width={50} height={50} />
      </section>
    </section>
  );
}
