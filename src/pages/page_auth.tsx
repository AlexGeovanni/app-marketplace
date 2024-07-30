import { useState } from "react";
import Footer from "../components/sections/footer";
import Login from "../components/sections/login";
import SingUp from "../components/sections/sing-up";

export default function PageAuth(){

    const [form,setForm]= useState(true);

    const changeForm = ()=>{
        setForm(!form);
    }

    return(
        <>
        {
            form?
            <Login changeForm={changeForm} />
            :
            <SingUp changeForm={changeForm} />
        }
        <Footer />
        </>
    )
}