export default function Dashboard() {
  const data = [
    {
      id: 1,
      name: "Producto 1",
      description: "Descripcion 1",
      brand: "nike",
      category: "electronicos",
      price: 10,
      quantity: 10,
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripcion 2",
      brand: "nike",
      category: "electronicos",
      price: 20,
      quantity: 5,
    },
    {
      id: 4,
      name: "Producto 4",
      description: "Descripcion 4",
      brand: "nike",
      category: "electronicos",
      price: 30,
      quantity: 15,
    },
    {
      id: 5,
      name: "Producto 5",
      description: "Descripcion 5",
      brand: "nike",
      category: "electronicos",
      price: 30,
      quantity: 15,
    },
    {
      id: 6,
      name: "Producto 6",
      description: "Descripcion 6",
      brand: "nike",
      category: "electronicos",
      price: 30,
      quantity: 15,
    },
    {
      id: 7,
      name: "Producto 7",
      description: "Descripcion 7",
      brand: "nike",
      category: "Ropa",
      price: 30,
      quantity: 15,
    },
    {
      id: 8,
      name: "Producto 8",
      description: "Descripcion 8",
      brand: "nike",
      category: "Ropa",
      price: 30,
      quantity: 15,
    },
    {
      id: 9,
      name: "Producto 9",
      description: "Descripcion 9",
      brand: "nike",
      category: "Ropa",
      price: 30,
      quantity: 15,
    },
    {
      id: 10,
      name: "Producto 10",
      description: "Descripcion 10",
      brand: "nike",
      category: "Ropa",
      price: 30,
      quantity: 15,
    },
  ];

  return (
    <>
      <section className="">
        <div className="container-w p-3 px-lg-4 mb-4">
          <ul className="nav nav-underline j">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pedidos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="container-w p-3 px-lg-4 mb-4">
          <div className=" ">
            <h1 className="fs-3">Mis productos</h1>
            <div className="row g-2">
              <div className="col-3">
                <div className="rounded  border p-2 ">
                  <h3 className="fs-5">Agrega nuevo producto</h3>
                  <p>Ingrese los datos del producto para crearlo.</p>
                  <button type="button" className="btn btn-primary w-100">
                    Crear
                  </button>
                </div>
              </div>
              <div className="col-3">
                <div className="rounded  border p-2 ">
                  <h3 className="fs-5">Producto activos</h3>
                  <p className="fs-1 text-center">50</p>
                </div>
              </div>
              <div className="col-3">
                <div className="rounded  border p-2 ">
                  <h3 className="fs-5">Producto inactivos</h3>
                  <p className="fs-1 text-center">50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="container-w p-3 ">
          <div className="w-50">
            <div className="d-flex gap-2">
              <select className="form-select">
                <option>Todos</option>
                <option value="electronicos">Electrónicos</option>
                <option value="ropa">Ropa</option>
              </select>
              <select className="form-select">
                <option>Todos</option>
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
              </select>
            </div>
          </div>
        </header>
        <div className="container-w p-3  ">
          <div className=" border p-0">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Marca</th>
                  <th scope="col">categoria</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody className="">
                {data.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.brand}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <div className="dropdown">
                        <a
                          className=""
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrows-vertical cp"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.354 14.854a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 13.293V2.707L6.354 3.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 2.707v10.586l1.146-1.147a.5.5 0 0 1 .708.708z" />
                          </svg>
                        </a>
                        <ul className="dropdown-menu bg-white shadow border p-0 overflow-hidden">
                          <li>
                            <a className="dropdown-item py-2" href="#">
                              Editar
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-pencil-square ms-1"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item py-2" href="#">
                              Eliminar
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-trash3 ms-1"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item py-2" href="#">
                              Desactivar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* <tfoot>...</tfoot> */}
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
