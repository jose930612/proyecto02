'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    name: {
        type: String,
        required: 'Title for the Article'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String,
        required: 'Body for the Article'
    },
});
var commentSchema = new Schema({
    User: {
        type: String,
        required: 'User for the comment'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String,
        required: 'Comment body'
    },
    article:{
        type: String,
        required: 'To Match the comment with the article'
    }
});

module.exports = mongoose.model('Articles', articleSchema);
module.exports = mongoose.model('Comments', commentSchema);