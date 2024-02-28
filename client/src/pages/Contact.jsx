import React from "react"
import '../styles/App.css'

const Contact = () => {
    return (
        <div id='contactUs' className="d-flex flex-column align-items-center col-12">
            <h1>Contact Us</h1>
            <form className="col-10 border d-flex flex-column align-items-center">

                <label htmlFor="name" className="">Name</label>
                <input type="text" className="col-10" id="name" placeholder="Name" />


                <label htmlFor="email" className="">Email</label>
                <input type="email" className="col-10" id="email" placeholder="Email" />


                <label htmlFor="message" className="">Message</label>
                <textarea className="col-10" id="message" rows="5" placeholder="e.g. custom shirts, bulk order, etc."></textarea>

                <button type="submit" className="col-10">Submit</button>
            </form>
        </div>
    )
}

export default Contact