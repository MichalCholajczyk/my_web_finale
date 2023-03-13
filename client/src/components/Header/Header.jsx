import React, { useState, useRef, useEffect } from "react";
import {
	MDBIcon,
	MDBBtn,
	MDBSideNav,
	MDBSideNavItem,
	MDBSideNavLink,
	MDBSideNavMenu,
	MDBSideNavCollapse,
} from "mdb-react-ui-kit";

import "./header.css";

import { Container, Row } from "reactstrap";

import logo from "../../assets/images/pixy-low-resolution-logo-white-on-transparent-background.png";

const nav__links = [
	{
		path: "#home",
		display: "// home",
	},
	{
		path: "#expertise",
		display: "// expertise",
	},
	{
		path: "#work",
		display: "// work",
	},
	{
		path: "#experience",
		display: "// experience",
	},
	{
		path: "#contact",
		display: "// contact",
	},
];

const Header = () => {
	// const [rightOpen, setRightOpen] = useState(true);
	// const [rightCollapse1, setRightCollapse1] = useState(true);
	// const [rightCollapse2, setRightCollapse2] = useState(false);

	const headerRef = useRef(null);
	const menuRef = useRef(null);

	// Funkcja dodająca klasę "sticky__header" do nagłówka po przewinięciu strony o 80 pikseli

	const stickyHeaderFunction = () => {
		window.addEventListener("scroll", () => {
			if (document.body.scrollTo > 80 || document.documentElement.scrollTop > 80) {
				headerRef.currentList.add("sticky__header");
			} else {
				headerRef.currentList.remove("sticky__header");
			}
		});
	};
	return (
		<header className="header" ref={headerRef}>
			<Container>
				<Row>
					<div className="nav_wrapper">
						<div className="logo">
							<img src={logo} alt="logo" />
						</div>

						<div className="hamburger">
							<span>
							<i class="ri-menu-line"></i>
							</span>
						</div>

						<div className="navigation" ref={menuRef}>
							<ul className="menu">
								{nav__links.map((item, index) => (
									<li className="nav__item" key={index}>
										<a href={item.path}>{item.display}</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
