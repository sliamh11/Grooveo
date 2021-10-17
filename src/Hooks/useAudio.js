import { useEffect, useState } from "react";
const useAudio = (path) => {
    const [audio] = useState(new Audio(path));
    const [playing, setPlaying] = useState(false);
    console.log(audio);
    const toggle = () => {
        setPlaying(!playing);
    }

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    return [playing, toggle];
}

export default useAudio;