const router = require('express').Router();
const { Notes, User } = require('../../models');

router.post('/:id', (req, res) => {
    Notes.create({
        ...req.body,
        post_id: req.params.id,
        user_id: req.session.user_id,
        created_at: req.session.created_at
    })
        .then((notes) => {
            res.json(notes);
            console.log("NOTES", notes);
            console.log("created at", notes.createdAt)
        })
});


module.exports = router;