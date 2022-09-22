import logoLambo from "../../../img/logo.png"
// import { Link } from "react-router-dom";
import { BiMessageSquare, BiSearch, BiMenu } from "react-icons/bi"
import "../style/Header.css";
export const Header = () => {
    return (
        <>
            <nav>
                <header>
                    <div className="logoContainer"><a href="#Home"><img src={logoLambo} alt="logo" className="logo" /></a></div>
                    <ul className="navBar">
                        <li>
                            <a href="#Models" className="link">MODELS</a>
                            <div className="line"></div>
                        </li>
                        <li>
                            <a href="#Creator" className="link">CUSTOM SOLUTIONS</a>
                            <div className="line"></div>
                        </li>
                        <li>
                            <a href="#" className="link">OWNERSHIP</a>
                            <div className="line"></div>
                        </li>
                        <li>
                            <a href="#" className="link">MOTORSPORT</a>
                            <div className="line"></div>
                        </li>
                    </ul>
                    <ul className="navBar">
                        <li className="home">
                            <a className="link" href="#Services">SERVICES</a>
                            <div className="line"></div>
                        </li>
                        <li className="services">
                            <a className="link" href="#About">ABOUT</a>
                            <div className="line"></div>
                        </li>
                        <li className="contact">
                            <a className="link" href="#Contacts">CONTACTS</a>
                            <div className="line"></div>
                        </li>
                    </ul>
                    <ul className="navBar">
                        <li className="home">
                            <a className="link" href="#"><BiMessageSquare className="icon"/></a>
                            
                        </li>
                        <li className="services">
                            <a className="link" href="#"><BiSearch className="icon"/></a>
                        </li>
                        <li className="contact">
                            <a className="link" href="#"><BiMenu className="icon"/></a>
                        </li>
                    </ul>
                </header>
            </nav>
        </>
    )
}