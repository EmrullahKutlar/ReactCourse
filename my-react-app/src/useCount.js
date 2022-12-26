import { useState } from "react"

export const useCount=(initialValue=0)=>{
    const [state,setState]=useState(initialValue)

    const increase=()=>{
        setState((state)=>state+1)
    }
    const decrease=()=>{
        setState((state)=>state-1)
    }
    const setZero=()=>{
        setState(0)
    }

    return[state,increase,decrease,setZero]
}