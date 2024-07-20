import { useState } from "react";
import NavDashboard from "../dashboard/nav-dashboard";
import Products from "../dashboard/products";
import NewProduct from "../dashboard/new-product";

interface Nav {
  [key: string]: boolean;
}

export default function Dashboard() {
  const [nav, setNav] = useState<Nav>({
    dashboard: true,
    orders: false,
    newProduct: false,
  });

  const handleClick = (item: string) => {
    // Crear un nuevo objeto donde todas las propiedades son false
    const newNavState: Nav = Object.keys(nav).reduce((acc: Nav, key) => {
      acc[key] = false;
      return acc;
    }, {});

    // Establecer el elemento seleccionado en true
    newNavState[item] = true;

    // Actualizar el estado
    setNav(newNavState);
  };

  return (
    <main className="d-none d-lg-block">
      <NavDashboard nav_item={nav} handleClick={handleClick} />
      {!(nav.dashboard || nav.orders || nav.newProduct) && (
        <section
          className=" d-flex align-items-center justify-content-center"
          style={{ minHeight: "75vh" }}
        >
          <div className="">
            <h1 className="display-2">Not Found</h1>
          </div>
        </section>
      )}
      {nav.dashboard && <Products handleClick={handleClick} />}
      
      {nav.newProduct && (<NewProduct />     )}
    </main>
  );
}
