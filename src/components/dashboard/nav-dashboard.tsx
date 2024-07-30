
interface Props{
  nav_item:{
     [key: string]:boolean
  }
  handleClick:(e:string) => void
}


export default function NavDashboard({nav_item,handleClick}:Props) {

  const nav_name =  ["Dashboard", "Pedidos", "Nuevo producto"]
  
  return (
    <>
      <div className="position-sticky bg-dark " style={{ top: "65px" }}>
        <nav className="container-w  p-2 px-lg-4">
          <ul className="nav nav-underline ">
          {
            Object.keys(nav_item).map((item, index) => (
              <li key={index} className="nav-item">
                <a className={`nav-link text-white ${nav_item[item] && "active"}`} href="#"
                onClick={()=>handleClick(item)}>
                  {nav_name[index]}
                </a>
              </li>
            ))
          }
          </ul>
        </nav>
      </div>
    </>
  );
}
