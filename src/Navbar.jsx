import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai"
import { BsGlobeEuropeAfrica } from "react-icons/bs"
import { IoMdCloudDownload } from "react-icons/io"
import { AiOutlineBars } from "react-icons/ai"
import { IoLogoTwitter } from "react-icons/io"

const Navbar=()=>{
    return(<>
         <nav className='flex-div'>
            <div className='nav-left nav-align'>
                <div className='brand'>Flood Explorer</div>
            </div>
            <div className='nav-middle flex-div nav-align'>
                <a href='' ><AiFillQuestionCircle />
                    <span >About</span></a>

                <a href=''><BsGlobeEuropeAfrica />
                    <span >Tools</span></a>

                <a href=''><IoMdCloudDownload />
                    <span >Download</span></a>

                <a href=''><AiOutlineBars />
                    <span >Query Data</span></a>
            </div>
            <div className='nav-right flex-div nav-align'>
                <a href='' className='twitter'><IoLogoTwitter />
                    <span className='nav-icons-name'>Twitter</span></a>
            </div>
        </nav>
        

    </>)
}

export default Navbar