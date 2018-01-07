/**
 * Created by DG on 1/6/2018.
 */
module.exports = function(app){
    var mongoose = require('mongoose');

    var connectionString = 'mongodb://127.0.0.1:27017/myBlogApp';


    if(process.env.MLAB_USERNAME) {
        console.log(process.env.MLAB_USERNAME + "Inside");
        connectionString = "mongodb://"+process.env.MLAB_USERNAME + ":" +
            process.env.MLAB_PASSWORD + "@" +
            process.env.MLAB_HOST + ':' +
            process.env.MLAB_PORT + '/' +
            process.env.MLAB_APP_NAME;
    }

    mongoose.connect(connectionString, function (err, db) {
        if(err){
        }
    });

    var model = require('./model/model.server.js')(mongoose);

    require('./services/blog.service.server')(app,model.postModel);

};