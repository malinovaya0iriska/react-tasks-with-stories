import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ItemType, Select, SelectPropsType} from "./Select";
import Accordion, {AccordionPropsType} from "../Accordeon/Accordeon.tsx/Accordeon";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;
const Template: ComponentStory<typeof Select> = (args: SelectPropsType) => <Select {...args} />;
const callbackOnClick = action('Clicked an item with value: ')

export const Base = Template.bind({});
Base.args = {
    value: '3',
    items: [
        {title: 'Sparrow', value: '1',},
        {title: 'Crown', value: '2',},
        {title: 'Tit', value: '3',},
        {title: 'Stork', value: '4',},
    ],
    onChange: callbackOnClick,
};
export const WithoutValue = () => {

    const  [value, setValue] = useState(null)

    return (
        <Select value ={value}
                items={[
                    {title: 'January', value: 1},
                    {title: 'February', value: 2},
                    {title: 'March', value: 3},
                    {title: 'April', value: 4}
                ]}
                onChange={setValue}
        />
    )
};

export const SelectedMenu = () => {

    const  [value, setValue] = useState('2')


    return (
        <Select value ={value}
            items={[
                {title: 'January', value: 1},
                {title: 'February', value: 2},
                {title: 'March', value: 3},
                {title: 'April', value: 4}
            ]}
                onChange={setValue}
        />
    )
};

