import User from "./../../models/User";

export const LOGOUT: string = "LOGOUT";
export const LOGGED_USER: string = "LOGGED_USER";

const sendToAnalytics = (where: string = "", error: any = null) => {
  console.error(where, error);
};

export const logIn = (user: User) => {
  return async (dispatch: any) => {
    try {
      dispatch({
        type: LOGGED_USER,
        loggedUser: user,
      });
    } catch (error) {
      sendToAnalytics("login", error);
      throw error;
    }
  };
};

export const logout = () => {
    return async (dispatch: any) => {
      try {
        dispatch({
          type: LOGOUT,
        });
      } catch (error) {
        sendToAnalytics("logout", error);
        throw error;
      }
    };
  };