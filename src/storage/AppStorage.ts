import Cookies from 'js-cookie';

export class AppStorage {
    static ACCESS_TOKEN = 'access_token';

    static get = async (key: string) => {
        try {
            return await Cookies.get(key);
        } catch (e) {
            console.error('AppStorage', 'get', e);
        }
    };

    static save = async (key: string, value: any): Promise<string | undefined> => {
        try {
            return await Cookies.set(key, JSON.stringify(value));
        } catch (e) {
            console.error('AppStorage', 'save', e);
        }
    };

    static remove = async (key: string): Promise<void | undefined> => {
        try {
            await Cookies.remove(key);
        } catch (e) {
            console.error('AppStorage', 'save', e);
        }
    };

    static saveAccessToken = async (value: string): Promise<string | undefined> => {
        return await Cookies.set(AppStorage.ACCESS_TOKEN, value);
    };

    static getAccessToken = async (): Promise<string | undefined> => {
        const auth: string | undefined = await AppStorage.get(AppStorage.ACCESS_TOKEN);
        return auth ? auth : undefined;
    };

    static removeAccessToken = async (): Promise<void | undefined> => {
        return await AppStorage.remove(AppStorage.ACCESS_TOKEN);
    };
}
