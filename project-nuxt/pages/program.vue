<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">Daftar Program</h1>
    <div v-if="campaigns.length === 0">Loading...</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="campaign in campaigns" :key="campaign.id" class="border p-4 rounded shadow">
        <img :src="campaign.image" alt="Campaign Image" class="w-full h-48 object-cover rounded mb-4" />
        <h2 class="text-xl font-semibold">{{ campaign.title }}</h2>
        <p class="text-gray-600 line-clamp-3">{{ campaign.content }}</p>
        <div class="mt-2 text-sm text-gray-500">
          Target: Rp{{ campaign.donation_target.toLocaleString() }} <br />
          Terkumpul: Rp{{ campaign.collected_donation.toLocaleString() }}
        </div>
        <NuxtLink :to="`/program/${campaign.id}`" class="text-blue-600 hover:underline mt-2 block">Lihat Detail</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const campaigns = ref([])

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3001/campaigns') // Ganti sesuai URL backend NestJS kamu
    campaigns.value = await res.json()
  } catch (error) {
    console.error('Gagal fetch data campaign:', error)
  }
})
</script>
