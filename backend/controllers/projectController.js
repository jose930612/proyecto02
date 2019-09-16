'use strict';

var mongoose = require('mongoose'),
Articles = mongoose.model('Articles'),
Comments = mongoose.model('Comments');

exports.list_all_articles = function(req, res) {
  Articles.find({}, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.create_an_article = function(req, res) {
  var new_article = new Articles(req.body);
  new_article.save(function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.read_an_article = function(req, res) {
  Articles.findById(req.params.articleId, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.list_all_comments = function(req, res) {
  Comments.find({article:req.params.articleId}, function(err, comments) {
    if (err)
      res.send(err);
    res.json(comments);
  });
};
exports.create_a_comment = function(req, res) {
  var new_comment = new Comments(req.body);
  new_comment.save(function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};
/*
exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
exports.delete_a_task = function(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
*/