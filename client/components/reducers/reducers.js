import {LOAD_POSTS, AUTH_USERS, LIST_SECTIONS} from '../actions/types'

export const listOfPostsReducer = (state=null, action)=>{
	switch(action.type){
		  case LOAD_POSTS:
			return action.payload;
		  default: 
		   return state;
	}
} 

export const authUsersReducer = (state=null, action)=>{
	switch(action.type){
		  case AUTH_USERS:
			return action.payload;
		  default: 
		   return state;
	}
} 


export const listOfSectionsReducer = (state=[], action)=>{
	switch(action.type){
		  case LIST_SECTIONS:
			return action.payload;
		  default: 
		   return state;
	}
} 




