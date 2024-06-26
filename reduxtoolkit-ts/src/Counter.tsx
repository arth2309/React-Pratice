import { counterActions } from "./store";
import {useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";



const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector((state : RootState) => state.counter.counter);
    

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