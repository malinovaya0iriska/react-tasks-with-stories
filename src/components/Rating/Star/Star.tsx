import React from "react";
import {ValueType} from "../Rating";

export type StarPropsType = {
    selected: boolean
    starValue: ValueType
    onClick: (value:ValueType)=> void
}

export function Star(props: StarPropsType) {

    return <span onClick={()=>{props.onClick(props.starValue)}}> {props.selected ? <b>star </b> : 'star '} </span>
}