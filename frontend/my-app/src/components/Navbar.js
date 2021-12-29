/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { MenuItems } from './MenuItems';

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
					Anggit<i i className="fab fa-react"></i>
				</h1>
				<div className="menu-icon" onClick={this.handleClick}>
					<i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
						</i>
						</div>
				<ul className={this.state.clicked ? "nav-menu active" : "nav-menu"} >
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
							<a className={item.cName} href={item.url}>{item.title}</a>
						</li>
						)
					})}
					
				</ul>
				<div className='anggit__navbar-contact'>
					<button type='button'>Contact me</button>
				</div>
			</nav>	
		);
	}
}

export default Navbar;