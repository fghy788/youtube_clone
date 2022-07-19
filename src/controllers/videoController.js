import Video, { formatHastag } from "../models/video";

//id
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  return res.render("watch", { pageTitle: video.title, video });
};

export const edit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  return res.render("edit", { pageTitle: `Editing`, video });
};

export const postedit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }

  await Video.findByIdAndUpdate(id, {
    title: title,
    description: description,
    hashtags: formatHastag(hashtags),
  });

  return res.redirect(`/videos/${id}`);
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("deleteVideo");
};
//non-id
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title: title,
      description: description,
      hashtags: formatHastag(hashtags),
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("upload", { pageTitle: "Upload", errorMessage: error._message });
  }
};

//global - function
const handleSearch = (err, videos) => {
  console.log("error", err);
  console.log("videos", videos);
};

//global
export const search = (req, res) => res.send("search");

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("server-error");
  }
};
