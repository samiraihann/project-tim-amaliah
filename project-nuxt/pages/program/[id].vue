<!-- pages/program/[id].vue -->
<template>
  <div class="p-6">
    <div v-if="pending">Memuat data...</div>
    <div v-else-if="error">Program tidak ditemukan.</div>
    
    <div v-else>
      <h1 class="text-2xl font-bold mb-2">{{ data.title }}</h1>
      <p class="text-sm mb-4">{{ data.description }}</p>
      <NuxtLink to="/program" class="text-blue-600 underline text-sm">← Kembali</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { data, pending, error } = await useFetch(`http://localhost:3000/campaigns/${route.params.id}`)
</script>
