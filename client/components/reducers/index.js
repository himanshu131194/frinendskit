import {combineReducers} from 'redux'
import {listOfPostsReducer, authUsersReducer, listOfSectionsReducer, listOfTagsReducer, selectedPostReducer, listOfCommentsReducer} from './reducers'

export default combineReducers({
	  listOfPosts :  listOfPostsReducer,
	  listOfSections : listOfSectionsReducer,
	  listOfTags : listOfTagsReducer,
	  user : authUsersReducer,
	  selectedPost : selectedPostReducer,
	  listOfComments: listOfCommentsReducer
})