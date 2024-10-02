import Image from "next/image";
export default function BlogCardSidebar() {
  return (
    <a href="" className="group w-[384px]  block">
      <figure className="flex">
        <div className="w-[128px]  overflow-hidden relative ml-4">
          <Image src="/images/blogImage.png" className=" rounded-xl  w-full transition-transform group-hover:scale-110" alt="blogImage" width={128} height={88} />
        </div>
        <figcaption>
          <p className="pb-3 font-bold text-sm ">پیش‌بینی صندوق بین‌المللی پول از افزایش کسری بودجه آمریکا</p>
          <div className="flex">
            <div className="flex ml-2  after:content-['•'] after:text-light-300 after:mx-2">
              <Image src="/images/pen.svg" className="ml-2" alt="pen" width={15} height={15} />
              <span className="text-sm">روز پلاس</span>
            </div>
            <div className="flex ml-4">
              <Image src="/images/clock-circle.svg" className="ml-2" alt="clock" width={15} height={15} />
              <span className="text-sm">۳۰ دقیقه قبل</span>
            </div>
          </div>
        </figcaption>
      </figure>
    </a>
  );
}
