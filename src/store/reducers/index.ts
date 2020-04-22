import {combineReducers} from 'redux';
import login from './Login'

export default combineReducers({
    login: login,
});

export function clear(state: any) {
    state().event.received_events_data_list = [];
    state().repository.trend_repos_data_list = [];
}
