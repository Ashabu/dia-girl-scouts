import React from "react";
import { Route } from 'react-router';
import {Routes} from 'react-router-dom';
import AboutUsPage from "../Pages/AboutusPage/AboutUsPage";
import HomePage from '../Pages/HomePage/HomePage';





const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}   />
            <Route path='/aboutUs' element={<AboutUsPage/>} />
            {/* <Route path='/services' component={ServicesPage} exact/>
            <Route path='/services/:id' component = {ServicesPage} />
            <Route path='/contact' component={ContactPage} /> */}

        </Routes>
    )

}

export default Routing;