"use client";

import { Camera, Search, History } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useGetAutoComplete } from "@/lib/apis";


type Suggestion = {
  type: "text" | "shop";
  text: string;
  logo?: string;
  is_history: boolean;
};


export default function Hero() {

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);


  const {
    data: suggestions = [],
    isPending,
  } = useGetAutoComplete(query);



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

  const fileInputRef = useRef<HTMLInputElement>(null);

   function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = event.target.files?.[0];


    if(!file) return;
    console.log(file);
  } 


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
        <div
          className="
            relative
            h-12
            w-full
            rounded-sm
            border
            border-gray-400
            bg-white
            dark:bg-[#212b36]
          "
        >
          <button
            type="button"
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
            onFocus={()=>{
              if(query){
                setOpen(true);
              }
            }}
            onChange={(e)=>{
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

          <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />


      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="
          absolute
          cursor-pointer
          left-2
          top-1/2
          -translate-y-1/2
          text-slate-400
        "
      >
        <Camera size={22}/>
      </button>


        </div>





        {
          open && query && (
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


            {
              isPending ? (
                <div className="p-4 text-center text-sm text-slate-400">
                  در حال جستجو...
                </div>
              )
              :
              suggestions.length === 0 ? (
                <div className="p-4 text-center text-sm text-slate-400">
                  نتیجه‌ای پیدا نشد
                </div>
              )
              :
              suggestions.map(
                (item: Suggestion, index:number)=> (

                <button

                  key={index}

                  type="button"

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
                    item.type === "shop" ? (

                      <img
                        src={item.logo}
                        className="
                          h-8
                          w-8
                          rounded-full
                          object-cover
                        "
                      />

                    )

                    :

                    item.is_history ? (

                      <History
                        size={18}
                        className="text-slate-400"
                      />

                    )

                    :

                    (

                      <Search
                        size={18}
                        className="text-slate-400"
                      />

                    )

                  }



                  <span
                    className="
                      text-sm
                      dark:text-white
                    "
                  >
                    {item.text}
                  </span>



                </button>

              )

              )
            }
          </div>
          )
        }
      </div>
      <p className="mt-8 text-center text-sm text-[#64748b] dark:text-[#94a3b8]">
        مقایسه قیمت میلیون‌ها محصول بین هزاران فروشگاه
      </p>


    </main>
  );
}