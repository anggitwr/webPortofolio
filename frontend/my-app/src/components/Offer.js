import React from 'react';
import emailjs from 'emailjs-com'
import './Offer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Offer = ()=> {

	function sendEmail (e) {
		e.preventDefault();

		emailjs.sendForm('service_2yn6pf8', 'template_rpi4feo', e.target, "user_M8ogRSAnOKD0wsei3EZuj")
		.then(res =>{
			console.log(res);
		}).catch(err=> console.log(err));
		AOS.init();
	}
	// function animate() {
		
		
	// }
	return(
		<>
		<div className='anggit__offer section__margin' id='offer'>
			<div className='anggit__offer-content' data-aos="fade-right" data-aos-offset="100" data-aos-delay="350" data-aos-duration="2000" data-aos-easing="ease-in-out">
				<h1>Interested in </h1>
				<h1> working with me?</h1>
				<p>Do you need a digital product?, I have 1 years experience as a UI and Mobile dev</p>
			</div>
			<form className='anggit__offer-contentright' onSubmit={sendEmail} data-aos="fade-left" data-aos-offset="100" data-aos-delay="350" data-aos-duration="2000" data-aos-easing="ease-in-out">
				<h3>Let’s message me and make something together!</h3>
				<input type='text' placeholder='Your name' name='name'/>
				<input type='email' placeholder='Your email' name='user_email'/>
				<textarea type='message' placeholder='Project detail' name='message'/>
				<input type='submit' value='Send' /> 
			</form>
		</div>
		</>
	)
}
export default Offer;