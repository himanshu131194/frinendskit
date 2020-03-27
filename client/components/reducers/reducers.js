import {LOAD_POSTS, AUTH_USERS, LIST_SECTIONS, LIST_TAGS, CURRENT_POST, COMMENTS_LIST} from '../actions/types'

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

export const listOfTagsReducer = (state=[], action)=>{
	switch(action.type){
		  case LIST_TAGS:
			return action.payload;
		  default: 
		   return state;
	}
} 

export const selectedPostReducer = (state=null, action)=>{
	switch(action.type){
		  case CURRENT_POST:
			return action.payload;
		  default: 
		   return state;
	}
} 


export const listOfCommentsReducer = (state=null, action)=>{
	switch(action.type){
		  case COMMENTS_LIST:
			return action.payload;
		  default: 
		   return state;
	}
} 
