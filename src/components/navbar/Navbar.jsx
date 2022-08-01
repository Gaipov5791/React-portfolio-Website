import "./navbar.scss";
import {Person, Mail} from "@mui/icons-material";

function Navbar({menuOpen, setMenuOpen }) {
	return (
		<div className={"navbar " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">Bakyt.</a>
					<div className="itemContainer">
						<Person className="icon"/>
						<span>+996 556 01 68 98</span>
					</div>
					<div className="itemContainer">
						<Mail className="icon"/>
						<span>bakyt.gaipov.kk@gmail.com</span>
					</div>
				</div>
				<div className="right">
					<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar