import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff, UncontrolledOnOffPropsType} from "./UncontrolledOnOff";

export default {
    title: 'Uncontrolled Button',
    component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

const callback = action('action mode is activated')

const Template: ComponentStory<typeof UncontrolledOnOff> = (args: UncontrolledOnOffPropsType) =>
    <UncontrolledOnOff {...args} />;

export const OnButton = Template.bind({});
OnButton.args = {
    onChange: callback,
    defaultValue: true
};
export const OffButton = Template.bind({});
OffButton.args = {
    onChange: callback,
    defaultValue: false
};

export const readOnlyInput = () => <input value ={'yo'} readOnly={true}/>

export const DefaultInputValue = () => <input defaultValue={'IT-incubator'} />

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
