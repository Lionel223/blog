const mongoose = require('mongoose');
const { Schema } = mongoose;


const contactSchema = new Schema({
    Name: String,
    Contact: String,
    Comment: String,
    CreateDate: Date
});


mongoose.model('contact', contactSchema);