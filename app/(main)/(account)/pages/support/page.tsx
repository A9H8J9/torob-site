import { Button } from "@/components/ui/button";

export default function Support() {
  return (
    <div className="flex justify-center mt-16 w-full">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="dark:text-white text-[#1e293b] font-bold text-xl">
          ارتباط با پشتیبانی
        </h1>
        <p className="dark:text-[#94a3b8] text-[#64748b] text-sm max-w-md text-center">
          اگر موضوع شما مربوط به یک سفارش است، «پیگیری سفارش» را بزنید. برای
          سایر سوال‌ها از «چت با پشتیبانی» استفاده کنید.
        </p>
        <Button className="w-full py-5.5 bg-blue-500 hover:bg-blue-600 transition-all text-white">
          پیگیری سفارش
        </Button>
        <Button className="w-full py-5.5 bg-blue-500 hover:bg-blue-600 transition-all text-white">
          چت با پشتیبانی
        </Button>
        <Button className="w-full py-5.5 bg-blue-500 hover:bg-blue-600 transition-all text-white">
          تماس با ترب
        </Button>
      </div>
    </div>
  );
}
