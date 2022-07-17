import 'core-js/proposals/reflect-metadata';
import { jsonProperty, Serializable } from "ts-serializable";

class User extends Serializable {
    @jsonProperty(String)
    name: string = '';

    @jsonProperty(String)
    password: string = '';

    constructor() {
        super();
    }
}

export default User;