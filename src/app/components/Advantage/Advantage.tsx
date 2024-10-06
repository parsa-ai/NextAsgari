import React from "react";
import "./Advantage.css"

export default function Advantage() {
  return (
    <div className="bg-light-950">
      <div className="container">
        <section className="py-7.5rem items-center flex flex-col space-between ">
          <h2 className="text-white text-4xl mb-4">مزایای همکاری با ما</h2>
          <h4 className="text-white text-lg mb-12">دلایل انتخاب ما</h4>
          <ol className="flex flex-row flex-wrap gap-2 justify-center w-full lg:w-2/3">
            <li className={`border border-white py-3 px-4 lg:p-5 pl-8 rounded-[56px] flex justify-center items-center text-white text-sm lg:text-xl gap-2 advantage-item`}>
              <span>۰۱</span>مشاوره در سبد گردانی
            </li>
            <li className={`border border-white py-3 px-4 lg:p-5 pl-8 rounded-[56px] flex justify-center items-center text-white text-sm lg:text-xl gap-2 advantage-item`}>
              <span>۰۲</span>مشاوره مدیریت مالی
            </li>
            <li className={`border border-white py-3 px-4 lg:p-5 pl-8 rounded-[56px] flex justify-center items-center text-white text-sm lg:text-xl gap-2 advantage-item`}>
              <span>۰۳</span>کوچینگ اقتصادی
            </li>
            <li className={`border border-white py-3 px-4 lg:p-5 pl-8 rounded-[56px] flex justify-center items-center text-white text-sm lg:text-xl gap-2 advantage-item`}>
              <span>۰۴</span>ریسک سنجی
            </li>
            <li className={`border border-white py-3 px-4 lg:p-5 pl-8 rounded-[56px] flex justify-center items-center text-white text-sm lg:text-xl gap-2 advantage-item`}>
              <span>۰۵</span>استراتژی CSP
            </li>
            <li className={`border border-white py-3 px-4 lg:p-5 pl-8 rounded-[56px] flex justify-center items-center text-white text-sm lg:text-xl gap-2 advantage-item`}>
              <span>۰۶</span>استراتژی GIP
            </li>
            <li className={`border border-white py-3 px-4 lg:p-5 pl-8 rounded-[56px] flex justify-center items-center text-white text-sm lg:text-xl gap-2 advantage-item`}>
              <span>۰۷</span>مشاوره کسب و کار
            </li>
            <li className={`border border-white py-3 px-4 lg:p-5 pl-8 rounded-[56px] flex justify-center items-center text-white text-sm lg:text-xl gap-2 advantage-item`}>
              <span>۰۸</span>مشاوره سرمایه گذاری
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
