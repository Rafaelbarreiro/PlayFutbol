import {
  POST_USER,
  GET_USER,
  GET_USERS
} from "../actions/actionName"

const initialState = {
  user: {},
  users: [],
  };

function rootReducer(state = initialState, action) {
    switch (action.type) {
 ////// USERS /////
 case POST_USER: {
  return {
    ...state,
    user: action.payload,
  };
}

case GET_USER: {
  return {
    ...state,
    user: action.payload,
  };
}
case GET_USERS: {
  return {
    ...state,
    users: action.payload,
  };
}


        
    
 default:
    return state;
}}

export default rootReducer;