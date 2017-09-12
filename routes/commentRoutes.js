const mongoose = require('mongoose');
const Contact = mongoose.model('contact');

module.exports = (app) => {
    app.post('/api/comment', (req, res) => {
        const { name, contact, comment } = req.body;
        const saveComment = new Contact({
            Name: name,
            Contact: contact,
            Comment: comment,
            CreateDate: Date.now()
        });
        saveComment.save().then(comment => {
            res.send(comment);
        })
    })

    app.get('/api/comment', (req,res) => {
        Contact.find()
            .then(comment => {
                res.send(comment);
            }).catch(err => {
                res.send(err);
            })
    })
}