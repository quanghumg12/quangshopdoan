import bcryptjs from 'bcryptjs'

const users = [
    {
        name:"Admin",
        email:'admin@gmail.com',
        password:bcryptjs.hashSync("123456",10),
        isAdmin:true
    },
    {
        name:"User",
        email:'user@gmail.com',
        password:bcryptjs.hashSync("123456",10),
    }
  ];
  
  export default users;
  