// server/routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// @route   GET /api/posts
// @desc    Get all posts, sorted by newest first
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/posts
// @desc    Create a new post
router.post('/', async (req, res) => {
  try {
    const newPost = new Post({
      author: req.body.author,
      content: req.body.content,
    });
    const post = await newPost.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;