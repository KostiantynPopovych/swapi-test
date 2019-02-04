import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { rootURL } from '../helpers/api';
import { 
    FETCH_POSTS_START,
    FETCH_POST_START,
} from '../store/people/actionTypes';

import { 
    fetchPostsSuccess, 
    fetchPostsFailure,
    fetchPostSuccess, 
    fetchPostFailure,
} from '../store/people/actionCreators'

export function* watchFetchPosts() {
    yield takeLatest(FETCH_POSTS_START, fetchPostsList);
};

export function* watchFetchPost() {
    yield takeEvery(FETCH_POST_START, fetchPostList);
};

function* fetchPostsList() {
    const url = `${rootURL}/people`;

    try {
        const response = yield call(axios.get, url);        
        const people = response.data;

        yield put(fetchPostsSuccess(people));
    } catch(err) {
        yield put(fetchPostsFailure());
    }
} 

function* fetchPostList({payload}) {
    const url = `${rootURL}/people/${payload}`;

    try {
        const response = yield call(axios.get, url);  
        const person = response.data; 
        yield put(fetchPostSuccess(person));
    } catch(err) {
        yield put(fetchPostFailure());
    }
} 