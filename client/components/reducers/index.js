import {combineReducers} from 'redux'
import {listOfPostsReducer, authUsersReducer, listOfSectionsReducer} from './reducers'

export default combineReducers({
	  listOfPosts :  listOfPostsReducer,
	  listOfSections : listOfSectionsReducer,
	  user : authUsersReducer
})