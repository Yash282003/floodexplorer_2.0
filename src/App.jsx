import React from 'react'
import Navbar from "./Navbar"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "./Sidebar"
import Basicmap from './Map'
const App = () => {
    return (
    <>
        <Navbar />
        <Sidebar />
        <Basicmap />
    </>
    )



}

export default App