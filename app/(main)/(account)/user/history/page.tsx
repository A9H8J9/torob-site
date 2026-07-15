"use client";

import ProductCard from "@/components/product-card";
import { useGetUserHistories } from "@/lib/apis";

export default function History() {
  const {data, isPending, error} = useGetUserHistories()

  return data?.length > 0 ? (
         <div className="flex flex-col items-center justify-center px-10 py-10">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-2xl font-bold text-[#1e293b] dark:text-white">
              مشاهدات اخیر
            </h1>

            <p className="cursor-pointer text-sm font-bold text-[#d70040]">
              حذف مشاهدات اخیر
            </p>
          </div>

          <div className="mt-5">
            <ProductCard />
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full items-center justify-center">
          <img
            src="https://assets.torob.com/public/main/images/empty_history-min.png"
            className="h-72"
          />

          <p className="mt-5 text-sm dark:text-white text-black">
            آخرین محصولاتی که دیده‌اید را می‌توانید اینجا پیدا کنید.
          </p>
        </div>
      )
}
