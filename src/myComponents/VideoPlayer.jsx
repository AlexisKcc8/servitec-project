import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";
function LazyVideo({ videoSrc, thumbnailSrc, isPlaying, onVideoClick }) {
  const videoRef = useRef(null);
  const [ref] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div
      ref={ref}
      className="w-full h-full  rounded-2xl overflow-hidden"
      onClick={onVideoClick}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={thumbnailSrc}
        loop
        muted
        className="w-full h-full object-cover cursor-pointer"
        playsInline
      />
    </div>
  );
}

export const VideoPlayer = ({ videoSrc, thumbnailSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [containerWidth, setContainerWidth] = useState(100);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const containerRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    setShouldLoad(true);
  };

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (inView) {
      setShouldLoad(true);
    }
  }, [inView]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height, bottom } =
          containerRef.current.getBoundingClientRect();

        if (top < -height && !hasScrolledDown) {
          setHasScrolledDown(true);
        }

        if (hasScrolledDown && bottom > 0 && !hasAutoPlayed) {
          setIsPlaying(true);
          setHasAutoPlayed(true);
          setShouldLoad(true);
        }

        const scrollPercentage = Math.max(0, Math.min(1, 1 - top / height));

        const newWidth = 100 - scrollPercentage * 20; // 20% is the maximum reduction
        setContainerWidth(newWidth);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolledDown, hasAutoPlayed]);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#f5f5f7]">
      <div ref={ref} className="w-full h-full flex justify-center items-center">
        <div
          style={{
            width: `${containerWidth}%`,
            height: `${containerWidth}vh`,
          }}
          className="relative h-full"
        >
          {shouldLoad ? (
            <LazyVideo
              videoSrc={videoSrc}
              thumbnailSrc={thumbnailSrc}
              isPlaying={isPlaying}
              containerWidth={100}
              onVideoClick={handleVideoClick}
            />
          ) : (
            <img
              src={thumbnailSrc}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
          )}
          <Button
            onClick={handlePlayClick}
            size="icon"
            className="absolute right-4 bottom-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Play className="h-6 w-6" aria-hidden="true" />
            )}
            <span className="sr-only">
              {isPlaying ? "Pausar" : "Reproducir"}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
LazyVideo.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  thumbnailSrc: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  containerWidth: PropTypes.number.isRequired,
  onVideoClick: PropTypes.func.isRequired,
};
VideoPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  thumbnailSrc: PropTypes.string.isRequired,
};
