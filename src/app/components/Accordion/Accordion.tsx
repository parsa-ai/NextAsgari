"use client";
import React, { useState } from "react";
import Image from "next/image";

const AccordionItem = ({ title, content, icon, isOpen, onToggle }) => {
  return (
    <div className={`border-r  ${isOpen ? "border-light-100 border-r-4" : "border-light-500"}`}>
      <div className="flex items-center p-4 cursor-pointer" onClick={onToggle}>
        <span>
          <Image src={icon} width={24} height={24} alt={title} className="ml-3" />
        </span>
        <div>
          <h2 className="lg:text-lg text-sm font-semibold">{title}</h2>
          {isOpen && <div className="p-4 text-xs lg:text-sm text-white">{content}</div>}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const items = [
    {
      title: "مدیریت و شناسایی سرمایه",
      content: "محتوای ۱",
      icon: "/images/money bag-coin.svg",
    },
    {
      title: "کاهش ریسک اقتصادی",
      content: "محتوای ۲",
      icon: "/images/chart-arrow-down 01.svg",
    },
    {
      title: "بدون نیاز به آموزش",
      content: "محتوای ۳",
      icon: "/images/online learning.svg",
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto mt-10">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} icon={item.icon} isOpen={openIndex === index} onToggle={() => toggleItem(index)} />
      ))}
    </div>
  );
};

export default Accordion;
