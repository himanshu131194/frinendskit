import {LOAD_POSTS, AUTH_USERS, LIST_SECTIONS, LIST_TAGS, CURRENT_POST, COMMENTS_LIST, COMMENT_UPVOTE} from './types'
import CONFIG from '../../../config'
import axios from 'axios'


export const listPosts = ({limit, offset, section, tag, filters}, cb)=>{
    return async (dispatch)=>{
           console.log(filters);
           let err = null, result = [];
           try{
               let {data} = await axios.post(`${CONFIG.API_URL}/api/list-posts`, {limit, offset, tag, section, filters});
                    result = data.data
           }catch(e){
               err = e.response.data.error;
           }
           dispatch({
               type: LOAD_POSTS,
               payload: result
           })
           cb(null, result);
    }
}

export const listUserPosts = ({limit, offset, filters}, cb)=>{
    return async (dispatch)=>{
           console.log(filters);
           let err = null, result = [];
           try{
               let {data} = await axios.post(`${CONFIG.API_URL}/api/list-usersposts`, {limit, offset, filters});
                    result = data.data
           }catch(e){
               err = e.response.data.error;
           }
           dispatch({
               type: LOAD_POSTS,
               payload: result
           })
           cb(null, result);
    }
}



export const authUsers = ()=>{
    return async (dispatch)=>{
           let err = null, result = null;
           try{
               let {data} = await axios.get(`${CONFIG.API_URL}/api/authenticate`);
                    result = data.user;
           }catch(e){
               err = e.response.data.error;
           }
           result = {
                auth : true,
                data : {
                    gender: 1,
                    badgets: 1,
                    account_type: 1,
                    favourite_sections: [],
                    _id: "5e3551da2dafec60becda62c",
                    name: "himanshu131194@gmail.com",
                    email: "himanshu savita",
                    account_id: "113944163418601847954",
                    created: "2020-02-01T10:24:26.981Z",
                    __v: 0
                }    

                // auth : result ? true : false,
                // data : result 
           }
           dispatch({
               type: AUTH_USERS,
               payload: result
           })
    }
}

export const uploadS3 = ({url, mime, ext, data64}, cb)=>{
    return async ()=>{
             let err = null, result = null;
                 try{
                     let {data} = await axios.post(`${CONFIG.API_URL}/api/upload-s3`, {url, mime, ext, data64});
                     cb(null, data) 
                 }catch(e){
                     err = e;
                     cb(err, null)
                 }
    }
}

export const uploadAll = ({uploadedURL, postSlug, postTitle , postSections, postMime, postExt}, cb)=>{
    return async ()=>{
                let err = null, result = null;
                console.log('uploadAll');
                try{
                    console.log({uploadedURL, postSlug, postTitle, postSections, postMime, postExt});
                    let {data} = await axios.post(`${CONFIG.API_URL}/api/upload-posts`,
                                                    {uploadedURL, postSlug, postTitle, postSections, postMime, postExt});
                    cb(null, data) 
                }catch(err){
                    cb(err, null)
                }
            
    }
}

export const listSections = ()=>{
    return async (dispatch)=>{
           let err = null, result = null;
           try{
               let {data} = await axios.get(`${CONFIG.API_URL}/api/list-sections`);
                    result = data.data;
           }catch(e){
               err = e.response.data.error;
           }
           dispatch({
               type: LIST_SECTIONS,
               payload: result
           })
    }
}

export const listTags = ()=>{
    return async (dispatch)=>{
           let err = null, result = null;
           try{
               let {data} = await axios.get(`${CONFIG.API_URL}/api/list-tags`);
                    result = data.data;
           }catch(e){
               err = e.response.data.error;
           }
           dispatch({
               type: LIST_TAGS,
               payload: result
           })
    }
}

export const postLiked = (post_id, flag, cb)=>{
    return async ()=>{
            //  let err = null, result = null;
                 try{
                     let {data} = await axios.post(`${CONFIG.API_URL}/api/post-liked`, {post_id, flag});
                     let result = data.data;
                     cb(null, result) 
                 }catch(e){
                    //  err = e.response.data.error;
                     cb(e, null)
                 }
    }
}

export const postComments = (post_id, text, cb)=>{
    return async ()=>{
             let err = null, result = null;
                 try{
                     let {data} = await axios.post(`${CONFIG.API_URL}/api/post-comments`, {post_id, text});
                     cb(null, data) 
                 }catch(e){
                     err = e.response.data.error;
                     cb(err, null)
                 }
    }
}

export const listComments = (post_id)=>{
    return async (dispatch)=>{
             let err = null, result = null;
             console.log(post_id);
                 try{
                     let {data} = await axios.post(`${CONFIG.API_URL}/api/list-comments`, {post_id});
                     result = data['data'];
                 }catch(e){
                     err = e;
                 }
                 dispatch({
                    type: COMMENTS_LIST,
                    payload: result
                })
    }
}


export const upvoteComments = (comment_id, post_id, flag, cb)=>{
    return async ()=>{
             let result = null;
                 try{
                     let {data} = await axios.post(`${CONFIG.API_URL}/api/upvote-comments`, {comment_id, post_id, flag});
                     result = data['data'];
                     cb(null, result)
                 }catch(e){
                     cb(e, null)
                 }
    }
}

export const setPostId = (post_id)=>{
    console.log("post_id");
    return (dispatch)=>{
            dispatch({
                type: CURRENT_POST,
                payload: post_id
            })
    }
}

export const deleteComment = (post_id, comment_id, cb)=>{
    return async ()=>{
        let result = null;
            try{
                let {data} = await axios.post(`${CONFIG.API_URL}/api/delete-comments`, {comment_id, post_id});
                result = data['data'];
                cb(null, result)
            }catch(e){
                cb(e, null)
            }
    }
}

export const downloadContent = (content_url, post_id, cb)=>{
    return async ()=>{
            try{
                let {data} = await axios.get(`${CONFIG.API_URL}/api/download-content?content_url=${content_url}&post_id=${post_id}`, {
                    responseType: 'arraybuffer'	
                });
                cb(null, data)
            }catch(e){
                cb(e, null)
            }
    }
}

export const reportPost = ({post_id, report_reason, report_text}, cb)=>{
    return async ()=>{
        let result = null;
            try{
                let {data} = await axios.post(`${CONFIG.API_URL}/api/report-post`, {post_id, report_reason, report_text});
                cb(null, data)
            }catch(e){
                cb(e, null)
            }
    }
}




