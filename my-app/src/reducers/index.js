import { combineReducers } from 'redux'

import servicesReducers from './servicesReducer';

const reducers = combineReducers({
    teste: servicesReducers
});


export default reducers;
