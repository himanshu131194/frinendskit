import postSections from '../models/sections.model'
import Posts from '../models/posts.model'
import CONFIG from '../../config';

export default (router)=>{

      router.post('/list-posts', async (req, res)=>{
        const postMatchObject = {};
        try{
           const skip = parseInt(req.body.offset) || 0,
                 limit = parseInt(req.body.limit) || 2;
            
           const posts = await Posts.aggregate([
               { $match : postMatchObject },
               {
                     $lookup: {
                          from : 'sections',
                          localField: 'section',
                     foreignField: '_id',
                     as: 'section_details'
                  }
               }
           ]).sort({created: -1})
             .skip(skip)
             .limit(limit);

           res.status(200).send({
               data : posts  
           })
        }catch(e){
           res.status(400).send({
               error : CONFIG.ERRORS[100]
           })
        } 
    });

      return router;
}