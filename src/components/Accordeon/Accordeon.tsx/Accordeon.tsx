import {useState} from "react";

export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
    setCollapsed: (value: boolean) => void
    items: ItemType[]
    onItemClick: (value: any) => void
}

type ItemType = {
    value: any
    title: string
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return <>

        <AccordionTitle title={props.titleValue}
                        onClick={() => props.setCollapsed(!props.collapsed)}
        />
        {!props.collapsed && <AccordionBody items={props.items}
                                            onItemClick={props.onItemClick}
        />}
    </>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onItemClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    return (<>
            <ul>
                {props.items
                    .map((i, value) => <li
                        key={i.value}
                        onClick={() => props.onItemClick(i.value)}>
                        {i.title}
                    </li>)}
            </ul>
        </>
    );
}


export default Accordion;
