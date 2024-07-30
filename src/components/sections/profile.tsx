import { useAppSelector } from "../../redux/hooks";
import ProfileIcon from "../icons/profileIcon";

export default function Profile() {
  const { isLoggedIn, user } = useAppSelector((state) => state.authUser);
  if (!isLoggedIn && !user) return <h1>Nada puto</h1>;
  return (
    <>
      <section>
        <div className="container-w p-3 px-lg-4 mb-4">
          <h1 className="fw-semibold fs-2 mb-4">Mi perfil</h1>
          <div className="d-flex gap-4">
            <ProfileIcon />
            <div>
              <h3 className="fs-4 fw-bold m-0">{user.name}</h3>
              <p className="fs-6 fw-semibold text-muted">@{user.role}</p>
            </div>
          </div>
          <div>
            <h3 className="fs-5">Mas informacion</h3>
            <p>Correo:{user.email}</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container-w p-3 px-lg-4 table-responsive">
          <h2 className=" fs-5">Mis compras</h2>
          <div className="table-responsive">
            <table className=" table">
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
        </div>
      </section>
    </>
  );
}
