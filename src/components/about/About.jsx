import "./about.scss";
import React from "react";
import { FaHtml5, FaCss3, FaSass, FaReact } from 'react-icons/fa';
import { SiWebpack, SiJavascript } from 'react-icons/si';
import { motion } from "framer-motion";
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
// import { ListItemSecondaryAction } from "@mui/material";


function About() {
	return (
		<section className="about" id="about">
			<div className="container">
				<div className="about__intro">
					<motion.h1
					initial={{
						x: -1000,
						opacity: 0,
					}}
					animate={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						duration: 2,
					}}

					>
						About</motion.h1>
				</div>

				<div className="about__skills">
					<h3>My Skills</h3>
					<ul>
						<li>
							<FaHtml5 />
							Html
						</li>
						<li>
							<FaCss3/>
							Css
						</li>
						<li>
							<FaSass/>
							Sass
						</li>
						<li>
							<FaReact/>
							React
						</li>
						<li>
							< SiWebpack/>
							Webpack
						</li>
						<li>
							<SiJavascript/>
							Javascript
						</li>
					</ul>
				</div>

				<div className="about__portfolio">
					<h3>Latest Works</h3>
					<ul>
						<li>
							<img src={Portfolio1} alt="" />
							<h4>Dashboard For Cargo</h4>
						</li>
						 <li>
							<img src={Portfolio2} alt="" />
							<h4>Marketplace App</h4>
						</li>
						<li>
							<img src={Portfolio3} alt="" />
							<h4>Landing Page</h4>
						</li> 
					</ul>
				</div>
			</div>
		</section>
	)
}

export default About