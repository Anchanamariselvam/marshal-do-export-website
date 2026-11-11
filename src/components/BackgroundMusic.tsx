import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./BackgroundMusic.css";

function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isMuted) {
      audio.muted = false;

      try {
        await audio.play();
        setIsMuted(false);
      } catch (error) {
        audio.muted = true;
        console.error("Unable to play background music:", error);
      }
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/website-bgm.mp3"
        autoPlay
        muted
        loop
      />

      <button
        className="background-music-button"
        onClick={toggleMusic}
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
        title={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        <span>{isMuted ? "Music Off" : "Music On"}</span>
      </button>
    </>
  );
}

export default BackgroundMusic;