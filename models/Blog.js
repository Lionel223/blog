const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    googleId: String,
})

mongoose.model('blogs', blogSchema);