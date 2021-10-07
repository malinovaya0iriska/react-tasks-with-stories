import React, {ChangeEvent, useRef, useState} from 'react';
import {Input} from "./Input";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const UncontrolledInput = Template.bind({});

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState<string>('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    return (<>
            <input onChange={onChange}/>
            <button>SEND</button>
            actual value: {value}
        </>
    )
}

export const GetInputValueByButtonPress = () => {
    const [value, setValue] = useState('')
    const InputRef = useRef<HTMLInputElement>(null)

    return (<>
            <input ref={InputRef}/>
            <button onClick={() => {
                const el = InputRef.current as HTMLInputElement
                setValue(el.value)
            }}
            >SEND
            </button>
            actual value: {value}
        </>
    )
}
export const ControlledInputWithValue = Template.bind({});
ControlledInputWithValue.args = {
    value: 'IT-KAMASUTRA'
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>('')
    const callback = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (<>
        <input value={parentValue} onChange={callback}/>
    </>)
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)
    const callback = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return (<>
        <input type='checkbox' checked={parentValue} onChange={callback}/>
    </>)
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const callback =(e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (<select value={parentValue} onChange={callback}>
        <option> </option>
        <option value={1}>Minsk</option>
        <option value={2}>Braslav</option>
        <option value={3}>Polotsk</option>
        <option value={4}>Vitebsk</option>
        <option value={5}>Grodno</option>
    </select>)
}

