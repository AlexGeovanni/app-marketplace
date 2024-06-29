import NavItem from "./nav-item";

export default function NavBar(){
    return(
        <div className="offcanvas-body p-0  d-flex flex-column justify-content-between">
            <NavItem />
            <div className="border  gap-2 p-2 d-flex d-lg-none">
                <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Crear cuenta</a>
                </div>
                <div className="border"></div>
                <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Iniciar sesión</a>
                </div>
            </div>
          </div>
    )
}