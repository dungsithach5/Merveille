<template>
    <swiper
      :slidesPerView="4"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img
          src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/GettyImages-1428409859.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/GettyImages-1161996776.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/pexels-kyle-roxas-2122294.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/pexels-lina-kivaka-1458758.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/pexels-anthony-leong-2092906.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/gettyimages-949524348-2048x2048-1.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/GettyImages-1370267546.jpg"
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
  

  