import './ControlButton.css'
import { Icon } from "UIKit";

// A base component for other audio buttons (play, pause, stop).
const ControlButton = ({ icon, clickHandler, className }) => {
    return (
        <div className={`ControlButton ${className}`} onClick={clickHandler}>
            <Icon icon={icon} />
        </div>
    );
}

export default ControlButton;