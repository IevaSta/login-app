import { registration_const } from "../Constants/dataConstants";

export function registration_action(newData) {
    return {
        type: registration_const,
        payload: newData
    }
}