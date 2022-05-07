const express = require('express')

const router = express.Router()

//@route get api/posts
//@ returns all posts
//@ access value public
router.get('/', (req, res) => {
  res.send('posts route')
})

module.exports = router
