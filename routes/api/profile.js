const express = require('express')

const router = express.Router()

//@route get api/profile
//@ returns all profile
//@ access value public
router.get('/', (req, res) => {
  res.send('profile route')
})

module.exports = router
