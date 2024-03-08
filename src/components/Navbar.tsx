export default function Navbar() {
  return (
    <nav className="invisible lg:visible md:visible flex items-center justify-between w-full px-44 py-6 text-md">
      <div className="flex justify-start font-poppins_normal  invisible lg:visible ">
        <ul className="list-none flex gap-10  ">
          <li className="font-poppins_bold text-xl flex items-center gap-2  font-san">
            <img
              className="scale-125"
              src="./public/avatar/logo.png"
              height={"40"}
              width={"40"}
              alt=""
            />
            NFT's{" "}
          </li>
          <li className="text-gray-500">Discover</li>
          <li className="text-gray-500 ">How it works</li>
          <li className="font-poppins_bold ">
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
          className=" scale-150"
          src="./public/avatar/download.png"
          height={"40"}
          width={"40"}
          alt=""
        />
      </div>
    </nav>
  );
}