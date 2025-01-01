<script setup>
import NavBar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Booking from '../components/Booking.vue'
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

    <!-- Welcome -->
    <div class="max-w-screen-lg mx-auto flex flex-col my-20">
      <h1 class="SPfont text-center text-6xl text-black">Welcome to Merveille</h1>
      <h2 class="text-center text-base text-[#5D5D5D] my-6">
        Welcome to Merveille, where we bring you the refined flavors of French cuisine.
        We hope you enjoy a wonderful and unforgettable dining experience with us!
      </h2>
      <img src="https://images.unsplash.com/photo-1484659619207-9165d119dafe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
    </div>

    <!-- Story Section -->
    <div class="max-w-screen-lg mx-auto flex flex-col my-20">
      <h1 class="SPfont text-center text-6xl text-black">Our Story</h1>
      <h2 class="text-center text-base text-[#5D5D5D] mt-6">
        Merveille is a culinary experience that transcends the ordinary.
        Our chefs are dedicated to creating a unique and unforgettable dining experience that will leave you wanting more.
        From the moment you walk through our doors, you will be transported to a world of culinary excellence.
      </h2>
      <a href="" 
      class="flex justify-center my-6 px-6 py-2 text-black text-center font-semibold text-base w-auto hover:text-[#CF4D2D] transform transition duration-300 ease-in-out">
        Learn more
        <img src="../assets/imgs/down-right.png" alt="" class="h-[17px] mt-[2px] ml-[5px]" />
      </a>
    </div>

    <!-- Slide Section -->
    <Slide />

    <!-- Flavor fusion catering Section -->
    <div class="max-w-screen-xl mx-auto grid grid-cols-2 py-40">
      <div class="flex flex-col pr-12">
        <span class="SPfont text-6xl">
          Flavor fusion <br> catering
        </span>
        <span class="text-base text-[#5D5D5D] text-left mt-10 mb-7">
          Merveille can bring natural elegance, <br> beautiful decorations & exquisite taste to <br> Weddings, Birthdays,
          and Special Occasions. <br> Our philosophy is to offer our customers <br> purity, quality & great pleasure.
          To view our <br> catering menu, please click below! Custom <br> orders are available!
        </span>
        <a href="" 
        class="flex font-semibold text-base text-left hover:text-[#CF4D2D] transform transition duration-300 ease-in-out">
          Learn more
          <img src="../assets/imgs/down-right.png" alt="" class="h-[17px] mt-[2px] ml-[5px]" />
        </a>
      </div>
      <img 
        src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/GettyImages-1185419868-1024x710.jpg" 
        alt="Catering Image"
        class="pl-3 pb-3 border-l-2 border-b-2 border-[#CF4D2D]"
      />
    </div>

    <!-- Our Menus -->
    <div class="max-w-screen-xl mx-auto flex flex-col mb-14">
      <h1 class="SPfont text-left text-6xl mb-10 text-black">Our Menus</h1>
        <router-link to="/menus" class="grid grid-cols-3 gap-6 place-items-center">
          <div>
            <a href="#">
                <img class="h-[630px] object-cover" src="https://i.pinimg.com/736x/73/55/b6/7355b672841d10aaadb369d593eea1db.jpg" alt="" />
            </a>
            <div class="text-left">
                <a href="#">
                <h5
                    class="SPfont flex mt-3 text-4xl font-medium  text-black"
                >
                Dinner
                <img src="../assets/imgs/down-right.png" alt="" class="h-[20px] mt-[10px] ml-[5px]" />
                </h5>
                </a>
            </div>
          </div>
          <div>
            <a href="#">
                <img class="h-[630px] object-cover" src="https://i.pinimg.com/736x/86/5e/2c/865e2c75826c141eec100230dbb4d56b.jpg" alt="" />
            </a>
            <div class="text-left">
                <a href="#">
                <h5
                    class="SPfont flex mt-3 text-4xl  font-medium  text-black"
                >
                Lunch
                <img src="../assets/imgs/down-right.png" alt="" class="h-[20px] mt-[10px] ml-[5px]" />
                </h5>
                </a>
            </div>
          </div>
          <div>
            <a href="#">
                <img class="h-[630px] object-cover" src="https://i.pinimg.com/736x/36/a3/5d/36a35d1306555b4afb1efaf911cd2d3e.jpg" alt="" />
            </a>
            <div class="text-left">
                <a href="#">
                <h5
                    class="SPfont flex mt-3 text-4xl font-medium  text-black"
                >
                Wine
                <img src="../assets/imgs/down-right.png" alt="" class="h-[20px] mt-[10px] ml-[5px]" />
                </h5>
                </a>
            </div>
          </div>
        </router-link>
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
        <a href="" 
        class="flex font-semibold text-base text-left hover:text-[#CF4D2D] transform transition duration-300 ease-in-out">
          Learn more
          <img src="../assets/imgs/down-right.png" alt="" class="h-[17px] mt-[2px] ml-[5px]" />
        </a>
      </div>
      <img 
        src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/GettyImages-598223378-1024x710.jpg" 
        alt="Catering Image"
        class="pr-3 pb-3 border-r-2 border-b-2 border-[#CF4D2D]"
      />
    </div>

    <div class="max-w-screen-xl mx-auto grid grid-cols-3 place-items-center">
      <img 
        src="https://boucherie.vamtam.com/wp-content/uploads/2023/11/GettyImages-500466008.jpg" 
        alt="Catering Image"
      />
      <div class="flex flex-col">
        <span class="SPfont text-4xl mb-6">Recipes from the <br> whole world</span>
        <a href="" 
        class="flex text-left font-semibold text-base hover:text-[#CF4D2D] transform transition duration-300 ease-in-out">
          Learn more
          <img src="../assets/imgs/down-right.png" alt="" class="h-[17px] mt-[2px] ml-[5px]" />
        </a>
      </div>
      <img 
        src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/GettyImages-1156101195.jpg" 
        alt="Catering Image"
      />
    </div>
    <div class="max-w-screen-xl mx-auto grid grid-cols-3 pb-32 place-items-center">
      <div class="flex flex-col">
        <span class="SPfont text-4xl mb-6">Explore our specially <br> selected Wine list</span>
        <a href="" 
        class="flex text-left font-semibold text-base hover:text-[#CF4D2D] transform transition duration-300 ease-in-out">
          Learn more
          <img src="../assets/imgs/down-right.png" alt="" class="h-[17px] mt-[2px] ml-[5px]" />
        </a>
      </div>
      <img 
        src="https://boucherie.vamtam.com/wp-content/uploads/2023/10/pattern-1.svg" 
        alt="Catering Image"
        class="w-full"
      />
      <div class="flex flex-col">
        <span class="SPfont text-4xl mb-6">Explore our specially <br> selected Desserts List</span>
        <a href="" 
        class="flex text-left font-semibold text-base hover:text-[#CF4D2D] transform transition duration-300 ease-in-out">
          Learn more
          <img src="../assets/imgs/down-right.png" alt="" class="h-[17px] mt-[2px] ml-[5px]" />
        </a>
      </div>
    </div>

    <!-- Swiper Section -->
    <Swiper />

    <!-- Booking Section -->
    <Booking />

    <!-- Footer -->
    <Footer />
  </div>
</template>
