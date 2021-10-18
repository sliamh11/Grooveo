import { faStopCircle } from "@fortawesome/free-solid-svg-icons";
import { ControlButton } from "Components";
import { stopAction } from "State/Actions";
import { useSelector, useDispatch } from "react-redux";

const StopButton = (props) => {
    const isStopMode = useSelector((state) => state.audio.isStopOn);
    const dispatch = useDispatch();

    const handleStopClicked = () => {
        dispatch(stopAction(!isStopMode));
    }

    return <ControlButton {...props} icon={faStopCircle} onClick={handleStopClicked}/>;
}

export default StopButton;