export class UserDTO{
    /**
     *
     */
    constructor(
        public username?:string,
        public password?:string,
        public role?:string,
        public token?:string
    ) {
       
    }
}
