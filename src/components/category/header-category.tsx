export default function HeaderCategory() {
  return (
    <header className="container-w px-3 py-2 px-lg-4 header__category-body d-flex justify-content-strech justify-content-md-start ">
      <div
        className="  d-md-none"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
      >
        <a
          href="#"
          className=" d-flex justify-content-center text-black align-items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"
            />
          </svg>
          <span>Ordenar</span>
        </a>
      </div>

      <div
        className=" px-4 d-none d-md-block"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRightOrder"
        aria-controls="offcanvasRightFilter"
      >
        <a
          href="#"
          className=" d-flex justify-content-center text-black align-items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"
            />
          </svg>
          <span>Ordenar</span>
        </a>
      </div>

      <div
        className=" px-4  "
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRightFilter"
        aria-controls="offcanvasRightFilter"
      >
        <a
          href="#"
          className="d-flex justify-content-center text-black align-items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-filter-left"
            viewBox="0 0 16 16"
          >
            <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>
          <span>Filtar</span>
        </a>
      </div>
    </header>
  );
}
