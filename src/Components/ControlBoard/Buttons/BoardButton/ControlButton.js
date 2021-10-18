import './ControlButton.css'
import { Icon } from "UIKit";

const ControlButton = (props) => {
    const { icon, clickHandler } = props;
    
    return (
        <div className="ControlButton" onClick={clickHandler}>
            <Icon icon={icon} />
        </div>
    );
}

export default ControlButton;