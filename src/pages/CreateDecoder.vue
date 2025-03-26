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



/* Pour les autres champs (Modèle, Client) garder l'ancien style */
.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}
</style>

<template>
  <div class="background-wrapper">
    <div class="finisher-header"></div>
    <div class="container">
      <form class="form">
        <p class="title">Ajouter un décodeur</p>

        <label>
          <input required v-model="model" type="text" class="input">
          <span>Modèle</span>
        </label>


        <label>
          <select v-model="selectedClient" class="input" required>
            <option v-for="client in clients" :key="client.id" :value="client.id">
              {{ client.name }}
            </option>
          </select>
          <span>Client Associé</span>
        </label>

        <div class="button-group">
          <button class="submit">Valider</button>
          <button type="button" class="cancel">Annuler</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Données du formulaire
const model = ref('');
const decoderName = ref('');
const decoderId = ref('');

// Liste des clients (exemple)
const clients = ref([
  { id: 1, name: 'Client 1' },
  { id: 2, name: 'Client 2' },
  { id: 3, name: 'Client 3' }
]);

const selectedClient = ref(null);

// Génère un ID de décodeur aléatoire
const generateRandomId = () => {
  return Math.floor(Math.random() * 10000) + 1; // ID aléatoire entre 1 et 10000
};

// Génère le nom du décodeur
const generateDecoderName = () => {
  return `DEC${generateRandomId()}`; // Préfixe DEC avec l'ID aléatoire
};
</script>

