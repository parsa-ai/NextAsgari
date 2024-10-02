import Image from "next/image";
export default function BlogCard() {
  return (
    <a href="" className="group w-[384px] transition-transform block">
      <figure>
        <div className="w-full h-[256px]  overflow-hidden relative">
          <Image src="/images/blogImage.png" className=" rounded-xl  w-full  group-hover:scale-110" alt="blogImage" width={384} height={256} />
          <Image src="/images/arrow-left.svg" className=" rounded-xl absolute left-2 top-2 w-[56px] h-[56px] opacity-0  group-hover:opacity-100" alt="blogImage" width={384} height={256} />
        </div>
        <figcaption>
          <p className="py-3 font-bold text-sm ">پیش‌بینی صندوق بین‌المللی پول از افزایش کسری بودجه آمریکا</p>
          <div className="flex ">
            <div className="flex ml-4">
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
