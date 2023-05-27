import React, { useState, useEffect, useContext } from "react";
import DateTimePicker from "react-datetime-picker";
import dataContext from "./datacontext";
import Submit from "./Submit";
const TimeDate = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { floodData, setFloodData } = useContext(dataContext);
  const [value, onChange] = useState();
  const [value1, onChange1] = useState();
  const [req,setReq]=useState([])
  const {queryParams,setQueryParams}=useContext(dataContext)

  const handleStartDateChange = (date) => {
    setStartDate(date.target.value);
  };
 
  const handleEndDateChange = (date) => {
    setEndDate(date.target.value);
  };
  function formatDate(input) {
    //     var datePart = input.match(/\d+/g),
    //     year = datePart[0], // get only two digits
    //     month = datePart[1],
    //     day = datePart[2];
    //  if( day < 10){
    //    return '0'+day + '-' + month + '-' + year;
    //  }else if( month< 10){
    //    return day + '-' + '0'+month + '-' + year;
    //  }else if(){
    //    return '0'+day + '-' +'0'+ month + '-' + year;
    //  }
  }

 let content;
 useEffect(()=>{
console.log(queryParams)
 },[queryParams])
  const fetchData = async () => {
    const url = `http://localhost:7000/api/floods/testing9?sDate=2016-04-04&eDate=2017-04-04&CountryName=India&SatelliteName=${queryParams[0] ? queryParams[0]:''}&SatelliteName1=${queryParams[1] ? queryParams[1]:''}&SatelliteName2=${queryParams[2] ? queryParams[2]:''}&SatelliteName3=${queryParams[3] ? queryParams[3]:''}&SatelliteName4=${queryParams[4] ? queryParams[4]:''}`;
    console.log(url);
    const data = await fetch(url);
    console.log("object");
    const rep = await data.json();
    console.log(rep);
    setFloodData(rep);
  
  };
  return (
    <>
      <div className="search">
        <span>Flood Start Date:</span>
      </div>
      <div className="datepicker">
        {/* <DateTimePicker onChange={onChange} value={value} format="dd-MMM-yy"  /> */}
        <input type="date" onChange={(e) => handleStartDateChange(e)} />
      </div>
      <div className="search">
        <span>Flood End Date:</span>
      </div>
      <button onClick={fetchData}>afgjhcjdjkdnjd</button>
      <div className="datepicker">
        {/* <DateTimePicker onChange={onChange1} value={value1} format="dd-MMM-yy" /> */}
        <input type="date" onChange={handleEndDateChange} />
      </div>
     { floodData.map(nested => nested.flooddata.map(element => {return(
      <>{element.provider} <br/></>
     )}))}
    </>
  );
};

export default TimeDate;
