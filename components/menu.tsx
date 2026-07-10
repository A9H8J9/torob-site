import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type MegaColumn = {
  title: string;
  links: string[];
};

type MenuItem = {
  label: string;
  columns: MegaColumn[];
};

const menus: MenuItem[] = [
  {
    label: "موبایل و کالای دیجیتال",
    columns: [
      {
        title: "گوشی موبایل",
        links: ["سامسونگ", "اپل", "شیائومی", "هواوی", "نوکیا", "آنر"],
      },
      {
        title: "لوازم جانبی موبایل",
        links: ["قاب و کاور", "محافظ صفحه", "پاوربانک", "شارژر", "هولدر"],
      },
      {
        title: "تبلت و لوازم",
        links: ["تبلت سامسونگ", "تبلت اپل", "قلم لمسی", "کیف تبلت"],
      },
      {
        title: "ساعت و مچ‌بند",
        links: ["ساعت هوشمند", "مچ‌بند سلامتی", "بند ساعت"],
      },
    ],
  },
  {
    label: "لپتاپ، کامپیوتر اداری",
    columns: [
      {
        title: "لپ‌تاپ",
        links: ["ایسوس", "لنوو", "اچ‌پی", "دل", "ایسر", "مک‌بوک"],
      },
      {
        title: "قطعات کامپیوتر",
        links: ["پردازنده", "کارت گرافیک", "رم", "هارد و SSD", "مادربرد"],
      },
      {
        title: "لوازم جانبی",
        links: ["کیبورد", "ماوس", "مانیتور", "هدست", "وب‌کم"],
      },
    ],
  },
  {
    label: "هایپر مارکت",
    columns: [
      {
        title: "خواروبار",
        links: ["برنج", "روغن", "حبوبات", "ماکارونی", "کنسرو"],
      },
      {
        title: "نوشیدنی",
        links: ["چای", "قهوه", "نوشابه", "آبمیوه", "دمنوش"],
      },
      {
        title: "شوینده و بهداشتی",
        links: ["مایع ظرفشویی", "شامپو", "صابون", "دستمال کاغذی"],
      },
    ],
  },
  {
    label: "لوازم خانگی",
    columns: [
      {
        title: "لوازم آشپزخانه",
        links: ["یخچال", "ماشین ظرفشویی", "اجاق گاز", "مایکروویو", "فر"],
      },
      {
        title: "لوازم صوتی خانگی",
        links: ["جاروبرقی", "اتو", "پنکه", "بخاری", "کولر"],
      },
    ],
  },
  {
    label: "مد و پوشاک",
    columns: [
      {
        title: "پوشاک زنانه",
        links: ["مانتو", "شومیز", "شلوار", "کیف", "کفش زنانه"],
      },
      {
        title: "پوشاک مردانه",
        links: ["پیراهن", "تیشرت", "شلوار جین", "کفش مردانه"],
      },
    ],
  },
  {
    label: "زیبایی و بهداشت",
    columns: [
      {
        title: "آرایشی",
        links: ["رژ لب", "کرم پودر", "ریمل", "سایه چشم"],
      },
      {
        title: "مراقبت پوست و مو",
        links: ["کرم مرطوب‌کننده", "ضدآفتاب", "شامپو", "ماسک مو"],
      },
    ],
  },
  {
    label: "صوتی و تصویری",
    columns: [
      {
        title: "تلویزیون",
        links: ["ال‌جی", "سامسونگ", "سونی", "تی‌سی‌ال"],
      },
      {
        title: "صدا",
        links: ["اسپیکر", "هدفون", "ساندبار", "میکروفون"],
      },
    ],
  },
  {
    label: "خودرو و سایر وسایل نقلیه",
    columns: [
      {
        title: "لوازم خودرو",
        links: ["روغن موتور", "لاستیک", "باتری", "کفپوش"],
      },
      {
        title: "موتور و دوچرخه",
        links: ["دوچرخه", "کلاه ایمنی", "قطعات موتور"],
      },
    ],
  },
  {
    label: "سایر دسته‌ها",
    columns: [
      {
        title: "ورزش و سرگرمی",
        links: ["لوازم ورزشی", "کمپینگ", "بازی و اسباب‌بازی"],
      },
      {
        title: "کتاب و لوازم‌التحریر",
        links: ["کتاب", "دفتر", "خودکار", "لوازم هنری"],
      },
    ],
  },
];
export default function Menu() {
  return (
    <div className="flex items-center gap-10">
      <nav className="hidden xl:flex items-center gap-2">
        {menus.map((menu, index) => (
          <Popover key={index}>
            <PopoverTrigger asChild>
              <button className="group flex h-14 items-center gap-1 rounded-md px-2 text-[15px] font-medium dark:text-[#94a3b8] text-[#64748b] hover:text-black outline-none transition-colors duration-150 dark:hover:text-white dark:data-[state=open]:text-white data-[state=open]:text-black">
                <span>{menu.label}</span>
              </button>
            </PopoverTrigger>

            <PopoverContent
              side="bottom"
              align="center"
              sideOffset={10}
              collisionPadding={40}
              dir="rtl"
              className="
           w-[calc(100vw-5rem)]
           max-w-none
           rounded-md
           border
           dark:border-slate-700
           border-[#f1f5f9]
           dark:bg-[#212b36]
           bg-[#ffffff]
           p-6
           shadow-xl
         "
            >
              <h3 className="text-base font-bold mb-4 dark:text-white text-[#1e293b]">
                {menu.label}
              </h3>

              <div className="grid grid-cols-4 gap-6">
                {menu.columns.map((col, colIndex) => (
                  <div key={colIndex} className="flex flex-col">
                    <h4 className="mb-3 text-sm font-semibold dark:text-white text-[#1e293b]">
                      {col.title}
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {col.links.map((link) => (
                        <li key={link}>
                          <Link
                            href="#"
                            className="block rounded-md px-2 py-1.5 text-[13px] dark:text-slate-400 text-[#64748b] dark:hover:text-white hover:text-black"
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </nav>
    </div>
  );
}
