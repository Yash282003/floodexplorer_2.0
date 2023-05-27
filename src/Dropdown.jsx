import {useState, useEffect, useContext } from 'react';
import { IoCaretDownSharp } from 'react-icons/io5';
import dataContext from './datacontext';

const Dropdown = () => {
    const [openPanel, setopenPanel] = useState(false)
    const [select, setSelect]=useState('Countries')
    const {countryData,setCountryData}=useContext(dataContext)

    const Option = ['India','Bangladesh','Nepal','Indonesia','Japan ','Cambodia','Phillipines','Malaysia','Myanmar','Srilanka','Thailand','Vietnam','Laos',]
    useEffect( ()=>{
        const handleFetch=async ()=>{
    
            const data = await fetch(`http://localhost:7000/api/floods/testing11?CountryName=${select}`)
            const resp =await data.json()
            console.log(resp)
            setCountryData(resp)
        }
        handleFetch()
        },[select])
    return (
        <>
            <div className="dropdown">

                <div className="dropdown-btn" onClick={(e) => setopenPanel(!openPanel)}>{select}
                    <span ><IoCaretDownSharp style={{color:'black'}} /></span>
                </div>
                {openPanel && (
                    <div className="dropdown-content">
                        {Option.map((Option) => {
                            return (
                                <div onClick={
                                    (e) => {
                                        setSelect(Option);
                                        setopenPanel(false );
                                    }
                                } className="dropdown-item">
                                    {Option}
                                </div>)
                        })}

                    </div>)}
            </div>
        </>
    )
}
export default Dropdown