import {useState} from "react";
 export type UncontrolledOnOffPropsType ={
     onChange: (on: boolean) => void
     defaultValue?: boolean
 }

export function UncontrolledOnOff(props:UncontrolledOnOffPropsType) {

    console.log('OnOff rendering');

    let [on, setOn] = useState(props.defaultValue ? props.defaultValue : false)
    const callback = () => {
        setOn(!on)
        props.onChange(!on)}

    const onStyle = {
        width: '25px',
        height: '25px',
        border: '1px solid green',
        display: 'inline-block',
        marginLeft: '15px',
        background: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '25px',
        height: '25px',
        border: '1px solid red',
        display: 'inline-block',
        background: on ? 'white' : 'red'
    }
    const lampStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        background: on ? 'green' : 'red'
    }


    return (
        <div>
            <div style={onStyle} onClick={callback}>on</div>
            <div style={offStyle} onClick={callback}>off</div>
            <div style={lampStyle}></div>
        </div>
    );
}
