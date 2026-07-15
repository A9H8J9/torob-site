import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useGetCategories } from "@/lib/apis";

type ApiCategory = {
  id: string;
  title: string;
  url: string;
  children?: ApiCategory[];
};

export default function Menu() {
  const { data: menus, isPending, error } = useGetCategories();

  if (error) {
    return (
      <div className="flex items-center gap-10">
        <nav className="hidden xl:flex items-center gap-2 text-red-500 text-sm">
          خطا در بارگذاری دسته‌بندی‌ها
        </nav>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="flex items-center gap-12">
        <nav className="hidden xl:flex items-center gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="px-12 py-3.5 animate-pulse rounded-md bg-gray-200 dark:bg-slate-700"
            />
          ))}
        </nav>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-10">
      <nav className="hidden xl:flex items-center gap-2">
        {menus.map((menu: ApiCategory) => (
          <Popover key={menu.id}>
            <PopoverTrigger asChild>
              <p className="group cursor-pointer flex h-14 items-center gap-1 rounded-md px-2 text-[15px] font-medium dark:text-[#94a3b8] text-[#64748b] hover:text-black outline-none transition-colors duration-150 dark:hover:text-white dark:data-[state=open]:text-white data-[state=open]:text-black">
                <span>{menu.title}</span>
              </p>
            </PopoverTrigger>

            {!!menu.children?.length && (
              <PopoverContent
                side="bottom"
                align="center"
                sideOffset={10}
                collisionPadding={40}
                dir="rtl"
                className="
                  w-[calc(100vw-5rem)]
                  max-w-none
                  max-h-[75vh]
                  overflow-y-auto
                  [&::-webkit-scrollbar]:hidden
                  [-ms-overflow-style:none]
                  [scrollbar-width:none]
                  rounded-md
                  border
                  dark:border-slate-700
                  border-[#f1f5f9]
                  dark:bg-[#212b36]
                  bg-white
                  p-4
                  shadow-xl
                "
              >
                <Link
                  href={menu.url}
                  className="mb-3 block text-sm font-bold dark:text-white text-[#1e293b]"
                >
                  {menu.title}
                </Link>

                <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                  {menu.children.map((sub) => (
                    <div
                      key={sub.id}
                      className="break-inside-avoid-column mb-4"
                    >
                      <Link href={sub.url} className="mb-2 text-xs font-semibold dark:text-white text-[#1e293b]">
                        {sub.title}
                      </Link>

                      <ul className="flex flex-col gap-1">
                        {sub.children?.map((child) => (
                          <li key={child.id}>
                            <Link
                              href={`/category/${sub.url}/${child.url}`}
                              className="block rounded-md px-1.5 py-1 text-[12px] dark:text-slate-400 text-[#64748b] dark:hover:text-white hover:text-black"
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            )}
          </Popover>
        ))}
      </nav>
    </div>
  );
}