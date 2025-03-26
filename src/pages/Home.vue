<!-- src/views/Home.vue -->
<template>
  <div>
    <h1>Bienvenue sur la page d'accueil</h1>
    <button @click="goToDecoder">Aller à la page Decoder</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDecoder() {
      this.$router.push('/decoder');
    }
  }
}
</script>
v