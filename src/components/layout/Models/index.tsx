import "../style/Models.css"
import huracan from "../../../img/huracan.jpg";
import urus from "../../../img/urus.jpg";
import aventador from "../../../img/aventador.jpg";
import { Button, PlusButton } from "../../Button";
export const Models = () => {
    return (
        <div className="models_container" id="Models">
            <div className="img_container">
                <img src={huracan} alt="huracan" className="huracan_img" />
                <img src={urus} alt="urus" className="urus_img" />
                <img src={aventador} alt="aventador" className="aventador_img" />
            </div>
            <div className="model_apresentation" >
                <div className="title_sec">MODELS</div>
                <div className="btns">
                    <span className="btn1"><Button /></span>
                    <span className="btn2"><Button /></span>
                </div>
                <div className="model_infor">
                    <h2 className="model_name">AVENTADOR</h2>
                    <div className="model_sinopse">REAL EMOTIONS SHAPE THE FUTURE</div>
                </div>
                <div className="search_more">
                    <PlusButton />
                    <span className="text">Explores the<br /> models</span>
                </div>
            </div>
        </div>
    )
}