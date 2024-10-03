"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";
import Link from "next/link";
import Tab from "../Tab/Tab";
import { tabs } from "../../data/data";
import "./MainHeader.css";

export default function MainHeader() {
  const [isDropdownSearchOpen, setIsDropdownSearchOpen] = useState(false);
  const [isDropdownRateOpen, setIsDropdownRateOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropDownBtn") && !event.target.closest(".search")) {
        setIsDropdownSearchOpen(false);
      }
       if (!event.target.closest(".rateBtn") && !event.target.closest(".rateWrapper")) {
        setIsDropdownRateOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSearchDropdown = () => {
    setIsDropdownSearchOpen((prev) => !prev);
  };
  const toggleRateDropdown = () => {
    setIsDropdownRateOpen((prev) => !prev);
  };
  return (
    <div className=" justify-center flex items-center pt-4 pb-6 bg-white rounded-br-full rounded-bl-full">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Image src="/images/Logo.svg" alt="logo" width={48} height={48} />
            <Nav />
          </div>
          <div className="flex gap-2 relative">
            <button onClick={toggleSearchDropdown} className="dropDownBtn">
              <Image src="/images/Vector.svg" className="hidden lg:block" alt="logo" width={20} height={20} />
            </button>
            {isDropdownSearchOpen && (
              <div className="z-10 absolute top-full mt-2 font-normal bg-white divide-y divide-gray-100 rounded-3xl border border-light-950 shadow w-full">
                <ul className="py-2 text-sm ">
                  <li className="flex px-3">
                    <input type="search" className="w-full h-full outline-none search" placeholder="جستجو کنید ..." value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
                    {!!searchVal.length && <Image src="/images/cancle.svg" alt="search" width={20} height={20} onClick={(e) => setSearchVal("")}></Image>}
                  </li>
                </ul>
              </div>
            )}
            <Button cusFunc={toggleRateDropdown} varient="outlined" cusClass="hidden lg:flex rateBtn" text="نرخ لحظه ای" icon="/images/chart-notification.svg"></Button>
            {isDropdownRateOpen && (
              <div className="rateWrapper z-10 p-3 absolute top-full mt-2 font-normal bg-white divide-y divide-gray-100 rounded-3xl border border-light-950 shadow w-full">
                <Tab tabs={tabs} />
              </div>
            )}
            <Button varient="contained" text="درخواست مشاوره"></Button>
            <Button varient="outlined" cusClass="hidden lg:flex !rounded-full" icon="/images/user.svg"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
