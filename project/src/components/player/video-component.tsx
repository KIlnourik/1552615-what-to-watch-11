import { useEffect, useRef } from 'react';

type Props = {
  link: string;
  isPlaying: boolean;
  setIsLoaded: () => void;
  setDuration: (value: number) => void;
  setWatchedTime: (value: number) => void;
};

function Video({ link, isPlaying, setIsLoaded, setDuration, setWatchedTime }: Props): JSX.Element {
  const filmVideoRef = useRef<HTMLVideoElement | null>(null);
  const currentFilmVideo = filmVideoRef.current;

  useEffect(() => {
    if (currentFilmVideo === null) {
      return;
    }

    if (isPlaying) {
      currentFilmVideo.play();
    }
    else {
      currentFilmVideo.pause();
    }
    setDuration(currentFilmVideo.duration);
  });

  const handlerTimeChange = () => {
    if (currentFilmVideo === null) {
      return;
    }
    setWatchedTime(currentFilmVideo.currentTime);
  };

  return (
    <video src={link}
      className="player__video"
      onTimeUpdate={handlerTimeChange}
      onCanPlay={setIsLoaded}
      ref={filmVideoRef}
      muted
    />
  );
}

export default Video;
