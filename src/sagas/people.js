import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../helpers/api';

import { 
    FETCH_PEOPLE_START,
} from '../constants/actionTypes/people';

import { PEOPLE } from '../constants/api';

import { 
    fetchPeopleSuccess, 
    fetchPeopleFailure,
} from '../actions/people';

function* fetchPostsList() {
    try {
        const response = yield call(Api.get, PEOPLE);        
        const people = response.data.results;

        yield put(fetchPeopleSuccess(people));
    } catch(err) {
        yield put(fetchPeopleFailure());
    }
};

export default function* watchFetchPosts() {
    yield takeEvery(FETCH_PEOPLE_START, fetchPostsList);
};