import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery, gql } from "@apollo/client";
// import {} from 'apollo-boost';
import {
  BsThreeDots,
  BsSkipForwardFill,
  BsPlayCircleFill,
  BsFillVolumeUpFill,
  BsFillSkipBackwardFill,
} from "react-icons/bs";
import AudioPlayer from "../components/AudioPlayer";
import { songContext } from "../pages/_app";

const SONGS_QUERY = gql`
  query {
    getSongs {
      id
      photoUrl
      audioUrl
      duration
      title
      artist
    }
  }
`;

const Admin = () => {
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");
  const [toggle, setToggle] = useState(false);
  const { isPlaying, setIsPlaying } = useContext(songContext);
  const {
    data: { getSongs = [] } = {},
    loading,
    error,
  } = useQuery(SONGS_QUERY);
  return (
    <div
      className="w-11/12 h-full sm:w-11/12"
      style={{ background: "black", height: "100%" }}
    >
      <div className="grid sm:grid-cols-2 sm:col-auto md:grid-cols-2 md:col-auto lg:grid-cols-2 lg:col-auto ml-5 w-11/12 sm:w-11/12 h-full">
        <div className="w-11/12  sm:w-11/12 h-full">
          <div className="search-input">
            <span className="search-icon">
              <AiOutlineSearch></AiOutlineSearch>
            </span>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Artist Full Name"
            />
          </div>
          {/* getting songs detail from api getSongs */}
          <h1>
            <br />
          </h1>
          {getSongs
            .filter((song) => search === "" || song.artist === search)
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className="song-container items-center justify-between flex flex-1 class mb-5 p-3"
                  onClick={() => {
                    setId(item.id);
                    setToggle(true);
                    setIsPlaying(false);
                  }}
                >
                  <div className="flex">
                    <div>
                      <Image
                        src={`https://song-tc.pixelotech.com${item.photoUrl}`}
                        width={50}
                        height={50}
                        alt={item.title}
                        // Use onClick with camelCase
                      />
                    </div>
                    <div className="ml-5">
                      <h1 className="text-xs sm:text-sm md:text-base lg:text-xl text-white font-light">
                        {item.title}
                      </h1>
                      <p className="text-xs md:text-xs lg:text-sm text-gray-400 font-light">
                        {item.artist}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400">
                      {(item.duration / 60).toFixed(1)}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>

        <div className=" bg-black w-11/12 sm:w-11/12">
          <h1 className="text-xs sm:text-sm md:text-base lg:text-xl text-white font-light">
            The End Where I begin
          </h1>
          <p className="text-xs sm:text-text-xs md:text-sm lg:text-base text-gray-400 font-light">
            The Script
          </p>
          <AudioPlayer getSongs={getSongs} id={id} toggle={toggle} />

          {/* <div className="flex justify-between" style={{width:'400px',background:'green'}}>
          
         </div> */}
        </div>
      </div>
    </div>
  );
};

export default Layout(Admin);
