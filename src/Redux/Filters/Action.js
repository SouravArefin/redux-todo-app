
import { COLORCHANGED, STATUSCHANGED } from "./ActionType"

export const colorChanged = (color,changeType) => {
    
    return{
        type: COLORCHANGED,
        payload: {
            color: color,
            changeType: changeType
        }
}

}
export const statusChanged = (status) => {
    
    return{
        type: STATUSCHANGED,
        payload: status
}

}