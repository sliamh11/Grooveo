import { faPause } from "@fortawesome/free-solid-svg-icons";
import { ControlButton } from "Components";
import { useDispatch, useSelector } from "react-redux";
import { pauseAction } from "State/Actions";

const PauseButton = (props) => {
    const isPauseMode = useSelector((state) => state.audio.isPauseOn);
    const dispatch = useDispatch();

    const handlePauseClicked = () => {
        dispatch(pauseAction(isPauseMode));
    }

    return <ControlButton {...props} icon={faPause} clickHandler={handlePauseClicked}/>;
}

export default PauseButton;