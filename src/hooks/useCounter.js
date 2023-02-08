import { useState } from "react"


export const useCounter = (initialValue = 10) => {

    const  [counter, setCounter] = useState(initialValue);

    const incremenet = (value = 1) => {
        setCounter(counter + value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    const decrement = (value = 1) => {
        (counter == 0) ? 0 : setCounter(counter - value);
        
    }


    return {
        counter,
        incremenet,
        reset,
        decrement
    }
}