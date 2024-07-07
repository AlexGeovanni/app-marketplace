export default function Profile() {
  return (
    <>
      <section>
        <div className="container-w p-3 px-lg-4 mb-4">
          <h1 className="fw-normal mb-4">Mi perfil</h1>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="border border-2 w-50 h-100 rounded-circle">
              <img src="..." className="img-thumbnail" alt="..." />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div>
                <div>
                  <p className="fw-bold m-0">Nombre completo</p>
                  <p className="fs-5">Alex Geovanni Diaz Perez</p>
                </div>
                <div>
                  <p className="fw-bold m-0">Correo electronico</p>
                  <p className="fs-5">Alex Geovanni Diaz Perez</p>
                </div>
                <div>
                  <button type="submit" className="btn btn-primary px-4">
                    Editar informacion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-w p-3 px-lg-4">
            <h2 className=" fs-5">Mis compras</h2>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fecha</th>
      <th scope="col">Estatus</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
      </section>
    </>
  );
}
