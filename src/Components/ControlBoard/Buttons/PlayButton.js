import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { ControlButton } from "Components";
import { useDispatch, useSelector } from "react-redux";
import { playAction } from "State/Actions";

const PlayButton = () => {
    const isPlayMode = useSelector((state) => state.audio.isPlayOn);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (!isPlayMode) {
            dispatch(playAction(!isPlayMode));
        }
    }

    return <ControlButton icon={faPlay} className={`play ${isPlayMode ? "active" : ""}`} clickHandler={handleClick} />;
}

export default PlayButton;