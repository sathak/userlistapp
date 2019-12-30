
import { Config } from '../../../config/config'
import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  ADD_USER,
  EDIT_USER,
  UPDATE_USER,
  DELETE_USER,
} from './actionType';


export const actionUserAPI = {
  fetchUSER: () => async (dispatch, getState) => {

    dispatch({ type: FETCH_USER_SUCCESS });


    const response = await fetch(Config.apiUrl);
    const _forecasts = await response.json();
    const users = _forecasts;
    dispatch({ type: FETCH_USER_SUCCESS, users });
  },
  addUSER: (data) => async (dispatch, getState) => {

    dispatch({ type: ADD_USER });

    const response = await fetch(Config.apiUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        data
      )
    });
    const _forecasts = await response.json();
    const user = _forecasts;
    dispatch({ type: ADD_USER, user });
  },
  editUSER: (userId) => async (dispatch, getState) => {


    dispatch({ type: EDIT_USER });

    const response = await fetch(Config.apiUrl + `/${userId}`);
    const _forecasts = await response.json();
    const user = _forecasts;
    dispatch({ type: EDIT_USER, user });
  },
  updateUSER: (userId,data) => async (dispatch, getState) => {

    dispatch({ type: UPDATE_USER });

    const response = await fetch(Config.apiUrl + `/${userId}`, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        data
      )
    });
    const _forecasts = await response.json();
    const user = _forecasts;
    dispatch({ type: UPDATE_USER, user });
  },
  deleteUSER: (userId) => async (dispatch, getState) => {

    dispatch({ type: DELETE_USER });

    const response = await fetch(Config.apiUrl + `/${userId}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const _forecasts = await response.json();
    const user = _forecasts;
    dispatch({ type: DELETE_USER, user });
  }


};
