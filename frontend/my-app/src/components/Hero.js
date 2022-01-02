/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Hero.css';
import ilustrasi from '../image/ilustrasi.png';
import dribble from '../image/dribble.png';
import instagram from '../image/instagram.png';
import linkedin from '../image/linkedin.png';

function Hero() {
	return (
		<>
		<div className='anggit__header section__margin' id='home' >
			<div className='anggit__header-content'>
				<h3 className='anggit-text'>Hello</h3>
				<h1 className='text-name'>I'm Anggit</h1>
				<p>I am Front end Developer and i like UIUX because desain is my hobby.I am Front end Developer and i like UIUX because desain is my hobby.I am Front end Developer and i like UIUX because desain is my hobby</p>
					<div className='anggit__header-button'>
						<button type='button' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://drive.google.com/file/d/12hNOCgcvLzE3uY5ZHbC1pzLCESwhrwr7/view?usp=sharing';
      }}>Download CV</button>
					</div>
			</div>
			<div className='anggit__header-image' data-aos="fade-left" data-aos-offset="100" data-aos-delay="350" data-aos-duration="2000" data-aos-easing="ease-in-out">
			<img src={ilustrasi} alt='ilustrasi'/>
			</div>
			<div className='anggit__header-icon'>
				<img src={dribble} alt='icon-dribbble'className='icon-one'/>
				<img src={instagram} alt='icon-instagram'className='icon-two'/>
				<img src={linkedin} alt='icon-linkedin'className='icon-three'/>
			</div>
		</div>
	</>
	);
}

export default Hero;