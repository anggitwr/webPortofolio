import React from 'react';
import emailjs from 'emailjs-com'
import './Offer.css';

const Offer = ()=> {

	function sendEmail (e) {
		e.preventDefault();

		emailjs.sendForm('service_2yn6pf8', 'template_rpi4feo', e.target, "user_M8ogRSAnOKD0wsei3EZuj")
		.then(res =>{
			console.log(res);
		}).catch(err=> console.log(err));

	}
	return(
		<>
		<div className='anggit__offer section__margin'>
			<div className='anggit__offer-content'>
				<h1>Interested in </h1>
				<h1> working with me?</h1>
				<p>Do you need a digital product?, I have 3 years experience as a UI and Frontend dev</p>
			</div>
			<form className='anggit__offer-contentright' onSubmit={sendEmail}>
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