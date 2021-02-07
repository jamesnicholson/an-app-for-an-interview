import {FETCH_POSTS, UPDATE_POST, SELECTED_POST} from './enums'

const updatePost = (id, state) => {
    console.log(id)
    return state;
}
const selectedPost = (payload, state) => {
    return {
        ...state,
        selected_post_id: payload.selected_post_id
    };
}
const fetchPosts = (payload, state) => {
    return {
        ...state,
        ...payload
    }
}

export default (state, action) => {
    switch(action.type){
        case FETCH_POSTS :
            return fetchPosts(action.payload, state)
        case UPDATE_POST :
            return updatePost(action.payload, state)
        case SELECTED_POST :
            return selectedPost(action.payload, state)
        default : 
           return state;
    }
}