import { RiArrowRightSLine } from "react-icons/ri"
import { BiPlus } from "react-icons/bi";


import "./Button.css"

export const Button = () => {
    return (
        <div className="arrow_container">
            <RiArrowRightSLine className="arrow_icon" />
        </div>
    )
}

export const PlusButton = () => {
    return (
        <div className="arrow_container">
            <BiPlus className="arrow_icon" />
        </div>
    )
}

export const Button2 = () => {
    return (
        <div className="arrow_container2">
            <RiArrowRightSLine className="arrow_icon" />
        </div>
    )
}

export const PlusButton2 = () => {
    return (
        <div className="arrow_container2">
            <BiPlus className="arrow_icon" />
        </div>
    )
}