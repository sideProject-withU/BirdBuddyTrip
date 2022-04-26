import express from 'express';

import {
  getPost,
  getDetailPost,
  postPost,
  putPost,
  deletePost,
} from '../controller/postController';
// import { upload } from "../middleware/upload";
const postRouter = express.Router();

postRouter.route('/').get(getPost);
postRouter.route('/:id').get(getDetailPost);
postRouter.route('/').post(postPost);
postRouter.route('/:id').put(putPost);
postRouter.route('/:id').delete(deletePost);

// postRouter.route("/mypage").get(mypage).patch(upload.array("file"), putMypage);

export default postRouter;
