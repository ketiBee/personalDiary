const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types 


const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    article: {
        type: String,
        required: true
    },

    articleIMG: {
        type: String,
        required: true

    },

    postedBy: {
        type: ObjectId,
        ref:"User"
    },

    date: {
        type: Date,
        default: Date.now
    }




});

module.exports = mongoose.model('Article', articleSchema);