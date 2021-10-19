import { faPause } from "@fortawesome/free-solid-svg-icons";
import { ControlButton } from "Components";
import { useDispatch, useSelector } from "react-redux";
import { pauseAction } from "State/Actions";

const PauseButton = () => {
    const isPauseMode = useSelector((state) => state.audio.isPauseOn);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(pauseAction(!isPauseMode));
    }

    return <ControlButton icon={faPause} className={`pause ${isPauseMode ? "active" : ""}`} clickHandler={handleClick}/>;
}

export default PauseButton;