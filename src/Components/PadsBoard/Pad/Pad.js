import './Pad.css';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';

const Pad = ({ number, audioPath, color }) => {
    const soundOptions = {
        volume: 0.2,
        playbackRate: 1,
        loop: true
    }

    const [play, exposedData] = useSound(audioPath, soundOptions);
    const { stop } = exposedData;
    const [isPlaying, setIsPlaying] = useState(false);
    const bgColor = isPlaying ? color : "";

    const handleClicked = () => {
        setIsPlaying(!isPlaying);
    }

    useEffect(() => {
        isPlaying ? play() : stop();
    }, [isPlaying]);

    return (
        <div style={{ backgroundColor: bgColor }} className={`Pad number${number}`} onClick={handleClicked} >
            Pad
        </div>
    )
}

export default Pad;