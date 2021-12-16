const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;


var mediaSchema = new Schema({
    mediaType: {
        type: String,
        enum: ['image', 'video', 'audio'],
        required: true
    },
    url: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    xsJsonUrl: String,
    mdJsonUrl: String,
    lgJsonUrl: String,
    video: String,
    thumb: String,
    audio: String,
});


const postSchema = mongoose.Schema({
    isCommentDisable: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: null,
    },
    schedulePost: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: Number,
        required: true
    },
    media :  [mediaSchema],
    
},{
    timestamps: true
});


postSchema.plugin(AutoIncrement, {inc_field: 'postId'});
const Post = mongoose.model('Post', postSchema);

module.exports = Post;