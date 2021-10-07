import {reducer, StateType, TOGGLE_MENU} from "./reducer";

test('collapsed should be true', () => {
//data
    let state: StateType = {
        collapsed: false
    };
// action
    const newCollapsed = reducer(state, {type: TOGGLE_MENU})
// expectation
    expect(newCollapsed.collapsed).toBeTruthy()
})

test('collapsed should be false', () => {
//data
    let state: StateType = {
        collapsed: true
    };
// action
    const newCollapsed = reducer(state, {type: TOGGLE_MENU})
// expectation
    expect(newCollapsed.collapsed).toBeFalsy()
})

test('Error', () => {
//data
    let state: StateType = {
        collapsed: false
    };
// action and expectation
    expect(() => {
        reducer(state, {type: 'FakeType'})
    }).toThrowError()


})