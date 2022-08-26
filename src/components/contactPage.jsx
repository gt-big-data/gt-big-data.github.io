import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { useState } from "react";
import { send } from "emailjs-com";

const initialState = {
    name: '',
    email: '',
    message: '',
}

const YOUR_TEMPLATE_ID = 'template_8iqhh08';
const YOUR_SERVICE_ID = 'service_cr9xsup';
const YOUR_PUBLIC_KEY = 'NN3EioLeDL1VUgq8s';

const Contact = (props) => {
    const [{ name, email, message }, setState] = useState(initialState)

    const [submit, setSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({ ...prevState, [name]: value }))
    }
    const clearState = () => setState({ ...initialState })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, message)
        setSubmit(true);
        send(
          YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, {name, email, message}, YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text)
            clearState()
          },
          (error) => {
            console.log(error.text)
          }
        )
    }

    if (!submit) {
        return (
            <div id='contact-form'>
                <div className='container'>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='section-title'>
                                <h2>Get In Touch</h2>
                                <p>
                                    Please fill out the form below to send us an email and we will
                                    get back to you as soon as possible.
                                </p>
                            </div>
                            <form name='sentMessage' validate onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-md-6'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        className='form-control'
                                        placeholder='Name'
                                        required
                                        onChange={handleChange}
                                        />
                                        <p className='help-block text-danger'></p>
                                    </div>
                                    </div>
                                    <div className='col-md-6'>
                                    <div className='form-group'>
                                        <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        className='form-control'
                                        placeholder='Email'
                                        required
                                        onChange={handleChange}
                                        />
                                        <p className='help-block text-danger'></p>
                                    </div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <textarea
                                    name='message'
                                    id='message'
                                    className='form-control'
                                    rows='4'
                                    placeholder='Message'
                                    required
                                    onChange={handleChange}
                                    style={{resize: 'none'}}
                                    ></textarea>
                                    <p className='help-block text-danger'></p>
                                </div>
                                <div id='success'></div>
                                    <button type='submit' className='btn btn-custom btn-lg'>
                                        Send Message
                                 </button>
                            </form>
    
                        </div>
                    </div>
                </div>
            </div>
        )

    } else {
        return (
            <h3 id="contact-form" className="thank-you">Thank you for contacting us! We will be reaching out soon.</h3>
        )
    }
}


export const ContactPage = (props) => {

    return (
        <div>
            <Navigation/>
            <Contact/>
            <Footer/>
        </div>
    )

}