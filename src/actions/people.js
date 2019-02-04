import creator from '../helpers/action-creators-fabric';

import {
    FETCH_PEOPLE_START,
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_FAILURE,
    FETCH_PEOPLE_BY_SEARCH_START,
    FETCH_PEOPLE_BY_SEARCH_SUCCESS,
    FETCH_PEOPLE_BY_SEARCH_FAILURE,
} from '../constants/actionTypes/people';

export const fetchPeople = creator(FETCH_PEOPLE_START);
export const fetchPeopleSuccess = creator(FETCH_PEOPLE_SUCCESS, 'payload');
export const fetchPeopleFailure = creator(FETCH_PEOPLE_FAILURE);

export const fetchPeopleBySearch = creator(FETCH_PEOPLE_BY_SEARCH_START, 'payload');
export const fetchPeopleBySearchSuccess = creator(FETCH_PEOPLE_BY_SEARCH_SUCCESS, 'payload');
export const fetchPeopleBySearchFailure = creator(FETCH_PEOPLE_BY_SEARCH_FAILURE);