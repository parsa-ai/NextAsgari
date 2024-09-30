import Image from "next/image";
import Button from "./components/Button/Button";
export default function Home() {
  return (
    <>
      <Button varient="outline" text="درخواست مشاوره"></Button>
      <Button varient="contained" text="نرخ لحظه ای" icon="assest/image/chart-notification.svg"></Button>
    </>
  );
}
 