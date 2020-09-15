import { UPDATE_USER_ATTRIBUTES, CREATE_USER } from "../../constants/action-types";
import userValidationErrors from '../../utils/userValidation/userValidationErrors';
import userIsValid from '../../utils/userValidation/userIsValid';
import { userValidationError } from '../../actions/usersActions/index';

const formValidationUserMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type !== CREATE_USER) {
    return next(action)
  }
  const { user } = action;
  let errors = userValidationErrors(user);
  if (!userIsValid(errors)) {
    dispatch(userValidationError(errors))
  } else {
    next(action)
  }
};

export default formValidationUserMiddleware;
