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


/* Conteneur principal de la page */
.app-container {
  display: flex;
  height: 100vh; /* Occupe toute la hauteur de l'écran */
}

/* Sidebar fixe */
.sidebar {
  width: 250px;
  flex-shrink: 0; /* Empêche la barre latérale de rétrécir */
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: #bbdfc6;
  z-index: 1000; /* S'assurer qu'elle reste au-dessus */
}

/* Contenu principal à droite (formulaire) */
.content {
  margin-left: 250px; /* Laisser de l'espace pour la sidebar */
  padding: 20px;
  width: calc(100% - 250px); /* Ajuste la largeur restante */
  display: flex;
  justify-content: center; /* Centre le contenu horizontalement */
  align-items: center; /* Centre le contenu verticalement */
}

/* Boîte contenant le formulaire */
.form-wrapper {
  width: 100%;
  max-width: 600px; /* Largeur maximale du formulaire */
  background-color: #fff;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

/* Formulaire lui-même */
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
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
