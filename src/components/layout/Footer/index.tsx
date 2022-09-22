import { GrFacebook, GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs"

import "../style/Footer.css";

export const Footer = () => {
    return (
        <footer>
            <div className="face_container"><GrFacebook className="facebook" /><div className="hover">I haven't</div><div className="polygon"></div></div>
            <a href="https://github.com/KpSantiago" target="_blank">
                <div className="git_container">
                    <BsGithub className="github" />
                    <div className="hover">KpSantiago</div>
                    <div className="polygon"></div>
                </div>
            </a>
            <div className="linke_container"><GrLinkedin className="linkedin" /><div className="hover">I haven't</div><div className="polygon"></div></div>
        </footer>
    )
}