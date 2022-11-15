import {client,redis} from '../config/redis'
import HttpStatus from 'http-status-codes';
export const RedisGet = async (req, res, next) => {
    try {
    
     let data =await client.get('getAllData')
     if(data !==null){
     res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: JSON.parse(data),
      message: 'Note fetched from redis successfully'
    });
  }else{
    next();
  }
 } catch (error) {
  res.status(HttpStatus.BAD_REQUEST).json({
    code: HttpStatus.BAD_REQUEST,
    message: 'data Fetching fail'
  });
 }
};
  
