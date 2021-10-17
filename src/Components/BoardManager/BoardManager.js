import './BoardManager.css';
import { ButtonsBoard, PadsBoard } from '../index'

const BoardManager = () => {
    return (
        <div className="board center">
            <PadsBoard />
            <div></div>
            <ButtonsBoard />
        </div>
    );
}

export default BoardManager;