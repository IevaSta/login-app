import { registration_const } from "../Constants/dataConstants";
import getId from "../Functions/getId";
import updateDataInLocalStorage from "../Functions/updateDataInLocalStorage";

function data_reducer(_, action) {

    let newState = [JSON.parse(localStorage.getItem('usersData')) || [], []];

    switch (action.type) {
        case registration_const:
            if (newState[0]) {
                if (!newState[0].some(u => u.email === action.payload.email)) {
                    newState[0] = [...newState[0], { ...action.payload, id: getId() }];
                    updateDataInLocalStorage(newState[0]);
                }
            } else {
                //code here
            }

            // a@gmail.com

            break;

        default:
    }

    return newState;
}

export default data_reducer;