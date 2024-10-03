import Badge from "../Badge/Badge";
import Image from "next/image";
export default function TopBar() {
  return (
    <div className=" justify-center flex items-center py-3 bg-light-950">
      <div className="container">
        <div className="flex justify-between">
          <h4 className="md:w-8/12 w-full text-white text-xs truncate ">
            <Badge text="۰۳/۰۳/۲۵" />
            <a href="#" className="font-bold mr-1 text-xs">پیش‌بینی صندوق بین‌المللی پول از افزایش کسری بودجه آمریکا</a>
          </h4>
          <ul className="w-4/12 list-none flex-row-reverse hidden md:flex">
            <li>
              <a href="" className="mr-3 block">
                <Image src="/images/instagram.svg" alt="instagram" width={20} height={20} />
              </a>
            </li>
            <li>
              <a href="" className="mr-3 block">
                <Image src="/images/telegram.svg" alt="telegram" width={20} height={20} />
              </a>
            </li>
            <li>
              <a href="" className="mr-3 block">
                <Image src="/images/youtube.svg" alt="youtube" width={20} height={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
