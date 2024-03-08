import logo from "../../images/avatar/logo.png"
import download from "../../images/avatar/download.png"
import { useState } from "react";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

import clsx from "clsx";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);


  if(isSideMenuOpen){
   return <div className="lg:invisible flex justify-between   py-6 text-md mx-9">
       <li className="visible font-bold items-center scale-125 lg:scale-100 font-poppins_bold text-xl flex cursor-pointer  gap-2  font-san">
            <img
              className="scale-125"
              src={logo}
              height={"40"}
              width={"40"}
              alt=""
            />
         NFT's{" "}
          </li>
      
             {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 -right-56  -translate-x-2 z-40   transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl  cursor-pointer"
            />
            <ul className="list-none flex  flex-col gap-2 font-poppins_normal font-bold ">
              <li>Discover</li>
              <li>How to work </li>
              <li>Marketplace</li>
            </ul>
            </section>
    </div>
    </div>
  
}

  return (
    <motion.nav initial={{ y: -100,  opacity: 0 }}
            animate={{ y: 0,opacity: 1 }}
            
            className="lg:visible md:visible flex items-center justify-between w-[80vw] mx-[10vw]  py-6 text-md">
      <div className="flex justify-start  font-poppins_normal  invisible lg:visible ">
        <ul className="list-none flex gap items-center justify-between  lg:gap-10 gap-0 ">

          <li className="visible  py-9  items-center scale-125 lg:scale-100 font-poppins_bold text-xl flex justify-between  w-[87vw] cursor-pointer  gap-2  font-san">
            <div className="flex items-center gap-2 font-bold">
              <img
              className="scale-125 ml-2"
              src={logo}
              height={"40"}
              width={"40"}
              alt=""
              />
              NFT's{" "}
            </div>
              <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl visible sticky cursor-pointer lg:hidden"
            />
          </li>
           
          <li className="text-gray-500 cursor-pointer ">Discover</li>
          <li className="text-gray-500 cursor-pointer">How it works</li>
          <li className="font-poppins_bold cursor-pointer">
            Marketplace{" "}
            <span className="font-medium font-poppins  rounded-[99px] px-1 pb-1 pl-2 pr-2 border-none bg-[#f5c042]">
              pro
            </span>
          </li>
        </ul>
      </div>
      <div className="invisible lg:visible flex z-10 gap-10">
        <button className="bg-[#f5c042] rounded-[6px] py-2 font-poppins px-2 border-1 border-yello-500">
          Connect Wallet
        </button>
        <img
          className=" scale-150 cursor-pointer"
          src={download}
          height={"40"}
          width={"40"}
          alt=""
        />
      </div>
      
    </motion.nav>
  );
}
