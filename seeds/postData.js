const { Post } = require('../models');

const postData = [
    {
        title: 'Notes test!',
        body: 'Notes test!',
        user_id: 1,
        notes_id: 1,
    }
];

const postSeed = () => Post.bulkCreate(postData);

module.exports = postSeed;