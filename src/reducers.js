import { 
    CHANGE_SEARCH_FIELD ,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants"

const initialState = {
    searchField: '',
}

export const searchRobots = ( state = initialState , { type, payload } ) => {
    switch(type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, 
                searchField: payload 
            }
        default: 
            return state;
    }
}


const initialStateRobots = {
    isPending: false,
    users: [],
    error: null
}

export const getRobots = (state = initialStateRobots, action={}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return { ...state,
                isPending: true
            }
        case REQUEST_ROBOTS_SUCCESS:
            return {...state,
                users: action.payload,
                isPending: false
            }
        case REQUEST_ROBOTS_FAILED:
            return {...state,
                users: action.payload,
                isPending:false
            }    
        default:
            return state;
    }
}