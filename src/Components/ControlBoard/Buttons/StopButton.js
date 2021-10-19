import { faStopCircle } from "@fortawesome/free-solid-svg-icons";
import { ControlButton } from "Components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { stopAction } from "State/Actions";

const StopButton = () => {
    const isStopMode = useSelector((state) => state.audio.isStopOn);
    const [isStopActivated,setIsStopActivated] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        // To delay the animation and give a more realistic feel.
        if(isStopActivated){
            setTimeout(() => {
                setIsStopActivated(false);
            }, 500);
        }
    },[isStopActivated]);

    const handleClick = () => {
        dispatch(stopAction(!isStopMode));
        setIsStopActivated(true);
    }

    return <ControlButton icon={faStopCircle} className={`stop ${isStopActivated ? "active" : ""}`} clickHandler={handleClick} />;
}

export default StopButton;