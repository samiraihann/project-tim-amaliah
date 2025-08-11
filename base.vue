<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navbar -->
    <header class="bg-red-600 text-white shadow-md">
      <div class="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Mizan Amanah"
            class="h-10"
          />
          <span class="text-lg font-semibold">mizan amanah</span>
        </div>

        <!-- Menu Icon -->
        <button class="lg:hidden focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Menu -->
      <nav class="bg-red-600 px-4 py-2">
        <a href="#" class="block text-white font-bold">Home</a>
      </nav>
    </header>

    <!-- Content -->
    <main class="max-w-6xl mx-auto p-4">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-4 text-center">
          <img src="/mizan-logo-small.png" alt="Mizan Logo" class="mx-auto h-12" />
          <h2 class="text-xl font-bold mt-2">
            JADI <span class="bg-orange-500 text-white px-2 rounded">ORANG DEKAT</span> NABI
          </h2>
          <p class="text-orange-500 font-semibold">Yatim Sedekat Dua Jari</p>
          <p class="text-sm mt-2 text-gray-700 italic">
            "Aku dan orang yang menanggung anak yatim (kedudukannya) di surga seperti ini," kemudian beliau mengisyaratkan dengan jari telunjuk dan jari tengahnya serta agak merenggangkan keduanya. (HR. Ahmad)
          </p>
        </div>

        <!-- Image & Button -->
        <div class="relative bg-blue-500 p-4 flex items-center justify-center">
          <img
            src="/donasi-image.png"
            alt="Donasi"
            class="h-48 object-contain"
          />
          <a
            href="#"
            class="absolute bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg shadow"
          >
            Donasi Sekarang
          </a>
        </div>

        <!-- Website link -->
        <div class="bg-red-600 text-center py-2 text-white text-sm font-semibold">
          www.mizanamanah.or.id
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// Tidak ada script khusus untuk versi base code ini
</script>

<style>
/* Pastikan Tailwind sudah dikonfigurasi di proyek Vue */
</style>
