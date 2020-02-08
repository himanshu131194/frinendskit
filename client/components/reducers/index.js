import {combineReducers} from 'redux'
import {listOfPostsReducer, authUsersReducer, listOfSectionsReducer, selectedPostReducer, listOfCommentsReducer} from './reducers'

export default combineReducers({
	  listOfPosts :  listOfPostsReducer,
	  listOfSections : listOfSectionsReducer,
	  user : authUsersReducer,
	  selectedPost : selectedPostReducer,
	  listOfComments: listOfCommentsReducer
})