const router = require('express').Router();
const { User, Post, Notes } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      }
    });

    const posts = postData.map((data) => data.get({ plain: true }));

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/dashboard', withAuth, async (req, res) => {
  const postData = await Post.findAll({
    include: [{
      model: Notes,
      include: [{
        model: User,
        attributes: { exclude: ["password"] }
      }]
    }]
  });
  const posts = postData.map((data) => data.get({ plain: true }));

  const noteData = await Notes.findAll({

    include: [{
      model: User,
      attributes: { exclude: ["password"] }
    }]

  });
  const notes = noteData.map((data) => data.get({ plain: true }));
  res.render('dashboard', {
    posts,
    notes,
    logged_in: req.session.logged_in,
  });
});


router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


router.get('/sign-up', async (req, res) => {
  res.render('sign-up', {
    logged_in: req.session.logged_in,
  });
});


router.get('/new-post', async (req, res) => {
  res.render('new-post', {
    logged_in: req.session.logged_in,
  });
});

router.get('/edit-posts/:id', async (req, res) => {
  const postData = await Post.findByPk(req.params.id);
  const posts = postData.get({ plain: true })
  res.render('edit-posts', {
    posts,
    logged_in: req.session.logged_in,
  });
});




module.exports = router;
