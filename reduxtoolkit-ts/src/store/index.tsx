import { createSlice, configureStore,PayloadAction,combineReducers} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";



const initialState = {counter : 1, showCounter : true}

interface item  {

    id : number,
    taskname : string,
    description : string
}

interface itemsarray {

    items : item[]

}

const itemintialstate : itemsarray = {

    items : []

} 


const itemSlice = createSlice({
     name : 'task',
     initialState : itemintialstate,
     reducers : {
        addItem(state,action : PayloadAction<item>) {
            state.items.push(action.payload);
        },
        updateItem (state,action : PayloadAction<item>) {

            const {id,taskname,description} = action.payload;
            const existingitem = state.items.find(item => item.id === id)

            if(existingitem)
                {
                    existingitem.taskname = taskname;
                    existingitem.description = description;
                }

        },
        deleteItem (state,action : PayloadAction<number>) {
            state.items = state.items.filter((item) => item.id !== action.payload)
        }
     }
})

const counterSlice = createSlice({

    name : 'counter',
    initialState,
    reducers : {
        increment(state) {

            state.counter++;
            
        },
        decrement(state) {
            state.counter--;
        },

        increase(state,action : PayloadAction<number>) {

            state.counter += action.payload

        },
       
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }

});


const rootreducer = combineReducers({
    counter : counterSlice.reducer,
    item : itemSlice.reducer
})

const store = configureStore({
    reducer : rootreducer,
    
    
});

export const counterActions = counterSlice.actions;
export const itemActions = itemSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export default store;