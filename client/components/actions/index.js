import {LOAD_POSTS} from './types'
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












