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

    // UseEffects role is to get notified when a state changes and act accordingly, also to notify other useEffects.
    useEffect(() => {
        if (audioMode.isPlayOn) {
            play();
            dispatch(stopAction(false));
            dispatch(pauseAction(false));
        }
    }, [audioMode.isPlayOn]);

    useEffect(() => {
        if (audioMode.isPauseOn) {
            pause();
            dispatch(playAction(false));
        }
    }, [audioMode.isPauseOn]);

    useEffect(() => {
        if (audioMode.isStopOn) {
            stop();
            dispatch(playAction(false));
            dispatch(pauseAction(false));
            dispatch(stopAction(false)); // Set it back to default.
        }
    }, [audioMode.isStopOn]);

    function onLoopEnded() {
        // update to true and immediately to false to notify other useEffects.
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