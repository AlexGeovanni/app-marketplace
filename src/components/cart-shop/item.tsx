import { toast } from "sonner";
import { CountItem } from "../../hooks/custom-count";

export default function Item() {
  const text = "Acme Wireless Headphones";
  const { handleCouterAdd, handleCouterRemove, count } = CountItem();
  return (
    <>
      <div className="">
        <div className=" gap-1 d-flex align-items-center justify-content-between ">
          <div className="rounded overflow-hidden">
            <img
              src="https://res.cloudinary.com/dyxqrjcpm/image/upload/v1716187413/vaes6cqamhwmxpnqknmu.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="me-auto">
            <p className=" m-0 ">{text}</p>
            <p className="opacity-75">High-quality sound and comfort</p>
          </div>
          <div className=" d-flex gap-2 align-items-center">
            <button
              className="btn p-1 border  rounded-0"
              onClick={handleCouterRemove}
              disabled={count < 2}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
              </svg>
            </button>
            <div>{count}</div>
            <button className="p-1 border rounded-0" onClick={handleCouterAdd}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-2 pe-0 d-flex justify-content-between align-items-center">
          <p className="fw-semibold">
            $2500MXN{" "}
            <span className="me-2 fw-normal text-black-50 text-decoration-line-through">
              $250MXN
            </span>
          </p>
          <div>
            <button
              className="btn-delete border-0 fw-bold rounded text-danger "
              onClick={() => {
                toast.success("Producto eliminado", {
                  description: text,
                });
              }}
            >
              Quitar
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
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
