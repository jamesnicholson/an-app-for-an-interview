import React, { useState, createContext, useReducer, useMemo } from 'react'
import GlobalContext from './utils/context'
//import reducer from './utils/reducer'
import { useFetch } from './utils/useFetch'
import './App.scss';

export default function App() {

  const { data , loading } = useFetch("/api/posts?include_deleted=false|true");
  const appData = useMemo(() => [data], [loading] );
  //const [state, dispatch] = useReducer(reducer, []);
  console.log(loading, appData);

  return (
    <GlobalContext.Provider value={appData}>
      <div className="App">
        <p>TODO: Posts app</p>
      </div>  
    </GlobalContext.Provider>
  );
}


/*
  We've setup a mock API server that can be interacted with fetch:
  "GET /api/posts?include_deleted=false|true" to fetch the posts
  "PATCH /api/posts/:id" to update the selected post
*/
