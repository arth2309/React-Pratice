import { counterActions } from "./store";
import {useDispatch, useSelector } from "react-redux";

type CounterState = {
    counter : number,
    showCounter : boolean
}

const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector((state : CounterState) => state.counter);
    const show = useSelector((state : CounterState) => state.showCounter);

    const incrementHandler = () => {

        dispatch(counterActions.increment());
    }


    return(

             <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>

                <div>{counter}</div>
                <button onClick={incrementHandler}>Add</button>
             </div>
 
    );

}

export default Counter;