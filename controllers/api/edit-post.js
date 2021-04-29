const router = require('express').Router();
const { Post, User } = require('../../models');

router.put('/:id', async (req, res) => {
    console.log('body', req.body)
    Post.update({
        title: req.body.title,
        body: req.body.body,
    },
        {
            where: {
                id: req.params.id,
            }
        })
        .then((notes) => {
            res.json(notes);
            console.log('NOTES', notes);
        })
        .catch((err) => {
            console.error(err);
        })
})

router.post('/', (req, res) => {
    Post.create({ ...req.body, user_id: req.session.user_id })
        .then((notes) => {
            console.log('NOTES', notes);
            res.json(notes);
        })
});

module.exports = router;