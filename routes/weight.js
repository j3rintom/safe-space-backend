const express=  require("express")
const router  = express.Router()
const {updatePost,getPosts}  = require("../controllers/weight.js")

router.get('/',getPosts)
router.post('/',updatePost)


module.exports = router;