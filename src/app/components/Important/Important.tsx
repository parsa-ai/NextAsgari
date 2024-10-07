import Accordion from "../Accordion/Accordion";
import Image from "next/image";
import MoreButton from "../Button/MoreButton";
export default function Important() {
  return (
    <div className="bg-light-950  py-40">
      <div className="container ">
        <section className="flex flex-col lg:flex-row text-white">
          <div className="basis-1/2 text-right mb-20">
            <h3 className="text-3xl lg:text-5xl font-bold leading-tight">اهمیت داشتن مشاوره اقتصادی</h3>
            <Accordion />
          </div>
          <div className="basis-1/2">
            <div className="relative">
              <Image src="/images/image 6.png" width={385} height={514} alt="" className="rounded-full block w-64 lg:w-[385px] m-auto" />
              <Image src="/images/tick.svg" width={100} height={130} alt="" className=" block absolute lg:right-16 lg:bottom-10 bottom-4" />
              <Image src="/images/25percent.png" width={250} height={120} alt="" className=" block absolute lg:left-0 left-5 lg:top-10 top-5 w-32 lg:w-[250px]" />
            </div>
          </div>
        </section>
        <MoreButton title="درخواست مشاوره" varient="light" />
      </div>
    </div>
  );
}
