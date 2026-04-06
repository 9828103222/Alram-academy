import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import review1 from "../../assets/review1.jpg";
import review2 from "../../assets/review2.jpg";
import review3 from "../../assets/review3.jpg";

import Review from "./Review";

function ReviewsProps() {
  return (
    <div className="reviewsection">
      <div className="container">
        
        <div className="reviewinfo">
          <h1>What Our Students Say</h1>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
        >

          <SwiperSlide>
            <Review
              reviewhead="This academy completely changed my confidence! I learned e-commerce from scratch and even built my own website."
              reviewimg={review1}
              reviewname="Tisha Megnani"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Review
              reviewimg={review2}
              reviewhead="Best decision ever! The e-commerce modules plus the web development training helped me launch my own online store."
              reviewname="Preeti Sadhwani"
            />
          </SwiperSlide>
        

          <SwiperSlide>
            <Review
              reviewimg={review3}
              reviewhead="Amazing experience! I understood SEO, product listing, and website creation all in one place."
              reviewname="Gati Jain"
            />
          </SwiperSlide>

  <SwiperSlide>
            <Review
              reviewhead="This academy completely changed my confidence! I learned e-commerce from scratch and even built my own website."
              reviewimg={review1}
              reviewname="Tisha Megnani"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Review
              reviewimg={review2}
              reviewhead="Best decision ever! The e-commerce modules plus the web development training helped me launch my own online store."
              reviewname="Preeti Sadhwani"
            />
          </SwiperSlide>
        

          <SwiperSlide>
            <Review
              reviewimg={review3}
              reviewhead="Amazing experience! I understood SEO, product listing, and website creation all in one place."
              reviewname="Gati Jain"
            />
          </SwiperSlide>

        </Swiper>

      </div>
    </div>
  );
}

export default ReviewsProps;
