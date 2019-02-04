import { 
    FETCH_PEOPLE_START,
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_FAILURE,
    FETCH_PEOPLE_BY_SEARCH_START,
    FETCH_PEOPLE_BY_SEARCH_SUCCESS,
    FETCH_PEOPLE_BY_SEARCH_FAILURE,
} from '../constants/actionTypes/people';

const initialState = {
    list: [],
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PEOPLE_START: {
            return { 
                ...state, 
                loading: true
            };
        }
            
        case FETCH_PEOPLE_SUCCESS: {
            return { 
                ...state,
                loading: false, 
                list: [...payload], 
                errorFatching: false
            };
        }
            
        case FETCH_PEOPLE_FAILURE: {
            return { 
                ...state, 
                loading: false, 
                errorFatching: true
            };
        }

        case FETCH_PEOPLE_BY_SEARCH_START: {
            return { 
                ...state, 
                loading: true
            };
        }
            
        case FETCH_PEOPLE_BY_SEARCH_SUCCESS: {
            return { 
                ...state,
                loading: false, 
                list: [...payload], 
                errorFatching: false
            };
        }
            
        case FETCH_PEOPLE_BY_SEARCH_FAILURE: {
            return { 
                ...state, 
                loading: false, 
                errorFatching: true
            };
        }

        default:
            return state
    }
};