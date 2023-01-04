import { addNewAcc_const } from "../Constants/dataConstants";
import updateDataInLocalStorage from "../Functions/updateDataInLocalStorage";

function data_reducer(state, action) {

    let newState = state ? [...state] : null;

    switch (action.type) {
        case addNewAcc_const:
            newState = [...newState, action.payload];
            updateDataInLocalStorage(newState);
            break;

        default:
    }

    return newState;
}

export default data_reducer;