import React, { useState, useRef } from "react"
import '../styles/App.css'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [sending, setSending] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // setSending(true);
        console.log(form.current);
        // emailjs
        //     .sendForm('service_bklllzl', 'template_zs7buxj', form.current, {
        //         publicKey: '9boZX1F3ht1F4VDmO',
        //     })
        //     .then(
        //         () => {
        //             setSuccess(true);
        //             setError('');
        //             setSending(false);
        //             console.log('SUCCESS!');
        //         },
        //         (error) => {
        //             setError('Failed to send message, please try again later');
        //             setSending(false);
        //             console.log('FAILED...', error.text);
        //         },
        //     );
    };

    return (
        <div id='contactUs' className="d-flex flex-column align-items-center col-12">
            {success &&
                <div id="success" className="popupMessage col-10 text-center">
                    <p className="text-center">Message sent successfully!</p>
                    <p className="text-center">Please allow 1-3 days for a response,</p>
                    <p className="text-center">Thank you!</p>
                </div>
            }
            {error && <p id="error" className="popupMessage col-10 text-center">{error}</p>}
            <h1>Contact Us</h1>
            <form ref={form} onSubmit={sendEmail} className="col-10 border d-flex flex-column align-items-center">

                <label htmlFor="name" className="">Name</label>
                <input type="text" className="col-10" id="name" name="name" placeholder="Name" />


                <label htmlFor="email" className="">Email</label>
                <input type="email" className="col-10" id="email" name="email" placeholder="Email" />


                <label htmlFor="message" className="">Message</label>
                <textarea className="col-10" id="message" name="message" rows="5" placeholder="e.g. custom shirts, bulk order, etc."></textarea>

                {sending ?
                    <button className="col-10 d-flex justify-content-center">
                        <div className="spinner"></div>
                    </button>
                    :
                    <button type="submit" value="Send" className="col-10">Submit</button>
                }
            </form>
        </div>
    )
}

export default Contact