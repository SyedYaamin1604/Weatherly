import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'

const Layout = () => {
    return (
        <>
            <div id='div' className='bg-fixed bg-center'>
                <Navbar />
                <Outlet />
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Layout