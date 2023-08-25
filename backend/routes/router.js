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
//post
router.get('/post/list',verifyToken,getPost)
router.get('/post/list/:id',verifyToken,getPost)
router.post('/post/create',verifyToken,createPost)
router.put('/post/:id',verifyToken,updatePost)
router.delete('/post/:id',verifyToken,deletePost)
//Comment

router.get('/comment/list',verifyToken,getComment)
router.get('/comment/list/:id',verifyToken,getComment)
router.post('/comment/create',verifyToken,createComment)
router.put('/comment/:id',verifyToken,updateComment)
router.delete('/comment/:id',verifyToken,deleteComment)

module.exports = router