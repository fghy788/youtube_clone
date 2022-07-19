import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/youtube");

const db = mongoose.connection;

const handleOpen = () => console.log("connect to DB");
const handleError = (error) => console.log("Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
