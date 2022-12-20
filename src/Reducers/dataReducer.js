import { addNewAcc_const } from "../Constants/dataConstants";

function data_reducer(state, action) {

    let newState = state ? [...state] : null;

    switch (action.type) {
        case addNewAcc_const:

            break;

        default:
    }

    return newState;
}

export default data_reducer;