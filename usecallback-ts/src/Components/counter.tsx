import { useState,useCallback,useMemo } from "react";

const Counter = () => {

    const [count,setCount] = useState<number>(0);
    const [expCount,setexpCount] = useState<number>(1);

    const incrementCounter = useCallback(() => {setCount(count + 1)},[count])
    const expensvalue = useMemo(() => {setexpCount(expCount*2); return expCount},[count])

    return (

       

        <div style={{display : 'flex',flexDirection : 'column', alignItems : 'center'}}>

            <div style={{marginTop : '23px'}}>2<sup>{count}</sup> : {expensvalue}</div>
            <button onClick={incrementCounter} style={{marginTop : '12px'}}>increment</button>

        </div>

    );

}

export default Counter;