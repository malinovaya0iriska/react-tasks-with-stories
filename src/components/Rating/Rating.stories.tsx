import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Rating, RatingPropsType, ValueType} from './Rating';
import {Button} from "../../stories/Button";

export default {
    title: 'Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;


const Template: ComponentStory<typeof Rating> = (args: RatingPropsType) => <Rating {...args} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    value: 0,
    onClick: value => {
    }
};
export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
    onClick: value => {
    }
};
export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
    onClick: value => {
    }
};
export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
    onClick: value => {
    }
};

export const Rating4 = Template.bind({});
Rating4.args = {
    value: 4,
    onClick: value => {
    }
};
export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5,
    onClick: value => {
    }
};
export const ChangingRating = () => {
    const [value, setValue] = useState<ValueType>(3)
    return (
        <Rating onClick={setValue} value={value}/>
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
