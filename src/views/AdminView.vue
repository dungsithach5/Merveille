<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { store } from '../store';

const reservations = ref([]);
const currentReservation = ref(null);

// Show data from the API
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/reservation');
    reservations.value = response.data;
  } catch (error) {
    console.error('Error fetching reservations:', error);
  }
});

// Submit a new or edited reservation
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
    reservations.value.push(response.data);
    store.toggleModal();
  } catch (error) {
    console.error('Error submitting reservation:', error);
  }
};

// Edit a reservation
const editReservation = (reservation) => {
  currentReservation.value = { ...reservation };
  store.toggleModal();
};

// Update an existing reservation
const updateReservation = async () => {
  try {
    const reservationData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      partysize: document.getElementById('partysize').value,
    };

    const response = await axios.put(`http://localhost:3000/api/reservation/${currentReservation.value._id}`, reservationData);
    const updatedIndex = reservations.value.findIndex(reservation => reservation._id === currentReservation.value._id);
    reservations.value[updatedIndex] = response.data;
    currentReservation.value = null;
    store.toggleModal();
  } catch (error) {
    console.error('Error updating reservation:', error);
  }
};

// Delete a reservation
async function deleteReservation(id) {
  try {
    await axios.delete(`http://localhost:3000/api/reservation/${id}`);
    reservations.value = reservations.value.filter(reservation => reservation._id !== id);
  } catch (error) {
    console.error('Error deleting reservation:', error);
  }
}
</script>

<template>
    <div class="min-h-screen flex flex-col bg-gray-100">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-800 text-gray-200 h-screen p-6 fixed shadow-lg">
            <h1 class="text-3xl SPfont font-bold mb-8 text-center text-gold">Merveille</h1>
            <ul class="space-y-6">
                <li>
                <a href="#" class="flex items-center py-3 px-5 rounded-lg hover:bg-gray-700 transition">
                    <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h11M9 21V3m0 0L3 10m6-7 6 7" />
                    </svg>
                    Dashboard
                </a>
                </li>
                <li>
                <a href="#" class="flex items-center py-3 px-5 rounded-lg hover:bg-gray-700 transition">
                    <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M10 14h10M4 18h7" />
                    </svg>
                    Menu
                </a>
                </li>
                <li>
                <a href="#" class="flex items-center py-3 px-5 rounded-lg hover:bg-gray-700 transition">
                    <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Reservations
                </a>
                </li>
                <li>
                <a href="#" class="flex items-center py-3 px-5 rounded-lg hover:bg-gray-700 transition">
                    <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Orders
                </a>
                </li>
                <li>
                <a href="#" class="flex items-center py-3 px-5 rounded-lg hover:bg-gray-700 transition">
                    <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
                    </svg>
                    Settings
                </a>
                </li>
            </ul>
        </aside>
  
      <!-- Main Content -->
      <main class="ml-64 p-6 flex-1">
        <header class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold">Welcome, Admin</h2>
          <!-- <button class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
            Logout
          </button> -->
        </header>

        <button
          @click="store.toggleModal"
          class="bg-green-500 text-white font-medium py-2 px-4 rounded hover:bg-green-600 mt-4"
          type="button"
        >
          Add Reservation
        </button>
        <section>
          <h3 class="text-xl font-bold my-4">Reservations</h3>
          <div class="flex justify-center">
            <table class="min-w-full bg-white rounded shadow">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b">ID</th>
                  <th class="py-2 px-4 border-b">Party Size</th>
                  <th class="py-2 px-4 border-b">Date</th>
                  <th class="py-2 px-4 border-b">Time</th>
                  <th class="py-2 px-4 border-b">Name</th>
                  <th class="py-2 px-4 border-b">Email</th>
                  <th class="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(reservation, index) in reservations" :key="reservation.id" class="text-center">
                  <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
                  <td class="py-2 px-4 border-b">{{ reservation.partysize }}</td>
                  <td class="py-2 px-4 border-b">{{ reservation.date }}</td>
                  <td class="py-2 px-4 border-b">{{ reservation.time }}</td>
                  <td class="py-2 px-4 border-b">{{ reservation.name }}</td>
                  <td class="py-2 px-4 border-b">{{ reservation.email }}</td>
                  <td class="py-2 px-4 border-b">
                    <button class="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 mr-2" @click="editReservation(reservation)">Edit</button>
                    <button class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600" @click="deleteReservation(reservation._id)">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>


    <!-- Main modal -->
    <div
        v-if="store.isModalVisible"
        id="crud-modal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
    >
        <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white shadow h-[500px]">
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
            
            <h1 class="text-3xl font-medium text-center">
                {{ currentReservation ? 'Edit Reservation' : 'Create new reservation' }}
            </h1>
            <div class="flex justify-center mt-12">
                <form @submit.prevent="submitReservation" class="space-y-5">
                <div class="max-w-screen-sm mx-auto grid grid-cols-3 gap-2">
                    <select
                    name="partysize"
                    id="partysize"
                    class="border-[1px] border-[#5D5D5D] rounded-md px-4 text-base bg-transparent"
                    :value="currentReservation?.partysize || ''"
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
                        :value="currentReservation?.date || ''"
                        required
                    />
                    </div>
                    <div class="flex flex-col space-y-2">
                    <input
                        type="time"
                        id="time"
                        class="border-[1px] border-[#5D5D5D] px-4 py-3 rounded-md text-base bg-transparent"
                        :value="currentReservation?.time || ''"
                        required
                    />
                    </div>
                </div>
                <div class="max-w-screen-sm mx-auto space-y-2">
                    <div class="flex flex-col">
                    <input
                        type="text"
                        id="name"
                        class="border-[1px] border-[#5D5D5D] px-4 py-3 rounded-md text-base bg-transparent"
                        placeholder="Name"
                        :value="currentReservation?.name || ''"
                        required
                    />
                    </div>
                    <div class="flex flex-col">
                    <input
                        type="email"
                        id="email"
                        class="border-[1px] border-[#5D5D5D] px-4 py-3 rounded-md text-base bg-transparent"
                        placeholder="Email address"
                        :value="currentReservation?.email || ''"
                        required
                    />
                    </div>
                </div>
                <div class="flex justify-center">
                    <button
                    type="submit"
                    class="bg-green-600 text-white text-md font-semibold px-7 py-3 rounded"
                    >
                    {{ currentReservation ? 'Update Reservation' : 'Add new reservation' }}
                    </button>
                </div>
                </form>
            </div>
        </div>
        </div>
    </div>
  </template>
