import './ControlButton.css'
import { Icon } from "UIKit";

const ControlButton = (props) => {
    const { icon, clickHandler, className } = props;
    
    return (
        <div className={`ControlButton ${className}`} onClick={clickHandler}>
            <Icon icon={icon} />
        </div>
    );
}

export default ControlButton;