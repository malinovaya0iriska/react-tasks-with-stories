//useEffect - для занесения туда sideeffects (аналог методов жизненного цикла)
//для  state и синхронизации, аналог ComponentWillUnmount


import React, {useCallback, useEffect, useMemo, useState} from "react";
import {log} from "util";

export default {
    title: 'UseEffect',
}

export const UseEffect_Example = () => {
    console.log("UseEffect_Example is rendering")
    const [counter, setCounter] = useState(1) // [1], function(newValue)]

    const [fake, setFake] = useState(1)
    // отрабатывает после отрисовки компоненты
    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
        //примеры сайдэффектов, чтобы сохранить чистоту функций, компонент
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementByID
        //document.title='User'
    },)

    useEffect(() => {
        console.log('useEffect only first render(componentDidMount')
        document.title = counter.toString()
    }, [])

    useEffect(() => {

        console.log('useEffect depends on COUNTER')
        document.title = counter.toString()
    }, [counter])

    return <>
        <div>Hello, {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>counter++</button>
        <button onClick={() => setFake(fake + 1)}>fakeUpdate</button>
        {fake}

    </>
}


export const UseEffect_SetTimeOut = () => {
    console.log("UseEffect_SetTimeOut Component is rendering")
    const [counter, setCounter] = useState(1) // [1], function(newValue)]

    const [fake, setFake] = useState(1)


    useEffect(() => {
        console.log('useEffect ')
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)

    }, [counter])

    return <>
        <div>Hello, {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>counter++</button>
        <button onClick={() => setFake(fake + 1)}>fakeUpdate</button>
        {fake}

    </>
}
export const UseEffect_SetInterval = () => {
    console.log("UseEffect_SetInterval Component is rendering")
    const [counter, setCounter] = useState(1) // [1], function(newValue)]

    const [fake, setFake] = useState(1)


    useEffect(() => {
        console.log('useEffect ')
        const interval = setInterval(() => {
            //counter = 1 initialState, потому что берёт еЁ из замыкания
            //из сохраненного начального значения, а в setCounter мы говорим взять новое и его уже изменять
            //console.log('tick:'+ counter)
            setCounter(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }

    }, [])

    return <>
        <div>Hello, {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>counter++</button>
        <button onClick={() => setFake(fake + 1)}>fakeUpdate</button>
        {fake}

    </>
}

export const ResetUseEffect = () => {
    const [counter, setCounter] = useState(1) // [1], function(newValue)]

    console.log("ResetUseEffect Component is rendering with value: " + counter)
    useEffect(() => {
        console.log('Effect occurred: ' + counter)
        return () => {
            console.log('RESET EFFECT ' + counter) // срабатывает при умирании компоненты, перед перерисовкой(той же компоненты или новой)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }
    return <>
        <div>Hello: {counter}</div>
        <button onClick={increase}>counter++</button>

    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState(' ') // [1], function(newValue)]

    console.log("KeysTrackerExample Component is rendering with value: " + text)
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state => state + e.key))
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler) // зачищаем эффект, обрубаем подпису и работу сетСтейта
        }
    }, [text])


    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState(' ') // [1], function(newValue)]

    console.log("SetTimeoutExample Component is rendering with value: " + text)
    useEffect(() => {

        const timeOut = setTimeout(() => setText('3 sec left'), 3000)
        return () => {
            clearTimeout(timeOut)
        }
    }, [text])


    return <>
        Text: {text}
    </>
}

