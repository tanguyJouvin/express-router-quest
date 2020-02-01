const express = require('express');
const tags = require('../data/tags');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  res.json(tags);
})

// Get a list of comments
// router.get('/', (req, res) => {
//   const postId = Number(req.params.postId);
//   const postComments = fakeComments.filter( comment => comment.post_id === postId)
//   res.json(postComments);
// });

module.exports = router;