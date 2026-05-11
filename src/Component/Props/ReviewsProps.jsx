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
              reviewhead="I’ve completed my UI/UX course from Alram Academy, Jaipur, and my experience here was truly the best! The environment is very positive and friendly. My teacher Somesh Sir has a very calm nature and always motivated me throughout the course. The owner is also very supportive and helpful. "
              reviewimg={review1}
              reviewname="Tisha Megnani"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Review
              reviewimg={review2}
              reviewhead="Alram Academy is the best institute in Jaipur for those seeking top-notch training in E-Commerce . Their approach focuses on practical knowledge, ensuring students gain hands-on experience rather than just theoretical understanding. I had an exceptional learning experience, and the instructors, particularly Mr. Prashant Kaushik , were incredibly supportive and guided me through my projects..
"
              reviewname="Preeti Sadhwani"
            />
          </SwiperSlide>
        

          <SwiperSlide>
            <Review
              reviewimg={review3}
              reviewhead="I’ve completed my UI/UX course from Alram Academy, Jaipur, and my experience here was truly the best! The environment is very positive and friendly. My teacher Somesh Sir has a very calm nature and always motivated me throughout the course. The owner is also very supportive and helpful.
"
              reviewname="Gati Jain"
            />
          </SwiperSlide>

  <SwiperSlide>
            <Review
              reviewhead="I’ve completed my UI/UX course from Alram Academy, Jaipur, and my experience here was truly the best! The environment is very positive and friendly. My teacher Somesh Sir has a very calm nature and always motivated me throughout the course. The owner is also very supportive and helpful.
"
              reviewimg={review1}
              reviewname="Tisha Megnani"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Review
              reviewimg={review2}
              reviewhead="Alram Academy is the best institute in Jaipur for those seeking top-notch training in E-Commerce . Their approach focuses on practical knowledge, ensuring students gain hands-on experience rather than just theoretical understanding. I had an exceptional learning experience, and the instructors, particularly Mr. Prashant Kaushik , were incredibly supportive and guided me through my projects.
"
              reviewname="Preeti Sadhwani"
            />
          </SwiperSlide>
        

          <SwiperSlide>
            <Review
              reviewimg={review3}
              reviewhead="I’ve completed my UI/UX course from Alram Academy, Jaipur, and my experience here was truly the best! The environment is very positive and friendly. My teacher Somesh Sir has a very calm nature and always motivated me throughout the course. The owner is also very supportive and helpful.
"
              reviewname="Gati Jain"
            />
          </SwiperSlide>

        </Swiper>

      </div>
    </div>
  );
}

export default ReviewsProps;
