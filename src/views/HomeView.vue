<script setup>
import NavBar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Slide from '../components/Slide.vue'
import Swiper from '../components/Swiper.vue';
import 'swiper/swiper-bundle.css';
</script>

<template>
  <div>
    <!-- Navbar -->
    <NavBar />

    <!-- Hero Image -->
    <img 
      src="../assets/imgs/GettyImages.png" 
      alt="Merveille Culinary Experience" 
      class="h-[600px] w-full object-cover" 
    />

    <!-- Story Section -->
    <div class="max-w-screen-lg mx-auto flex flex-col mt-20">
      <h1 class="SPfont text-center text-6xl text-black">Our Story</h1>
      <h2 class="text-center text-base text-[#5D5D5D] mt-6">
        Merveille is a culinary experience that transcends the ordinary.
        Our chefs are dedicated to creating a unique and unforgettable dining experience that will leave you wanting more.
        From the moment you walk through our doors, you will be transported to a world of culinary excellence.
      </h2>
      <a href="" class="my-6 px-6 py-2 text-black text-center font-semibold text-[14px] w-auto">
        Learn more
        <!-- <img src="../assets/imgs/down-right.png" alt="" class="h-[17px] mt-[1px] ml-[3px]">  -->
      </a>
    </div>

    <!-- Slide Section -->
    <Slide />

    <!-- Flavor fusion catering Section -->
    <div class="max-w-screen-xl mx-auto grid grid-cols-2 py-32">
      <div class="flex flex-col pr-12">
        <span class="SPfont text-6xl">
          Flavor fusion <br> catering
        </span>
        <span class="text-base text-[#5D5D5D] text-left mt-10 mb-7">
          Merveille can bring natural elegance, <br> beautiful decorations & exquisite taste to <br> Weddings, Birthdays,
          and Special Occasions. <br> Our philosophy is to offer our customers <br> purity, quality & great pleasure.
          To view our <br> catering menu, please click below! Custom <br> orders are available!
        </span>
        <a href="" class="font-semibold text-[14px] text-left">
          Learn more
        </a>
      </div>
      <img 
        src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/GettyImages-1185419868-1024x710.jpg" 
        alt="Catering Image"
      />
    </div>

    <!-- Our Menus -->
    <div>

    </div>

    <!-- The chef secrets Section -->
    <div class="max-w-screen-xl mx-auto grid grid-cols-2 py-32">
      <div class="flex flex-col pr-12">
        <span class="SPfont text-6xl">
          The chef <br> secrets
        </span>
        <span class="text-base text-[#5D5D5D] text-left mt-10 mb-7">
          Elegantly harmonious and thoughtfully <br>
          curated, James Kohela skillfully blends the <br>
          flavors and culinary traditions of Italy <br>
          and beyond to craft a unique gastronomic realm <br>
          brimming with delightful surprises and <br>
          artistic mastery.
        </span>
        <a href="" class="font-semibold text-[14px] text-left">
          Learn more
        </a>
      </div>
      <img 
        src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/GettyImages-598223378-1024x710.jpg" 
        alt="Catering Image"
      />
    </div>

    <div class="max-w-screen-xl mx-auto grid grid-cols-3 pt-20 place-items-center">
      <img 
        src="https://boucherie.vamtam.com/wp-content/uploads/2023/11/GettyImages-500466008.jpg" 
        alt="Catering Image"
      />
      <div class="flex flex-col">
        <span class="SPfont text-4xl mb-6">Recipes from the <br> whole world</span>
        <a href="" class="text-left font-semibold text-[14px]">Learn more</a>
      </div>
      <img 
        src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/GettyImages-1156101195.jpg" 
        alt="Catering Image"
      />
    </div>
    <div class="max-w-screen-xl mx-auto grid grid-cols-3 pb-32 place-items-center">
      <div class="flex flex-col">
        <span class="SPfont text-4xl mb-6">Explore our specially <br> selected Wine list</span>
        <a href="" class="text-left font-semibold text-[14px]">Learn more</a>
      </div>
      <img 
        src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/pattern-1.svg" 
        alt="Catering Image"
        class="w-full"
      />
      <div class="flex flex-col">
        <span class="SPfont text-4xl mb-6">Explore our specially <br> selected Desserts List</span>
        <a href="" class="text-left font-semibold text-[14px]">Learn more</a>
      </div>
    </div>

    <!-- Swiper Section -->
    <Swiper />

    <!-- Footer -->
    <Footer />
  </div>
</template>
