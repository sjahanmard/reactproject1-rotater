import {v4 as uuid} from 'uuid'
const CommentReducer = (state , action) => {
    switch(action.type){
        case 'ADD_COMMENT':
            return [...state, {email : action.comment.email, text : action.comment.text, id:uuid()}]
        default:
            return state
    }
}
export default CommentReducer