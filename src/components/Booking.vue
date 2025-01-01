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
    <div class="max-w-screen-lg mx-auto flex flex-col my-56">
        <h1 class="SPfont text-center text-5xl text-black">Booking a Reservation</h1>
        <form action="" class="max-w-screen-sm mx-auto mt-10 space-y-5">
          <div class="max-w-screen-sm mx-auto grid grid-cols-3 gap-2">
            <select
              name="partysize"
              id="partysize"
              class="border-[1px] border-[#5D5D5D] rounded-md px-4 text-base bg-transparent"
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
              />
            </div>
            <div class="flex flex-col space-y-2">
              <input
                type="time"
                id="time"
                class="border-[1px] border-[#5D5D5D] px-4 py-3 rounded-md text-base bg-transparent"
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
              />
            </div>
            <div class="flex flex-col space-y-2">
              <input
                type="email"
                id="email"
                class="border-[1px] border-[#5D5D5D] px-4 py-3 rounded-md text-base bg-transparent"
                placeholder="Email address"
              />
            </div>
          </div>
          <div class="flex justify-center">
            <button
              type="button"
              class="bg-[#CF4D2D] text-white text-lg font-medium px-7 py-3 rounded-full"
              @click="submitReservation"
            >
              Booking
            </button>
          </div>
        </form>
    </div>
</template>
