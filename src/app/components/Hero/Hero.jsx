import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-20 bg-center w-full bg-white rounded-b-30  " style={{ backgroundImage: " url('/images/header/Ellipse 1246.svg')" }}>
      <div className="container">
        <header className="flex justify-center items-center pt-30 gap-6 flex-col">
          <h1 className="text-light-950 text-4xl lg:text-6xl  font-bold mb-6 text-center">مشاوره حرفه‌ای در تحلیل و آنالیز</h1>
          <div className="border-2 border-solid border-light-950 py-2.5  lg:px-4 rounded-full flex flex-row w-44 lg:w-60 text-3xl justify-around items-center text-light-950 ">
            <Image src="/images/Ellipse 1248.svg" alt="dot" width={8} height={8} />
            <h3 className="text-xl lg:text-3xl">ارز دیجیتال</h3>
            <Image src="/images/Ellipse 1248.svg" alt="dot" width={8} height={8} />
          </div>
        </header>
        <div className="flex h-[527px] mt-6 items-end flex-row-reverse">
          <div className="basis-1/4 h-full flex gap-8 flex-col self-end pb-20 justify-end  hidden lg:flex">
            <div className="w-auto flex justify-end flex-col items-end text-right ">
              <p className="font-bold text-2xl text-light-950 ">۵۰۰+</p>
              <p className="text-xs text-light-700 ">طرح های موفق</p>
            </div>
            <div className="w-auto flex justify-end flex-col items-end text-right ">
              <p className="font-bold text-2xl text-light-950 ">۶۲۵/۷ میلیارد تومان</p>
              <p className="text-xs text-light-700 ">سرمایه جذب شده</p>
            </div>
            <div className="w-auto flex justify-end flex-col items-end text-right ">
              <p className="font-bold text-2xl text-light-950 ">۱۸۵/۲ میلیارد تومان</p>
              <p className="text-xs text-light-700 ">کل سود واریزی</p>
            </div>
          </div>
          <div className="basis-full lg:basis-1/2 h-full flex justify-center items-center relative">
            <Image src="/images/unsplash_ABuzWPku1Ug.png" width={450} height={642} className="self-end z-30" alt="Nima Asgari" />
            <Image src="/images/header/Highlight_10.svg" width={101} height={60} className="absolute z-20 top-1/3 right-0" alt="" />
            <h2 className="absolute z-20 text-5xl lg:text-7xl text-light-950 top-1/3 text-center">نیما عـــــــــسگری</h2>
            <Image src="/images/header/Nima Asgari.svg" width={329} height={61} className="absolute z-10 mb-5  top-1/4" alt="english name" />
            <div className="w-[234px] h-[72px] gap-3 bg-white p-3 pl-5 rounded-3xl flex items-center absolute -left-20 top-20  hidden lg:flex" style={{ boxShadow: "0px 32px 64px -12px rgba(0, 0, 0, 0.14)" }} >
              <div className="w-12 h-12 rounded-[32px] bg-light-950 flex justify-center items-center ">
                <Image width={24} height={24} src="/images/header/hart-histogram.svg" alt="hart-histogram" />
              </div>
              <p className="text-sm text-light-950 w-[142px]">رصد حرفه ای سبد دارای و علمکرد معاملاتی</p>
            </div>
            <a
              href="#"
              className="p-2 flex items-center justify-evenly gap-3 backdrop-blur-lg absolute z-40 bottom-20 w-[204px] h-14 rounded-[32px] text-white"
              style={{ boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)", background: "rgba(46, 16, 101, 0.24)" }}
            >
              <p className="text-base  w-[132px] ">درخواست مشاوره </p>
              <div className="w-14 bg-white h-10 rounded-3xl flex items-center justify-center">
                <Image src="/images/Vector 190.svg" width={14} height={10} className="invert" alt="arow" />
              </div>
            </a>
          </div>
          <div className="basis-1/4 h-full relative hidden lg:flex">
          <div className="w-[239px] h-[72px] bg-white p-3 justify-between rounded-3xl flex items-center absolute -left-20 bottom-20" style={{boxShadow: "0px 32px 64px -12px rgba(0, 0, 0, 0.14)"}}>
            <div className="w-12 h-12 rounded-[32px] bg-light-950 flex justify-center items-center ">
              <Image width={24} height={24} src="/images/header/target.svg" alt="hart-histogram" />
            </div>
            <p className="text-sm text-light-950 w-[153px]">تحلیلگر و مشاور اقتصادی و کوچ سرمایه گذاری</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
