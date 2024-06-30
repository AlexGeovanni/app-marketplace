import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import CardProduct from "../card-product/card";
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
      <section className="">
        <div className="sec m-auto p-2 p-md-3 py-2 px-lg-4 ">
          <h2 className="fw-normal fs-4 m-0 mb-3 ">REBAJAS</h2>
          <div className=" ">
            <Swiper
              slidesPerView={
                width < 768 ? 2 : width < 992 && width >= 768 ? 2.2 : 3.6
              }
              spaceBetween={width < 768 ? 6 : 18}
              loop={true}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper "
            >
              {product.map((item) => {
                return (
                  <SwiperSlide key={item.name}>
                    <div className="card-p">
                      <CardProduct name={item.name} />
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
