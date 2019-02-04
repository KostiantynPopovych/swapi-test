import { combineReducers } from 'redux';

import people from './people';
import person from './person';

export default combineReducers({ 
    people,
    person,
});