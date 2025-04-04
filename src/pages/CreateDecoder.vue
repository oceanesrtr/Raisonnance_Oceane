<style scoped>

.background-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #dfefe3; /* Assure-toi qu'une couleur de fond est appliquée */
}


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  background-color: #fff;
  padding: 25px;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  justify-content: center;

}

.form:hover {
  box-shadow: 0 0 20px rgba(2, 140, 81, 0.4);
  justify-content: center;

}

.title {
  font-size: 26px;
  color: #028C51;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;


}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #028C51;
}

.title::after {
  animation: pulse 1.2s linear infinite;
  justify-content: center;
}

.form label {
  position: relative;
}


.button-group {
  display: flex;
  gap: 15px;
  justify-content: center;
}

/* 🌟 STYLE DES BOUTONS 🌟 */
button {
  display: flex;
  cursor: pointer; /* Ajout de la propriété pour le curseur */
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #ffffff;
  border-style: solid;
  border-width: 2px;
  border-radius: 40px;
  padding: 14px 24px;
  transition: 0.3s;
  box-shadow: -4px -2px 16px 0px #ffffff, 4px 2px 16px 0px rgba(2, 140, 81, 0.5);
}

.submit {
  background-color: #028C51;
  border-color: rgba(255, 255, 255, 0.3);
}

.submit:hover {
  background-color: #026B3F;
  box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px rgba(2, 140, 81, 0.6);
}

.cancel {
  background-color: #BBDFC6;
  color: #028C51;
  border-color: rgba(255, 255, 255, 0.3);
}

.cancel:hover {
  background-color: #99C8A6;
  box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px rgba(187, 223, 198, 0.5);
}

button:active {
  box-shadow: none;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }
  to {
    transform: scale(1.8);
    opacity: 0;
  }
}




.form label .input_readonly {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
  font-size: 16px;
}

.form label .input_readonly + span {
  position: absolute;
  left: 10px;
  top: 30px;
  color: grey;
  font-size: 0.75em;
  cursor: text;
  font-weight: 600;
  background-color: #ffffff;

}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
  font-size: 16px;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:focus + span,
.form label .input:valid + span {
  top: 30px;
  font-size: 0.75em;
  font-weight: 600;
  background-color: #ffffff;
}
</style>

<template>
  <div class="background-wrapper">
    <div class="finisher-header"></div>
    <div class="container">
      <form class="form" @submit.prevent="createDecoder">
        <p class="title">Ajouter un décodeur</p>

        <!-- ID du décodeur (Généré automatiquement) -->
        <label>
          <input v-model="decoderId" type="text" class="input_readonly" readonly>
          <span>ID du Décodeur</span>
        </label>

        <!-- Adresse IP (Plage 127.0.10.1 - 127.0.10.12) -->
        <label>
          <select v-model="decoderIp" class="input" required>
            <option v-for="ip in availableIps" :key="ip" :value="ip">
              {{ ip }}
            </option>
          </select>
          <span>Adresse IP</span>
        </label>

        <!-- État du Décodeur -->
        <label>
          <select v-model="decoderState" class="input" required>
            <option value="Active">Actif</option>
            <option value="Inactive">Inactif</option>
          </select>
          <span>État Initial</span>
        </label>

        <div class="button-group">
          <button type="submit" class="submit">Valider</button>
          <button type="button" class="cancel" @click="resetForm">Annuler</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// États réactifs
const decoderId = ref('');
const decoderIp = ref(null);
const decoderState = ref('Active');

// Liste des adresses IP valides
const availableIps = Array.from({ length: 12 }, (_, i) => `127.0.10.${i + 1}`);

// Génération d'un ID de décodeur aléatoire
const generateDecoderId = () => {
  return ` DEC${Math.floor(Math.random() * 10000) + 1}`;
};

// Créer un décodeur (fonction à relier au backend Firebase plus tard)
const createDecoder = () => {
  console.log("Décodeur créé:", {
    id: decoderId.value,
    ip: decoderIp.value,
    state: decoderState.value,
  });
};

// Réinitialisation du formulaire
const resetForm = () => {
  decoderId.value = generateDecoderId();
  decoderIp.value = null;
  decoderState.value = 'Active';
};

// Générer un ID au chargement de la page
onMounted(() => {
  decoderId.value = generateDecoderId();
});
</script>

