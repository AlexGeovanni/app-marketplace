import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

import img1 from "../../assets/imgs/man-clothes.jpeg";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function OffProduct() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const product = [
    {
      id: 1,
      name: "Gorra1",
      off: "15",
    },
    {
      id: 1,
      name: "Gorra2",
      off: "15",
    },
    {
      id: 1,
      name: "Gorra3",
      off: "15",
    },
    {
      id: 1,
      name: "Gorra4",
      off: "15",
    },
    {
      id: 1,
      name: "Gorra5",
      off: "15",
    },
    {
      id: 1,
      name: "Gorra6",
      off: "15",
    },
    {
      id: 1,
      name: "Gorra7",
      off: "15",
    },
  ];
  //   slidesPerView={width <768 ? 2 : width < 992 && width >= 768? 3 : 5}
  //   spaceBetween={width <768 ? 6 :10}

  return (
    <>
      <section className="mt-3 mt-md-5">
        <div className="sec m-auto p-2 p-md-3 py-2 px-lg-4 ">
          <h2 className="">Local-marketplace ofertas</h2>
          <div className="mt-4 ">
            <Swiper
              slidesPerView={
                width < 768 ? 2 : width < 992 && width >= 768 ? 2.2 : 3.2
              }
              spaceBetween={width < 768 ? 6 : 10}
              loop={true}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper "
            >
              {product.map((item) => {
                return (
                  <SwiperSlide key={item.name}>
                    <div className=" card-carousel rounded border border-2 ">
                      <Link to={"/detail"} className="card-img">
                        <img className="" src={img1} alt="" />
                      </Link>
                      <div className="p-2 py-3  information__card-carousel ">
                        <Link
                          to={"/detail"}
                          className=" text-decoration-none m-0"
                        >
                          <p className="title text-truncate m-0">
                            Sudadera para hombres solo color verde
                          </p>
                        </Link>
                        <p className="mt-1 price fw-bold m-0 ">
                          $100MXN{" "}
                          <span className="text-danger text-decoration-line-through fw-normal">
                            $150MXN
                          </span>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
