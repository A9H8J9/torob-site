'use client'

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function Theme({ title }: { title?: string }) {
  const { setTheme, theme } = useTheme();

  const themes = [
    {
      name: "dark",
      title: "حالت تاریک",
      icon: Moon,
    },
    {
      name: "light",
      title: "حالت روشن",
      icon: Sun,
    },
    {
      name: "system",
      title: "حالت سیستم",
      icon: Monitor,
    },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="dark:text-white text-black flex items-center gap-2">
          {theme === "light" && <Sun size={23} />}

          {theme === "dark" && <Moon size={23} />}

          {theme === "system" && <Monitor size={23} />}
          <p className="text-sm dark:text-white text-black">{title}</p>
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>انتخاب حالت نمایش</DialogTitle>
        </DialogHeader>

        <div className="flex gap-3 mt-4">
          {themes.map((item) => {
            const Icon = item.icon;

            return (
              <Button
                key={item.name}
                variant="outline"
                onClick={() => setTheme(item.name)}
                className=""
              >
                <Icon size={20} />
                {item.title}
              </Button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
