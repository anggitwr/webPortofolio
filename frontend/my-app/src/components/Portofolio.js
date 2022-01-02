import React from 'react';
import './Portofolio.css';
import Arc from '../image/webarc.png';
import Chat from '../image/appch.png';
import Fur from '../image/appfur.png';
import Wd from '../image/appwd.png';
import AOS from 'aos';
import "aos/dist/aos.css";

function Portofolio() {
	AOS.init();
	return(
		<>
		<div className='anggit__portofolio section__margin' id='portofolio'>
			<div className='anggit__portofolio-content'>
				<h2>My Latest Work</h2>
				<div className='anggit__portofolio-rectangle'></div>
				<div className='anggit__portofolio-container'>
				<div className='anggit__portofolio-container-left' >
				<div className='anggit__portofolio-left' data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
					<div>
						<h3>Web Design</h3>
						<p>Archi Web</p>
						<img src={Arc} alt='webarc'></img>
						</div>
				</div>
				<div className='anggit__portofolio-left' data-aos="fade-right" data-aos-offset="200" data-aos-delay="550" data-aos-duration="1000" data-aos-easing="ease-in-out">
					<div>
						<h3>App Design</h3>
						<p>Chat App</p>
						<img src={Chat} alt='appchat'></img>
						</div>
				</div>
				</div>
				<div className='anggit__portofolio-container-right' >
				<div className='anggit__portofolio-right' data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
					<div>
						<h3>App Design</h3>
						<p>Furniture App</p>
						<img src={Fur} alt='appchat'></img>
					</div>
				</div>
				<div className='anggit__portofolio-right' data-aos="fade-left" data-aos-offset="200" data-aos-delay="550" data-aos-duration="1000" data-aos-easing="ease-in-out">
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