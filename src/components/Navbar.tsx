import logo from "../../images/avatar/logo.png"
import download from "../../images/avatar/download.png"

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav initial={{ y: -100,  opacity: 0 }}
            animate={{ y: 0,opacity: 1 }}
            
            className="invisible lg:visible md:visible flex items-center justify-between w-[80vw] mx-[10vw] py-6 text-md">
      <div className="flex justify-start font-poppins_normal  invisible lg:visible ">
        <ul className="list-none flex gap-10  ">

          <li className="visible items-center scale-125 lg:scale-100 font-poppins_bold text-xl flex cursor-pointer  gap-2  font-san">
            <img
              className="scale-125"
              src={logo}
              height={"40"}
              width={"40"}
              alt=""
            />
            NFT's{" "}
          </li>
          <li className="text-gray-500 cursor-pointer">Discover</li>
          <li className="text-gray-500 cursor-pointer">How it works</li>
          <li className="font-poppins_bold cursor-pointer">
            Marketplace{" "}
            <span className="font-medium font-poppins  rounded-[99px] px-1 pb-1 pl-2 pr-2 border-none bg-[#f5c042]">
              pro
            </span>
          </li>
        </ul>
      </div>
      <div className="flex z-10 gap-10">
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
