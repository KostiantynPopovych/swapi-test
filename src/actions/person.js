import creator from '../helpers/action-creators-fabric';

import {
    FETCH_PERSON_START,
    FETCH_PERSON_SUCCESS,
    FETCH_PERSON_FAILURE
} from '../constants/actionTypes/person';

export const fetchPerson = creator(FETCH_PERSON_START,'payload');
export const fetchPersonSuccess = creator(FETCH_PERSON_SUCCESS, 'payload');
export const fetchPersonFailure = creator(FETCH_PERSON_FAILURE);