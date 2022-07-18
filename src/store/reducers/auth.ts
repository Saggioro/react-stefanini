import _ from "lodash";
import User from "../../models/User";
import { AnyAction } from "redux";
import { LOGOUT, LOGGED_USER } from "../actions/auth";

interface IState {
  loggedUser?: User;
}

const initialState: IState = {
  loggedUser: undefined,
};

const authenticationReducer = (
  state = initialState,
  action: AnyAction
): IState => {
  switch (action.type) {
    case LOGOUT: {
      return initialState;
    }

    case LOGGED_USER: {
      return {
        ..._.cloneDeep(state),
        loggedUser: action.loggedUser,
      };
    }
    default: {
      return state;
    }
  }
};

export default authenticationReducer;
