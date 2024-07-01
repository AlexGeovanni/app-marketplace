import{useState} from 'react';


export const CountItem =()=>{
    const [count,setCount] = useState(1)

    const handleCouterAdd=()=> setCount(count+1);
    const handleCouterRemove=()=>count > 1? setCount(count-1) : setCount(1) 
    const handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
        const value = e.target.value;
        if(value !== '' || /^\d+$/.test(value)){
            setCount(parseInt(value))
        }
        setCount(count)
    }

    return{handleCouterAdd,handleCouterRemove,handleOnChange,count}

}