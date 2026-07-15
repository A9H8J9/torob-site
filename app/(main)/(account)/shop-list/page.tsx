'use client'
import { Spinner } from "@/components/ui/spinner";
import { useGetShops } from "@/lib/apis";
import { Search } from "lucide-react";

export default function Shops() {
  const {data, isPending, error} = useGetShops()

  if(isPending) {
    return <div className="w-full flex items-center justify-center">
      <Spinner className="size-8 text-[#d73948]" />
    </div>
  }
  return (
    <div className="flex w-full justify-center mt-12">
      <div className="flex flex-col items-center">
        <h1 className="dark:text-white text-[#1e293b] font-bold text-xl">
          فروشگاه‌های ثبت شده در ترب
        </h1>
        <div className="flex relative mt-16 border border-[#475569] rounded-lg justify-center items-center w-80 h-12">
          <Search className="absolute right-3" size={22} />
          <input
            className="w-full px-10 h-12 outline-none"
            type="text"
            placeholder="جستجوی نام فروشگاه"
          />
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          {
            data?.length > 0 &&
            data?.map((x) => {
            return (
              <div
                key={x.id}
                className="flex items-center gap-4 h-20 w-72 border rounded-lg px-5 border-[#cbd5e1] dark:border-[#475569] cursor-pointer"
              >
                <img className="w-12 h-12 rounded-lg" src={x.logo} />
                <p className="text-sm text-[#1e293b] dark:text-[#f1f5f9]">
                  {x.name}
                </p>
              </div>
            );
          })
}
        </div>
      </div>
    </div>
  );
}
