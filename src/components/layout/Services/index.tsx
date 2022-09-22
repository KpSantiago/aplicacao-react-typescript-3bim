import lamboImg from "../../../img/lamborghiniVeneno.jpg";

import { Button2 } from "../../Button";

import "../style/Services.css";

export const Services = () => {
    return (
        <div className="services_container" id="Services">
            <img src={lamboImg} className="lambo_img_container" />
            <div className="services_apresentation">
                <div className="service_title">SERVICES</div>
                <div className="text_services">
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Velit corporis corrupti aliquid voluptates, perspiciatis qui sapiente numquam saepe libero ullam
                    quod nihil exercitationem ipsam fugiat sunt. Dolor necessitatibus nisi molestias. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Aliquid vitae non expedita? Quaerat perferendis,tempore accusamus in soluta vero blanditiis hic cum maiores 
                    ratione veritatis esse odit adipisci pariatur quis. adipisicing elit. Velit corporis corrupti aliquid voluptates, perspiciatis 
                    qui sapiente numquam saepe libero ullam quod nihil exercitationem ipsam fugiat sunt. Dolor necessitatibus nisi molestias. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Aliquid vitae non expedita? Quaerat perferendis,tempore accusamus in soluta vero blanditiis hic cum maiores. 
                </div>
                <Button2 />
            </div>
        </div>
    )
}