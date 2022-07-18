import _ from "lodash";
import User from "../../models/User";
import { AnyAction } from "redux";
import { RESET, SET_USERS } from "../actions/users";

interface IState {
  users: User[];
}

const initialState: IState = {
  users: [{ name: "admin", password: "123" } as User],
};

const usersReducer = (state = initialState, action: AnyAction): IState => {
  switch (action.type) {
    case RESET: {
      return initialState;
    }
    case SET_USERS: {
      return {
        ..._.cloneDeep(state),
        users: action.users,
      };
    }

    default: {
      return state;
    }
  }
};

export default usersReducer;
