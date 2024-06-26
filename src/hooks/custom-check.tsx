import { useState } from "react";


export default function CustomCheck(){
    const[check,setCheck] =useState(true)

    const ChangeCheck=()=>{
        setCheck(!check)
    }
    return{check,ChangeCheck}
}