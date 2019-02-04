import {
    FETCH_PERSON_START,
    FETCH_PERSON_SUCCESS,
    FETCH_PERSON_FAILURE
} from '../constants/actionTypes/person';

const initialState = {
    loading: true,
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PERSON_START:
            return {
                ...state,
                loading: true, 
            };
        
        case FETCH_PERSON_SUCCESS:
            return { 
                ...state,
                loading: false, 
                ...payload, 
            };
            
        case FETCH_PERSON_FAILURE:
            return { 
                ...state, 
                loading: false, 
            };

        default:
            return state
    }
};