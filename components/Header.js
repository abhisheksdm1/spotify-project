import Link from "next/link";
import React from "react";
// const Logo= require ('../public/Admin_Image.png');

export default function header() {
  return (
    <div className="flex items-center p-4 w-full">
      <Link href="/">
        <div className="headerWrapper">
          <img src="/Spotify_logo.png" width="40px"></img>
          <h1 className="p-3 text-xs sm:text-sm md:text-base lg:text-xl text-white font-light">
            Spotify<span>&reg;</span>
          </h1>
        </div>
      </Link>
      <h1 className="text-xs sm:text-sm md:text-base lg:text-xl text-white font-light">
        Recently Played
      </h1>
    </div>
  );
}
