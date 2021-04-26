const { Notes } = require('../models');

const notesData = [
    {
        body: 'Notes test!',
        post_id: 1,
        user_id: 1,
    }
];

const notesSeed = () => Notes.bulkCreate(notesData);

module.exports = notesSeed;
