import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import UncontrolledAccordeon, {AccordionUncontrolledPropsType} from "./UncontrolledAccordeon";

export default {
    title: 'Uncontrolled Accordeon',
    component: UncontrolledAccordeon,
} as ComponentMeta<typeof UncontrolledAccordeon>;

const callback = action('action mode is activated')

const Template: ComponentStory<typeof UncontrolledAccordeon> = (args: AccordionUncontrolledPropsType) => <UncontrolledAccordeon {...args} />;

export const ToggledUsersList = Template.bind({});
ToggledUsersList.args = {
    titleValue: 'Users'
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
