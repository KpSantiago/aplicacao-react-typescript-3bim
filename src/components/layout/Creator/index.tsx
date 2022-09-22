
import { Button2 } from "../../Button";
import "../style/Creator.css";

export const Creator = () => {
    return (
        <div className="creator_container" id="Creator">

            <div className="title_Creator">CONFIGURATOR</div>
            <h2>CREATE YOUR <br /> AVENTADOR</h2>
            <Button2 />
            <div className="options_container">
                <div className="options_containerInter">
                    <div className="option1">Aventador</div>
                    <div className="option2">Huracán</div>
                    <div className="option3">Urus</div>
                </div>
                <div className="options_line">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
        </div>
    )
}