import { combineReducers } from 'redux';
import sessionReducer from './session';
import sessionErrorsReducer from './session_errors_reducer';
import shopsReducer from './shops_reducer';
import pointsReducer from './points_reducer'


export default combineReducers({
    session: sessionReducer,
    errors: sessionErrorsReducer,
    shops: shopsReducer,
    points: pointsReducer
}); 