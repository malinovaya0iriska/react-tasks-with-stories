import {useState} from "react";

export type OnOffPropsType ={
    state: boolean
    setOnButton: (state:boolean)=>void
}
export function OnOff(props:OnOffPropsType) {
    console.log('OnOff rendering');

 const callbackOn = ()=>props.setOnButton(true)
const callbackOff = ()=>props.setOnButton(false)

       const onStyle = {
        width: '25px',
        height: '25px',
        border: '1px solid green',
        display: 'inline-block',
        marginLeft: '15px',
        background: props.state ? 'green' : 'white'
    }
    const offStyle = {
        width: '25px',
        height: '25px',
        border: '1px solid red',
        display: 'inline-block',
        background: props.state ? 'white' : 'red'
    }
    const lampStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        background: props.state ? 'green' : 'red'
    }


    return (
        <div>
            <div style={onStyle} onClick={callbackOn}>on</div>
            <div style={offStyle} onClick={callbackOff}>off</div>
            <div style={lampStyle}></div>
        </div>
    );
}
