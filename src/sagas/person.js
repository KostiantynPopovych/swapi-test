import { call, put, takeEvery, all } from 'redux-saga/effects';
import Api from '../helpers/api';

import { 
    FETCH_PERSON_START,
} from '../constants/actionTypes/person';

import { PERSON, API_URL } from '../constants/api';

import { 
    fetchPersonSuccess, 
    fetchPersonFailure,
} from '../actions/person';

function* fetchPerson(action) {
    try {
        const personResponse = yield call(Api.get, `${PERSON}${action.payload}`);        
        const person = personResponse.data;
        const promises = [];
        const keys = ['films', 'vehicles', 'species', 'starships'];
        keys.forEach(e => {
            promises.push({ e: person[e].map(item => call(Api.get, item.split(API_URL)[1])) });
        });

        const responses = yield all(promises.map(e => Object.values(e)));
        responses.forEach((e, idx) => {
            let data = [];
            if (keys[idx] === 'films') {
                data = e[0].map(item => item.data.title);
            } else {
                data = e[0].map(item => item.data.name);
            }
            person[keys[idx]] = data.join(', ');
        });

        yield put(fetchPersonSuccess(person));
    } catch(err) {
        yield put(fetchPersonFailure());
    }
};

export default function* watchFetchPerson() {
    yield takeEvery(FETCH_PERSON_START, fetchPerson);
};