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
                <p className='col-10 arvo'>
                    Hello! We are Ashley and Kristen, two sisters who live life Willy Nilly style! We bought a bus to sell custom shirts and other treasures we pick up along the way.
                    We are passionate about making soaps that are free of harsh ingredients and full of nourishing plant-based goodness. Our handmade items such as t-shirts, soaps, candles,
                    and bath bombs are all crafted within our Arizona homes. We hope you enjoy our products.
                    Thank you for supporting our small business! Live life Willy Nilly!
                </p>
            </div>
        </div>
    )
}

export default Home