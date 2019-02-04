import { all, fork } from 'redux-saga/effects';

import People from './people';
import Person from './person';

const sagas = [
    People,
    Person,
];

export default function* root() {
    yield all(sagas.map(saga => fork(saga)));
};