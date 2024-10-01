"use client";
import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menuList";
import MobileItems from "./mobileItems";
import ToggleTheme from "./toggleTheme";
const Navbar = () => {
   const router = useRouter();
   return (
       <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-5xl md:max-w-6xl gap-4">
          <h1 className="text-3xl" onClick={() => router.push("/")}>Great
           <span className="text-2xl font-bold">SHOP</span>
          </h1>
          <div className="items-center justify-between hidden sm:flex ">
             <MenuList />
          </div>
          <div className="flex sm:hidden justify-between">
             <MobileItems />
          </div>
          <div className="flex items-center justify-between gap-2 sm:gap-7 ">
            <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/cart")} />
            <Heart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/favorite-products")} />
            <User strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/profile")} />
            <ToggleTheme />
          </div>
       </div>
   );
}

export default Navbar;