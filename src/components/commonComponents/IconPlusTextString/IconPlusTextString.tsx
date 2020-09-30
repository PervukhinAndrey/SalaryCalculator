import s from "./IconPlusTextString.module.css";
import React from "react";
type PropsType={
    icon:string
    text:string
}
const IconPlusTextString: React.FC<PropsType> = ({icon, text}) => {
    return (
        <span className={s.iconPlusTextString}>
            <img
                src={icon} alt="icon"
                className={s.icon}/>
            {text}
        </span>
    )

}
export default IconPlusTextString