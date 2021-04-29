const router = require('express').Router();
const { Notes, User } = require('../../models');

router.post('/:id', (req, res) => {
    Notes.create({
        ...req.body,
        post_id: req.params.id,
        user_id: req.session.user_id,
        include: [{ model: User, where: { user_id: req.session.user_id } }]
    })
        .then((notes) => {
            res.json(notes);
            console.log("NOTES", notes);
        })
});


module.exports = router;