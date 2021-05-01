const { Post } = require('../models');

const postData = [
    {
        title: 'Nvidia and the End of Movies as We Know Them',
        body: 'GTC21, this years Nvidia GPU Technology Conference, was terrific as always. The alleged focus was on AI and autonomous cars.',
        user_id: 1,
    },
    {
        title: 'A Linux Safari to Classify the Genus of This Penguin',
        body: 'Recently, I took an interest in poking at Gentoo a bit. In the eyes of many desktop Linux users, its considered a rite of passage to install this historically significant distribution.',
        user_id: 2,
    },
    {
        title: 'A Cure for What Ails Social Media',
        body: 'Social media has become the home of fake news, unscrupulous advertising, places to dole out abuse, and disseminate alternative history. Lets talk about what is likely to happen to social media companies;',
        user_id: 3,
    },
    {
        title: 'Cisco, Microsoft and a Simulated Workplace Future',
        body: 'When technology is advancing very rapidly, the leading providers of an evolving class of products are on very different pages.',
        user_id: 4,
    }
];

const postSeed = () => Post.bulkCreate(postData);

module.exports = postSeed;