
export default function BurgerIcon() {
  return (
    <button
      className="navbar-toggler order-first px-2 border-0 text-black"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 6l16 0" />
        <path d="M4 12l16 0" />
        <path d="M4 18l16 0" />
      </svg>
    </button>
  );
}
