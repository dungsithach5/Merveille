<template>
  <NavBar />
  <!-- Gói dữ liệu thành 1 -->
  <div class="my-20">
    <!-- Dinner -->
    <div v-if="dinnerItem" class="max-w-screen-xl mx-auto grid grid-cols-2 place-items-center items-start space-y-40">
        <img :src="dinnerItem.img" alt="" class="h-[600px] pr-3 pb-3 border-r-2 border-b-2 border-[#CF4D2D] justify-self-start"  />
        <div class="space-y-7">
            <div class="flex justify-between">
                <h3 class="SPfont text-5xl font-medium">{{ dinnerItem.name }}</h3>
                <p class="text-3xl">${{ dinnerItem.price }}</p>
            </div>
            <p class="leading-7 text-justify text-lg">{{ dinnerItem.description }}</p>
        </div>

        <div class="space-y-7">
            <h3 class="SPfont text-5xl font-medium">Qualities</h3>
            <p class="leading-7 text-justify text-lg">{{ dinnerItem.sub_description  }}</p>
            <ul class="text-lg space-y-5">
                <li>
                    <span class="font-medium">
                        &bull; Protein:
                    </span>
                    20-25g/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Fat:
                    </span>
                    5-10g/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Iron:
                    </span>
                    2-3mg/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Vitamin B12:
                    </span>
                    1-2µg/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Vitamin B6:
                    </span>
                    0.5-1mg/100g of meat.
                </li>
            </ul>
        </div>
        <img :src="dinnerItem.sub_img" alt="" class="h-[600px] pl-3 pb-3 border-l-2 border-b-2 border-[#CF4D2D] justify-self-end"  />
    </div>

    <!-- lunch -->
    <div v-if="lunchItem" class="max-w-screen-xl mx-auto grid grid-cols-2 place-items-center items-start space-y-40">
        <img :src="lunchItem.img" alt="" class="h-[600px] pr-3 pb-3 border-r-2 border-b-2 border-[#CF4D2D] justify-self-start"  />
        <div class="space-y-7">
            <div class="flex justify-between">
                <h3 class="SPfont text-5xl font-medium">{{ lunchItem.name }}</h3>
                <p class="text-3xl">${{ lunchItem.price }}</p>
            </div>
            <p class="leading-7 text-justify text-lg">{{ lunchItem.description }}</p>
        </div>

        <div class="space-y-7">
            <h3 class="SPfont text-5xl font-medium">Qualities</h3>
            <p class="leading-7 text-justify text-lg">{{ lunchItem.sub_description  }}</p>
            <ul class="text-lg space-y-5">
                <li>
                    <span class="font-medium">
                        &bull; Protein:
                    </span>
                    20-25g/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Fat:
                    </span>
                    5-10g/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Iron:
                    </span>
                    2-3mg/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Vitamin B12:
                    </span>
                    1-2µg/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Vitamin B6:
                    </span>
                    0.5-1mg/100g of meat.
                </li>
            </ul>
        </div>
        <img :src="lunchItem.sub_img" alt="" class="h-[600px] pl-3 pb-3 border-l-2 border-b-2 border-[#CF4D2D] justify-self-end"  />
    </div>

    <!-- wine -->
    <div v-if="wineItem" class="max-w-screen-xl mx-auto grid grid-cols-2 place-items-center items-start space-y-40">
        <img :src="wineItem.img" alt="" class="h-[600px] pr-3 pb-3 border-r-2 border-b-2 border-[#CF4D2D] justify-self-start"  />
        <div class="space-y-7">
            <div class="flex justify-between">
                <h3 class="SPfont text-5xl font-medium">{{ wineItem.name }}</h3>
                <p class="text-3xl">${{ wineItem.price }}</p>
            </div>
            <p class="leading-7 text-justify text-lg">{{ wineItem.description }}</p>
        </div>

        <div class="space-y-7">
            <h3 class="SPfont text-5xl font-medium">Qualities</h3>
            <p class="leading-7 text-justify text-lg">{{ wineItem.sub_description  }}</p>
            <ul class="text-lg space-y-5">
                <li>
                    <span class="font-medium">
                        &bull; Protein:
                    </span>
                    20-25g/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Fat:
                    </span>
                    5-10g/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Iron:
                    </span>
                    2-3mg/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Vitamin B12:
                    </span>
                    1-2µg/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Vitamin B6:
                    </span>
                    0.5-1mg/100g of meat.
                </li>
            </ul>
        </div>
        <img :src="wineItem.sub_img" alt="" class="h-[600px] pl-3 pb-3 border-l-2 border-b-2 border-[#CF4D2D] justify-self-end"  />
    </div>

    <!-- dessert -->
    <div v-if="dessertItem" class="max-w-screen-xl mx-auto grid grid-cols-2 place-items-center items-start space-y-40">
        <img :src="dessertItem.img" alt="" class="h-[600px] pr-3 pb-3 border-r-2 border-b-2 border-[#CF4D2D] justify-self-start"  />
        <div class="space-y-7">
            <div class="flex justify-between">
                <h3 class="SPfont text-5xl font-medium">{{ dessertItem.name }}</h3>
                <p class="text-3xl">${{ dessertItem.price }}</p>
            </div>
            <p class="leading-7 text-justify text-lg">{{ dessertItem.description }}</p>
        </div>

        <div class="space-y-7">
            <h3 class="SPfont text-5xl font-medium">Qualities</h3>
            <p class="leading-7 text-justify text-lg">{{ dessertItem.sub_description  }}</p>
            <ul class="text-lg space-y-5">
                <li>
                    <span class="font-medium">
                        &bull; Protein:
                    </span>
                    20-25g/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Fat:
                    </span>
                    5-10g/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Iron:
                    </span>
                    2-3mg/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Vitamin B12:
                    </span>
                    1-2µg/100g of meat.
                </li>
                <li>
                    <span class="font-medium">
                        &bull; Vitamin B6:
                    </span>
                    0.5-1mg/100g of meat.
                </li>
            </ul>
        </div>
        <img :src="dessertItem.sub_img" alt="" class="h-[600px] pl-3 pb-3 border-l-2 border-b-2 border-[#CF4D2D] justify-self-end"  />
    </div>
  </div>
 

    <!-- Swiper Section -->
    <Swiper />

  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import NavBar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Swiper from '../components/Swiper.vue';
import 'swiper/swiper-bundle.css';

// Props
const props = defineProps({
    id: {
    type: String,
    required: true
    }
});

// Reactive data
const dinnerItem = ref([]);
const lunchItem = ref([]);
const wineItem = ref([]);
const dessertItem = ref([]);


// Fetching function
const fetchItems = async () => {
    try {
    const [dinnerResponse, lunchResponse, wineResponse, dessertResponse] = await Promise.all([
        axios.get(`http://localhost:3000/api/dinners/${props.id}`),
        axios.get(`http://localhost:3000/api/lunch/${props.id}`),
        axios.get(`http://localhost:3000/api/wines/${props.id}`),
        axios.get(`http://localhost:3000/api/desserts/${props.id}`),
    ]);

    dinnerItem.value = dinnerResponse.data;
    lunchItem.value = lunchResponse.data;
    wineItem.value = wineResponse.data;
    dessertItem.value = dessertResponse.data;
    } catch (error) {
    console.error('Error fetching items:', error);
    }
};

// Lifecycle hook
onMounted(async () => {
    await fetchItems();
});
</script>