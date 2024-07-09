const Posts = require("../models/posts");

module.exports = {
  get: async (req, res, next) => {
    const posts = await Posts.find().populate("User");
    res.status(200).send({ result: true, data: posts });
  },
  getById: async (req, res, next) => {
    const id = req.params.id;
    const post = await Posts.findOne({ _id: id }).populate("User");
    res.status(200).send({ result: true, data: post });
  },
  post: async (req, res) => {
    console.log(req.user._id);
    console.log(req.body);
    req.body["User"] = req.user._id;
    let post = await Posts.create(req.body);
    if (!post) {
      res
        .status(502)
        .send({ msg: "Post not created", result: false, err: product });
    }
    post;
    await post.save();
    res.status(201).send({ msg: "Post created", result: true, data: post });
  },
  patch: async (req, res) => {
    const id = req.params.id;
    let post = await Posts.replaceOne({ _id: id }, req.body);
    if (!post) {
      res
        .status(502)
        .send({ msg: "Post not updated", result: false, err: user });
    }
    res.status(201).send({ msg: "Post updated", result: true, data: post });
  },
  delete: async (req, res) => {
    const id = req.params.id;
    let post = await Posts.deleteOne({ _id: id });
    if (!post) {
      res.status(502).send({ msg: "Post not deleted", err: post });
    }
    res.status(201).send({ msg: "Post deleted", data: post });
  },
};
