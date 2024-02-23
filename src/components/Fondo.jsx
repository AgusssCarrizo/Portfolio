import React from "react";
import About from "./About";

export default function Home() {
   return (
      <div className="absolute w-full min-h-screen px-20 py-10 flex justify-between items-center md:flex-row flex-col">
         <video
            autoPlay
            loop
            muted
            src="https://res.cloudinary.com/diotu9grj/video/upload/v1708667992/video_ezbzlk.mp4"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
         />

         <div className="absolute top-0 left-0 w-full h-full bg-black/50 "></div>

         <About />
      </div>
   );
}
