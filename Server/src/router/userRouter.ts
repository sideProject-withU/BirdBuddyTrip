import express from 'express';

import { getUser, putUser, deleteUser } from '../controller/userController';
// import { upload } from "../middleware/upload";
const userRouter = express.Router();

userRouter.route('/').get(getUser);
userRouter.route('/').post(putUser);
userRouter.route('/').post(deleteUser);

// userRouter.route("/mypage").get(mypage).patch(upload.array("file"), putMypage);

export default userRouter;
