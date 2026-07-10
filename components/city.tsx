"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

const cities = [
  {
    province: "تهران",
    cities: ["تهران", "اسلامشهر", "ری", "شهریار"],
  },
  {
    province: "خراسان رضوی",
    cities: ["مشهد", "نیشابور", "سبزوار"],
  },
  {
    province: "اصفهان",
    cities: ["اصفهان", "کاشان"],
  },
];

export default function City() {
  const [cityDialog, setCityDialog] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("تهران");
  const [tempCity, setTempCity] = useState(selectedCity);

  function confirmCity() {
    setSelectedCity(tempCity);
    setCityDialog(false);
  }

  function cancelCity() {
    setTempCity(selectedCity);
    setCityDialog(false);
  }

  return (
    <>
      <button
        onClick={() => setCityDialog(true)}
        className="flex items-center gap-3 text-sm"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="map-pin"
            stroke="none"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          >
            <g id="Group" stroke="currentColor">
              <path
                d="M21,10.0000001 C21,17.0000001 12,23.0000001 12,23.0000001 C12,23.0000001 3,17.0000001 3,10.0000001 C3,5.0294373 7.0294373,1.00000013 12,1.00000013 C16.9705627,1.00000013 21,5.0294373 21,10.0000001 L21,10.0000001 Z"
                id="Path"
                strokeWidth="2"
              ></path>
              <circle id="Oval" strokeWidth="2" cx="12" cy="10" r="3"></circle>
            </g>
          </g>
        </svg>
        <span>شهر من:</span>
        <span>{selectedCity}</span>
      </button>

      <Dialog open={cityDialog} onOpenChange={setCityDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>انتخاب شهر</DialogTitle>
          </DialogHeader>

          <input
            placeholder="جستجوی شهر..."
            className="
        h-10
        w-full
        rounded-md
        border
        bg-transparent
        px-3
        text-right
        outline-none
        dark:border-slate-700
      "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <RadioGroup
            value={tempCity}
            onValueChange={setTempCity}
            className="max-h-80 overflow-y-auto"
          >
            {cities.map((province) => {
              const filteredCities = province.cities.filter((city) =>
                city.includes(search)
              );

              if (!filteredCities.length) return null;

              return (
                <div key={province.province} dir="rtl">
                  <p className="mt-4 mb-2 text-sm font-bold">
                    {province.province}
                  </p>

                  {filteredCities.map((city) => (
                    <label
                      key={city}
                      className="
                  flex
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-md
                  px-3
                  py-2
                  hover:bg-slate-100
                  dark:hover:bg-slate-800
                "
                    >
                      <RadioGroupItem value={city} />

                      <span>{city}</span>
                    </label>
                  ))}
                </div>
              );
            })}
          </RadioGroup>

          <div className="flex w-full gap-2">
            <Button onClick={confirmCity} className="w-[80%] py-5">
              تایید
            </Button>

            <Button
              variant="outline"
              onClick={cancelCity}
              className="w-[20%] py-5"
            >
              انصراف
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
