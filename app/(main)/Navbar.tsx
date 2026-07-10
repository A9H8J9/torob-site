"use client";
import Menu from "@/components/menu";
import Theme from "@/components/theme";
import User from "@/components/user";
import { Camera, Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex items-center dark:bg-[#212b36] h-auto px-12 py-4 bg-[#ffffff]">
      <div className="flex flex-col w-full">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div>
                <img
                  className="hidden dark:flex w-12"
                  src="/icons/logo-dark.svg"
                />
                <img
                  className="flex dark:hidden w-12"
                  src="/icons/logo-light.svg"
                />
              </div>
              <h1 className="text-2xl mr-3 font-black tracking-tight dark:text-white text-[#e91e33]">
                ترب
              </h1>
            </Link>

            <div className="flex items-center mr-12">
              <div className="relative w-96">
                <input
                  placeholder="نام کالا یا فروشگاه را وارد کنید"
                  className="
        h-12
        w-full
        rounded-r-sm
        border
        border-l-0
        border-gray-400
        bg-white
        pr-3
        pl-12
        text-right
        outline-none
        dark:bg-[#0f172b]
        dark:text-white
      "
                />

                <button className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Camera size={22} />
                </button>
              </div>

              <div className="flex items-center -ml-1">
                <button className="text-white bg-[#d73948] px-4 rounded-l-sm h-12">
                  <Search size={25} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-white">
            <Theme />
            <User />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
