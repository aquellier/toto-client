import backend from "../../api/backend.js";
import { CREATE_USER } from "../../constants/action-types";
import {
  createUser
} from '../../actions/usersActions/index';

const createUserMiddleware = ({ dispatch, getState}) => next => async action => {
  if (action.type !== CREATE_USER) {
    return next(action)
  }
  try {
    const response = await backend.post('/signup', action.user);
    debugger
  } catch (err) {
    console.log('error: ', err.message)
    // dispatch(saveRecipeFailure(err))
  }
};

export default createUserMiddleware;
