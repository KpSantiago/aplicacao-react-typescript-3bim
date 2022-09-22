
import { Form } from "../../Form";

import "../style/style.css";

import lamborghiniContact from "../../../img/lamborghiniContact.jpg";

import { IoReturnDownBackOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

export const ContactUs = () => {
    return (
        <div className="contactUs_container">
            <img src={lamborghiniContact} className="backImage" />
            <div className="formulario">
                <Link to="/"><IoReturnDownBackOutline className="iconBack"/></Link>
                <h1 className="cantact_title">CONTACT US</h1>
                <Form />
            </div>
        </div>
    )
}

