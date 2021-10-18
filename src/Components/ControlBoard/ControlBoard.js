import './ControlBoard.css'
import { useDispatch, useSelector } from 'react-redux';
import { PlayButton, StopButton, PauseButton, MetronomeButton } from 'Components';
import { metronome } from 'Static/Audio';
import useSound from 'use-sound';
import { useEffect, useState } from 'react';
import { playAction, stopAction, pauseAction, loopAction } from 'State/Actions';

const ControlBoard = () => {

    const [soundOptions, setSoundOptions] = useState({
        volume: 0.5,
        playbackRate: 1,
        loop: true,
        onend: onLoopEnded
    });
    const [play, exposedData] = useSound(metronome, soundOptions);
    const { stop, pause } = exposedData;
    const dispatch = useDispatch();
    const audioMode = useSelector((state) => state.audio);

    useEffect(() => {
        if (audioMode.isPlayOn) {
            play();
            dispatch(stopAction(false));
            dispatch(pauseAction(false));
        }
    }, [audioMode.isPlayOn])

    useEffect(() => {
        if (audioMode.isPauseOn) {
            pause();
        } else if (audioMode.isPlayOn) {
            play();
            dispatch(pauseAction(false));
        }
    }, [audioMode.isPauseOn]);

    useEffect(() => {
        if (audioMode.isStopOn) {
            stop();
            dispatch(playAction(false));
            dispatch(pauseAction(false));
            dispatch(stopAction(false)); // Set it back to false.
        }
    }, [audioMode.isStopOn]);

    function onLoopEnded(){
        // update to true and immediately to false just to notify other useEffects
        dispatch(loopAction(true));
        dispatch(loopAction(false));
    }

    return (
        <div className="ControlBoard">
            <PlayButton />
            <PauseButton />
            <StopButton />
            <MetronomeButton data={soundOptions} setData={setSoundOptions} />
        </div>
    )
}

export default ControlBoard;