const redux = require('redux');
const createStore = redux.createStore

const BUY_CAKE = "BUY_CAKE";
// const BAKE_CAKE = "BAKE_CAKE";

function buyCake( ) {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  }
}

// function bakeCake() {
//     return {
//         type: BAKE_CAKE,
//         info: "Second redux action"
//     }
// }

// (previousState, action) => newState

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        // break;
        // case BAKE_CAKE: return{
        //     ...state,
        //     numOfCakes: state.numOfCakes + 1
        // }
        default: return state
    }
}

const store = createStore(reducer)
console.log('Initial state', store.getState())
const unSubscribe = store.subscribe(() => console.log('Update state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
// store.dispatch(bakeCake())
unSubscribe()

