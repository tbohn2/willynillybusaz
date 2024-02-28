import React from 'react'
import aboutUsImg from '../assets/aboutUs.jpeg'
import '../styles/App.css'

const Home = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='col-10 aboutUsImgContainer'>
                <img src={aboutUsImg} className='aboutUsImg' alt="About Us" />
            </div>
            <div className='col-10 d-flex flex-wrap'>
                <h1 id='welcome' className='col-12'>WELCOME</h1>
                <h1 id='toWillyNilly' className='col-12'>TO WILLY NILLY!</h1>
            </div>
            <div id='aboutUs' className='col-10 d-flex flex-column align-items-center'>
                <h2 className='annapurna-sil-bold col-10'>About Us</h2>
                <p className='col-10 arvo'>Willy Nilly Bus AZ is a family-owned and operated business that
                    has been providing transportation services in the Phoenix area for over 20 years.
                    We are dedicated to providing safe, reliable, and affordable transportation to our customers. Our drivers are experienced and professional,
                    and our vehicles are clean and well-maintained.
                    We offer a variety of transportation services, including airport shuttle, charter bus, and party bus services.
                    Whether you need transportation for a special event, a night out on the town, or a trip to the airport, Willy Nilly Bus AZ has you covered. Contact us today to learn more about our services and to book your transportation.</p>
            </div>
        </div>
    )
}

export default Home