import './PadsBoard.css';
import { Pad } from '..';
import randomColor from 'randomcolor';
import { audioArray } from '../../Static/Audio/index';
import { faCompactDisc, faDrum, faGuitar, faMusic, faGlobeAmericas, faChurch, faHatCowboySide, faInfinity, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';

const PadsBoard = () => {
    const audioIcons = [
        faCompactDisc,
        faHourglassHalf,
        faGuitar,
        faHatCowboySide,
        faGlobeAmericas,
        faMusic,
        faInfinity,
        faDrum,
        faChurch
    ]

    const loadPads = () => {
        // Icons are loaded by the audioArray order.
        return audioArray.map((value, index) => {
            return (
                <div key={index} className="grid-cell">
                    <Pad audioPath={value} icon={audioIcons[index]} number={index} color={randomColor()}></Pad>
                </div>
            )
        });
    }

    return (
        <div className="PadsBoard">
            <div className="pads-grid">
                {loadPads()}
            </div>
        </div>
    );
}

export default PadsBoard;