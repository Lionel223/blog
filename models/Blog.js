const mongoose = require('mongoose');
const { Schema } = mongoose;


const blogSchema = new Schema({
    Classification: String,
    Topic: String,
    Article: String,
    CreateDate: Date
});

mongoose.model('blog', blogSchema);