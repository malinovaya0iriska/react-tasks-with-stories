import React, {useMemo, useState} from 'react';
import {ItemType, Select} from "../../components/Select/Select";


export default {
    title: 'UseMemo demo',
}


export const DifficultExample = () => {
    const [a, setA] = useState<number>(1)
    const [b, setB] = useState<number>(2)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let TempResultA = 1
        for (let i = 1; i <= a; i++) {
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
    }, [a])


    for (let i = 1; i <= b; i++) {
        console.log('resultB is updated')
        //обычное мгновенное вычисление факториал числа(!b)
        resultB = i * resultB
    }
    return <>
        {/* //приводим значение из инпута к числу двумя способами*/}
        <input value={a} onChange={e => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={e => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>Result A {resultA}</div>
        <div>Result B {resultB}</div>
    </>
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret is rendering')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
//create cash of Users object. if the object is the same, don't render the tree again
//using shallow copy is enough
const Users = React.memo(UsersSecret)


export const UseMemoPlusReactMEMO = () => {


    const [counter, setCounter] = useState(1)
    const [users, setUsers] = useState(['Dimych', 'Sasha', 'Victor', 'Igor', 'Katya'])

    const newUsers = useMemo(() => {
            return users.filter(u => u.toLowerCase().indexOf('a') > -1)
        },
        [users])

    const addUser = () => {
        console.log('new user is added')
        const newUsers = [ ...users, 'Sveta' + new Date().getTime()]
        return setUsers(newUsers)
    }
    return <>
        <p>жми кнопку и увидишь в консоли, что перерисовка только у фильтрованных юзеров, остальные сохраняются</p>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        {counter}
        <button onClick={addUser}>add user</button>


        <p>c filter такой список, он перерисовывается. Filter вщзвращает новый массив. React рендерит по-новой</p>
        <Users users={users.filter(u => u.toLowerCase().indexOf('a') > -1)}/>
        <p>без UseMemo выводит такой список и он не перерисовывается. благодаря ReactMemo</p>
        <div><Users users={users}/></div>
        <br/>
        <p>c UseMemo</p>
        <Users users={newUsers}/>
    </>
}



export const ExampleWithSelectedMenu = () => {
    const cities = [{title: 'Minsk', population: 140000, country: 'Belarus', value: 1},
        {title: 'Moscow', population: 171000, country: 'Russia', value: 2},
        {title: 'Kiev',population: 60000, country: 'Ukraine', value: 3},
        {title: 'Braslav', population: 10000, country: 'Belarus', value: 4},
        {title: 'Kazan', population: 155000,  country: 'Russia', value: 5},
    ]

    const [value, setValue] = useState(cities)
    const [counter, setCounter] = useState(1)

    const citiesWithM:ItemType[] = useMemo(()=>{
        return cities.filter(c => c.title.toLowerCase().indexOf('m') > -1)},
        [cities])
    const citiesWithHugePopulation:ItemType[] = useMemo(()=>{
            return cities.filter(c => c.population>100000)},
        [cities])
    const russianCities:ItemType[] = useMemo(()=>{
            return cities.filter(c=>c.country==='Russia')},
        [cities])
    return (<>

        <button onClick={() => setCounter(counter + 1)}> +</button>
        {counter}

        <Select value={value}
                items={citiesWithM}
                onChange={setValue}
        />
        <Select value={value}
                items={citiesWithHugePopulation}
                onChange={setValue}
        />
        <Select value={value}
                items={russianCities}
                onChange={setValue}
        />
    </>)
};
