import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../helpers/api';

import { 
    FETCH_PEOPLE_START,
} from '../constants/actionTypes/people';

import { PEOPLE, QUERIES } from '../constants/api';

import { 
    fetchPeopleSuccess, 
    fetchPeopleFailure,
} from '../actions/people';

function* fetchPeople(action) {
    try {
        const uri = action.payload ? `${PEOPLE}${QUERIES.search}${action.payload}` : `${PEOPLE}`;
        const response = yield call(Api.get, uri);        
        const people = response.data.results;
        yield put(fetchPeopleSuccess(people));
    } catch(err) {
        yield put(fetchPeopleFailure());
    }
};

export default function* watchFetchPosts() {
    yield takeLatest(FETCH_PEOPLE_START, fetchPeople);
};