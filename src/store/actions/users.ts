import User from './../../models/User';

export const RESET: string = 'RESET';
export const SET_USERS: string = 'SET_USERS';

const sendToAnalytics = (where: string = '', error: any = null) => {
    console.error(where, error);
};

export const getUser = () => {
    return async (dispatch: any) => {

    };
};