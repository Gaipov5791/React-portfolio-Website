import "./works.scss";
import Mobile from "../../assets/mobile.png";

function Works() {
	return (
		<div className='works' id="works">
			<div className="slider">
				<h1>Sorry, this page in procces</h1>
				<div className="container">
						<div className="item">
							<div className="left">
								<div className="leftBlock">
									<div className="imgBlock">
										<img src={Mobile} alt="" />
									</div>
									<h2>Title</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga, odit voluptatem non corporis quos voluptatum.
									</p>
									<span>Projects</span>
								</div>
							</div>
							<div className="right"></div>
						</div>
				</div>
			</div>
			
				
		</div>
	)
}

export default Works