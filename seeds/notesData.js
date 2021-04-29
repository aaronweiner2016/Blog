const { Notes } = require('../models');

const notesData = [
    {
        body: 'Notes test!',
        post_id: 1,
        user_id: 1,
    },
    {
        body: 'what a good post',
        post_id: 2,
        user_id: 2,
    },
    {
        body: 'the best post!',
        post_id: 3,
        user_id: 3,
    },
    {
        body: 'what good insight',
        post_id: 4,
        user_id: 4,
    }

];

const notesSeed = () => Notes.bulkCreate(notesData);

module.exports = notesSeed;
