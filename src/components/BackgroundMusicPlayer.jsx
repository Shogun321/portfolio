import React, { useState, useRef, useEffect } from 'react';
import '../static/css/music_button.css';

const BackgroundMusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const audioRef = useRef(null);

    const startPlaying = () => {
        const audio = audioRef.current;
        audio.muted = true;
        audio.play().then(() => {
            setIsPlaying(true);
        }).catch(error => {
            console.log('Autoplay failed:', error);
        });
    };

    const toggleMuteUnmute = () => {
        const audio = audioRef.current;
        audio.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <div>
            <audio ref={audioRef} src="bg_music.mp3" />
            {!isPlaying && (
                <button className='button-21' id='play_button' onClick={startPlaying}>
                    play music
                </button>
            )}
            {isPlaying && (
                <button className={`button-21 ${isMuted ? 'pause' : 'play'}`} id='play_button' onClick={toggleMuteUnmute}>
                    {isMuted ? '🔇' : '🔊'}
                </button>
            )}
        </div>
    );
};

export default BackgroundMusicPlayer;