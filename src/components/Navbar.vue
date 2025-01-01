<script setup>
import axios from 'axios';

const submitReservation = async () => {
    try {
        const reservationData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            partysize: document.getElementById('partysize').value,
        };

        const response = await axios.post('http://localhost:3000/api/reservation', reservationData);
        reservationData.value = response.data;
    } catch (error) {
        console.error('Error submitting reservation:', error);
    }
};
</script>

<template>
  <nav class="text-black h-44">
    <!-- info -->
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5">
      <a href="" class="flex items-center space-x-3">
        <span class="font-semibold text-base hover:text-[#CF4D2D] transform transition duration-300 ease-in-out">20 W 50th St, France, (+84) 694-1644</span>
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <!-- Modal toggle -->
        <button
          data-modal-target="crud-modal"
          data-modal-toggle="crud-modal"
          class="font-semibold text-base hover:text-[#CF4D2D] transform transition duration-300 ease-in-out"
          type="button"
        >
          Reservation
        </button>
        <img src="../assets/imgs/down-right.png" alt="" class="h-[17px] mt-[2px] ml-[5px]" />
        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          class="inline-flex items-center p-2 w-12 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Branch -->
    <div class="flex justify-center">
      <router-link to="/" class="SPfont font-semibold text-4xl mb-6 tracking-widest">Merveille</router-link>
    </div>

    <!-- NAV -->
    <div class="w-full md:w-auto" id="navbar-default">
      <ul class="flex items-center justify-center p-4 md:p-0 mt-4 md:flex-row md:space-x-20 md:mt-0">
        <li>
          <router-link to="/" class="font-semibold text-base hover:border-b-2 hover:border-[#CF4D2D]">Home</router-link>
        </li>
        <li>
          <router-link to="/menus" class="font-semibold text-base hover:border-b-2 hover:border-[#CF4D2D]">Menus</router-link>
        </li>
        <li>
          <router-link to="/privateevents" class="font-semibold text-base hover:border-b-2 hover:border-[#CF4D2D]">Private events</router-link>
        </li>
        <li>
          <router-link to="/aboutus" class="font-semibold text-base hover:border-b-2 hover:border-[#CF4D2D]">About us</router-link>
        </li>
        <li>
          <router-link to="/order" class="font-semibold text-base hover:border-b-2 hover:border-[#CF4D2D]">Order</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Main modal -->
  <div
    id="crud-modal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
  >
    <div class="relative p-4 w-full max-w-4xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-[#F0EDEA] shadow h-[660px]">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 rounded-t">
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-toggle="crud-modal"
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="flex justify-center mt-14">
          <img src="../assets/imgs/star.png" alt="" class="h-8 w-8" />
        </div>
        <h1 class="SPfont text-center text-4xl mt-5 text-black">Make a Reservation</h1>
        <h2 class="text-center text-base my-3">
          For further questions, please call - <span class="font-medium">(090) 694-1644</span>
        </h2>
        <div class="max-w-screen-sm mx-auto border-b-2 border-gray-300 mt-8"></div>
        <form action="" class="max-w-screen-sm mx-auto mt-10 space-y-5">
          <div class="max-w-screen-sm mx-auto grid grid-cols-3 gap-2">
            <select
              name="partysize"
              id="partysize"
              class="border-[1px] border-[#5D5D5D] rounded-md px-4 text-base bg-transparent"
              required
            >
              <option value="">Party size</option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 People</option>
              <option value="7">7 People</option>
              <option value="8">8 People</option>
              <option value="9">9 People</option>
              <option value="10">10 People</option>
            </select>
            <div class="flex flex-col space-y-2">
              <input
                type="date"
                id="date"
                class="border-[1px] border-[#5D5D5D] px-4 py-3 rounded-md text-base bg-transparent"
                required
              />
            </div>
            <div class="flex flex-col space-y-2">
              <input
                type="time"
                id="time"
                class="border-[1px] border-[#5D5D5D] px-4 py-3 rounded-md text-base bg-transparent"
                required
              />
            </div>
          </div>
          <div class="max-w-screen-sm mx-auto grid grid-cols-2 gap-2">
            <div class="flex flex-col space-y-2">
              <input
                type="text"
                id="name"
                class="border-[1px] border-[#5D5D5D] px-4 py-3 rounded-md text-base bg-transparent"
                placeholder="Your name"
                required
              />
            </div>
            <div class="flex flex-col space-y-2">
              <input
                type="email"
                id="email"
                class="border-[1px] border-[#5D5D5D] px-4 py-3 rounded-md text-base bg-transparent"
                placeholder="Email address"
                required
              />
            </div>
          </div>
          <div class="flex justify-center">
            <button
              type="button"
              class="bg-[#CF4D2D] text-white text-md font-semibold px-7 py-3 rounded-full"
              @click="submitReservation"
            >
              Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


