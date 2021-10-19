import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { ControlButton } from "Components";
import { useSelector } from "react-redux";

const MetronomeButton = ({ data, setData }) => {
    const isPlaying = useSelector((state) => state.audio.isPlayOn);
    const isPausing = useSelector((state) => state.audio.isPauseOn);
    const isActive = data.volume > 0 && (isPlaying || isPausing);

    const handleClick = () => {
        if (data.volume === 0) {
            setData({ ...data, volume: 0.5 });
        } else {
            setData({ ...data, volume: 0 });
        }
    }
    return (
        <ControlButton className={`metronome ${isActive ? "active" : ""}`} icon={faStopwatch} clickHandler={handleClick} />
    );
}

export default MetronomeButton;