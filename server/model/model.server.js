/**
 * Created by DG on 1/6/2018.
 */
module.exports = function(mongoose){
    var q = require('q');

    var postModel = require('./blog/blog.model.server')(mongoose,q);
    var model = {
        postModel : postModel
    }

    return model;
};