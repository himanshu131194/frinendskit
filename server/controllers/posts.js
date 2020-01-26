import postSections from '../models/sections.model'
import Posts from '../models/posts.model'

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
           console.log('s3-upload');
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

                console.log({
                    url : `https://${CONFIG.S3.BUCKET}.s3.ap-south-1.amazonaws.com/${key}`,
                    key: key,
                    slug: slugId
                });

                return res.status(200).send({
                    url : `https://${CONFIG.S3.BUCKET}.s3.ap-south-1.amazonaws.com/${key}`,
                    key: key,
                    slug: slugId
                });
            }catch(e){
                console.log(e);
                return res.status(400).send({
                    error: 'Please try to upload again'
                })
            }
    })


    router.post('/upload-posts', async (req, res)=>{
            console.log(req.body);
            // { uploadedURL: '6508108c-bfef-4da7-9205-a5c5d03742fb',
            // postSlug:
            //  'https://feel-funny.s3.ap-south-1.amazonaws.com/posts/6508108c-bfef-4da7-9205-a5c5d03742fb.png',
            // postTitle: 'this ',
            // postMime: 'image/png',
            // postExt: 'png' }
            const newPost = {
                    user_id: req.user._id,
                    url: (req.body.uploadedURL).trim(),
                    slugId: (req.body.postSlug).trim(),
                    title: (req.body.postTitle).trim(),
                    // tags: req.body.postTags,
                    section: (req.body.postSections),
                    mime_type: (req.body.postMime).trim(),
                    ext: (req.body.postExt).trim(),
                    // is_nsfw: req.body.postNSFW
            };

            if((req.body.postMime).indexOf('video')>=0){
                newPost['content_type'] = 2;
            }

            console.log(newPost);
            const posts = new Posts(newPost);
            try{
            const result = await posts.save();
            console.log(result);
            res.status(200).send({
                data : CONFIG.MESSAGES[100]   
            })
            }catch(e){
            res.status(400).send({
                error : CONFIG.ERRORS[100]   
            })
            }
        }
    )

    return router;
}