import React, {useEffect, useState} from "react";
import {Clock} from "../../components/Clock/Clock";


export default {
    title: 'UseEffect_Clock',
    component: Clock,
}

export const BaseAnalogExample = () => {
    return <div>
        <Clock mode={'analog'}/></div>
}
export const BaseDigitalClock = () => {
    return <Clock mode={'digital'}/>
}
/*
const get2DigitString = (num: number) => num < 10 ? '0' + num : num

export const UseEffect_Clock = () => {
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

    return <>
        <div>
            {get2DigitString(date.getHours())}
            :
            {get2DigitString(date.getMinutes())}
            :
            {get2DigitString(date.getSeconds())}
        </div>


    </>
}
*/
