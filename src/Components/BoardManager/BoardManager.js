import './BoardManager.css';
import { ControlBoard, PadsBoard } from '../index'

const BoardManager = () => {
    return (
        <div className="Board center">
            <PadsBoard />
            <div></div>
            <ControlBoard />
        </div>
    );
}

export default BoardManager;