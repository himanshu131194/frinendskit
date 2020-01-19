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
                     err = e.response.data.error;
                     cb(err, null)
                 }
            //  }else{
            //     err = CONFIG.ERROR[code];
            //     cb(err, null)
            //  }
    }
}



let sectionsList = [
    {
      "_id": "5cb4c313531214b21d2abbc5",
      "value": "funny",
      "url": "https://geekandsundry.com/wp-content/uploads/2015/03/joker-1-970x545.jpg",
      "created": "2019-04-15T17:44:51.124Z",
      "__v": 0
    },
    {
      "_id": "5cb4cb24531214b21d2abbc6",
      "value": "sport",
      "url": "http://pngimg.com/uploads/football/football_PNG52781.png",
      "created": "2019-04-15T18:19:16.747Z",
      "__v": 0
    },
    {
      "_id": "5cb4cb9c531214b21d2abbc7",
      "value": "superhero",
      "url": "https://banner2.kisspng.com/20171218/739/superman-png-5a37acd6cb6280.1009359915135981668331.jpg",
      "created": "2019-04-15T18:21:16.035Z",
      "__v": 0
    },
    {
      "_id": "5cb4cc38531214b21d2abbc8",
      "value": "politics",
      "url": "https://banner2.kisspng.com/20180423/hjw/kisspng-computer-icons-politics-democracy-political-party-5adde096402277.9935319115244903902627.jpg",
      "created": "2019-04-15T18:23:52.918Z",
      "__v": 0
    },
    {
      "_id": "5cb4ccc4531214b21d2abbc9",
      "value": "music",
      "url": "https://image.shutterstock.com/image-vector/music-notes-musical-design-element-260nw-1047000871.jpg",
      "created": "2019-04-15T18:26:12.603Z",
      "__v": 0
    },
    {
      "_id": "5cb4cdbf531214b21d2abbca",
      "value": "GIF",
      "url": "https://techboomers.com/wp-content/uploads/2018/11/example-2.gif",
      "created": "2019-04-15T18:30:23.077Z",
      "__v": 0
    },
    {
      "_id": "5cb4ce20531214b21d2abbcb",
      "value": "gaming",
      "url": "https://banner2.kisspng.com/20180401/sqe/kisspng-counter-strike-global-offensive-video-game-logo-t-gaming-5ac0d48e277554.7856010115225867661616.jpg",
      "created": "2019-04-15T18:32:00.497Z",
      "__v": 0
    }
  ];

export const listSections = ()=>{
    return async (dispatch)=>{
           let err = null, result = null;
           try{
               //let {data} = await axios.get(`${CONFIG.API_URL}/api/list-sections`);
                    result = sectionsList;
           }catch(e){
               err = e.response.data.error;
           }
           dispatch({
               type: LIST_SECTIONS,
               payload: result
           })
    }
}











