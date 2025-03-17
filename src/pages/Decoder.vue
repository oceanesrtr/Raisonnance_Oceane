<!-- src/views/Decoder.vue -->
<template>
  <div>
    <h1>Bienvenue sur la page Decoder</h1>
    <button @click="goToHome">Retour à l'accueil</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
}

</script>
