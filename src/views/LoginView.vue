<template>
    <div class="min-h-screen flex items-center justify-center">
      <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-6">Welcome Back</h2>
        <p class="text-sm text-gray-500 text-center mb-6">Please log in to access the admin panel</p>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="username" class="block text-gray-600 mb-2 font-medium">Username</label>
            <input
              id="username"
              v-model="username"
              type="text"
              placeholder="Enter your username"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-600 mb-2 font-medium">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Enter your password"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 shadow-sm"
          >
            Login
          </button>
        </form>
        <p v-if="errorMessage" class="text-red-500 text-sm mt-4 text-center font-medium">
          {{ errorMessage }}
        </p>
        <p class="text-center text-sm text-gray-500 mt-4">
          Don’t have an account? <a href="#" class="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const router = useRouter();
  
  const handleLogin = () => {
    if (username.value === 'admin' && password.value === 'password') {
      router.push('/admin');
    } else {
      errorMessage.value = 'Invalid username or password!';
    }
  };
  </script>
  