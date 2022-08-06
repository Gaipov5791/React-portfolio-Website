import "./intro.scss";
import { init } from 'ityped';
import { useRef, useEffect} from "react";
import { motion } from "framer-motion";
import Photo from "../../assets/men.png";
import Arrow from "../../assets/down.png";

function Intro() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, { showCursor: true, strings: ['Frontend Developer' ], backDelay: 1500, backSpeed: 60, })
	}, [])
	
	return (
		<section className="home" id="intro">
			<div className="container home__container">
				<div className="home__left">
					<div className="home__img">
						<img src={Photo} alt="" />
					</div>
				</div>
				<div className="home__right">
					<h2 className="home__title">Hi There, I am</h2>
					<motion.h1 className="home__subtitle" 
						initial={{
							y: -1000,
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 2,
						}}
					>Bakyt Gaipov</motion.h1>
					<h3>
						<span ref={textRef}></span>
		 			</h3>
				</div>
				<a href="#about">
		 			<img src={ Arrow } alt="" />
				</a>
			</div>
		</section>
	)
}

export default Intro