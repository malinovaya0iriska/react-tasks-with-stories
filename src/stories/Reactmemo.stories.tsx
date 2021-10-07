import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


export default {
    title: 'Rect.memo demo',
}

const Counter = (props: { count: number }) => {

    return <div>
        {props.count}
    </div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users is rendering')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
//create cash of Users object. if the object is the same, don't render the tree again
//using shallow copy is enough
const Users = React.memo(UsersSecret)

export const ReactMEMO = () => {
    const [counter, setCounter] = useState(1)
    const [users, setUsers] = useState(['Dimych', 'Sasha', 'Victor', 'Igor','Katya'])
    return <>
        <button onClick={()=>setCounter(counter+1)}> + </button>
        <button onClick={()=>setUsers([...users , 'Natasha' + new Date().getTime()])}> add User </button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}
