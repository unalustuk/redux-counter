import { legacy_createStore } from "redux"

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
    if (action.type === "increment") {
        return {
            ...state,
            counter: state.counter + 1,
        }
    }
    if (action.type === "increase") {
        return {
            ...state,
            counter: state.counter + action.amount,
        }
    }

    if (action.type === "decrement") {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }
    if (action.type === "toggle") {
        return {
            ...state,
            showCounter: !state.showCounter,
        }
    }

    return state
}

const store = legacy_createStore(counterReducer)

export default store
