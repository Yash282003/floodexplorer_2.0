import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import dataContext from './datacontext';
import './Navbar.css';
import { IconContext } from 'react-icons';
import TimeDate from './Datepicker'
import Dropdown from './Dropdown';
function Navbar() {

  const { isSideBarOpen, setIsSideBarOpen } = useContext(dataContext)
  const { countryData, setCountryData } = useContext(dataContext)
  const { floodData, setFloodData } = useContext(dataContext);
  const [country, setCountry] = useState(null)
  const [value, onChange] = useState(new Date());
  const [value1, onChange1] = useState(new Date());

  const showSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);

  };




  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </div>
        <nav className={isSideBarOpen ? 'nav-menu active ' : 'nav-menu '}>

          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              {/* <div className='menu-bars'>
                <a href='/'> <AiIcons.AiOutlineClose onClick={showSidebar} /></a>
              </div> */}
              <button >Query</button>
              <button>Data</button>
              <button>Links</button>
            </li>
            <div className='search_data'>
              <span>Search Flood Data</span>
            </div><hr />

            <div>
              <TimeDate />
            </div>



            <Dropdown />


            <div className='search satellite'>
              <span>Optical Satellite Sensor:</span><br /></div>
            <div className='Satellites-info'>
              <input type="checkbox" id="planet" name="planet" value="Planet" />
              Planet <br />
              <input type="checkbox" id="digital" name="digital" value="Digital Globe" />
              Digital Globe <br />
              <input type="checkbox" id="sentinel2" name="sentinal2" value="Sentinel-II" />
              Sentinel-II  <br />
            </div>

            <div className='search satellite'>
              <span>SAR Satellite Sensor:</span><br /></div>
            <div className='Satellites-info'>
              <input type="checkbox" id="alos2" name="also2" value="Alos-II" />
              ALOS-II <br />
              <input type="checkbox" id="sentinel1" name="sentinel1" value="Sentinel-I" />
              Sentinel-I <br />

            </div>

            <div id="submitbutton">
              <button type="submit">Submit</button>
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

            {floodData?.length > 1 ?
              floodData.map((e, index) => {
                return (
                  <>
                    <ul>
                      <li key={e.id}>
                        <div>
                          {e.CountryName}
                        </div>
                        <div>
                          {e.floodname}
                        </div>
                      </li>
                    </ul>
                  </>
                )
              }) : <div style={{ color: "white" }}>Loading ...</div>
            }
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;