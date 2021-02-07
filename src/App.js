import React from 'react'
import {GlobalContextProvider} from './utils/context'
import Dashboard from './components/Dashboard/'
export default function App() {
  return (
    <GlobalContextProvider>
        <Dashboard />
    </GlobalContextProvider>
  );
}
