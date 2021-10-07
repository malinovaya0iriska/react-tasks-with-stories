import React, {useState} from "react";
import {ValueType} from "../Rating/Rating";

export type UncontrolledRatingPropsType ={
    defaultValue?: ValueType
    onChange?: (value: ValueType) => void
}
export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log('Uncontrolled Rating rendering')

    let [value, setValue] = useState<ValueType>(props.defaultValue? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value>0} setValue={setValue} value = {1}  />
            <Star selected={value>1} setValue={setValue} value = {2} />
            <Star selected={value>2} setValue={setValue} value = {3}/>
            <Star selected={value>3} setValue={setValue} value = {4}/>
            <Star selected={value>4} setValue={setValue} value = {5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    value: 0 | 1 | 2 | 3 | 4 | 5
    setValue: (value:  0 | 1 | 2 | 3 | 4 | 5)=> void
}

export function Star(props: StarPropsType) {
    console.log('Uncontrolled Star rendering')
    return <span onClick ={() => {props.setValue(props.value)}}> {props.selected ? <b>star </b> : 'star '} </span>
}

