import express from 'express';

import {
  signUp,
  signIn,
  signOut,
  signGuest,
} from '../controller/signController';
// import { upload } from "../middleware/upload";
const signRouter = express.Router();

signRouter.route('/up').post(signUp);
signRouter.route('/in').post(signIn);
signRouter.route('/out').post(signOut);
signRouter.route('/guest').post(signGuest);

// userRouter.route("/mypage").get(mypage).patch(upload.array("file"), putMypage);

export default signRouter;
