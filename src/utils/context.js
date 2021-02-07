
import { createContext } from "react";

const GlobalContext = createContext({
    data:{
        posts:[],
    },
    loading: true,
    currentPostId: 0,
    updatePost: (id) => {}
});
export default GlobalContext;