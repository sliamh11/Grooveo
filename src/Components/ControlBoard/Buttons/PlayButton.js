import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { ControlButton } from "Components";
import { useDispatch, useSelector } from "react-redux";
import { playAction } from "State/Actions";

const PlayButton = (props) => {
    const isPlayMode = useSelector((state) => state.audio.isPlayOn);
    const dispatch = useDispatch();

    const handlePlayClicked = () => {
        if (!isPlayMode) {
            dispatch(playAction(!isPlayMode));
        }
    }

    return <ControlButton {...props} icon={faPlay}
        className={`play ${isPlayMode ? "active" : ""}`}
        clickHandler={handlePlayClicked} />;
}

export default PlayButton;