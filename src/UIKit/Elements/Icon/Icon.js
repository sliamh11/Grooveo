import './Icon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon }) => {
    return (
        <div className="Icon">
            <FontAwesomeIcon icon={icon} />
        </div>
    );
}

export default Icon;