import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form';


let reducers=combineReducers({
    form: formReducer,
});

const store= createStore(reducers);
export default store;


