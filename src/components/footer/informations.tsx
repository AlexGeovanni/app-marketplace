import SocialNetworks from "./social-netw"


export default function Information(){
    const data_footer=[
        {
            title:"Vende",
            text:["Vender en local Marketplace"," Foros", "Afiliados"],
        },
        {
            title:"Acerca",
            text:["Sobre nosotros", "Privacidad","Terminos y condiciones"],
        },
        {
            title:"Ayuda",
            text:["Centro de ayuda ", "Quejas y sugerencia"],
        },
    ]
    return (
        <>
        {
            data_footer.map((item,index)=>{
                return(
                    <div key={index}>
                        <h3 className="fs-5 fw-bold">{item.title}</h3>
                        {
                            item.text.map((text,index)=>{
                                return(
                                    <p key={index}>{text}</p>
                                )
                            })
                        }
                        {
                            (item.title ) === "Ayuda" && <SocialNetworks />
                        }
                    </div>
                )
            })
        }
        </>
    )
}
