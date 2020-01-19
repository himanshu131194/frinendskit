import postSections from '../models/sections.model'
import CONFIG from '../../config';

export default (router)=>{

    router.get('/list-sections', async (req, res)=>{
        try{
           const sections = await postSections.find({});
           res.status(200).send({
               data : sections  
           })
        }catch(e){
           res.status(400).send({
               error : CONFIG.ERRORS[100]
           })
         }
        }
    );
  
    return router;
}