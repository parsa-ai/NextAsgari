import React from "react";
import styles from "./opportunity.module.css";
import ProductCard from "../ProductCard/ProductCard";
import MoreButton from "../Button/MoreButton";
export default function opportunity() {
  return (
    <>
      {/* <!-- opportunity section--> */}
      <div className="section-wrapper">
        <section className=" bg-white rounded-b-40 lg:rounded-b-4xl  py-7.5rem ">
          <div className="container">
            <section className=" flex flex-col items-center gap-12 ">
              {/* <!-- title part --> */}
              <header className="flex flex-col items-center gap-2">
                <h2 className="text-3xl lg:text-4xl text-light-95 font-bold">فرصت‌های سرمایه گذاری</h2>
                <h4 className="text-base lg:text-lg text-light-700 ">جدیدترین فرصت ‌های سرمایه گذاری</h4>
              </header>
              <div className="flex flex-wrap gap-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </section>
            <MoreButton title={"مشاهده پروژه ها"} varient="dark"/>
          </div>
        </section>
      </div>
    </>
  );
}
