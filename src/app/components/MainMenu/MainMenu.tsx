"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Tab from "../Tab/Tab";
import { tabs } from "../../data/data";
import styles from "./MainMenu.module.css";

export default function MainMenu() {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isDropdownRateOpen, setIsDropdownRateOpen] = useState(false);
  const [isDropdownSearchOpen, setIsDropdownSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".hasDropDown *")) {
        setIsDropdownMenuOpen(false);
      }
      if (!event.target.closest(".hasDropDown2 *")) {
        setIsDropdownRateOpen(false);
      }
      if (!event.target.closest(".hasDropDown3 *")) {
        setIsDropdownSearchOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const toggleDropdown = (setter, buttonId) => {
    if (setter) {
      setter((prev) => !prev);
    }
  };
  return (
    <div className="fixed bottom-4  w-full ">
      <nav className="border border-light-950 rounded-3xl bg-white py-2 px-3 mx-3 ">
        <ul className="flex justify-between items-center relative">
          <li className="hasDropDown">
            <button className={`flex items-center  ${isDropdownMenuOpen && styles.active}`} onClick={() => toggleDropdown(setIsDropdownMenuOpen, "menu")}>
              <Image src="/images/menu-line-horizontal.svg" alt="menu icon" width={24} height={24} />
              {isDropdownMenuOpen &&  <span className="mr-2 text-sm">لیست منو</span>}
            </button>
            {isDropdownMenuOpen && (
              <div className="z-10 absolute  bottom-full mb-4 font-normal bg-white divide-y divide-gray-100 rounded-3xl border border-light-950 shadow w-full">
                <ul className="p-2 text-sm ">
                  <li className={`flex justify-center`}>
                    <Link href={"/"} className={`p-3 w-full block text-center ${styles.active}`}>
                      صفحه اصلی
                    </Link>
                  </li>
                  <li className={`flex justify-center `}>
                    <Link href={"/"} className="p-3 w-full block text-center ">
                      سرمایه گذاری
                    </Link>
                  </li>
                  <li className={`flex justify-center `}>
                    <Link href={"/"} className="p-3 w-full block text-center ">
                      اطلاع رسانی
                    </Link>
                  </li>
                  <li className={`flex justify-center `}>
                    <Link href={"/"} className="p-3 w-full block text-center ">
                      دوره آموزشی
                    </Link>
                  </li>
                  <li className={`flex justify-center `}>
                    <Link href={"/"} className="p-3 w-full block text-center ">
                      نمایندگی
                    </Link>
                  </li>
                  <li className={`flex justify-center `}>
                    <Link href={"/"} className="p-3 w-full block text-center ">
                      درباره ما
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="hasDropDown2">
            <button className={`flex items-center  ${isDropdownRateOpen && styles.active}`} onClick={() => toggleDropdown(setIsDropdownRateOpen, "rate")}>
              <Image src="/images/chart-notification.svg" alt="menu icon" width={24} height={24} />
              {isDropdownRateOpen && <span className="mr-2 text-sm">نرخ لحظه ای</span>}
            </button>
            {isDropdownRateOpen && (
              <div className="rateWrapper z-10 p-3 absolute left-0 right-0 bottom-full mb-4 font-normal bg-white divide-y divide-gray-100 rounded-3xl border border-light-950 shadow w-full">
                <Tab tabs={tabs} />
              </div>
            )}
          </li>
          <li className="hasDropDown3">
            <button className={`flex items-center ${isDropdownSearchOpen && styles.active}`} onClick={() => toggleDropdown(setIsDropdownSearchOpen, "search")}>
              <Image src="/images/vector.svg" alt="menu icon" width={24} height={24} />
              {isDropdownSearchOpen && <span className="mr-2 text-sm">جست و جو</span>}
            </button>
            {isDropdownSearchOpen && (
              <div className="z-10 absolute bottom-full mb-4 left-0 right-0  font-normal bg-white divide-y divide-gray-100 rounded-3xl border border-light-950 shadow w-full">
                <ul className="py-2 text-sm">
                  <li className="flex px-3">
                    <input type="search" className={`w-full h-full outline-none ${styles.search}`} placeholder="جستجو کنید ..." value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
                    {!!searchVal.length && <Image src="/images/cancle.svg" alt="clear search" width={20} height={20} onClick={() => setSearchVal("")} />}
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link href={"/"}>
              <Image src="/images/user.svg" alt="menu icon" width={24} height={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
