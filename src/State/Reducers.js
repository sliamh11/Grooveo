
const defaultState = {
    isPlayOn: false,
    isStopOn: false,
    isPauseOn: false
}

const AudioStateReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "PLAY":
            return { ...state, isPlayOn: action.payload };
        case "STOP":
            return { ...state, isStopOn: action.payload };
        case "PAUSE":
            return { ...state, isPauseOn: action.payload };
        default:
            return state;
    }
}

const rootReducer = {
    audio: AudioStateReducer
}

export default rootReducer;