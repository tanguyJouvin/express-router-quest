const express = require('express');
const router = express.Router({ mergeParams: true });

const tags = require('../data/tags');
const fakePosts = require('../data/posts');
//get /api/tags
router.get('/', (req, res) => {
  res.json(tags);
})

router.get('/:tagId/posts', (req, res) =>{
  const tagId = Number(req.params.tagId);
  const foundTag = tags.find(tag => tag.id === tagId);
  if (!foundTag) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }
  const goodPost = fakePosts.filter(el => el['tag_ids'] === tagId);
  res.send(goodPost);
})
// Get a list of comments
// router.get('/', (req, res) => {
//   const postId = Number(req.params.postId);
//   const postComments = fakeComments.filter( comment => comment.post_id === postId)
//   res.json(postComments);
// });

module.exports = router;
