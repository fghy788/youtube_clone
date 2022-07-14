//video
const videos = [
  {
    title: "#01",
    rating: 5,
    comments: 2,
    views: 1,
    id: 1,
  },
  {
    title: "#02",
    rating: 4,
    comments: 3,
    views: 8,
    id: 2,
  },
  {
    title: "#03",
    rating: 3,
    comments: 5,
    views: 12,
    id: 3,
  },
];

//id
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", {
    pageTitle: `Watch ${video.title}`,
    video,
  });
};

export const edit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postedit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("deleteVideo");
};
//non-id
export const upload = (req, res) => res.send("upload");
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};
export const postUpload = (req, res) => {
  const newVideo = {
    title: req.body.uploadTitle,
    rating: 0,
    comments: 0,
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
//global
export const search = (req, res) => res.send("search");
export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
