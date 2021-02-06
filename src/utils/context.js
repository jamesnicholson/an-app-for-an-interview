
import { createContext } from "react";

const GlobalContext = createContext({
    posts:[],
    updatePost: (id) => {}
});
export default GlobalContext;