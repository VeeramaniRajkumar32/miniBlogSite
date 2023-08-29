const router = require('express').Router();
const { verifyToken } = require('../middleware/jwtToken');
const {
    register,
    login,
    users,
} = require('../controllers/user');
const { getPost, createPost, updatePost, deletePost } = require('../controllers/post');
const { getComment, createComment, updateComment, deleteComment } = require('../controllers/comment');
router.route('/').get((ree,res) =>{
    res.send("veera")
});
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/user').get(users)

//use verified path middle ware
router.use(verifyToken)

//post
router.get('/post/list',getPost)
router.get('/post/list/:id',getPost)
router.post('/post/create',createPost)
router.put('/post/:id',updatePost)
router.delete('/post/:id',deletePost)

//Comment
router.get('/comment/list',getComment)
router.get('/comment/list/:id',getComment)
router.post('/comment/create',createComment)
router.put('/comment/:id',updateComment)
router.delete('/comment/:id',deleteComment)

module.exports = router