const { Post } = require('../models');

const postData = [
    {
        title: 'Hello tech blog i am the test user 1',
        body: 'Hello tech blog i am the test user 1',
        user_id: 1,
    },
    {
        title: 'hello Everyone, i am aaron',
        body: 'hello Everyone, i am aaron!',
        user_id: 2,
    },
    {
        title: 'Whats up',
        body: 'whats up',
        user_id: 3,
    },
    {
        title: 'hello everyone',
        body: 'whats going on',
        user_id: 4,
    }
];

const postSeed = () => Post.bulkCreate(postData);

module.exports = postSeed;