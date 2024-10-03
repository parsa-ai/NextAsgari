import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toPersianNumber } from "@/app/helpers/helper";
import "./Tab.css";

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tab-headers">
        {tabs.map((tab, index) => (
          <button key={tab.id} className={`tab-header ${index === activeTab ? "active" : ""}`} onClick={() => setActiveTab(index)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content.map((item) => (
          <div className="flex justify-between items-center border-b border-light-50 py-3">
            <div className="flex items-center ">
              <div className="w-[50px] h-[50px] bg-light-50 p-3 rounded-full">
                <Image src={item.icon} className=" " alt={item.title} width={24} height={24} />
              </div>
              <p className="font-bold text-xs mr-1">{item.title}</p>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col text-left">
                <span className="font-bold text-xs mb-2">{toPersianNumber(item.maxPrice)}</span>
                <span className="text-xs">{toPersianNumber(item.minPrice)}</span>
              </div>
              <div className={`flex flex-col items-center ${item.status === "inc" ? "inc" : "dec"}  mr-3`}>
                <span>
                  <Image src={`/images/${item.status === "inc" ? "arrow-up.svg" : "arrow-down.svg"}`} alt={item.title} width={24} height={24} />
                </span>
                <span className={`font-bold text-xs ${item.status === "inc" ? "text-success-700" : "text-error-700"}`}>% {toPersianNumber(item.profitPercent)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href={"/"} className="flex justify-center items-center border-t-2 border-light-50 py-2">
        <Image src="/images/plus.svg" width={10} height={10} alt="plus" />
        <span className="mr-2 text-xs ">بیشتر</span>
      </Link>
    </div>
  );
};
export default Tab;
