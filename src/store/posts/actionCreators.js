import creator from '../../helpers/action-creators-fabric';

import {
    FETCH_POSTS_START,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_POST_START,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE
} from './actionTypes';

const fetchPosts = creator(FETCH_POSTS_START);
const fetchPostsSuccess = creator(FETCH_POSTS_SUCCESS, 'payload');
const fetchPostsFailure = creator(FETCH_POSTS_FAILURE);
const fetchPost = creator(FETCH_POST_START,'payload');
const fetchPostSuccess = creator(FETCH_POST_SUCCESS, 'payload');
const fetchPostFailure = creator(FETCH_POST_FAILURE);

export {
    fetchPosts,
    fetchPostsSuccess,
    fetchPostsFailure,
    fetchPost,
    fetchPostSuccess,
    fetchPostFailure
};