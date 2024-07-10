import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

//import { useEffect, useState } from "react";
import CardProduct from "../card-product/card";
import CustomResize from "../../hooks/custom-resize";
export default function OffProduct() {
  const {width}= CustomResize()

  const data = [
    {
      id: 1,
      name: "Gorra1",
      brand: "Nike",
      size: "S",
      category: "hombre",
      price: 100,
      off: 10,
    },
    {
      id: 2,
      name: "Gorra2",
      brand: "Adidas",
      size: "S",
      category: "hombre",
      price: 120,
      off: 5,
    },
    {
      id: 3,
      name: "Gorra3",
      size: "M",
      brand: "Puma",
      category: "hombre",
      price: 150,
      off: 20,
    },
    {
      id: 4,
      name: "Gorra4",
      size: "L",
      brand: "Reebok",
      category: "hombre",
      price: 180,
      off: 30,
    },
    {
      id: 5,
      name: "Gorra5",
      size: "L",
      brand: "Puma",
      category: "hombre",
      price: 180,
      off: 30,
    },
    {
      id: 6,
      name: "Gorra6",
      size: "S",
      brand: "Nike",
      category: "hombre",
      price: 180,
      off: 15,
    },
  ];
  //   slidesPerView={width <768 ? 2 : width < 992 && width >= 768? 3 : 5}
  //   spaceBetween={width <768 ? 6 :10}

  return (
    <>
      <section className="">
        <div className="container-w p-3 px-lg-4 ">
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
              {data.map((product,i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="card-p">
                      <CardProduct product={product} />
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
