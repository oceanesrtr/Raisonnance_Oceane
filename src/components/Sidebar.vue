<template>
  <div class="sidebar">
    <!-- LOGO -->
    <h2 class="sidebar-title">📡 Admin Panel</h2>

    <!-- MENU PRINCIPAL -->
    <ul class="menu">
      <!-- GESTION DES DÉCODEURS -->
      <li @click="toggleMenu('decoders')" class="menu-item">
        🖥️ Gestion des décodeurs
        <span class="arrow" :class="{ rotated: activeMenu === 'decoders' }">▶</span>
      </li>
      <ul v-if="activeMenu === 'decoders'" class="submenu">
        <li @click="navigateTo('/create-decoder')">➕ Créer un décodeur</li>
        <li @click="navigateTo('/associate-decoder')">🔗 Associer un décodeur</li>
        <li @click="navigateTo('/dissociate-decoder')">❌ Dissocier un décodeur</li>
      </ul>

      <!-- GESTION DES CHAÎNES TV -->
      <li @click="toggleMenu('channels')" class="menu-item">
        📺 Gestion des chaînes TV
        <span class="arrow" :class="{ rotated: activeMenu === 'channels' }">▶</span>
      </li>
      <ul v-if="activeMenu === 'channels'" class="submenu">
        <li @click="navigateTo('/create-channel')">➕ Créer une chaîne</li>
        <li @click="navigateTo('/associate-channel')">🔗 Associer une chaîne</li>
        <li @click="navigateTo('/dissociate-channel')">❌ Dissocier une chaîne</li>
      </ul>

      <!-- GESTION DES CLIENTS -->
      <li @click="toggleMenu('clients')" class="menu-item">
        🧑‍💼 Gestion des comptes clients
        <span class="arrow" :class="{ rotated: activeMenu === 'clients' }">▶</span>
      </li>
      <ul v-if="activeMenu === 'clients'" class="submenu">
        <li @click="navigateTo('/create-client')">➕ Créer un compte client</li>
        <li @click="navigateTo('/edit-client')">✏️ Modifier un compte client</li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: null, // Stocke le menu ouvert
    };
  },
  methods: {
    toggleMenu(menu) {
      this.activeMenu = this.activeMenu === menu ? null : menu;
    },
    navigateTo(route) {
      this.$router.push(route); // Redirige vers la page correspondante
    },
  },
};
</script>

<style scoped>
/* STYLES DU SIDEBAR */
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #bbdfc6; /* Bleu foncé */
  color: #028C51;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
}

/* TITRE */
.sidebar-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* MENU PRINCIPAL */
.menu {
  list-style-type: none;
  padding: 0;
}

/* ITEMS DU MENU */
.menu-item {
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* SOUS-MENU */
.submenu {
  list-style-type: none;
  padding-left: 20px;
  margin-top: 5px;
}

.submenu li {
  cursor: pointer;
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
}

.submenu li:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* FLECHE DE ROTATION */
.arrow {
  transition: transform 0.3s ease-in-out;
}

.rotated {
  transform: rotate(90deg);
}
</style>
