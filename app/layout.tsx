import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const myFont = localFont({
  src: [
    {
      path: "../public/assets/Vazirmatn-Regular.ttf",
      weight: "400",
    },
  ],
});
export const metadata: Metadata = {
  title: "ترب | بهترین قیمیت بازار",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="fa" dir="rtl" className={myFont.className}>
      <body className="dark:bg-[#15202b] bg-[#f1f5f9]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
