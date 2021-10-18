const audioDefault = {
    isPlayOn: false,
    isStopOn: false,
    isPauseOn: false
}

const audioStateReducer = (state = audioDefault, action) => {
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

const loopStateReducer = (state = false, action) => {
    switch (action.type) {
        case "LOOP":
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = {
    audio: audioStateReducer,
    loop: loopStateReducer
}

export default rootReducer;