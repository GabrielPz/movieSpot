interface DetailedMovieVideoPlayerProps {
  videoUrl: string;
}

export const DetailedMovieVideoPlayer = ({
  videoUrl,
}: DetailedMovieVideoPlayerProps) => {
  return (
    <div
      className="detailed-movie-video-player"
      style={{ maxWidth: "100%", textAlign: "center" }}
    >
      <video
        controls
        style={{ width: "100%", maxWidth: "800px", height: "800px" }}
      >
        <source src={videoUrl} type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>
    </div>
  );
};
