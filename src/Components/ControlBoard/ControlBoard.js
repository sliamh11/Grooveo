import './ControlBoard.css'
import { useSelector } from 'react-redux';
import { PlayButton, StopButton, PauseButton } from 'Components';

const ControlBoard = () => {

    const audioMode = useSelector((state) => state.audio);

    // useSound - pass the play / stop / pause functions as params to components
    // useEffect for each of the play / stop / pause options.

    return (
        <div className="ControlBoard">
            <PlayButton/>
            <PauseButton/>
            <StopButton/>
            
        </div>
    )
}

export default ControlBoard;