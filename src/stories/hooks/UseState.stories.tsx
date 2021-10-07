import React, {useMemo, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {log} from "util";


export default {
    title: 'UseState advanced',
}


// обычная работа хука
export const UseState_Example = () => {
    const [counter, setCounter] = useState(1) // [1], function(newValue)]
    return <>
        <button onClick={()=>setCounter(counter+1)}>counter++ </button>
        <div>{counter}</div>

    </>
}

function generateData(){
    console.log('generateData')
    let TempResultA = 1
    for (let i = 1; i <= 3; i++) {
        //специально создаём долгий цикл, чтобы имитировать много длительных операций, перерисовок
        let fake = 0
        while (fake < 100000000) {
            fake++
            const fakeValue = Math.random()
        }
        console.log('resultA is updated')
        TempResultA = i * TempResultA
    }
    return TempResultA

}
export const UseState_Example_2 = () => {
    console.log("UseState_Example_2 is rendering")


    // если стартовое значение получаем как результат выполнения долговыполняющейся функции
    // то каждый раз при изменении стейта будет перевычисляться initValue - долго
        //  const initValue = generateData()
    //const [counter, setCounter] = useState(initValue)

// сразу передаем фунцию в useState тогда ее результат будет сохранен и не будут перевычислений


    //const initValue = useMemo(generateData, [])


    const [counter, setCounter] = useState(generateData) // [initValue], function(newValue)]


    const changer = (state: number) => {
        debugger
        return ++state
    }
    return <>
        <button onClick={()=>setCounter((state: number) => ++state)}>counter++ </button>
        <div>{counter}</div>

    </>
}