import React from 'react'
import './Services.css';
import Ui from '../image/ui.png';
import Dev from '../image/dev.png';
import AOS from 'aos';
import "aos/dist/aos.css";


function Services() {

	AOS.init();


	return(
		<>
		<div className='anggit__services section__margin' id='service' >
			<div className='anggit__services-content'>
				<div className='anggit__services-title'>
					<h2>Services</h2>
					<div className='anggit__services-rectangle'></div>
				</div>
				<div className='anggit__services-grup' >
				<div className='anggit__services-ui' data-aos="fade-right"  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
					<img src={Ui} alt='ui-icon'></img>
					<h4>UIUX Design</h4>
					<p>Designing UI from wireframe to prototype. Creating designs that make it easy for users to use the application</p>
				</div>
				<div className='anggit__services-dev' data-aos="fade-right" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1800"
    data-aos-easing="ease-in-out">
					<img src={Dev} alt='dev-icon'></img>
					<h4>Mobile Developer</h4>
					<p>design and develop android applications and integrate with other teams to analyze data from the API and then implement it.</p>
				</div>
				<div className='anggit__services-box' data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
					<div className='anggit__services-experience'>
						<h2>3+</h2>
						<p>years of experience</p>
					</div>
					<div className='anggit__services-flext'>
						<h2>100</h2>
						<p>Completed projects</p>
					</div>
					<div className='anggit__services-flex'>
						<h2>90</h2>
						<p>Happy client</p>
					</div>
				</div>
				</div>	
			</div>
		</div>
		</>
	);
}

export default Services;