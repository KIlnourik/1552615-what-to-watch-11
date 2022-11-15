import { useEffect, useRef, useState } from 'react';
import { Film } from '../../types/films-types';

type Props = {
  film: Film;
  autoPlay: boolean;
}

function VideoPlayer({ film, autoPlay }: Props): JSX.Element {

  const [, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    videoRef.current?.addEventListener('loadeddata', () => {
      if (isVideoPlayerMounted) {
        setIsLoading(false);
      }
    });

    if (autoPlay) {
      setTimeout(() => {
        videoRef.current?.play();
      }, 1000);
      return;
    }
    videoRef.current?.pause();

    return () => {
      isVideoPlayerMounted = false;
    };

  }, [autoPlay]);
  return (
    <video src={film.previewVideoLink} poster={film.posterImage} ref={videoRef} muted></video>
  );
}

export default VideoPlayer;
