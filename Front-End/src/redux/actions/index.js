import axios from "axios";

import {
    POST_USER,
    GET_USER,
    GET_USERS
} from "../actions/actionName"

const URL = "http://localhost:3001";


export async function populateDB() {
    await axios.get(`${URL}/populateDB`);
}

//////////USERS////////
export const postUser = payload => async dispatch => {
    try {
      const res = await axios.post(`${URL}/users`, payload);
      dispatch({ type: POST_USER, payload: res.data });
    } catch (e) {
      return dispatch({ type: SET_ERROR, payload: e });
    }
};
  
export function getUser(email) {
    return async dispatch => {
      const res = await axios.get(`${URL}/users/${email}`);
      return dispatch({ type: GET_USER, payload: res.data });
    };
}
  
export function getUsers() {
    return async dispatch => {
      const res = await axios.get(`${URL}/users/`);
      return dispatch({ type: GET_USERS, payload: res.data });
    };
}
