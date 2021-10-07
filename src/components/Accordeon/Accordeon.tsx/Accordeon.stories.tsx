import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Accordion, {AccordionPropsType} from "./Accordeon";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callback = action('collapsed or non-collapsed  is activated')
const callbackOnClick =action('Clicked an item with value: ')

const Template: ComponentStory<typeof Accordion> = (args: AccordionPropsType) => <Accordion {...args} />;

export const Collapsed = Template.bind({});
Collapsed.args = {
    titleValue: 'Friends',
    collapsed: true,
    setCollapsed: callback,
    items: [],
    onItemClick: callbackOnClick
};
export const UnCollapsed = Template.bind({});
UnCollapsed.args = {
    titleValue: 'Menu',
    collapsed: false,
    setCollapsed: callback,
    items: [
        {title: 'Sparrow', value: 1,},
        {title: 'Crown', value: 2,},
        {title: 'Tit', value: 3,},
        {title: 'Stork', value: 4,},
    ],
    onItemClick: callbackOnClick,
};

export const ToggledMenu = () => {
    const [toggled, setToggled] = useState<boolean>(true)
    return (
        <Accordion titleValue={'Switchable List'}
                   setCollapsed={setToggled}
                   collapsed={toggled}
                   items={[
                       {title:'January',value: 1,},
                       {title:'February',value: 2,},
                       {title:'March',value: 3,},
                       {title:'April',value: 4,},
                   ]}
                   onItemClick={(id)=>{alert(`Item with ID ${id} was clicked`)}}
        />
    )
};


//синтаксис 5 версии более старой
// export const EmptyRating = () => <Rating onClick={x => x} value={0}/>
// export const Rating1 = () => <Rating onClick={x => x} value={1}/>
// export const Rating2 = () => <Rating onClick={x => x} value={2}/>
// export const Rating3 = () => <Rating onClick={x => x} value={3}/>
// export const Rating4 = () => <Rating onClick={x => x} value={4}/>
// export const Rating5 = () => <Rating onClick={x => x} value={5}/>
// export const ChangingRating = () => {
//     const [rating, setRating] = useState<ValueType>(4)
//     return (
//         <Rating onClick={setRating} value={rating}/>
//     )
// }
