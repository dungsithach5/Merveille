<script setup>
import axios from 'axios';
import { store } from '../store';

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

    if (response.status === 201) {
      const successMessage = document.getElementById('toast-success');
      successMessage.classList.remove('hidden');
      setTimeout(() => {
          successMessage.classList.add('hidden');
      }, 5000);
    }
    store.toggleModal();
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
          @click="store.toggleModal"
          class="flex font-semibold text-base hover:text-[#CF4D2D] transform transition duration-300 ease-in-out"
          type="button"
        >
          Reservation
          <img src="../assets/imgs/down-right.png" alt="" class="h-[17px] mt-[2px] ml-[5px]" />
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
    v-if="store.isModalVisible"
    id="crud-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
  >
    <div class="relative p-4 w-full max-w-4xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-[#F0EDEA] shadow h-[660px]">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 rounded-t">
          <button
            type="button"
            @click="store.toggleModal"
            class="text-gray-400 bg-transparent hover:text-gray-900 text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
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
        <div class="flex justify-center mt-14">
          <!-- Your modal content here -->
          <form @submit.prevent="submitReservation" class="space-y-5">
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
                type="submit"
                class="bg-[#CF4D2D] text-white text-md font-semibold px-7 py-3 rounded-full"
              >
                Booking
              </button>
            </div>
          </form>
        </div>
        <div v-if="store.successMessage" class="text-center text-green-500 mt-4">
          {{ store.successMessage }}
        </div>
      </div>
    </div>
  </div>

    <!-- Alert Success -->
    <div id="toast-success" class="hidden fixed bottom-5 right-5 z-50 flex items-center w-full max-w-sm p-4 text-gray-500 bg-white rounded-lg shadow" role="alert">
      <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span class="sr-only">Check icon</span>
      </div>
      <div class="ms-3 text-sm font-medium">You have successfully booked a reservation.</div>
      <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-success" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
      </button>
  </div>
</template>