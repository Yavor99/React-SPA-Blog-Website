import "./contact.css";

import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();

    const onContactSubmit = () => {
        navigate('/')
    }

    return (
        <div className="container">
            <header className="Header">
                <h1>Contact Us</h1>
                <p>
                    Thank you for your interest in getting in touch with us! If 
                    you have any questions, comments, or concerns, we'd love to hear from you. 
                    Please fill out the form below and we'll get back to you as soon as possible.
                </p>
            </header>
            <div className="content">
                <div className="content-form">
                    <section>
                        <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                        <h2>Address</h2>
                        <p>
                            Ul Shipka 71, Varna, Bulgaria
                        </p>
                    </section>
                    <section>
                        <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                        <h2>Phone</h2>
                        <p>123-456-78901548</p>
                    </section>
                    <section>
                        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                        <h2>E-mail</h2>
                        <p>yavor_enchev99@abv.bg</p>
                    </section>
                </div>
            </div>
            <form onSubmit={onContactSubmit}>
                <div className="form">
                    <div className="right">
                        <div className="contact-form">
                            <input type="text" required />
                            <span>Full Name</span>
                        </div>
                        <div className="contact-form">
                            <input type="email" required />
                            <span>E-mail Id</span>
                        </div>
                        <div className="contact-form">
                            <textarea name="text"></textarea>
                            <span> Type your Message....</span>
                        </div>
                        <div className="contact-form">
                            <input type="submit" name="submit" />
                        </div>
                    </div>
                </div>
            </form>
            <div className="media">
                <li>
                    <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                </li>
                <li>
                    <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                </li>
                <li>
                    <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                </li>
                <li>
                    <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                </li>
            </div>
            <div className="empty"></div>
        </div>
    );
};