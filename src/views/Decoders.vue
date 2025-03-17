<!-- Decoders.vue -->
<template>
  <div>
    <h1>Gestion des Décodeurs</h1>
    <button @click="showCreateDecoder">Créer un décodeur</button>
    <button @click="showAssociateDecoder">Associer un décodeur</button>
    <button @click="showDissociateDecoder">Dissocier un décodeur</button>

    <div v-if="currentPage === 'create'">
      <h2>Créer un Décodeur</h2>
      <!-- Formulaire de création du décodeur ici -->
    </div>
    <div v-if="currentPage === 'associate'">
      <h2>Associer un Décodeur</h2>
      <!-- Formulaire d'association ici -->
    </div>
    <div v-if="currentPage === 'dissociate'">
      <h2>Dissocier un Décodeur</h2>
      <!-- Formulaire de dissociation ici -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: null,
    };
  },
  methods: {
    showCreateDecoder() {
      this.currentPage = 'create';
    },
    showAssociateDecoder() {
      this.currentPage = 'associate';
    },
    showDissociateDecoder() {
      this.currentPage = 'dissociate';
    },
  },
};
</script>
