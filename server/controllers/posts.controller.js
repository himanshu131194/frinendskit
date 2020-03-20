import postSections from '../models/sections.model'
import Posts from '../models/posts.model'
import likedPosts from '../models/liked_posts.model'
import Comments from '../models/comments.model'
import likedComments from '../models/liked_comments.model'
import Reportposts from '../models/report_posts.model'
import mongoose from 'mongoose'
import CONFIG from '../../config';
import uuid from 'uuid/v4';
import AWS from 'aws-sdk'
import rp from 'request-promise'

const s3 = new AWS.S3({
    accessKeyId: CONFIG.S3.ACCESS,
    secretAccessKey: CONFIG.S3.SECRET,
    region: 'ap-south-1'
});

export default {

    listSections : async (req, res)=>{
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
    },

    uploadImagetoS3 : async (req, res)=>{
        console.log('s3-upload');
         try{
             let result = null, base64 = null, mime = null, ext = null;
             let listOfSupportedExtns = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
             if(!req.body.url && req.body.data64){
                     result = Buffer.from(req.body.data64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
                     ext = req.body.ext;
             }else{
                     result = await rp({url: req.body.url, encoding: null});
                     let buff = new Buffer(result);
                         ext = (req.body.url).split('.').pop();
                         base64 = `data:image/${ext};base64,`+buff.toString('base64');
                         console.log('ext')
                         console.log(ext)
             }

             ext = listOfSupportedExtns.indexOf(ext)<0 ? 'jpg': ext;
             const slugId = uuid();
             const base64Data = result;
             const type = `image/${ext}`;
             const key = `posts/${slugId}.${ext}`;
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
                 slug: slugId,
                 base64, 
                 mime: type,
                 ext
             });

             return res.status(200).send({
                 url : `https://${CONFIG.S3.BUCKET}.s3.ap-south-1.amazonaws.com/${key}`,
                 key: key,
                 slug: slugId,
                 base64, 
                 mime: type,
                 ext
             });
         }catch(e){
             console.log(e);
             return res.status(400).send({
                 error: e
             })
         }
    },

    uploadPost : async (req, res)=>{
        const newPost = {
                user_id: req.user ? req.user._id : '5e12110169481b125b9d0cb6',
                url: (req.body.uploadedURL).trim(),
                slugId: (req.body.postSlug).trim(),
                title: (req.body.postTitle).trim(),
                section: (req.body.postSections),
                mime_type: (req.body.postMime).trim(),
                ext: (req.body.postExt).trim(),
        };

        if((req.body.postMime).indexOf('video')>=0){
            newPost['content_type'] = 2;
        }

        const posts = new Posts(newPost);
        try{
            const result = await posts.save();
            console.log(result);
            return res.status(200).send({
                data : CONFIG.MESSAGES[100]   
            })
        }catch(e){
            console.log(e);
            return res.status(400).send({
                error : CONFIG.ERRORS[100]   
            })
        }
    },

    listOfUsersPosts: async (req, res)=>{
        //GET FILTERED POSTIDS 
        const { COMMENTED, LIKED } = CONFIG.USER.POST_TYPES;
        let uploadedPosts = false;
        let postIds = [];
        switch (parseInt(req.body.filters.value)) {
            case LIKED:
                postIds = await likedPosts.find({
                    user_id:  mongoose.Types.ObjectId(req.user._id),
                    is_active: true
                },{
                    _id: 0,
                    post_id: 1,
                })
                break;
            case COMMENTED:
                postIds = await Comments.find({
                    user_id:  mongoose.Types.ObjectId(req.user._id),
                    is_active: true
                },{
                    _id: 0,
                    post_id: 1,  
                })
                break;     
            default:    
                uploadedPosts = true;
                break;
        }
        
        let postMatchObject = null;
        let listOfPostIds = []; 
        if(!uploadedPosts){
            for(const postId of postIds) {
                listOfPostIds.push(postId.post_id);
            }
            postMatchObject = { is_active: true,  _id: {$in: listOfPostIds}  };
        }else{
            postMatchObject = { is_active: true, user_id:  mongoose.Types.ObjectId(req.user._id)};
        }
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
                        },
                        { $unwind: "$section_details" },
                        {
                          $lookup: {
                            from : 'liked_posts',
                            let : { liked_post : '$_id'},
                            pipeline: [
                                {
                                    $match:{
                                         $expr: { $eq: [ "$post_id",  "$$liked_post" ] },
                                         user_id: mongoose.Types.ObjectId(req.user._id),
                                         is_active: true       
                                    }
                                }
                            ],
                            as : 'liked'
                          }
                        },
                        { $project: 
                            { 
                                like_count: 1,
                                comment_count: 1,
                                share_count: 1,
                                download_count: 1,
                                user_id: 1,
                                url: 1,
                                title: 1,
                                section: 1,
                                mime_type: 1,
                                ext: 1,
                                created: 1,
                                liked: { $size:  "$liked" },
                                'section_details._id': 1, 
                                'section_details.value': 1, 
                                'section_details.url': 1, 
                            }
                        },
                        { $sort: { created : -1 } }
                  ])
                  .skip(skip)
                  .limit(limit);


            res.status(200).send({
                data : posts  
            })
        }catch(e){
            console.log(e);
            res.status(400).send({
                error : CONFIG.ERRORS[100]
            })
        } 


    },

    listPosts : async (req, res)=>{
        // console.log(JSON.parse(req.body.filters));
        const postMatchObject = { is_active: true };
        // if(req.body.filters.account==1){
        //       postMatchObject.userId = mongoose.Types.ObjectId(req.user._id)
        // }

        // if(req.body.filters.value){
        //     postMatchObject.userId = mongoose.Types.ObjectId(req.user._id)
        // }
        

        try{
            const skip = parseInt(req.body.offset) || 0,
                  limit = parseInt(req.body.limit) || 2;

            console.log(req.body);
            
            const posts = await Posts.aggregate([
                        { $match : postMatchObject },
                        {
                          $lookup: {
                            from : 'sections',
                            localField: 'section',
                            foreignField: '_id',
                            as: 'section_details'
                          }
                        },
                        { $unwind: "$section_details" },
                        {
                          $lookup: {
                            from : 'liked_posts',
                            let : { liked_post : '$_id'},
                            pipeline: [
                                {
                                    $match:{
                                         $expr: { $eq: [ "$post_id",  "$$liked_post" ] },
                                         user_id: mongoose.Types.ObjectId(req.user._id),
                                         is_active: true       
                                    }
                                }
                            ],
                            as : 'liked'
                          }
                        },
                        { $project: 
                            { 
                                like_count: 1,
                                comment_count: 1,
                                share_count: 1,
                                download_count: 1,
                                user_id: 1,
                                url: 1,
                                title: 1,
                                section: 1,
                                mime_type: 1,
                                ext: 1,
                                created: 1,
                                liked: { $size:  "$liked" },
                                'section_details._id': 1, 
                                'section_details.value': 1, 
                                'section_details.url': 1, 
                            }
                        },
                        { $sort: { created : -1 } }
                  ])
                  .skip(skip)
                  .limit(limit);


            res.status(200).send({
                data : posts  
            })
        }catch(e){
            console.log(e);
            res.status(400).send({
                error : CONFIG.ERRORS[100]
            })
        } 
    },

    postLiked: async (req, res)=>{
        console.log(req.user);
        const postId = (req.body.post_id).trim();
        const counter = req.body.flag===true ? 1: -1;

        console.log(counter);

        try{
           let isActive = counter>0 ? true: false;
           await likedPosts.findOneAndUpdate({
               user_id: mongoose.Types.ObjectId(req.user._id),
               post_id: mongoose.Types.ObjectId(postId)                    
           }, 
           { is_active: isActive },
           { upsert: true });

           const updatePosts = await Posts.findOneAndUpdate(
                    { _id: postId },
                    {
                        $inc : { like_count: counter }
                    },
                    {new: true}
           );
           res.status(200).send({
               data : updatePosts  
           })
        }catch(e){
           res.status(400).send({
               error : e   
           })
        }
    },

    queryTest : async (req, res)=>{
        // const postMatchObject = {};
        // if(req.query && req.query['post_id']!=='undefined'){
        //     let _id = (req.query['post_id']).trim();
        //     postMatchObject['_id'] = mongoose.Types.ObjectId(_id)
        // }
        try{
            const posts  = await Posts.updateMany({}, {liked: false, like_count: 0, comment_count: 0, share_count: 0});
            res.status(200).send({
                data : posts  
            })
        }catch(e){
            res.status(400).send({
                error : e
            })
        } 
    },

    postComments: async (req, res)=>{
        const postId = (req.body.post_id).trim(),
              commentTxt = (req.body.text).trim();
        const comments = new Comments({
              user_id: req.user._id,
              post_id: postId,
              text: commentTxt
         });
        try{
           const result = await comments.save();
           const countComments = await Posts.findOneAndUpdate(
                    { _id: postId },
                    {
                        $inc : { comment_count: 1 }
                    },
                    {new: true}
           );
           res.status(200).send({
               data : countComments  
           })
        }catch(e){
           res.status(400).send({
               error : e   
           })
        }
    },

    listComments: async (req, res)=>{
        const postId = req.body.post_id;
        const userId = mongoose.Types.ObjectId(req.user._id);
        try{
           const comments = await Comments.aggregate([
                  { $match : { post_id : mongoose.Types.ObjectId(postId), is_active : true  } },
                  {  
                    $lookup: {
                          from : 'users',
                          localField: 'user_id',
                          foreignField: '_id',
                          as: 'user_details'
                    }
                  },
                  { $unwind: "$user_details" },
                  {
                    $lookup: {
                        from: 'liked_comments',
                        let : { liked_comment: '$_id' },
                        pipeline: [
                            { $match:
                                { 
                                    $expr: { $eq: [ "$comment_id",  "$$liked_comment" ] },
                                    post_id: mongoose.Types.ObjectId(postId) ,
                                    user_id: mongoose.Types.ObjectId(req.user._id),
                                    is_active: true,
                                }
                            }
                        ],
                        as : 'liked'
                    }
                  },
                  { $project: 
                    { 
                        points: 1,
                        created: 1,
                        liked: {$size: "$liked"},
                        user_id: 1, post_id: 1, text: 1,
                        'user_details._id': 1, 
                        'user_details.name': 1, 
                        'user_details.profile_pic': 1, 
                        'user_details._id': 1
                    }
                  },
                  {
                     $set : { current_user: { $eq: [ "$user_id", userId ] } }
                  },
                  { $sort: { created : -1 } }
           ]);
           console.log(comments);
           res.status(200).send({
               data : comments  
           })
        }catch(e){
           res.status(400).send({
               error : e
           })
        } 
    },

    upvoteComments: async (req, res)=>{
        const commentId = req.body.comment_id;
        const postId = req.body.post_id;
        const counter = req.body.flag===true ? 1: -1;
        try{
            let isActive = counter>0 ? true: false;
            await likedComments.findOneAndUpdate({
                user_id: mongoose.Types.ObjectId(req.user._id),
                comment_id: mongoose.Types.ObjectId(commentId), 
                post_id: mongoose.Types.ObjectId(postId)                    
            }, 
            { is_active: isActive },
            { upsert: true })

            const upvotedComment = await Comments.findOneAndUpdate(
                { _id: mongoose.Types.ObjectId(commentId) },
                {
                    $inc : { points: counter }
                },
                {new: true}
            );

            res.status(200).send({
                data : upvotedComment  
            })
        }catch(e){
           res.status(400).send({
               error : e
           })
        } 
    },

    deleteComment : async (req, res)=>{
          const {comment_id, post_id} = req.body;
          try {
            const result = await Comments.findOneAndUpdate({
                _id: mongoose.Types.ObjectId(comment_id), 
                user_id : mongoose.Types.ObjectId(req.user._id),
                post_id: mongoose.Types.ObjectId(post_id)                    
            }, 
            { is_active: false });

            await likedComments.findOneAndUpdate({
                user_id: mongoose.Types.ObjectId(req.user._id),
                comment_id: mongoose.Types.ObjectId(comment_id), 
                post_id: mongoose.Types.ObjectId(post_id)                    
            }, 
            { is_active: false })

            res.status(200).send({
                data : result  
            })
          } catch(e) {
            res.status(400).send({
                error : e
            })
          }
    },




    downloadContent : async (req, res)=>{
        let {content_url, post_id} =  req.query;
        try{
            let content = await rp({
                uri: content_url,
                encoding: null
            });
            const updatePosts = await Posts.findOneAndUpdate(
                { _id: mongoose.Types.ObjectId(post_id) },
                { $inc : { download_count: 1 } },
                { new: true}
            );
            res.status(200).send(content)
         }catch(e){
             console.log(e);
            res.status(400).send({
                error : e   
            })
         }
    },

    reportPost : async (req, res)=>{
        const {post_id, report_reason, report_text} = req.body;
        try {
            console.log(req.body);
            await Posts.findOneAndUpdate({
                _id: mongoose.Types.ObjectId(post_id)
            }, 
            { is_active: false });
            
            const reportPost = new Reportposts({
                text: report_text,
                reason: report_reason,
                user_id: mongoose.Types.ObjectId(req.user._id),
                post_id: mongoose.Types.ObjectId(post_id) 
            });
            const result = await reportPost.save();
            res.status(200).send({
                data : result  
            })
        } catch(e) {
           res.status(400).send({
              error : e
           })
        }
  }


    

}


