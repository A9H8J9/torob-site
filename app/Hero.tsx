"use client";

import { Camera, Search, History } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const suggestions = [
  {
    text: "گوشی تبلت",
    is_history: true,
  },
  {
    text: "گوشی س",
    is_history: true,
  },
  {
    text: "گوشی مینی اسمارت استور",
    suggestion_type: "internet_shop",
    suggestion_group: "entity",
    is_history: false,
    entity: {
      type: "internet_shop",
      id: 296438,
      title: "گوشی مینی اسمارت استور",
      subtitle: "smartstoree.ir",
      logo_url:
        "https://storage3.torob.com/backend-api/internet_shop/logos/05a922718c5d.png",
    },
  },
  {
    text: "گوشی پلازا",
    suggestion_type: "internet_shop",
    suggestion_group: "entity",
    is_history: false,
    entity: {
      type: "internet_shop",
      id: 8114,
      title: "گوشی پلازا",
      subtitle: "gooshiplaza.com",
      logo_url:
        "https://storage3.torob.com/backend-api/internet_shop/logos/603b8eab7dc9.png",
    },
  },
  {
    text: "گوشی سامسونگ",
    is_history: false,
  },
  {
    text: "گوشی شیایومی",
    is_history: false,
  },
  {
    text: "گوشی ایفون",
    is_history: false,
  },
];


export default function Hero() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);


  const filteredSuggestions = suggestions.filter((item) =>
    item.text.includes(query)
  );


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);



  return (
    <main className="mt-40 flex flex-col items-center justify-center px-6">

      <div className="mb-12 flex flex-col items-center">

        <div>
          <img
            className="hidden dark:flex"
            src="/icons/logo-dark.svg"
          />

          <img
            className="flex dark:hidden"
            src="/icons/logo-light.svg"
          />
        </div>


        <h1 className="mt-3 text-5xl font-black tracking-tight text-[#e91e33] dark:text-white">
          ترب
        </h1>

      </div>



      <div
        ref={wrapperRef}
        className="relative w-full max-w-md"
      >

        <div className="
          relative
          h-12
          w-full
          rounded-sm
          border
          border-gray-400
          bg-white
          dark:bg-[#212b36]
        ">

          <button
            className="
              absolute
              right-2
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          >
            <Search size={22}/>
          </button>


          <input
            value={query}
            onFocus={() => {
              if(query) setOpen(true);
            }}
            onChange={(e)=> {
              setQuery(e.target.value);
              setOpen(true);
            }}
            placeholder="نام کالا یا فروشگاه را وارد کنید"
            className="
              h-full
              w-full
              bg-transparent
              px-10
              text-right
              text-black
              outline-none
              placeholder:text-slate-400
              dark:text-white
            "
          />


          <button
            className="
              absolute
              left-2
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          >
            <Camera size={22}/>
          </button>

        </div>



        {open && query && (
          <div
            className="
              absolute
              top-14
              z-50
              w-full
              overflow-hidden
              rounded-md
              border
              bg-white
              shadow-lg
              dark:border-slate-700
              dark:bg-[#212b36]
            "
          >

            {filteredSuggestions.length === 0 ? (

              <div className="p-4 text-center text-sm text-slate-400">
                نتیجه‌ای پیدا نشد
              </div>

            ) : (

              filteredSuggestions.map((item,index)=> (

                <button
                  key={index}
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    px-4
                    py-3
                    text-right
                    hover:bg-slate-100
                    dark:hover:bg-slate-800
                  "
                >

                  {
                    item.entity ? (

                      <>
                        <img
                          src={item.entity.logo_url}
                          className="
                            h-8
                            w-8
                            rounded-full
                          "
                        />

                        <div>
                          <p className="text-sm dark:text-white">
                            {item.entity.title}
                          </p>

                          <p className="text-xs text-slate-400">
                            {item.entity.subtitle}
                          </p>
                        </div>
                      </>

                    ) : (

                      <>
                        {
                          item.is_history ? (
                            <History size={18}/>
                          ) : (
                            <Search size={18}/>
                          )
                        }

                        <span className="dark:text-white">
                          {item.text}
                        </span>
                      </>

                    )
                  }


                </button>

              ))

            )}

          </div>
        )}

      </div>



      <p className="mt-8 text-center text-sm text-[#64748b] dark:text-[#94a3b8]">
        مقایسه قیمت میلیون‌ها محصول بین هزاران فروشگاه
      </p>

    </main>
  );
}