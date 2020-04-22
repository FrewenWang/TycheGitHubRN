import {Actions} from "react-native-router-flux";

export default function PageBackUtils() {
    let hasTip = false;
    let timer: number;
    return function () {
        if (Actions.state.routes[0].index > 0) {
            Actions.pop();
            return true;
        }
    }
}
