export class User{
    /**
     *
     */
    constructor(
        public firstname?:string,
        public lastname?:string,
        public username?:string,
        public password?:string,
        public confirmpassword?:string,
        public role = "user"
    ) {
       
    }
}