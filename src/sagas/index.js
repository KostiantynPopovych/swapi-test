import { fork } from 'redux-saga/effects';

import { 
    watchFetchPosts,
    watchFetchPost,
} from './people';

export default function * () {
    yield [
        fork(watchFetchPosts),
        fork(watchFetchPost),
    ];
}