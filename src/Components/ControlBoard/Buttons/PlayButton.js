import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { ControlButton } from "Components";
import { useDispatch, useSelector } from "react-redux";
import { playAction } from "State/Actions";

const PlayButton = (props) => {
    const isPlayMode = useSelector((state) => state.audio.isPlayOn);
    const dispatch = useDispatch();

    const handlePlayClicked = () => {
        dispatch(playAction(!isPlayMode));
    }

    // Add className={`${isPlayMode ? active : ""}`} and if so - add font-color green in ControlButton 
    return <ControlButton {...props} icon={faPlay} clickHandler={handlePlayClicked}/>;
}

export default PlayButton;