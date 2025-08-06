<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Detail Program</h1>
    <div v-if="campaign">
      <img :src="campaign.image" alt="Gambar Program" class="w-full h-auto mb-4 rounded-md" />
      <h2 class="text-xl font-semibold mb-2">{{ campaign.title }}</h2>
      <p class="text-sm text-gray-500 mb-2">{{ campaign.category }}</p>
      <p class="mb-4" v-html="campaign.content"></p>

      <div class="bg-gray-100 p-4 rounded-md mb-4">
        <p><strong>Terkumpul:</strong> Rp{{ campaign.collected_donation.toLocaleString() }}</p>
        <p><strong>Target:</strong> Rp{{ campaign.donation_target.toLocaleString() }}</p>
        <p><strong>Sisa Hari:</strong> {{ campaign.remaining_days }} hari</p>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const campaign = ref(null)

onMounted(async () => {
  try {
    const res = await fetch(`http://localhost:3001/campaigns/${route.params.id}`)
    if (!res.ok) throw new Error('Gagal mengambil data')
    campaign.value = await res.json()
  } catch (error) {
    console.error(error)
  }
})
</script>
