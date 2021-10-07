import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {OnOff, OnOffPropsType} from './OnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff button',
     component: OnOff,
} as ComponentMeta<typeof OnOff>;
const callback = action('on or off  is fired')

const Template: ComponentStory<typeof OnOff> = (args:OnOffPropsType) => <OnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    state: true,
    setOnButton: callback,
};
export const OffMode = Template.bind({});
OffMode.args = {
    state: false,
    setOnButton: callback,
};
export const ChangingMode = ()=> {
    const [mode, setMode]= useState<boolean>(false)
    return (
        <OnOff state={mode} setOnButton={setMode}/>
    )
}

// export default {
//     title: 'OnOff button',
//     component: OnOff,
// } as ComponentMeta<typeof OnOff>;
//
// const callback = action('on or off clicked')
//
// export const OnModeButton = () => <OnOff state={true} setOnButton={callback} />
// export const OffModeButton = () => <OnOff state={false} setOnButton={callback} />
//
// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(false)
//     return (
//         <OnOff setOnButton={setValue} state={value}/>
//     )
// }
//
