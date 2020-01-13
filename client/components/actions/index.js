import {LOAD_POSTS, AUTH_USERS} from './types'
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












