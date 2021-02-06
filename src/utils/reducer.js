import {UPDATE_POST} from './enums'

const updatePost = (id, state) => {
    console.log(id)
    return state;
}

export default(state, action) => {
    switch(action.type){
        case UPDATE_POST:
            return updatePost(action.payload, state)
        default: 
            state;
    }
}