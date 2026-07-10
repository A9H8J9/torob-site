import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
const shops = [
  {
    id: 1,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
  {
    id: 2,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
  {
    id: 3,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
  {
    id: 4,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
  {
    id: 5,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
  {
    id: 6,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
  {
    id: 7,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
  {
    id: 8,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
  {
    id: 9,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
  {
    id: 10,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
  {
    id: 11,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
  {
    id: 12,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
  {
    id: 13,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
  {
    id: 14,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
  {
    id: 15,
    name: "آسو گالری دات کام",
    logo: "	https://image.torob.com/storage/internet_shop/logos/store-logo-placeholder.png",
  },
];
export default function Shops() {
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
          {shops.map((x) => {
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
          })}
        </div>
      </div>
    </div>
  );
}
