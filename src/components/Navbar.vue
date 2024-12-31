<template>
    <nav class="text-black h-44">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5">
        <a href="" class="flex items-center space-x-3">
          <span class="font-semibold text-base">20 W 50th St, France, (+84) 694-1644</span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="" type="button" class="font-semibold text-base">
            Reservation
            </a>
            <img src="../assets/imgs/down-right.png" alt="" class="h-[17px] mt-[2px] ml-[5px]"> 
          <button 
            data-collapse-toggle="navbar-cta" 
            type="button" 
            class="inline-flex items-center p-2 w-12 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
            aria-controls="navbar-cta" 
            aria-expanded="false"
          >
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </div>
      <h1 class="SPfont text-center font-semibold text-4xl mb-6 tracking-widest">Merveille</h1>
      <div class="w-full md:w-auto" id="navbar-default">
        <ul class="flex items-center justify-center p-4 md:p-0 mt-4 md:flex-row md:space-x-20 md:mt-0">
          <li>
            <router-link to="/" class="font-semibold text-base">Home</router-link>
          </li>
          <li>
            <router-link to="/menus" class="font-semibold text-base">Menus</router-link>
          </li>
          <li>
            <router-link to="/privateevents" class="font-semibold text-base">Private events</router-link>
          </li>
          <li>
            <router-link to="/aboutus" class="font-semibold text-base">About us</router-link>
          </li>
          <li>
            <router-link to="/order" class="font-semibold text-base">Order</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

