
import { createContext , useReducer, useEffect } from "react";
import reducer from './reducer'

const initialState = {
    posts:[],
    loading: true,
    selected_post_id: 0,
    refresh:false,
}
const GlobalContext = createContext(initialState);

export const GlobalContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      fetch("/api/posts?include_deleted=true")
      .then(x => x.json())
      .then((data)=>{
          dispatch({
            type: "FETCH_POSTS",
              payload: {
                posts: data,
                loading:false,
                refresh:false
              }
          });
        })
    },[state.refresh])
  

  
  
    return (
      <GlobalContext.Provider value={[state, dispatch]}>
        {props.children}
      </GlobalContext.Provider>
    );
  };



export default GlobalContext;