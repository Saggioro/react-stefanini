import User from './../../models/User';

export const RESET: string = 'RESET';
export const SET_USERS: string = 'SET_USERS';

const sendToAnalytics = (where: string = '', error: any = null) => {
    console.error(where, error);
};

export const setUsers = (users : User[]) => {
    return async (dispatch: any) => {
        try {
          dispatch({
            type: SET_USERS,
            users: users,
          });
        } catch (error) {
          sendToAnalytics("setUsers", error);
          throw error;
        }
      };
};