import React, { useState } from 'react'
import dataContext from './datacontext'
import Date from "./Datepicker"
const ContextProvider = (props) => {
    const [isSideBarOpen,setIsSideBarOpen]=useState(false)
    const [countryData,setCountryData]= useState(null)
    const [floodData,setFloodData]=useState([])
    const [queryParams,setQueryParams]=useState([])
      return (
        <div>
          <dataContext.Provider value={{queryParams,setQueryParams,isSideBarOpen,setIsSideBarOpen,countryData,setCountryData,floodData,setFloodData}} >
            {props.children}
          </dataContext.Provider>
        </div>
      )
    }
    
    export default ContextProvider
    
