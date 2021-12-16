const Joi = require('joi');


const media = Joi.object({
  mediaType: Joi.string().valid('image', 'video', 'audio').required(),
  url: Joi.string().required(),
  filename: Joi.string().required(),
  xsJsonUrl: Joi.when('mediaType', { is: 'image', then: Joi.string().required() } ),
  mdJsonUrl: Joi.when('mediaType', { is:'image', then: Joi.string().required() } ),
  lgJsonUrl: Joi.when('mediaType', { is: 'image', then: Joi.string().required() } ),
  video: Joi.when('mediaType', { is: 'video', then: Joi.string().required() } ),
  thumb: Joi.when('mediaType', { is: 'video', then: Joi.string().required() } ),
  audio: Joi.when('mediaType', { is: 'audio', then: Joi.string().required() } ),
  orderNumber: Joi.number().positive().required(),
});

const createPost = Joi.object({
  isCommentDisable: Joi.boolean().default(false),
  description: Joi.string().min(5).required(),
  price: Joi.number(),
  schedulePost: Joi.date().min("now").default(Date.now),
  media: Joi.array().min(1).items(media)
});


  module.exports = {
    createPost
  };