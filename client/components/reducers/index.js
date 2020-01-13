import {combineReducers} from 'redux'
import {listOfPostsReducer, authUsersReducer} from './reducers'

export default combineReducers({
	  listOfPosts :  listOfPostsReducer,
	  user : authUsersReducer
})