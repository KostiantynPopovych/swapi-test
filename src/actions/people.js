import creator from '../helpers/action-creators-fabric';

import {
    FETCH_PEOPLE_START,
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_FAILURE,
} from '../constants/actionTypes/people';

export const fetchPeople = creator(FETCH_PEOPLE_START, 'payload');
export const fetchPeopleSuccess = creator(FETCH_PEOPLE_SUCCESS, 'payload');
export const fetchPeopleFailure = creator(FETCH_PEOPLE_FAILURE);