import { NavLink } from "react-router-dom";

interface SubLinks {
  category: string
  title: string
  path: string
}

export default function SubItem() {
  const CATEGORY: string[] = ["electronic", "clothes"];
  const SUB_ITEMS:SubLinks[] = [
    {
      category: "electronic",
      title: "Electronicos",
      path: "/electronicos",
    },
    {
      category: "clothes",
      title: "Hombre",
      path: "/ropa/hombre",
    },
    {
      category: "clothes",
      title: "Mujer",
      path: "/ropa/mujer",
    },
    {
      category: "clothes",
      title: "kids",
      path: "/ropa/kids",
    },
  ];

  return (
    <>
      {CATEGORY.map((item, i) => (
        <UlComponent
          key={i}
          items={SUB_ITEMS.filter((items) => item === items.category)}
        />
      ))}
    </>
  );
}


interface Props {
  items: SubLinks[];
}
const UlComponent = ({ items }: Props) => {
  const ClassLink = "dropdown-item ";
  return (
    <ul className="list-group rounded-0 p-0 ">
      {items.map((item, index) => (
        <li
          key={index}
          className="list-group-item p-0  border-0"
          data-bs-dismiss="offcanvas"
          data-bs-target="#offcanvasResponsive"
        >
          <NavLink
            to={item.path}
            className={({ isActive }: { isActive: boolean }): string =>
              (isActive ? "fw-semibold " : "dropdown-item ") + ClassLink
            }
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
