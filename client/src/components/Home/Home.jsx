import React from "react";
import "./home.css";
import { Container, Row } from "reactstrap";
import bg from "../../assets/images/bg1.png";

const Home = () => {
	return (
		<home className="home">
			<Container>
				<img src="" alt="Background" />
				<Row>MICHAŁ CHOŁAJCZYK</Row>
				<Row>REACT & FRONT END DEVELOPER.</Row>
        <Row>* animacja wskaźnika w dół *</Row>
			</Container>
		</home>
	);
};

export default Home;
