import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendMail } from '../mailservice/user.reset.password';

//Login  users by Email
export const login = async (body) => {
  const data = await User.findOne({Email: body.Email});
if(data !== null){
  const PasswordMatch= await bcrypt.compare(body.Password,data.Password);
  console.log(PasswordMatch)
  if(PasswordMatch){
  let token = jwt.sign({ Email: data.Email, id:data._id}, process.env.SECRET_KEY);
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
  body.Password=HashPassword;
  const data = await User.create(body);
  return data;
};

//forgot password
export const forgotPassword = async (body) => {

 
  const data = await User.findOne({Email: body.Email});
if(data !== null){
  let token = jwt.sign({ Email: data.Email, id:data._id}, process.env.SECRET_KEY_RESET);
  sendMail(body.Email,token);
  return ;
  }
else{
      throw new Error("Invalid Email");
    }
 };
 
//update password
export const resetPassword = async (body) => {
  
  const HashPassword=await bcrypt.hash(body.Password,12);
  body.Password=HashPassword;
  const data = await User.findByIdAndUpdate(
    {
      _id:body.id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

