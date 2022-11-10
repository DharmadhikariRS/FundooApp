import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth,useResetAuth } from '../middlewares/auth.middleware';

const router = express.Router();


router.post('', newUserValidator, userController.Register);
router.post('/login', userController.login);
router.post('/forgotPassword',userController.forgotPasssword);
router.put('/resetPassword',useResetAuth,userController.resetPassword)

export default router;
