const mongoose = require('mongoose');
const Blog = mongoose.model('blog');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {

    // fetch all articles
    app.get('/api/article', (req, res) => {
        Blog.find()
            .then((blogs) => {
                res.send(blogs.sort((a, b) => new Date(b.CreateDate) - new Date(a.CreateDate)));
            }).catch(err => {
                res.send(err);
            })
    });

    // fetch specific article
    app.get('/api/article/:id', (req, res) => {
        const id = req.params.id;
        Blog.findOne({ _id: id })
            .then((blog) => {
                res.send(blog);
            }).catch((err) => {
                res.send(err);
            })
    })

    // create article
    app.post('/api/article',requireLogin, async (req, res) => {
        const { classification, topic, content } = req.body;

        const blog = new Blog({
            Classification: classification,
            Topic: topic,
            Article: content,
            CreateDate: Date.now()
        });

        const post = await blog.save();
        res.send(post.id);
    });

    // delete article
    app.delete('/api/article/:id',requireLogin, (req, res) => {
        const id = req.params.id;

        Blog.findByIdAndRemove(id)
            .then(() => {
                res.send(id);
            }).catch(err => {
                res.send(err);
            })
    })


    // modify article
    app.put('/api/article/:id',requireLogin, (req, res) => {
        const id = req.params.id;
        const { classification, topic, article } = req.body;

        Blog.findByIdAndUpdate(id, {
            Classification: classification,
            Topic: topic,
            Article: article,
            CreateDate: Date.now()
        }, { new: true })
            .then((updateBlog) => {
                res.send(updateBlog);
            }).catch((err) => {
                res.send(err);
            })
    })
}