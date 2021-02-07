import React, { useState, useMemo } from 'react'
import GlobalContext from './utils/context'
import { useFetch } from './utils/useFetch'
import Dashboard from './components/Dashboard/'

export default function App() {

  const { data, loading } = useFetch("/api/posts?include_deleted=false|true");
  const [currentPostId, setCurrentPostId] = useState(0);
  const appData = useMemo(() => ({data, loading, currentPostId, setCurrentPostId}));

  return (
    <GlobalContext.Provider value={appData}>
        <Dashboard />
    </GlobalContext.Provider>
  );
}
