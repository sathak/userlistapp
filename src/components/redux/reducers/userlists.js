import {
  FETCH_USER_SUCCESS,
  ADD_USER,
  UPDATE_USER,
  EDIT_USER,
  DELETE_USER,
} from '../actions/actionType';

const initialState = {
  users: [],
  error: null
}
export const reducer=(state, action) =>{
  state = state || initialState;
  switch (action.type) {
    case FETCH_USER_SUCCESS:
    return {
      ...state,
      users: action.users
    };


    case ADD_USER:
    return {
      ...state,
      users: [...state.users, action.user]
    };
    

    case EDIT_USER:
    return {
      ...state,
      user: action.user
    };
    
    case UPDATE_USER:
         return {
      ...state,
      user: action.user
    };

    case DELETE_USER:
     return {
      ...state,
      users: state.users.filter(user => user.userId !== action.userId)
    };

    default:
      return state;
  }
}
