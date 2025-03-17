<template>
  <div class="create-decoder">
    <h2>Créer un Décodeur</h2>
    <form @submit.prevent="submitForm">
      <!-- ID (automatique) -->
      <div class="form-group">
        <label for="id">ID (automatique)</label>
        <input type="text" id="id" v-model="decoder.id" disabled />
      </div>

      <!-- Nom du Décodeur -->
      <div class="form-group">
        <label for="nomDecodeur">Nom du Décodeur</label>
        <input type="text" id="nomDecodeur" v-model="decoder.nomDecodeur" disabled />
      </div>

      <!-- État du Décodeur -->
      <div class="form-group">
        <label for="etatDecodeur">État du Décodeur</label>
        <select v-model="decoder.etatDecodeur" id="etatDecodeur" required>
          <option value="Redémarré">Redémarré</option>
          <option value="Réinitialisé">Réinitialisé</option>
          <option value="Éteint">Éteint</option>
          <option value="Non fonctionnel">Non fonctionnel</option>
          <option value="Activé">Activé</option>
        </select>
      </div>

      <!-- Boutons -->
      <div class="form-buttons">
        <button type="button" @click="resetForm">Réinitialiser</button>
        <button type="submit">Valider</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Définir les champs du décodeur
      decoder: {
        id: null,
        nomDecodeur: '',
        etatDecodeur: 'Redémarré',
      },
    };
  },
  methods: {
    // Réinitialiser les champs du formulaire
    resetForm() {
      this.decoder.nomDecodeur = `Decodeur_${Date.now()}`; // Créer un nom automatique
      this.decoder.etatDecodeur = 'Redémarré'; // Réinitialiser l'état
    },
    // Valider et soumettre le formulaire
    submitForm() {
      // Vérifier si le formulaire est valide
      if (this.decoder.etatDecodeur && this.decoder.nomDecodeur) {
        // Afficher une fenêtre de confirmation
        if (confirm('La création a été effectuée. Voulez-vous assigner des chaînes TV à ce nouveau décodeur ?')) {
          // Rediriger vers la page d'association des chaînes
          this.$router.push('/associate-channel');
        } else {
          // Réinitialiser le formulaire et revenir à la page de création
          this.resetForm();
        }
      } else {
        alert('Veuillez remplir tous les champs.');
      }
    },
  },
  mounted() {
    this.resetForm(); // Initialiser les valeurs du formulaire
  },
};
</script>

<style scoped>
/* Style du formulaire */
.create-decoder {
  width: 100%;
  max-width: 100%; /* Augmenter la largeur à 1000px pour grands écrans */
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
  background-color: #bbdfc6; /* Couleur pour le bouton réinitialiser */
}

button[type="button"]:hover {
  background-color: #c2eacd;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em; /* Ajouter un écart entre les boutons */
}

@media (max-width: 768px) {
  .create-decoder {
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
  .create-decoder {
    padding: 10px;
  }
  button {
    padding: 0.6em 1.2em;
    font-size: 0.9em;
    width: 100%; /* Les boutons prennent toute la largeur sur les petits écrans */
  }
  .form-buttons {
    flex-direction: column; /* Empiler les boutons sur les petits écrans */
  }
}
</style>

