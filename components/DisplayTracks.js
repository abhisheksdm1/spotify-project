import React from "react";

export default function DisplayTracks({
  audioRef,
  setDuration,
  progressBarRef,
  getSong,
  id,
}) {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      {id ? (
        getSong
          .filter((item, index) => index + 1 == id)
          .map((item, index) => (
            <div key={index}>
              <audio
                src={`https://song-tc.pixelotech.com${item.audioUrl}`}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
              />
            </div>
          ))
      ) : (
        <audio
          src="https://song-tc.pixelotech.com/files/audio/1.mp3"
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
        />
      )}
    </div>
  );
}
