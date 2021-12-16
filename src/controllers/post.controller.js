const httpStatus = require('http-status')
const { Post } = require('../models')

const createPost = (async (req, res) => {
    try {
      req.body.userId = req.user.uid;
      // const newPost = Post(req.body);
      // const save = await newPost.save();
      // if(save.isCommentDisable){
      //   const comment = await commentLockUnlock(req, save.postId);
      // }
      res.status(httpStatus.CREATED).send({"status": "success",data: save});
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send({"error": error.message});
    }
  });

module.exports = {
    createPost
};