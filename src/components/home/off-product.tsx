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
      off: 31,
      name: "Playera",
      url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
      size: "M",
      brand: "Gucci",
      color: "Celeste",
      price: 189,
      gender: "Mujer"
    },
    {
      id: 2,
      off: 43,
      name: "Playera",
      url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
      size: "X",
      brand: "Gucci",
      color: "Azul",
      price: 504,
      gender: "Mujer"
    },
    {
      id: 3,
      off: 42,
      name: "Camisa",
      url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
      size: "X",
      brand: "Gucci",
      color: "Amarillo",
      price: 226,
      gender: "Mujer"
    },
    {
      id: 4,
      off: 63,
      name: "Playera",
      url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
      size: "XL",
      brand: "NOVA",
      color: "Azul",
      price: 142,
      gender: "Mujer"
    },
    {
      id: 5,
      off: 46,
      name: "Camisa",
      url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
      size: "M",
      brand: "Gucci",
      color: "Red",
      price: 548,
      gender: "Kids"
    },
    {
      id: 6,
      off: 41,
      name: "Camisa",
      url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
      size: "X",
      brand: "NOVA",
      color: "Celeste",
      price: 235,
      gender: "Mujer"
    },
    {
      id: 7,
      off: 61,
      name: "Playera",
      url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
      size: "X",
      brand: "NOVA",
      color: "Amarillo",
      price: 299,
      gender: "Mujer"
    },
    {
      id: 8,
      off: 15,
      name: "Playera",
      url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
      size: "S",
      brand: "LEVI`S",
      color: "Blanco",
      price: 309,
      gender: "Mujer"
    },
  ];
  //   slidesPerView={width <768 ? 2 : width < 992 && width >= 768? 3 : 5}
  //   spaceBetween={width <768 ? 6 :10}

  return (
    <>
      <section className="">
        <div className="container-w p-3 px-lg-4 ">
          <h2 className="fw-normal fs-4 m-0 mb-3 text-center ">REBAJAS</h2>
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
