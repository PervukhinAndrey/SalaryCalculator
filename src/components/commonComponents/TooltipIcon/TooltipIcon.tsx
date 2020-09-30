import React, {useRef, useState} from "react";
import glass from "../../../img/bp1.png";
import {Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";
import s from "./TooltipIcon.module.css";

type  PropsType = {
    tooltipText: string
}

const TooltipIcon: React.FC<PropsType> = ({tooltipText}) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [iconType, setIconType] = useState(true);//true - info, false - cancel
    const chooseIcon = () => {
        if (iconType) {
            return s.info
        } else {
            return s.cancel
        }
    }
    const switchIcon = () => {
        setIconType(!iconType)
        setShow(!show)
    }
    return (
        <>
            <OverlayTrigger
                placement="bottom-start"
                delay={{show: 250, hide: 400}}
                overlay={
                    <Tooltip id="button-tooltip">
                        {tooltipText}
                    </Tooltip>
                }
            >
                <img
                    ref={target}
                    onClick={switchIcon}
                    /*src={chooseIcon()}*/
                    src={glass}
                    alt="infoIcon"
                    className={s.infoImg+' ' +chooseIcon()}/>
            </OverlayTrigger>
            <Overlay target={target.current} show={show} placement="bottom-start">
                {(props) => (
                    <Tooltip className="tooltip" id="overlay-example" {...props}>
                        {tooltipText}
                    </Tooltip>
                )}
            </Overlay>
        </>
    )
}


export default TooltipIcon

