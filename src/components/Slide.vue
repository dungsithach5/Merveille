<template>
    <swiper
      :slidesPerView="3"
      :spaceBetween="50"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img
          src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/louis-hansel-cH5IPjaAYyo-unsplash.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/lasse-bergqvist-TYj7ey6xn9M-unsplash.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/GettyImages-1446478827.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/GettyImages-1469272213.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/GettyImages-662284029.jpg"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </template>
  
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  
  import '../assets/main.css';
  
  // Import required modules
  import { Pagination } from 'swiper/modules';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
  </script>
  

  