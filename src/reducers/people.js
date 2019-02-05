import { 
    FETCH_PEOPLE_START,
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_FAILURE,
} from '../constants/actionTypes/people';

const initialState = {
    list: [],
    loading: true,
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

        default:
            return state
    }
};