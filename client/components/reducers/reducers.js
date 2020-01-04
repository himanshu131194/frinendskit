import {LOAD_POSTS} from '../actions/types'

export const listOfPostsReducer = (state=null, action)=>{
	switch(action.type){
		  case LOAD_POSTS:
			return action.payload;
		  default: 
		   return state;
	}
} 
