
import { PlusButton2 } from "../../Button";

import { Link } from "react-router-dom";

import "../style/Contact.css";


export const Contact = () => {
    return (
        <div className="contact_container" id="Contacts">
            <div className="innerBg">
                <div className="contact_infos_container">
                    <div className="contact_title">CONTACTS</div>
                    <div className="contact_infos">
                        <p className="street">Via Modena, 12 40019 Sant’Agata Bolognese</p>
                        <p className="city">(Bologna) - Italy</p>
                        <p className="phone_number">Phone: +39 051 681 7611</p>
                    </div>
                    <Link to="/contactUs" ><div className="contact_button"><PlusButton2 /><span className="text">Contact Us</span></div></Link>
                </div>
                <div className="comming_soon">
                    <div className="text_container">
                        <span className="text">COMMING SOON</span>
                    </div>
                </div>
            </div>
        </div>

    )
}