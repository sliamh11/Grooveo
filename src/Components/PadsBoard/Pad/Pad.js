import './Pad.css';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { Icon } from 'UIKit';
import { useSelector } from 'react-redux';

const Pad = ({ icon, audioPath, color }) => {
    const soundOptions = {
        volume: 0.2,
        playbackRate: 1,
        loop: true
    }

    const [play, exposedData] = useSound(audioPath, soundOptions);
    const { stop, pause } = exposedData;
    const audioMode = useSelector((state) => state.audio);
    const isNewLoop = useSelector((state) => state.loop);
    const [isPadActive, setIsPadActive] = useState(false);
    const [isWaitingToInit, setIsWaitingToInit] = useState(false);
    const padStyle = getPadStyle(color);

    useEffect(() => {
        if (isNewLoop && isPadActive && isWaitingToInit) {
            play();
            setIsWaitingToInit(false);
        }
    }, [isNewLoop]);

    useEffect(() => {
        isPadActive ? setIsWaitingToInit(true) : stop();
    }, [isPadActive]);

    useEffect(() => {
        if (isPadActive && audioMode.isPlayOn) {
            play();
        }
    }, [audioMode.isPlayOn]);

    useEffect(() => {
        if (isPadActive && audioMode.isPauseOn) {
            pause();
        } else if (isPadActive && audioMode.isPlayOn) {
            play();
        }
    }, [audioMode.isPauseOn]);

    useEffect(() => {
        if (isPadActive && audioMode.isStopOn) {
            stop();
        }
    }, [audioMode.isStopOn]);

    const handlePadClicked = () => {
        setIsPadActive(!isPadActive);
    }

    function getPadStyle(color) {
        const bgColor = isPadActive ? color : "";
        if (bgColor === "")
            return {
                backgroundColor: "",
                boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`
            }

        const first = convertHexToRGBA(bgColor, 40);
        const second = convertHexToRGBA(bgColor, 30);

        return {
            backgroundColor: bgColor,
            boxShadow: `${first} 2px 2px 4px, ${second} 2px 0px 5px -3px,${second} -2px -4px 13px 3px ,rgba(0,0,0,0.2) 0px -4px 2px inset`
        }

    }

    function convertHexToRGBA(hexCode, opacity) {
        if (hexCode === "")
            return "";

        let hex = hexCode.replace('#', '');

        if (hex.length === 3) {
            hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
        }

        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        return `rgba(${r},${g},${b},${opacity / 100})`;
    };

    return (
        <div className={`Pad center ${isPadActive ? "active" : ""}`} style={padStyle} onClick={handlePadClicked} >
            <Icon icon={icon ? icon : ""} />
        </div>
    )
}

export default Pad;