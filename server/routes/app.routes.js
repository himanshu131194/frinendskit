import appController from '../controllers/app.controller'

export default (router)=>{

    router.get('/list-posts' , appController.listPosts);
       
    return router;
}