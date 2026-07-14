import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useGetUser } from "@/lib/apis";

export default function User() {
  const { data, isPending, error } = useGetUser()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <p className="dark:text-[#f1f5f9] text-[#1e293b] text-xs border dark:border-[#f1f5f9] border-[#1e293b] px-3 py-1.5 rounded-lg">
          {data?.phone}
        </p>
      </PopoverTrigger>

      <PopoverContent
        side="bottom"
        align="end"
        sideOffset={6}
        className="w-44 border dark:border-[#15202b] border-[#f1f5f9] dark:bg-[#212b36] bg-[#ffffff] p-2 text-right"
      >
        <div className="flex flex-col">
          <Link
            href="/user/analytics"
            className="rounded-md px-3 py-2 text-right text-sm dark:text-slate-300 text-[#1e293b] transition hover:bg-slate-700 hover:text-white"
          >
            تغییرات قیمت
          </Link>
          <Link
            href="/user/favorites"
            className="rounded-md px-3 py-2 text-right text-sm dark:text-slate-300 text-[#1e293b] transition hover:bg-slate-700 hover:text-white"
          >
            محبوب‌ها
          </Link>
          <Link
            href="/user/history"
            className="rounded-md px-3 py-2 text-right text-sm dark:text-slate-300 text-[#1e293b] transition hover:bg-slate-700 hover:text-white"
          >
            مشاهده‌های اخیر
          </Link>
          <Link
            href="/user/reports"
            className="rounded-md px-3 py-2 text-right text-sm dark:text-slate-300 text-[#1e293b] transition hover:bg-slate-700 hover:text-white"
          >
            گزارش‌های من
          </Link>
          <Link
            href="/user/tickets"
            className="rounded-md px-3 py-2 text-right text-sm dark:text-slate-300 text-[#1e293b] transition hover:bg-slate-700 hover:text-white"
          >
            پیگیری‌های من
          </Link>
          <button className="rounded-md px-3 py-2 text-right text-sm dark:text-slate-300 text-[#1e293b] transition hover:bg-slate-700 hover:text-white">
            شهر من
          </button>

          <div className="my-2 h-px bg-slate-700" />

          <button className="rounded-md px-3 py-2 text-right text-sm text-red-400 hover:bg-red-500/10">
            خروج
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
