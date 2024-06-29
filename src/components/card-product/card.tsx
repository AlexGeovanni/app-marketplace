import { Link } from "react-router-dom";
import img1 from "../../assets/imgs/man-clothes.jpeg";

type Props = {
  name: string;
};

export default function CardProduct({ name }: Props) {
  return (
    <>
      <Link to={"/detail"} className="card-img">
        <img className="" src={img1} alt="" />
      </Link>
      <div className="p-2  information__card-carousel ">
        <Link to={"/detail"} className=" text-decoration-none m-0">
          <p className="title text-truncate m-0">
            {name} para hombres solo color verde
          </p>
        </Link>
        <p className=" price fw-bold m-0 ">
          $100MXN{" "}
          <span className="text-danger text-decoration-line-through fw-normal">
            $150MXN
          </span>
        </p>
      </div>
    </>
  );
}
