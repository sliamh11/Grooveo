import { faStopCircle } from "@fortawesome/free-solid-svg-icons";
import { ControlButton } from "Components";
import { useSelector, useDispatch } from "react-redux";
import { stopAction } from "State/Actions";

const StopButton = (props) => {
    const isStopMode = useSelector((state) => state.audio.isStopOn);
    const dispatch = useDispatch();

    const handleStopClicked = () => {
        dispatch(stopAction(!isStopMode));
    }

    return <ControlButton {...props} icon={faStopCircle} className={`stop ${isStopMode ? "active" : ""}`} clickHandler={handleStopClicked} />;
}

export default StopButton;