import {useReducer, useState} from "react";
import {reducer, StateType, TOGGLE_MENU} from "./reducer";

export type AccordionUncontrolledPropsType = {
    titleValue: string;
}

function UncontrolledAccordeon(props: AccordionUncontrolledPropsType) {
    console.log('Accordion rendering');

    // let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer,{collapsed: false} )

    return <>
        <AccordionTitle title={props.titleValue} onClick={()=>{
            dispatch({type:TOGGLE_MENU})}
        } value ={state.collapsed}/>
        {!state.collapsed && <AccordionBody/>}
    </>
}

type AccordionTitlePropsType = {
    title: string
    value: boolean
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
}


function AccordionBody() {
    console.log('AccordionBody rendering');
    return (<>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>5</li>
                <li>6</li>
            </ul>
        </>
    );
}


export default UncontrolledAccordeon;
