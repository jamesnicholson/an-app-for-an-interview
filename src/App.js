import React, { useState, createContext, useReducer, useMemo } from 'react'
import GlobalContext from './utils/context'
//import reducer from './utils/reducer'
import { useFetch } from './utils/useFetch'
import Dashboard from './components/Dashboard/'

export default function App() {

  const { data, loading } = useFetch("/api/posts?include_deleted=false|true");
  const appData = useMemo(() => ({data, loading}));
  //const [state, dispatch] = useReducer(reducer, []);

  return (
    <GlobalContext.Provider value={appData}>
        <Dashboard />
    </GlobalContext.Provider>
  );
}
