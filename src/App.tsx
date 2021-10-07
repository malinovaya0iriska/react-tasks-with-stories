import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordeon/Accordeon.tsx/Accordeon";
import {Rating, ValueType} from "./components/Rating/Rating";
import UncontrolledAccordeon from './components/UncontrolledAccordeon/UncontrolledAccordeon.tsx/UncontrolledAccordeon';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from './components/OnOff/OnOff';
import {ItemType, Select} from './components/Select/Select';
import {Clock} from "./components/Clock/Clock";


function App() {
    console.log('App rendering');
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [ratingValue, setRatingValue] = useState<ValueType>(2)
    let [onButton, setOnButton] = useState(true)
    let [items, setItems] = useState<Array<ItemType>>([
            {title: 'January', value: '1'},
            {title: 'February', value: '2'},
            {title: 'March', value: '3'},
            {title: 'April', value: '4'}
        ]
    )
    const [value, setValue] = useState('2')

    return (
        <div className={'app'}>
            <Clock/>
            <PageTitle title={"This is App component"}/>
            <UncontrolledOnOff onChange={setOnButton}/> {onButton.toString()}
            <OnOff state={onButton} setOnButton={setOnButton}/>
            <OnOff state={onButton} setOnButton={setOnButton}/>
            <Accordion titleValue={"Login"}
                       collapsed={accordionCollapsed}
                       setCollapsed={setAccordionCollapsed}
                       items={[
                           {title: 'Sparrow', value: 1,},
                           {title: 'Crown', value: 2,},
                           {title: 'Tit', value: 3,},
                           {title: 'Stork', value: 4,},
                       ]}
                       onItemClick={(id) => {
                           alert(`Item with ID ${id} was clicked`)
                       }}/>
            <Accordion titleValue={"Toggle me"}
                       collapsed={accordionCollapsed}
                       setCollapsed={setAccordionCollapsed}
                       items={[
                           {title: 'January', value: 1,},
                           {title: 'February', value: 2,},
                           {title: 'March', value: 3,},
                           {title: 'April', value: 4,},
                       ]}
                       onItemClick={(id) => {
                           alert(`Item with ID ${id} was clicked`)
                       }}
            />

            <Select value={value} items={[
                {title: 'January', value: '1'},
                {title: 'February', value: '2'},
                {title: 'March', value: '3'},
                {title: 'April', value: '4'}
            ]} onChange={setValue}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledAccordeon titleValue={'Menu'}/>
            <UncontrolledRating/>
            <UncontrolledOnOff onChange={setOnButton}/> {onButton.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    return <h1>{props.title}</h1>
}

export default App;
