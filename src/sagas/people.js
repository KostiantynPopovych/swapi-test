import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '../helpers/api';

import { 
    FETCH_PEOPLE_START,
    FETCH_PEOPLE_BY_SEARCH_START,
} from '../constants/actionTypes/people';

import { PEOPLE, QUERIES } from '../constants/api';

import { 
    fetchPeopleSuccess, 
    fetchPeopleFailure,
    fetchPeopleBySearchSuccess, 
    fetchPeopleBySearchFailure,
} from '../actions/people';

function* fetchPeople() {
    try {
        const response = yield call(Api.get, PEOPLE);        
        const people = response.data.results;

        yield put(fetchPeopleSuccess(people));
    } catch(err) {
        yield put(fetchPeopleFailure());
    }
};

function* fetchPeopleBySearch(action) {
    try {
        const response = yield call(Api.get, `${PEOPLE}${QUERIES.search}${action.payload}`);        
        const people = response.data.results;
        yield put(fetchPeopleBySearchSuccess(people));
    } catch(err) {
        yield put(fetchPeopleBySearchFailure());
    }
};

export default function* watchFetchPosts() {
    yield takeEvery(FETCH_PEOPLE_START, fetchPeople);
    yield takeLatest(FETCH_PEOPLE_BY_SEARCH_START, fetchPeopleBySearch);
};