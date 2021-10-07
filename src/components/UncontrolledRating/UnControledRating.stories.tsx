import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledRating, UncontrolledRatingPropsType} from "./UncontrolledRating";


export default {
    title: 'Uncontrolled Rating',
    component: UncontrolledRating,
} as ComponentMeta<typeof UncontrolledRating>;

const callback = action('action mode is activated inside the component')

const Template: ComponentStory<typeof UncontrolledRating> = (args: UncontrolledRatingPropsType ) => <UncontrolledRating {...args} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
defaultValue: 0,
    onChange: callback
 };
export const Rating1 = Template.bind({});
Rating1.args = {
    defaultValue: 1,
    onChange: callback
};
export const Rating2 = Template.bind({});
Rating2.args = {
    defaultValue: 2,
    onChange: callback
};
export const Rating3 = Template.bind({});
Rating3.args = {
    defaultValue: 3,
    onChange: callback
};
export const Rating4 = Template.bind({});
Rating4.args = {
    defaultValue: 4,
    onChange: callback
};export const Rating5 = Template.bind({});
Rating5.args = {
    defaultValue: 5,
    onChange: callback
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
