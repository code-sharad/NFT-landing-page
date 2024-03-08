import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 lg:flex h-[70vh] mx-10 lg:mx-20 lg:justify-center lg:gap-9 items-center ">
        <div className=" text-left">
          <div className="text-5xl lg:text-7xl">
            <span className="font-poppins_normal ">Discover</span>{" "}
            <span className="font-bold ">
              Digital <br /> Artwork & <br />
              Collect{" "}
            </span>
            <span className="text-gray-600 font-thin">Best NFTs</span>
          </div>
          <p className="my-6  text-gray-400 w-[430px]">
            There is enough digital artworks available online to help you put
            together crypto currency website.
          </p>
          <div className="flex gap-10 font-poppins_bold">
            <button className="bg-black rounded py-2 px-3 text-white">
              Explore Now
            </button>
            <button className="flex gap-2 items-center">
              <img
                className="scale-125"
                src="./public/avatar/play.png"
                height={"40"}
                width={"40"}
                alt=""
              />
              Watch Video
            </button>
          </div>
          <h2 className="font-[500] text-3xl  my-6 tracking-[0.6rem] ">
            Populer Artwork
          </h2>
          <img
            className="absolute left-[590px]   scale-110 "
            src="./public/image2.png"
          />
        </div>
        <div>
          <img
            className="hidden sm:visible md:block lg:block relative scale-[110%] mt-72 -z-20  lg:visible "
            src="./public/main_landing.png"
          />
          <br />
          <div className="z-10 italic font-poppins_normal lg:botton-40 relative  right-48  flex  flex-col  text-xl items-center">
            <div className="flex gap-8  border-b-2 border-t-2 py-4">
              <span className="text-gray-500 flex items-center ">
                <img
                  width={"80"}
                  height="80"
                  src="./public/avatar/avatar1.png"
                />
                Real Bestia Nft's
              </span>
              <span className="font-bold flex items-center">
                <img
                  width={"80"}
                  height="80"
                  src="./public/avatar/avatar2.png"
                />
                Maxima Manga Nft's
              </span>
            </div>
            <br />
            <span className="text-gray-500 flex items-center">
              <img width={"80"} height="80" src="./public/avatar/avatar3.png" />
              Prime Ape Planet (PAP) Nft's
            </span>
          </div>
        </div>
      </div>
      <div className="z-10 relative flex ml-9 scale-90">
        <img className="absolute left-24 -top-14" src="./public/image.png" />
      </div>
    </>
  );
}

export default App;
