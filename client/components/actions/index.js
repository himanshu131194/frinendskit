import {LOAD_POSTS, AUTH_USERS, LIST_SECTIONS} from './types'
import CONFIG from '../../../config'
import axios from 'axios'


export const listPosts = ()=>{
    return async (dispatch)=>{
           let err = null, result = [];
           try{
               let {data} = await axios.get(`${CONFIG.API_URL}/api/list-posts`);
                    result = data.data
           }catch(e){
               err = e.response.data.error;
           }
           dispatch({
               type: LOAD_POSTS,
               payload: result
           })
    }
}

export const authUsers = ()=>{
    return async (dispatch)=>{
           let err = null, result = null;
           try{
               let {data} = await axios.get(`${CONFIG.API_URL}/api/authenticate`);
                    console.log(data)
                    result = data.user;
                    console.log(result);
           }catch(e){
               err = e.response.data.error;
           }
           result = {
                auth : result ? true : false,
                data : result      
           }
           dispatch({
               type: AUTH_USERS,
               payload: result
           })
    }
}

export const uploadS3 = ({url, mime, ext, data64}, cb)=>{
    return async ()=>{
             //const token = localStorage.getItem(CONFIG.ACCESS_TOKEN);
             let err = null, result = null;
            //  if(token){
                 try{
                     let {data} = await axios.post(`${CONFIG.API_URL}/api/upload-s3`, {url, mime, ext, data64});

                     cb(null, data) 
                 }catch(e){
                     err = e;
                     cb(err, null)
                 }
            //  }else{
            //     err = CONFIG.ERROR[code];
            //     cb(err, null)
            //  }
    }
}

export const uploadAll = ({uploadedURL, postSlug, postTitle , postSections, postMime, postExt}, cb)=>{
    return async ()=>{
                let err = null, result = null;
                console.log('uploadAll');
                try{
                    
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











