import './PadsBoard.css';
import { Pad } from '..';
import randomColor from 'randomcolor';
import { audioArray } from '../../Static/Audio/index';
import { faCompactDisc, faDrum, faGuitar, faMusic, faGlobeAmericas, faChurch, faHatCowboySide, faInfinity, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';

const PadsBoard = () => {

    const audioIcons = [
        faCompactDisc, // 1
        faHourglassHalf, // 2
        faGuitar, // 3
        faHatCowboySide, // 4
        faGlobeAmericas, // 5
        faMusic, // 6
        faInfinity, // 7
        faDrum, // 8
        faChurch
    ]

    const loadPads = () => {
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