import mongoose from "mongoose";

export const formatHastag = (hashtags) => {
  return hashtags.split(",").map((word) => (word.startsWith("#") ? `${word}` : `#${word}`));
};

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, minLength: 5 },
  createAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { Number, default: 0 },
    rating: { Number, default: 0 },
  },
});

const videoModel = mongoose.model("Video", videoSchema);

export default videoModel;
