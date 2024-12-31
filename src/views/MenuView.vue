<script setup>
import NavBar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Swiper from '../components/Swiper.vue';
import 'swiper/swiper-bundle.css';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const Dinnerdata = ref([]);
const LunchData = ref([]);
const WinesData = ref([]);
const DessertsData = ref([]);

const filteredData = ref([]);
const loading = ref(true);

const categoryFilter = ref('dinner');

const filterData = () => {
  const categoryMap = {
    'dinner': Dinnerdata.value,
    'lunch': LunchData.value,
    'winelist': WinesData.value,
    'desserts': DessertsData.value,
  };

  filteredData.value = categoryMap[categoryFilter.value] || data.value.filter(
    (item) => item.category === categoryFilter.value
  );
};


onMounted(async () => {
  try {
    const [responseDinner, responseLunch, responseWines, responseDesserts] = await Promise.all([
      axios.get("http://localhost:3000/api/dinners"),
      axios.get("http://localhost:3000/api/lunch"),
      axios.get("http://localhost:3000/api/wines"),
      axios.get("http://localhost:3000/api/desserts")
    ]);
    Dinnerdata.value = responseDinner.data;
    LunchData.value = responseLunch.data;
    WinesData.value = responseWines.data;
    DessertsData.value = responseDesserts.data;
    filterData();
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
    <NavBar />
    <h1 class="SPfont text-center text-[66px] text-black my-14">Menus</h1>

    <!-- Category -->
    <div class="max-w-screen-xl mx-auto h-[70px] border-t-[1px] border-b-[1px] border-gray-400 flex justify-center">
        <ul class="flex items-center justify-center p-4 md:p-0 mt-4 md:flex-row md:space-x-20 md:mt-0">
            <li>
                <button 
                class="font-medium text-base"
                @click="categoryFilter = 'dinner'; filterData()"
                >
                Dinner
                </button>
            </li>
            <li>
                <button 
                class="font-medium text-base"
                @click="categoryFilter = 'lunch'; filterData()"
                >
                Lunch
                </button>
            </li>
            <img src="../assets/imgs/star.png" alt="">
            <li>
                <button 
                class="font-medium text-base"
                @click="categoryFilter = 'winelist'; filterData()"
                >
                Wine List
                </button>
            </li>
            <li>
                <button
                class="font-medium text-base"
                @click="categoryFilter = 'desserts'; filterData()"
                >
                Dessert
                </button>
            </li>
        </ul>
    </div>

    <!-- Menus -->
    <div class="max-w-screen-xl mx-auto grid grid-cols-3 place-items-center gap-6 mb-20">
        <div
        v-for="item in filteredData"
        :key="item.id"
        class="max-w-xl mt-14"
        >
        <router-link :to="{ name: 'productdetail', params: { id: item._id } }">
        <a href="#">
            <img class="h-[630px] object-cover" :src="item.img" alt="" />
        </a>
        <div class="text-left">
            <a href="#">
            <h5
                class="SPfont mt-3 text-2xl font-medium  text-black"
            >
                {{ item.name }}
            </h5>
            </a>
            <p class="text-lg text-gray-700">
            ${{ item.price }}
            </p>
        </div>
        </router-link>
        </div>
    </div>

    <!-- Swiper Section  -->
    <Swiper />

    <Footer />
</template>