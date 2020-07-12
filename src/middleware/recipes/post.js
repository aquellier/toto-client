import backend from "../../api/backend.js";
import { ADD_RECIPE } from "../../constants/action-types";

const postRecipeMiddleware = ({ dispatch, getState}) => next => async action => {
  if (action.type === ADD_RECIPE) {
    try {
      const response = await backend.post('/recipes', action.payload);
      await this.props.history.push('/recipes');
      // dispatch(saveRecipeSuccess(response.data))
    } catch (err) {
      console.log('error: ', err.message)
      // dispatch(saveRecipeFailure(error))
    }
  }
  return next(action)
};

export default postRecipeMiddleware;
