import React, {useState} from "react";
import {Star} from "./Star/Star";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    onClick: (value: ValueType) => void
    value: ValueType
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} starValue={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} starValue={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} starValue={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} starValue={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} starValue={5}/>
        </div>
    );
}


