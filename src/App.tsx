import "./App.css";
import Navbar from "./components/Navbar";
import play from "../images/avatar/play.png"
import image2 from "../images/image2.png"
import image from "../images/image.png"
import avatar1 from "../images/avatar/avatar1.png"
import avatar2 from "../images/avatar/avatar2.png"
import avatar3 from "../images/avatar/avatar3.png"
import main_landing from "../images/main_landing.png"
import { motion } from "framer-motion";


function App() {
  return (
    <div className="overflow-x-hidden lg:overflow-visible">
      <Navbar />
      <div className="mx-10 lg:mx-0  flex lg:flex-row h-[90vh] lg:h-[70vh] lg:w-[100vw] w-[460px] lg:justify-center mt-20 gap-9 items-center ">
        <div className="text-left">
          <motion.div initial={{x:-100,opacity:0}}
          animate={{x:0,opacity:1}} className="text-7xl  lg:text-5xl">
            <span className="font-poppins_normal ">Discover</span>{" "}
            <span className="font-bold ">
              Digital <br /> Artwork & <br />
              Collect{" "}
            </span>
            <span className="text-gray-600 font-thin">Best NFTs</span>
          </motion.div>
          <motion.p 
          initial={{x:-100,opacity:0}}
          animate={{x:0,opacity:1}}
          className="my-6 text-xl text-gray-400 w-[360px] lg:w-[460px]">
            There is enough digital artworks available online to help you put
            together crypto currency website.
          </motion.p>
          <motion.div
          initial={{x:-100,opacity:0}}
          animate={{x:0,opacity:1}}
           className="flex gap-6 font-poppins_bold w-[350px]">
            <button className="hover:scale-105 transition-all bg-black rounded lg:w-60 lg:h-14 lg:text-xl text-[1.2rem] w-30 h-20  py-2 px-3 text-white">
              Explore Now
            </button>
            <button className="hover:scale-105 transition-all flex lg:gap-2 px-6 items-center lg:bg-none sm:border-2 sm:border-yellow-400 bg-yellow-300 rounded">
              <img
                className="scale-150"
                src={play}
                height={"40"}
                width={"40"}
                alt=""
              />
              Watch Video
            </button>
          </motion.div>
          <h2 className="font-[500] text-3xl  my-6 tracking-[0.6rem] ">
            Populer Artwork
          </h2>
          <motion.img
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{
            delay:0.1
           }}
            className="relative h-24  lg:visible lg:left-[400px]  lg:bottom-2 lg:rotate-0 -z-10 lg:scale-125 "
            src={image2}
          />
        </div>
        <div>
          <motion.img 
          initial={{x:100,opacity:0}}
          animate={{x:0,opacity:1}}
            className="invisible  scale-100 lg:top-20 lg:h-[1000px] relative -z-20 lg:visible "
            src={main_landing}
          />
          <br />
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          className="z-20 italic font-poppins_normal  w-[300px] lg:w-full  relative lg:relative lg:-top-32 lg:right-32  top-72 right-96 flex  flex-col  text-xl items-center">
            <div className="flex gap-0 flex-col lg:flex-row lg:w-full w-[300px] justify-between items-start border-b-2 border-t-0 py-2">
              <span className="text-gray-500 lg:border-b-0 pb-2  flex  justify-start  items-center ">
                <img
                  width={"80"}
                  height="80"
                  src={avatar1}
                />
                Real Bestia Nft's
              </span>
              <span className="font-bold border-t-2 flex lg:border-t-0  items-center">
                <img
                  width={"80"}
                  height="80"
                  src={avatar2}
                />
                Maxima Manga Nft's
              </span>
            </div>
            <br />
            <span className="text-gray-500 flex items-center">
              <img width={"80"} height="80" src={avatar3} />
              Prime Ape Planet (PAP) Nft's
            </span>
          </motion.div>
        </div>
      </div>
      <motion.div 
      initial={{y:100,opacity:0}}
      animate={{y:0,opacity:1}}
      className="z-10 relative flex ml-9 scale-90 bottom-0 lg:bottom-20">
        <img className="invisible lg:visible absolute left-24 top-14" src={image} />
      </motion.div>
      
    </div>
  );
}

export default App;
