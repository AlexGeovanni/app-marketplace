import{useState} from 'react';


export const CountItem =()=>{
    const [count,setCount] = useState(1)

    const handleCouterAdd=()=> setCount(count+1);
    const handleCouterRemove=()=> {
        count > 1? setCount(count-1) : setCount(1) 
    };

    return{handleCouterAdd,handleCouterRemove,count}

}