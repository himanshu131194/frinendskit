import postSections from '../models/sections.model'
import CONFIG from '../../config';


// import postSections from '../models/sections.model'
// import User from '../models/users.model'
// import Posts from '../models/posts.model'
// import Emojis from '../models/emojis'
// import likedPosts from '../models/liked_posts.model'
// import Comments from '../models/comments.model'
import uuid from 'uuid/v4';
import AWS from 'aws-sdk'
import rp from 'request-promise'

export default (router)=>{

    const s3 = new AWS.S3({
        accessKeyId: CONFIG.S3.ACCESS,
        secretAccessKey: CONFIG.S3.SECRET,
        region: 'ap-south-1'
    });

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

    router.post('/upload-s3', async (req, res)=>{
            try{
                let result = null;
                if(!req.body.url && req.body.data64){
                        result = Buffer.from(req.body.data64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
                    }else{
                        result = await rp({url: req.body.url, encoding: null});
                    }
                const slugId = uuid();
                const base64Data = result;
                const type = req.body.mime;
                const key = `posts/${slugId}.${req.body.ext}`;
                const params = {
                      Bucket: CONFIG.S3.BUCKET,
                      Key: key,
                      Body: base64Data,
                      ContentType: type
                }
                const s3Result = await s3.putObject(params).promise(); 
                res.status(200).send({
                    url : `https://${CONFIG.S3.BUCKET}.s3.ap-south-1.amazonaws.com/${key}`,
                    key: key,
                    slug: slugId
                });
            }catch(e){
                res.status(400).send({
                    error: 'Please try to upload again'
                })
            }
    })

    return router;
}