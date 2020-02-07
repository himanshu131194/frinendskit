import postsController from '../controllers/posts.controller'
import usersController from '../controllers/users.controller'

export default (router)=>{
    
    router.get('/list-sections', postsController.listSections);
    
    router.get('/list-posts', postsController.listPosts);
    
    router.get('/query-test', postsController.queryTest);
    
    
    // router.get('/list-emojis', postsController.listEmojis);
    
    router.post('/list-comments', postsController.listComments);
    
    // router.post('/user-posts', usersController.authenticate, postsController.userPosts);
    
    // router.get('/check-upload', postsController.checkUpload);
    
    router.post('/upload-s3', postsController.uploadImagetoS3);
    
    router.post('/upload-posts', postsController.uploadPost);
    router.post('/post-liked',  usersController.authenticate,  postsController.postLiked)
    
    router.post('/post-comments', usersController.authenticate, postsController.postComments)
       
    return router;
}