<template>
  <div class="associate-decoder">
    <h2>Associer un Décodeur à un Client</h2>

    <form @submit.prevent="handleSubmit">
      <!-- Liste déroulante des décodeurs -->
      <div class="form-group">
        <label for="decoder">Sélectionner un décodeur</label>
        <select id="decoder" v-model="selectedDecoder" required>
          <option v-for="decoder in decoders" :key="decoder.id" :value="decoder.id">
            {{ decoder.name }}
          </option>
        </select>
      </div>

      <!-- Liste déroulante des clients -->
      <div class="form-group">
        <label for="client">Sélectionner un client</label>
        <select id="client" v-model="selectedClient" required>
          <option v-for="client in clients" :key="client.id" :value="client.id">
            {{ client.name }}
          </option>
        </select>
      </div>

      <!-- Boutons -->
      <div class="form-buttons">
        <button type="button" @click="cancel">Annuler</button>
        <button type="submit">Valider</button>
      </div>
    </form>

    <!-- Pop-up de confirmation -->
    <div v-if="showConfirmPopup" class="popup">
      <div class="popup-content">
        <p>Êtes-vous sûr de vouloir associer ce décodeur au client ?</p>
        <button @click="confirmAssociation">Oui</button>
        <button @click="cancelConfirmation">Non</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDecoder: null,
      selectedClient: null,
      decoders: [
        { id: 1, name: 'Décodeur A' },
        { id: 2, name: 'Décodeur B' },
        { id: 3, name: 'Décodeur C' }
      ],
      clients: [
        { id: 1, name: 'Client 1' },
        { id: 2, name: 'Client 2' },
        { id: 3, name: 'Client 3' }
      ],
      showConfirmPopup: false
    };
  },
  methods: {
    handleSubmit() {
      this.showConfirmPopup = true;
    },
    cancel() {
      this.selectedDecoder = null;
      this.selectedClient = null;
    },
    confirmAssociation() {
      console.log(`Décodeur ${this.selectedDecoder} associé au client ${this.selectedClient}`);
      this.selectedDecoder = null;
      this.selectedClient = null;
      this.showConfirmPopup = false;
      this.$router.go(0);
    },
    cancelConfirmation() {
      this.showConfirmPopup = false;
    }
  }
};
</script>

<style scoped>
/* Style du formulaire (même que CreateDecoder.vue) */
.associate-decoder {
  width: 100%;
  max-width: 100%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f7f7f7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #4a4a4a;
  font-size: 1.8em;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 1.5em;
}

label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
  font-size: 1em;
}

input, select {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
  margin-bottom: 0.8em;
}

button {
  padding: 0.8em 2em;
  margin: 1em 0;
  background-color: #bbdfc6; /* Couleur violet ou ton principal */
  color: #028C51;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
  width: 48%; /* Les boutons prennent chacun environ la moitié de la largeur */
}

button:hover {
  background-color: #c2eacd;
}

button[type="button"] {
  background-color: #bbdfc6; /* Couleur pour le bouton annuler */
}

button[type="button"]:hover {
  background-color: #c2eacd;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: white;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
}

.popup-content button {
  margin: 5px;
}

@media (max-width: 768px) {
  .associate-decoder {
    width: 90%;
    padding: 15px;
  }
  button {
    font-size: 1em;
    padding: 0.8em 1.5em;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.5em;
  }
  .associate-decoder {
    padding: 10px;
  }
  button {
    padding: 0.6em 1.2em;
    font-size: 0.9em;
    width: 100%;
  }
  .form-buttons {
    flex-direction: column;
  }
}
</style>
