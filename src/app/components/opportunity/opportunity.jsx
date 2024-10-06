import React from "react";

export default function opportunity() {
  return (
    <>
      {/* <!-- opportunity section--> */}
      <section className=" flex flex-col items-center gap-12 mt-52 ">
        {/* <!-- title part --> */}
        <header className="flex flex-col items-center gap-2">
          <h2 className="text-4xl text-main-950 font-[Anjoman-Bold]">فرصت‌های سرمایه گذاری</h2>
          <h4 className="text-lg text-main-700 ">جدیدترین فرصت ‌های سرمایه گذاری</h4>
        </header>
        {/* <!-- sort --> */}
        <ul className="flex flex-row gap-2 ">
          <li>
            <a href="#" className="border border-main-950 border-solid rounded-3xl w-30 h-12 flex justify-center items-center bg-dark-500 text-white">
              همه
            </a>
          </li>
          <li>
            <a href="#" className="border border-main-950 border-solid rounded-3xl w-30 h-12 flex justify-center items-center">
              سخت افزار
            </a>
          </li>
          <li>
            <a href="#" className="border border-main-950 border-solid rounded-3xl w-30 h-12 flex justify-center items-center">
              پزشکی
            </a>
          </li>
          <li>
            <a href="#" className="border border-main-950 border-solid rounded-3xl w-30 h-12 flex justify-center items-center">
              کشاورزی
            </a>
          </li>
          <li>
            <a href="#" className="border border-main-950 border-solid rounded-3xl w-30 h-12 flex justify-center items-center">
              اینترنت اشیاء
            </a>
          </li>
          <li>
            <a href="#" className="border border-main-950 border-solid rounded-3xl w-30 h-12 flex justify-center items-center">
              حمل و نقل
            </a>
          </li>
        </ul>
        {/* <!-- cards --> */}
        <section className="flex gap-8 flex-wrap w-full">
          {/* <!-- card --> */}
          <section className="basis-[31.5%]  bg-main-50 rounded-3xl p-1 pb-4">
            <section className="w-full h-[368px] bg-white rounded-[20px] p-6 ">
              <header className="border-b border-solid border-main-100 pb-6 mb-6 font-[Anjoman-Bold]">
                <p>طرح تولید انواع ربات های بازرسی صنعتی و ارائه خدمات بازرسی</p>
              </header>
              <section className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-main-500 text-sm  font-bold">پیش بینی سود</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">٪۳۴</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">زمان باقی مانده</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۲۳ روز</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">دوره اجرا طرح</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۱۲ ماه</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">سرمایه گذاران</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۲۴ نفر</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">سرمایه گذاری (تومان)</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۱،۷۵۰،۰۰۰،۰۰۰</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">مبلغ هدف (تومان)</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۵،۲۵۰،۰۰۰،۰۰۰</span>
                </div>
              </section>
              <div className="w-full h-2 rounded bg-main-100 mt-5 flex items-center ">
                <div className="w-5/12 h-2 rounded bg-main-950"></div>
                <div className="w-9 h-6 rounded-2xl bg-main-950 -mr-1 text-white text-xs flex items-center justify-center">٪۴۳</div>
              </div>
            </section>
            <section className="flex gap-6 p-6 pb-0 items-center">
              <Image src="/images/Rectangle 4302.svg" alt="product logo" />
              <div>
                <p className="text-sm font-[Anjoman-Bold] text-main-950">آریا فناوران آرتا بینش</p>
                <p className="text-sm font-[Anjoman] text-main-700">سخت افزار</p>
              </div>
            </section>
          </section>
          {/* <!-- card --> */}
          <section className="basis-[31.5%]  bg-main-950 rounded-3xl p-1 pb-4">
            <section className="w-full h-[368px] bg-white rounded-[20px] p-6 ">
              <header className="border-b border-solid border-main-100 pb-6 mb-6 font-[Anjoman-Bold]">
                <p>طرح تولید انواع ربات های بازرسی صنعتی و ارائه خدمات بازرسی</p>
              </header>
              <section className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-main-500 text-sm  font-bold">پیش بینی سود</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">٪۳۴</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">زمان باقی مانده</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۲۳ روز</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">دوره اجرا طرح</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۱۲ ماه</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">سرمایه گذاران</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۲۴ نفر</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">سرمایه گذاری (تومان)</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۱،۷۵۰،۰۰۰،۰۰۰</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">مبلغ هدف (تومان)</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۵،۲۵۰،۰۰۰،۰۰۰</span>
                </div>
              </section>
              <div className="w-full h-2 rounded bg-main-100 mt-5 flex items-center ">
                <div className="w-5/12 h-2 rounded bg-main-950"></div>
                <div className="w-9 h-6 rounded-2xl bg-main-950 -mr-1 text-white text-xs flex items-center justify-center">٪۴۳</div>
              </div>
            </section>
            <section className="flex gap-6 p-6 pb-0 items-center">
              <Image src="/images/Rectangle 4302.svg" alt="product logo" />
              <div>
                <p className="text-sm font-[Anjoman-Bold] text-white">آریا فناوران آرتا بینش</p>
                <p className="text-sm font-[Anjoman] text-white">سخت افزار</p>
              </div>
              <Image src="/images/arow.svg" className="mr-auto w-10 h-10 p-2.5" alt="arow" />
            </section>
          </section>
          {/* <!-- card --> */}
          <section className="basis-[31.5%]  bg-main-50 rounded-3xl p-1 pb-4">
            <section className="w-full h-[368px] bg-white rounded-[20px] p-6 ">
              <header className="border-b border-solid border-main-100 pb-6 mb-6 font-[Anjoman-Bold]">
                <p>طرح تولید انواع ربات های بازرسی صنعتی و ارائه خدمات بازرسی</p>
              </header>
              <section className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-main-500 text-sm  font-bold">پیش بینی سود</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">٪۳۴</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">زمان باقی مانده</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۲۳ روز</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">دوره اجرا طرح</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۱۲ ماه</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">سرمایه گذاران</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۲۴ نفر</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">سرمایه گذاری (تومان)</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۱،۷۵۰،۰۰۰،۰۰۰</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">مبلغ هدف (تومان)</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۵،۲۵۰،۰۰۰،۰۰۰</span>
                </div>
              </section>
              <div className="w-full h-2 rounded bg-main-100 mt-5 flex items-center ">
                <div className="w-5/12 h-2 rounded bg-main-950"></div>
                <div className="w-9 h-6 rounded-2xl bg-main-950 -mr-1 text-white text-xs flex items-center justify-center">٪۴۳</div>
              </div>
            </section>
            <section className="flex gap-6 p-6 pb-0 items-center">
              <Image src="/images/Rectangle 4302.svg" alt="product logo" />
              <div>
                <p className="text-sm font-[Anjoman-Bold] text-main-950">آریا فناوران آرتا بینش</p>
                <p className="text-sm font-[Anjoman] text-main-700">سخت افزار</p>
              </div>
            </section>
          </section>
          {/* <!-- card --> */}
          <section className="basis-[31.5%]  bg-main-50 rounded-3xl p-1 pb-4">
            <section className="w-full h-[368px] bg-white rounded-[20px] p-6 ">
              <header className="border-b border-solid border-main-100 pb-6 mb-6 font-[Anjoman-Bold]">
                <p>طرح تولید انواع ربات های بازرسی صنعتی و ارائه خدمات بازرسی</p>
              </header>
              <section className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-main-500 text-sm  font-bold">پیش بینی سود</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">٪۳۴</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">زمان باقی مانده</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۲۳ روز</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">دوره اجرا طرح</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۱۲ ماه</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">سرمایه گذاران</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۲۴ نفر</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">سرمایه گذاری (تومان)</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۱،۷۵۰،۰۰۰،۰۰۰</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">مبلغ هدف (تومان)</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۵،۲۵۰،۰۰۰،۰۰۰</span>
                </div>
              </section>
              <div className="w-full h-2 rounded bg-main-100 mt-5 flex items-center ">
                <div className="w-5/12 h-2 rounded bg-main-950"></div>
                <div className="w-9 h-6 rounded-2xl bg-main-950 -mr-1 text-white text-xs flex items-center justify-center">٪۴۳</div>
              </div>
            </section>
            <section className="flex gap-6 p-6 pb-0 items-center">
              <Image src="/images/Rectangle 4302.svg" alt="product logo" />
              <div>
                <p className="text-sm font-[Anjoman-Bold] text-main-950">آریا فناوران آرتا بینش</p>
                <p className="text-sm font-[Anjoman] text-main-700">سخت افزار</p>
              </div>
            </section>
          </section>
          {/* <!-- card --> */}
          <section className="basis-[31.5%]  bg-main-50 rounded-3xl p-1 pb-4">
            <section className="w-full h-[368px] bg-white rounded-[20px] p-6 ">
              <header className="border-b border-solid border-main-100 pb-6 mb-6 font-[Anjoman-Bold]">
                <p>طرح تولید انواع ربات های بازرسی صنعتی و ارائه خدمات بازرسی</p>
              </header>
              <section className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-main-500 text-sm  font-bold">پیش بینی سود</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">٪۳۴</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">زمان باقی مانده</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۲۳ روز</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">دوره اجرا طرح</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۱۲ ماه</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">سرمایه گذاران</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۲۴ نفر</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">سرمایه گذاری (تومان)</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۱،۷۵۰،۰۰۰،۰۰۰</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">مبلغ هدف (تومان)</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۵،۲۵۰،۰۰۰،۰۰۰</span>
                </div>
              </section>
              <div className="w-full h-2 rounded bg-main-100 mt-5 flex items-center ">
                <div className="w-5/12 h-2 rounded bg-main-950"></div>
                <div className="w-9 h-6 rounded-2xl bg-main-950 -mr-1 text-white text-xs flex items-center justify-center">٪۴۳</div>
              </div>
            </section>
            <section className="flex gap-6 p-6 pb-0 items-center">
              <Image src="/images/Rectangle 4302.svg" alt="product logo" />
              <div>
                <p className="text-sm font-[Anjoman-Bold] text-main-950">آریا فناوران آرتا بینش</p>
                <p className="text-sm font-[Anjoman] text-main-700">سخت افزار</p>
              </div>
            </section>
          </section>
          {/* <!-- card --> */}
          <section className="basis-[31.5%]  bg-main-50 rounded-3xl p-1 pb-4">
            <section className="w-full h-[368px] bg-white rounded-[20px] p-6 ">
              <header className="border-b border-solid border-main-100 pb-6 mb-6 font-[Anjoman-Bold]">
                <p>طرح تولید انواع ربات های بازرسی صنعتی و ارائه خدمات بازرسی</p>
              </header>
              <section className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-main-500 text-sm  font-bold">پیش بینی سود</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">٪۳۴</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">زمان باقی مانده</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۲۳ روز</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">دوره اجرا طرح</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۱۲ ماه</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">سرمایه گذاران</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۲۴ نفر</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">سرمایه گذاری (تومان)</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۱،۷۵۰،۰۰۰،۰۰۰</span>
                </div>

                <div>
                  <p className="text-main-500 text-sm  font-bold">مبلغ هدف (تومان)</p>
                  <span className="text-main-950 text-sm font-[Anjoman-Bold]">۵،۲۵۰،۰۰۰،۰۰۰</span>
                </div>
              </section>
              <div className="w-full h-2 rounded bg-main-100 mt-5 flex items-center ">
                <div className="w-5/12 h-2 rounded bg-main-950"></div>
                <div className="w-9 h-6 rounded-2xl bg-main-950 -mr-1 text-white text-xs flex items-center justify-center">٪۴۳</div>
              </div>
            </section>
            <section className="flex gap-6 p-6 pb-0 items-center">
              <Image src="/images/Rectangle 4302.svg" alt="product logo" />
              <div>
                <p className="text-sm font-[Anjoman-Bold] text-main-950">آریا فناوران آرتا بینش</p>
                <p className="text-sm font-[Anjoman] text-main-700">سخت افزار</p>
              </div>
            </section>
          </section>
        </section>
      </section>
      {/* <!-- more projecets --> */}
      <div className="flex items-center justify-center">
        <a href="#" className="mt-20 border border-main-950 border-solid p-2 w-48 self-center rounded-12  flex items-center justify-between gap-3 ">
          <p>مشاهده پروژه ها</p>
          <div className="w-14 bg-main-950 h-10 rounded-3xl flex items-center justify-center">
            <Image src="/images/Vector 190.svg" alt="arow" />
          </div>
        </a>
      </div>
    </>
  );
}
