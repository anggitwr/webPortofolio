/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import {Link} from 'react-scroll';

import './Navbar.css'

class Navbar extends Component {
	state = { clicked: false }
	handleClick = () => {
		this.setState({ clicked : !this.state.clicked})
	}
	render(){
		return(
			<nav className="NavbarItems section__margin">
				<h1 className="navbar-logo">
					Anggit
				</h1>
				<div className="menu-icon" onClick={this.handleClick}>
					<i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
						</i>
						</div>
				<ul className={this.state.clicked ? "nav-menu active" : "nav-menu"} >
					{MenuItems.map((item, index) => {
						return (
							// <li key={index}>
							// 	{/* <Link smooth={true} spy={true}> */}
							// 	<Link spy={item.spy} scroll={item.scroll} to={item.url}>
							// <a  className={item.cName} href={item.url}>{item.title} </a>
							// {/* </Link> */}
							// </Link>
							// </li>
							<li key={index} className='nav'>
								<Link to={item.url} spy={true} smooth={true} className={item.cName} offset={-70}
    duration={1500}>
									{item.title}
								</Link>
							</li>
						)
					})}
				</ul>
				<div className='anggit__navbar-contact'>
					<button type='button' smooth={true} onClick={(e) => {
						e.preventDefault();
						window.location.href='#offer';
					}}>Contact me</button>
				</div>
			</nav>	
		);
	}
}

export default Navbar;