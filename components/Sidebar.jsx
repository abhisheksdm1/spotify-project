import React from "react";
import Image from "next/image";
import { useProSidebar } from "react-pro-sidebar";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar1 = () => {
  const params = useRouter();
  const { pathname } = params;

  const { collapseSidebar } = useProSidebar();

  return (
    <div>
      <div style={{ background: "black", position: "relative]" }}>
        <div className="siderbarWrapper">
          <div>
            <Link href="/">
              <div className="flex my-8">
                <h1 className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-500 font-light">
                  For You
                </h1>
              </div>
            </Link>
            <Link href="/">
              <div className="flex my-8">
                <h1 className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-500 font-light">
                  Top Traks
                </h1>
              </div>
            </Link>

            <Link href="/">
              <div className="flex my-8">
                <h1 className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-500 font-light">
                  Favourites
                </h1>
              </div>
            </Link>

            <Link href="/">
              <div className="flex my-8">
                <h1 className="text-xs sm:text-sm md:text-base lg:text-xl text-white font-light">
                  Recently Played
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex my-8 users">
          <Image src="/Admin_Image.png" aly="User" width={50} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar1;
