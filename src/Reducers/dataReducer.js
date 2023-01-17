import { registration_const } from "../Constants/dataConstants";
import getId from "../Functions/getId";
import updateDataInLocalStorage from "../Functions/updateDataInLocalStorage";

function data_reducer(_, action) {

    let newState = [{}, []];
    let data = JSON.parse(localStorage.getItem('usersData')) || [];

    switch (action.type) {
        case registration_const:
            if (data) {
                if (!data.some(u => u.email === action.payload.email)) {
                    newState[0] = { ...action.payload, id: getId(), registrationDate: Date.now() };
                    data = [...data, newState[0]];
                    updateDataInLocalStorage(data);
                } else {
                    newState[1] = ['Toks email jau egzistuoja.'];
                }
            }
            break;

        default:
    }

    return newState;
}

export default data_reducer;