import React from 'react';
import './Portofolio.css';
import Arc from '../image/webarc.png';
import Chat from '../image/appch.png';
import Fur from '../image/appfur.png';
import Wd from '../image/appwd.png';

function Portofolio() {
	return(
		<>
		<div className='anggit__portofolio section__margin'>
			<div className='anggit__portofolio-content'>
				<h2>My Latest Work</h2>
				<div className='anggit__portofolio-rectangle'></div>
				<div className='anggit__portofolio-container'>
				<div className='anggit__portofolio-container-left'>
				<div className='anggit__portofolio-left'>
					<div>
						<h3>Web Design</h3>
						<p>Archi Web</p>
						<img src={Arc} alt='webarc'></img>
						</div>
				</div>
				<div className='anggit__portofolio-left'>
					<div>
						<h3>App Design</h3>
						<p>Chat App</p>
						<img src={Chat} alt='appchat'></img>
						</div>
				</div>
				</div>
				<div className='anggit__portofolio-container-right'>
				<div className='anggit__portofolio-right'>
					<div>
						<h3>App Design</h3>
						<p>Furniture App</p>
						<img src={Fur} alt='appchat'></img>
					</div>
				</div>
				<div className='anggit__portofolio-right'>
					<div>
						<h3>App Design</h3>
						<p>Wedang App</p>
						<img src={Wd} alt='appwd'></img>
					</div>
				</div>
				</div>
				</div>
			</div>
		</div>
		</>
	)	
}
export default Portofolio;