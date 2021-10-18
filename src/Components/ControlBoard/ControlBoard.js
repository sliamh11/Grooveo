import './ControlBoard.css'
import { useSelector } from 'react-redux';

const ControlBoard = () => {

    const audioMode = useSelector((state) => state.audio);
    // useSound - pass the play / stop / pause functions as params to components

    // useEffect for each of the play / stop / pause options.

    return (
        <div className="ControlBoard">
            Buttons Board
        </div>
    )
}

export default ControlBoard;