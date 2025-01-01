<script setup>
import NavBar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <NavBar />

  <h1 class="SPfont text-center text-[66px] text-black my-10">About us</h1>
  <img 
    src="https://i.pinimg.com/736x/dd/fc/aa/ddfcaaca45c4e59df504c37720a88561.jpg" 
    alt="About us banner" 
    class="w-full h-[500px] object-cover" 
  />

  <div class="max-w-screen-md mx-auto my-40 text-center">
    <img src="../assets/imgs/star.png" alt="" class="h-10 w-10 mb-6" />
    <h1 class="SPfont text-5xl text-left">
      France Merveille, where French elegance meets culinary artistry. 
      Located in Viet Nam, we offer an authentic taste of France with dishes crafted by skilled chefs using the finest ingredients.
      Experience the charm of France at France Merveille. Bon appétit!
    </h1>
  </div>

  <div class="bg-black w-full h-[1000px] flex justify-center">
    <div class="max-w-screen-xl mx-auto grid grid-cols-2 place-items-center gap-6 my-20">
      <!-- Text Content -->
      <div class="text-white">
        <h1 class="SPfont text-7xl mb-10">
          See all the way <br /> into our kitchen
        </h1>
        <span class="text-base">
          Our menu mirrors the restaurant’s design in marrying inspiration from old-school butcher shops with modern steakhouse cuts and presentations,
          plus the unexpected flare that Quality Branded has come to be known for.
          Dishes like our renowned Slab Bacon, Peanut Butter, and Jalapeño, the Tomahawk Ribsteak,
          The Three Filets, and Corn Crème Brûlée are menu staples, 
          and tableside presentations add even more excitement to any meal.
        </span>
        <router-link 
          to="/menus" 
          class="flex justify-start my-6 py-2 text-center font-semibold text-sm w-auto hover:text-[#CF4D2D] transform transition duration-300 ease-in-out"
        >
          View Our Menu
        </router-link>
      </div>

      <!-- Image -->
      <img 
        src="https://i.pinimg.com/736x/ea/52/96/ea5296961aa93628a66d3ff22d7d00ac.jpg" 
        alt="Restaurant Kitchen" 
        class="object-cover"
      />
    </div>
  </div>

  <div class="max-w-screen-xl mx-auto my-40">
    <h1 class="SPfont text-center text-6xl">Our Team</h1>
    <div class="grid grid-cols-4 gap-6 mt-10">
      <!-- Team Member 1 -->
      <div class="space-y-1">
        <img 
          class="w-96 h-96 rounded object-cover" 
          src="https://i.pinimg.com/736x/12/3b/3d/123b3d98ee67368196e8fd9dafc517f8.jpg" 
          alt="Default avatar"
        />
        <h1 class="text-center text-2xl font-medium">Huỳnh</h1>
        <h2 class="text-center text-lg font-medium">Team leader</h2>
      </div>

      <!-- Team Member 2 -->
      <div class="space-y-1">
        <img 
          class="w-96 h-96 rounded object-cover" 
          src="../assets/avatar/avatarHH.png" 
          alt="Default avatar"
        />
        <h1 class="text-center text-2xl font-medium">Đặng Hữu Học</h1>
        <h2 class="text-center text-lg font-medium">Team member</h2>
      </div>

      <!-- Team Member 3 -->
      <div class="space-y-1">
        <img 
          class="w-96 h-96 rounded object-cover" 
          src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/347841968_1184770485543489_7616361933707208810_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=fg_bN5p8IUYQ7kNvgFiArUo&_nc_oc=AdhvqGG4sfYxq6nqG50Ew7s1TnSmGuIcqOq6PJEvGCkPVdQl3Tzq2GPtQEelc5k0SCs&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=AExpzb23DndG25FAJnq18WZ&oh=00_AYAOAsdVxEecWDLxetRi6luwOfjPbl4rYLzsM-CS2Ej1lQ&oe=677A9386" 
          alt="Default avatar"
        />
        <h1 class="text-center text-2xl font-medium">Đỗ Hữu Nguyên</h1>
        <h2 class="text-center text-lg font-medium">Team member</h2>
      </div>

      <!-- Team Member 4 -->
      <div class="space-y-1">
        <img 
          class="w-96 h-96 rounded object-cover" 
          src="https://i.pinimg.com/736x/fc/9b/db/fc9bdbb1c8c4697c82fde291371b05bb.jpg" 
          alt="Default avatar"
        />
        <h1 class="text-center text-2xl font-medium">Hoàng Đăng Hải</h1>
        <h2 class="text-center text-lg font-medium">Team member</h2>
      </div>
    </div>
  </div>

  <Footer />
</template>
