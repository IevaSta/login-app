import { addNewAcc_const } from "../Constants/dataConstants";

export function addNewAcc_action(newData) {
    return {
        type: addNewAcc_const,
        payload: newData
    }
}