
import { createContext } from "react";

const GlobalContext = createContext({
   data:{
    posts:[],
   },
   loading: true,
    updatePost: (id) => {}
});
export default GlobalContext;