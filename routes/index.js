const express = require('express');
const posts = require('./posts');
const tags = require('./tags');


const router = express.Router();

router.use('/posts', posts);
router.use('/tags', tags)

module.exports = router;

// Comme tu peux le constater, ce fichier importe les deux autres routeurs... Puis il crée encore un routeur, qui va servir de routeur principal. On "branche" les routeurs posts et comments sur ce nouveau routeur. Cette fois, on indique les chemins /posts et /comments, au lieu de /api/posts et /api/comments.