import React, {useEffect, useState} from "react";
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";


type PropsType = {
    mode?: 'analog' | 'digital'
}
export type  ClockViewType = {
    date: Date
}
export const Clock: React.FC<PropsType> = (props) => {
    // console.log("UseEffect_Clock Component is rendering")

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log('useEffect ')

        const clockInterval = setInterval(() => {
                console.log('tick')
                setDate(new Date())
            }
            , 1000)

        //делаем возврат из функции для зачистки эффекта после смерти компоненты ил ее перерисовке
        return () => {
            clearInterval(clockInterval)
        }
    }, [])


    let view;
    switch (props.mode) {
        case "analog":
            view = <AnalogClock date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClock date={date}/>
    }
    return <>
        {view}
    </>
}
