import React from "react";
import Image from "next/image";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className="section-wrapper">
      <section className=" bg-white rounded-t-40 lg:rounded-t-4xl  py-7.5rem ">
        <div className="container">
          {/* <!-- services --> */}
          <section className=" flex flex-col items-center gap-12 ">
            {/* <!-- title part --> */}
            <header className="flex flex-col items-center gap-2">
              <h2 className="text-3xl lg:text-4xl text-light-95 font-bold">خدمات منحصربفرد ما</h2>
              <h4 className="text-base lg:text-lg text-light-700 ">توانمندی‌های تیم نیما</h4>
            </header>
            {/* <!-- services list --> */}
            <ol className="w-full gap-4 flex flex-col">
              <li className={`group rounded-12 gap-8 px-12 py-8 bg-light-50 w-full flex flex-col-reverse lg:flex-row items-center font-light service-item ${styles.serviceItems}`}>
                <div className="flex flex-col lg:flex-row">
                  <div className={` box w-70 flex justify-start   ${styles.box}`}>
                    <span className="text-[260px] h-60 w-70 -mb-6 text-light-200  self-end text-left">۰۱</span>
                  </div>
                  <div className={` mt-3 flex box flex-col justify-evenly ${styles.box}`}>
                    <p className="text-2xl font-bold">سنجش سواد مالی</p>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                  </div>
                </div>
                <Image width={32} height={32} className="self-start mr-auto hidden group-hover:block" src="/images/arow.svg" alt="arow" />
              </li>
              <li className={` group rounded-12 gap-8 px-12 py-8 bg-light-50 w-full flex flex-col-reverse lg:flex-row items-center font-light ${styles.serviceItems}`}>
                <div className="flex flex-col lg:flex-row">
                  <div className={` box w-70  flex justify-start  ${styles.box}`}>
                    <span className="self-end text-left text-[260px] -mb-6 h-60 w-70 text-light-100 ">۰۲</span>
                  </div>
                  <div className={` mt-3 flex box flex-col justify-evenly ${styles.box}`}>
                    <p className="text-2xl font-bold">کوچینگ اقتصادی</p>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                  </div>
                </div>
                <Image width={32} height={32} className="self-start mr-auto hidden group-hover:block" src="/images/arow.svg" alt="arow" />
              </li>
              <li className={`group rounded-12 gap-8 px-12 py-8 bg-light-50 w-full flex flex-col-reverse lg:flex-row items-center font-light ${styles.serviceItems}`}>
                <div className="flex flex-col lg:flex-row">
                  <div className={` box w-70  flex justify-start  ${styles.box}`}>
                    <span className="self-end text-left text-[260px] -mb-6 h-60 w-70 text-light-200 ">۰۳</span>
                  </div>
                  <div className={` mt-3 flex box flex-col justify-evenly ${styles.box}`}>
                    <p className="text-2xl font-bold">مشاوره آنلاین و حضوری</p>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                  </div>
                </div>
                <Image width={32} height={32} className="self-start mr-auto hidden group-hover:block" src="/images/arow.svg" alt="arow" />
              </li>
              <li className={`group rounded-12 gap-8 px-12 py-8 bg-light-50 w-full flex flex-col-reverse lg:flex-row items-center font-light ${styles.serviceItems}`}>
                <div className="flex flex-col lg:flex-row">
                  <div className={` box w-70  flex justify-start  ${styles.box}`}>
                    <span className="self-end text-left text-[260px] -mb-6 h-60 w-70 text-light-200 ">۰۴</span>
                  </div>
                  <div className={` mt-3 flex box flex-col justify-evenly ${styles.box}`}>
                    <p className="text-2xl font-bold">مشاوره کسب و کار</p>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                  </div>
                </div>
                <Image width={32} height={32} className="self-start mr-auto hidden group-hover:block" src="/images/arow.svg" alt="arow" />
              </li>
            </ol>
          </section>
        </div>
      </section>
    </div>
  );
}
