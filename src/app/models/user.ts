export class User{
    constructor(
        public _id: string,
        public surname: string,
        public userName: string,
        public email: string,
        public isAppAdmin: boolean,
        public userPassword: string
    ){}
}