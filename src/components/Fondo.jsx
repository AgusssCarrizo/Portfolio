import React from "react";
import About from "./About";

export default function Home() {
   return (
      <div className="absolute w-full min-h-screen px-20 py-10 flex justify-between items-center md:flex-row flex-col">
         <video
            autoPlay
            loop
            muted
            src="./src/assets/video.mp4"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
         />

         <div className="absolute top-0 left-0 w-full h-full bg-black/50 "></div>

         <About />
      </div>
   );
}
