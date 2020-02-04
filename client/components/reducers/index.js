import {combineReducers} from 'redux'
import {listOfPostsReducer, authUsersReducer, listOfSectionsReducer, selectedPostReducer} from './reducers'

export default combineReducers({
	  listOfPosts :  listOfPostsReducer,
	  listOfSections : listOfSectionsReducer,
	  user : authUsersReducer,
	  selectedPost : selectedPostReducer
})