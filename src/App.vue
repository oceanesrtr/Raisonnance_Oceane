<template>
  <div class="app-container">
    <!-- Sidebar fixe -->
    <Sidebar />

    <!-- Contenu dynamique qui s'ajuste -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
/* Disposition générale */
.app-container {
  display: flex;
  height: 100vh; /* Prend toute la hauteur de l'écran */
}

/* Sidebar fixe */
.sidebar {
  width: 250px;
  flex-shrink: 0; /* Empêche le rétrécissement */
  position: fixed; /* Fixe la barre latérale */
  left: 0;
  top: 0;
  height: 100vh; /* Prend toute la hauteur */
  background-color: #bbdfc6;
}

/* Contenu dynamique qui prend tout l'espace restant */
.content {
  flex-grow: 1;
  margin-left: 300px; /* Décale le contenu pour éviter de passer sous la sidebar */
  padding: 20px;
  overflow-y: auto; /* Permet le scroll si besoin */
  width: calc(100% - 300px); /* Ajuste la largeur */
}


</style>
