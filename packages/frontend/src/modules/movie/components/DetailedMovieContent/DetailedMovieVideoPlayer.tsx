import React from "react";
import ReactPlayer from "react-player";

interface DetailedMovieVideoPlayerProps {
  videoUrl: string;
}

export const DetailedMovieVideoPlayer = ({
  videoUrl,
}: DetailedMovieVideoPlayerProps) => {
  return <ReactPlayer url={videoUrl} controls width="100%" height="600px" />;
};
