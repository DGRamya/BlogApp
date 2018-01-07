/**
 * Created by DG on 1/6/2018.
 */

module.exports = function(mongoose) {


    var postSchema = mongoose.Schema({
        title: {type: String, required: true},
        body: String,
        tag: {type: String, enum: ['POLITICS', 'ECONOMY', 'EDUCATION']},
        posted: {type: Date, default: Date.now()}

    }, {collection: 'post'});

    return postSchema;

};
