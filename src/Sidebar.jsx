import React, { useState, useContext, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import dataContext from "./datacontext";
import "./Navbar.css";
import { IconContext } from "react-icons";
import TimeDate from "./Datepicker";
import Dropdown from "./Dropdown";
import Submit from "./Submit";

function Navbar() {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(dataContext);

  const { countryData, setCountryData } = useContext(dataContext);
  const { floodData, setFloodData } = useContext(dataContext);
  const [country, setCountry] = useState(null);
  const [paramArray, setParamArray] = useState([]);
  const [value, onChange] = useState(new Date());
  const [value1, onChange1] = useState(new Date());
  const { queryParams, setQueryParams } = useContext(dataContext);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [req, setReq] = useState([]);

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

  var selectedValues = [];
  var selectJson = [];
  const fetchData = async () => {
    const url = `http://localhost:7000/api/floods/testing9?sDate=2016-04-04&eDate=2017-04-04&CountryName=India&SatelliteName=${
      selectedValues[0] ? selectedValues[0] : ""
    }&SatelliteName1=${
      selectedValues[1] ? selectedValues[1] : ""
    }&SatelliteName2=${
      selectedValues[2] ? selectedValues[2] : ""
    }&SatelliteName3=${
      selectedValues[3] ? selectedValues[3] : ""
    }&SatelliteName4=${selectedValues[4] ? selectedValues[4] : ""}`;
    console.log(url);
    const data = await fetch(url);
    console.log("object");
    const rep = await data.json();
    console.log(rep);
    setFloodData(rep);
  };
  const showSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  const arr = [];
  // const handleParams=(e)=>{
  //    arr.push(e.target.value)
  // }

  useEffect(() => {
    console.log(selectJson);
  }, [selectJson]);

  // Function to handle click events
  function handleGeoJSON(event) {
    var clickedElement = event.target;
    var elementValue = clickedElement.name;
    console.log(elementValue);
    if (clickedElement.checked) {
      // Append the value to the global array if selected
      selectJson.push(elementValue);
    } else {
      // Remove the value from the global array if unselected
      var index = selectJson.indexOf(elementValue);
      if (index !== -1) {
        selectJson.splice(index, 1);
      }
    }

    // Do something else with the value if needed
  }
  useEffect(() => {
    console.log("whiat");
    console.log(selectJson);
  }, [selectJson]);
  function handleParams(event) {
    var clickedElement = event.target;
    var elementValue = clickedElement.value;

    if (clickedElement.checked) {
      // Append the value to the global array if selected
      selectedValues.push(elementValue);
    } else {
      // Remove the value from the global array if unselected
      var index = selectedValues.indexOf(elementValue);
      if (index !== -1) {
        selectedValues.splice(index, 1);
      }
    }
  }

  // Do something else with the value if needed
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </div>
        <nav className={isSideBarOpen ? "nav-menu active " : "nav-menu "}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              {/* <div className='menu-bars'>
                <a href='/'> <AiIcons.AiOutlineClose onClick={showSidebar} /></a>
              </div> */}
              <button>Query</button>

              <button>Data</button>

              <button>Links</button>
            </li>

            <div className="search_data">
              <span>Search Flood Data</span>
            </div>
            <hr />

            <div>
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
              {floodData.map((nested) =>
                nested.flooddata.map((element) => {
                  return (
                    <>
                      <input
                        type="checkbox"
                        onClick={(e) => {
                          handleGeoJSON(e);
                        }}
                        name={element.footprint}
                        value={element.field1 ? element.field1 : "what"}
                      />
                      {element.field1} <br />
                    </>
                  );
                })
              )}
            </div>

            <Dropdown />

            <div className="search satellite">
              <span>Optical Satellite Sensor:</span>
              <br />
            </div>
            <div className="Satellites-info">
              <input
                onClick={(e) => handleParams(e)}
                type="checkbox"
                id="planet"
                name="planet"
                value="Planet"
              />
              Planet <br />
              <input
                onClick={(e) => handleParams(e)}
                type="checkbox"
                id="digital"
                name="digital"
                value="Digital-Globe"
              />
              Digital Globe <br />
              <input
                onClick={(e) => handleParams(e)}
                type="checkbox"
                id="sentinel2"
                name="sentinal2"
                value="Sentinel-II"
              />
              Sentinel-II <br />
            </div>

            <div className="search satellite">
              <span>SAR Satellite Sensor:</span>
              <br />
            </div>
            <div className="Satellites-info">
              <input
                onClick={(e) => handleParams(e)}
                type="checkbox"
                id="alos2"
                name="also2"
                value="Alos-II"
              />
              ALOS-II <br />
              <input
                onClick={(e) => handleParams(e)}
                type="checkbox"
                id="sentinel1"
                name="sentinel1"
                value="Sentinel-I"
              />
              Sentinel-I <br />
            </div>

            <div id="submitbutton">
              <button
                type="submit"
                onClick={() => {
                  setQueryParams(selectedValues);
                }}
              >
                Submit
              </button>
            </div>

            {/* {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                 
                    {item.icon}
                    <span>{item.title}</span>
                 
                </li>
              );
            })} */}
            {/* {countryData?.length > 1 ?
              countryData.map((e) => {
                return (
                  <>
                    <div>
                      {e.CountryName}
                    </div>
                    <div>
                      {e.floodname}
                    </div>
                  </>
                )
              }) : <div style={{ color: "white" }}>Loading ...</div>
            } */}

            {floodData?.length > 1 ? (
              floodData.map((e, index) => {
                return (
                  <>
                    <ul>
                      <li key={e.id}>
                        <div>{e.CountryName}</div>
                        <div>{e.floodname}</div>
                      </li>
                    </ul>
                  </>
                );
              })
            ) : (
              <div style={{ color: "white" }}>Loading ...</div>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
