
// Options:
// 1. Create an object with 3 properties and change it's properties
// 2. Create a reducer for each action


// Search for solution in internet
const defaultState = {
    isPlayOn: false,
    isStopOn: false,
    isPauseOn: false
}

const AudioStateReducer = (state = {}, action) => {
    switch (action.type) {
        case "PLAY":
            state.isPlayOn = action.payload;
            break;
        case "STOP":
            state.isStopOn = action.payload;
            break;
        case "PAUSE":
            state.isPauseOn = action.payload;
            break;
        default:
            break;
    }
    return state ? state : {};
}

const rootReducer = {
    audio: AudioStateReducer
}

export default rootReducer;