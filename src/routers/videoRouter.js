import express from "express";
import {
  watch,
  edit,
  upload,
  postedit,
  getUpload,
  postUpload,
} from "../controllers/videoController";

//video/:id
//video/:id/edit
//video/:id/delete
//video/upload

const videoRouter = express.Router();


//id
videoRouter.route("/:id(\\d+)").get(watch);
//express 정규식 참조하기 https://expressjs.com/ko/4x/api.html#path-examples
videoRouter.route("/:id(\\d+)/edit").get(edit).post(postedit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
