import React, { useRef, useState } from "react";
import DisplayTrack from "./DisplayTracks";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import Image from "next/image";
function AudioPlayer({ getSong, id, toggle }) {
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();
  const progressBarRef = useRef();
  return (
    <div className="flex flex-col w-full">
      <div>
        <br />
        {id ? (
          getSong
            .filter((item, index) => index + 1 == id)
            .map(
              (item, index) => (
                <div key={index}>
                  <Image
                    className=" h-auto max-w-fullrounded-lg"
                    src={`https://song-tc.pixelotech.com${item.photoUrl}`}
                    alt="music"
                    width={500}
                    height={500}
                    style={{ width: "80%", borderRadius: "10px" }}
                  />
                </div>
              ),
              []
            )
        ) : (
          <Image
            src="https://song-tc.pixelotech.com/files/photos/1.jpg"
            className=" h-auto max-w-full rounded-lg "
            alt="music"
            width={500}
            height={500}
            style={{ width: "80%", borderRadius: "10px" }}
          />
        )}
        <br />
      </div>
      <div>
        <ProgressBar
          {...{ progressBarRef, audioRef, timeProgress, duration }}
        />
      </div>
      <div>
        <DisplayTrack
          {...{ audioRef, setDuration, progressBarRef, getSong, id }}
        />
      </div>
      <div className="w-full m-0">
        <Controls
          {...{ audioRef, progressBarRef, toggle, duration, setTimeProgress }}
        />
      </div>
    </div>
  );
}

export default AudioPlayer;
