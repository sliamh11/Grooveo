export const playAction = (isPlaying) => {
    return {
        type: "PLAY",
        payload: isPlaying
    }
}

export const pauseAction = (isPause) => {
    return {
        type: "PAUSE",
        payload: isPause
    }
}

export const stopAction = (isStop) => {
    return {
        type: "STOP",
        payload: isStop
    }
}