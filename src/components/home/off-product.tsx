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
      <section className="mt-3 mt-md-5">
        <div className="sec m-auto p-2 p-md-3 py-2 px-lg-4 ">
          <h2 className="">Local-marketplace ofertas</h2>
          <div className="mt-4 ">
            <Swiper
              slidesPerView={
                width < 768 ? 2 : width < 992 && width >= 768 ? 2.2 : 3.6
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
                    <div className="card-carousel rounded border border-2">
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
