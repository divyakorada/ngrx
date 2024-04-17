import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { changeChannelName, customIncrement, decrement, increment, reset } from "./counter.action";


const _counterReducer = createReducer(initialState, 
on(increment, (state) => {
    return {
        ...state,
        counter: state.counter + 1
    }
}),
on(decrement, (state) => {
    return {
        ...state,
        counter: state.counter - 1
    }
}),
on(reset, (state) => {
    return {
        ...state,
        counter: 0
    }
}),
on(customIncrement, (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return {
       ...state,
       counter: state.counter + action.customValue
    }
}),
on(changeChannelName, state => {
    return {
        ...state,
        channelName: 'Modified Leele Web Dev'
    }
})
)

export function counterReducer(state:any, action:any) {
    return _counterReducer(state, action);
}