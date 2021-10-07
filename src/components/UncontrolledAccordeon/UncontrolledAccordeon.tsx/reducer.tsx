export const TOGGLE_MENU = 'Toggle'
export type StateType ={
    collapsed: boolean
}
export type ActionType ={
    type: string
}
export const reducer =(state: StateType, action:ActionType)=>{
    switch (action.type){
        case TOGGLE_MENU:
            return {...state,
                collapsed: !state.collapsed}
        default:
            throw new Error('Invalid Action Type')
    }
    return state
}