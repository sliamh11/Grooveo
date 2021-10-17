import './PadsBoard.css';
import { Pad } from '..';
import randomColor from 'randomcolor';
import audioArray from '../../Static/Audio/index';

const PadsBoard = () => {
    const audioList = []

    const loadAudio = async () => {
        audioArray.forEach((value) => {
            audioList.push(value);
        });
    }

    const loadPads = () => {
        loadAudio();
        return audioList.map((value, index) => {
            return (
                <div key={index} className="grid-cell">
                    <Pad audioPath={value} number={index} color={randomColor()}></Pad>
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