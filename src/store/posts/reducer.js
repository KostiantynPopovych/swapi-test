import { 
    FETCH_POSTS_START,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_POST_START,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE
} from './actionTypes';

const initialState = {
    person: {},
    postsList: [],
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_POSTS_START:
            return { ...state, globalLoading: true};

        case FETCH_POSTS_SUCCESS:
            return { ...state,
                        globalLoading: false, 
                        postsList: [...payload], 
                        errorFatching: false
                    };
            
        case FETCH_POSTS_FAILURE:
            return { ...state, 
                        globalLoading: false, 
                        errorFatching: true
                    };

        case FETCH_POST_START:
            return { ...state, globalLoading: true};
        
        case FETCH_POST_SUCCESS:
            return { ...state,
                        globalLoading: false, 
                        person: {...payload}, 
                        errorFatching: false
                    };
            
        case FETCH_POST_FAILURE:
            return { ...state, 
                        globalLoading: false, 
                        errorFatching: true
                    };

        default:
            return state
    }
};