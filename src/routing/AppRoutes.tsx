//import React from 'react';
import { AnimatePresence } from "framer-motion";
import {Route, Routes, useLocation } from 'react-router-dom';
import AppRouteKeys from './AppRouteKeys';
//import Layout from '../components/Layout';
import Home from '../views/home';
import AboutUs from '../views/aboutus';
import Service from '../views/service';
import Contactus from '../views/contactus';
import GasAndHeating from '../views/Services/gasandheating';
import Plumbing  from '../views/Services/Plumbing';
import Electrics from "../views/Services/Electrics";
import Drain from "../views/Services/Drain";
import Lock from "../views/Services/Lock";
import ContactSupport from "../views/Terms/privacy";
import FAQs from "../views/Terms/faqs";
import Privacy from "../views/Terms/privacy";
import TermsOfUse from "../views/Terms/termsOfUse";
import Careers from "../views/Aboutus/careers";
import OurStory from "../views/Aboutus/ourstory";
import OurTeam from "../views/Aboutus/ourteam";
//import { Switch } from '@mui/material';

const AppRoutes = () => {
    const location = useLocation();
    return (
         <AnimatePresence mode="wait">
         
                <Routes key={location.pathname}
                location={location}>

                <Route path={AppRouteKeys.root}>

                        <Route path={AppRouteKeys.root} element={
                            <Home />
                        }

                        />
                        <Route path={AppRouteKeys.aboutUs} element={<AboutUs />} />
                        <Route path={AppRouteKeys.services} element={<Service />} />
                        <Route path={AppRouteKeys.contact} element={<Contactus />} />
                        <Route path={AppRouteKeys.gasandHeating} element={<GasAndHeating />} />
                        <Route path={AppRouteKeys.plumbing} element={<Plumbing />} />
                        <Route path={AppRouteKeys.electrics} element={<Electrics />} />
                        <Route path={AppRouteKeys.drain} element={<Drain />} />
                        <Route path={AppRouteKeys.lock} element={<Lock />} />

                        <Route path={AppRouteKeys.contactSupport} element={<ContactSupport />} />
                        <Route path={AppRouteKeys.faqs} element={<FAQs />} />
                        <Route path={AppRouteKeys.privacy} element={<Privacy />} />
                        <Route path={AppRouteKeys.termsofuse} element={<TermsOfUse />} />

                        <Route path={AppRouteKeys.careers} element={<Careers />} />
                        <Route path={AppRouteKeys.ourStory} element={<OurStory />} />
                        <Route path={AppRouteKeys.ourTeam} element={<OurTeam />} />

                        </Route>

                
                
                </Routes>
            
           
       </AnimatePresence>
    );
}

export default AppRoutes;