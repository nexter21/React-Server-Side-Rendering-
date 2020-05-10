import { FETCH_ADMINS } from "../actions";

export default (state = [], action) => {
  //console.log("data in reducer", action.payload.data);
  switch (action.type) {
    case FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};
