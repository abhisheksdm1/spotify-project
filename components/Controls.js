import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";
import { IoPlayBackSharp, IoPlayForwardSharp } from "react-icons/io5";

import {
  BsThreeDots,
  BsFillPauseCircleFill,
  BsPlayCircleFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";
import { songContext } from "../pages/_app";

export default function Controls({
  audioRef,
  progressBarRef,
  toggle,
  duration,
  setTimeProgress,
  id,
}) {
  const playAnimationRef = useRef();

  const { isPlaying, setIsPlaying } = useContext(songContext);
  // const [isPlaying, setIsPlaying]=useState(false);
  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      const abc = async () => {
        await audioRef.current.play();
      };
      abc();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(playAnimationRef.current);
      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [isPlaying, audioRef]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  return (
    <>
      <div className="flex justify-between aligns-center mt-5 w-4/5 mb-12">
        <div
          className=" bg-gray-700 w-7"
          style={{ borderRadius: "50%", position: "relative", bottom: "2px" }}
        >
          <button
            className="text-white "
            style={{ position: "relative", top: "4px", left: "4px" }}
          >
            <BsThreeDots />
          </button>
        </div>
        <div className="flex justify-between items-center ">
          <button onClick={skipBackward} className="text-white mr-2">
            <IoPlayBackSharp />
          </button>

          <button onClick={togglePlayPause} className="text-white">
            {isPlaying ? (
              <BsFillPauseCircleFill style={{ fontSize: "32px" }} />
            ) : (
              <BsPlayCircleFill style={{ fontSize: "32px" }} />
            )}
          </button>
          <button className="text-white ml-2" onClick={skipForward}>
            <IoPlayForwardSharp />
          </button>
        </div>
        <div
          className=" bg-gray-700 w-7"
          style={{
            borderRadius: "50%",
            position: "relative",
            bottom: "2px",
            right: "0px",
          }}
        >
          <button
            className="text-white "
            style={{ position: "relative", top: "4px", left: "4px" }}
          >
            <BsFillVolumeUpFill />
          </button>
        </div>
      </div>
    </>
  );
}
