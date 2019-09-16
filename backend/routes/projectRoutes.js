'use strict';

module.exports = function(app) {
    var newsPaper = require('../controllers/projectController');

    app.route('/articles')
        .get(newsPaper.list_all_articles)
        .post(newsPaper.create_an_article);
    
    app.route('/articles/:articleId')
        .get(newsPaper.read_an_article);
    
    app.route('/comments/:articleId')
        .get(newsPaper.list_all_comments)
        .post(newsPaper.create_a_comment);
        /*
        .put(newsPaper.update_an_article)
        .delete(newsPaper.delete_an_article);
        */
};