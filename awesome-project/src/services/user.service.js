import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


//Login  users by Email
export const login = async (body) => {
  const data = await User.findOne({Email: body.Email});
if(data !== null){
  const PasswordMatch= await bcrypt.compare(body.Password,data.Password);
  console.log(PasswordMatch)
  if(PasswordMatch){
  var jwt = require('jsonwebtoken');
  var token = jwt.sign({ Email: data.Email, id:data._id}, process.env.SECRET_KEY);
  return token;
  }
  else{
  throw new Error("Invalid Password");
      }
}
else{
  throw new Error("Invalid Email");
      }
 
};

//create new user
export const Register = async (body) => {
  
  const HashPassword=await bcrypt.hash(body.Password,12);
  console.log(HashPassword)
  body.Password=HashPassword;
  const data = await User.create(body);
  return data;
};



