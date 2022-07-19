import express from "express";
import { watch, edit, postedit, getUpload, postUpload } from "../controllers/videoController";

//video/:id
//video/:id/edit
//video/:id/delete
//video/upload

const videoRouter = express.Router();

//id
videoRouter.route("/:id([0-9a-f]{24})").get(watch);
//express 정규식 참조하기 https://expressjs.com/ko/4x/api.html#path-examples
videoRouter.route("/:id([0-9a-f]{24})/edit").get(edit).post(postedit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
