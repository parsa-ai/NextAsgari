import React from "react";
import Button from "../components/Button/Button";
import ProductCard from "../components/ProductCard/ProductCard";
import BlogCard from "../components/BlogCard/BlogCard";
export default function Test() {
  return (
    <>
      <div className="text-center bg-slate-50 py-8">
        <h1 className="text-5xl mb-3.5">Buttons</h1>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <tbody>
              <tr>
                <td className="px-6 py-4">
                  <Button varient="outlined" text="درخواست مشاوره" icon="/images/chart-notification.svg"></Button>
                </td>
                <td className="px-6 py-4">
                  <Button varient="contained" text="نرخ لحظه ای"></Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className=" bg-slate-100 py-8">
        <h1 className="text-5xl mb-3.5 text-center">Product card</h1>
        <section className="flex gap-8 flex-wrap w-full">
          <ProductCard />
        </section>
      </div>
      <div className="bg-slate-200 py-8">
        <h1 className="text-5xl mb-3.5">Blog card</h1>
        <div>
          <BlogCard />
        </div>
      </div>
      <div className="text-center bg-slate-300 py-8">
        <h1 className="text-5xl mb-3.5">course card</h1>
      </div>
    </>
  );
}
