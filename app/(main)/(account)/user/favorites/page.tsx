'use client'
import { useGetUserFavorites } from "@/lib/apis"

export default function Favorites() {
  const {data, isPending, error} = useGetUserFavorites()
   return data?.length > 0 ?  (
    <p>favorites</p>
    ) : (
      <div className="w-full h-full flex flex-col items-center py-4 bg-[#ffffff] dark:bg-[#212b36]">
        <img className="w-96" src='https://assets.torob.com/public/main/images/empty_likes.PNG' />
        <p className="text-center text-sm mt-6 max-w-xs text-[#919eab]">محصولات محبوب خود را انتخاب کنید تا بعدا راحت‌تر پیدایشان کنید.</p>
      </div>
    )
}
