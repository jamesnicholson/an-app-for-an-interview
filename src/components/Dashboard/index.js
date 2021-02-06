import React, { useState, useEffect, useContext } from 'react'
import GlobalContext from '../../utils/context'
const Dashboard = () => {
    const { data } = useContext(GlobalContext);
    console.log(data);
    return  <div>
                <h1>hello</h1>
            </div>
};
export default Dashboard;