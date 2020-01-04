import {combineReducers} from 'redux'
import {listOfPostsReducer} from './reducers'

export default combineReducers({
	  listOfPosts :  listOfPostsReducer
})