'use client'
import { useGetUserAlerts } from "@/lib/apis";

export default function Analytics() {
  const {data,isPending, error} = useGetUserAlerts()

  
  return data?.length > 0 ?  (
    <p>alerts</p>
    ) : (
    <div className="w-full px-10 mt-20">
      <div className="w-full flex flex-col items-center py-4 justify-center bg-[#ffffff] dark:bg-[#212b36]">
        <img className="w-96" src='https://assets.torob.com/public/main/images/empty_watched.PNG' />
        <p className="text-center text-xs mt-6 max-w-sm text-[#919eab]">اعلان قیمت را برای محصولات دلخواه خود فعال کنید تا از موجودی و تغییرات قیمت‌شان مطلع شوید.</p>
      </div>
    </div>
    )
}
