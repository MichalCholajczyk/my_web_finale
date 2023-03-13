import React from "react";
import 'remixicon/fonts/remixicon.css'

import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Expertise from "../components/Expertise/Expertise";
import Work from "../components/Work/Work";
import Experience from "../components/Experience/Experience.jsx";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";



const Layout = () => {
	return (
		<>
			<Header />
			<Home/>
			<Expertise/>
			<Work/>
			<Experience/>
			<Contact/>
			<Footer/>

		</>
	);
};

export default Layout;
