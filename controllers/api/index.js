const router = require('express').Router();
const userRoutes = require('./userRoutes');
const noteRoutes = require('./note-route');
const editRoutes = require('./edit-post');

router.use('/users', userRoutes);
router.use('/notes', noteRoutes);
router.use('/edit', editRoutes);



module.exports = router;
