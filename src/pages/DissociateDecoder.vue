<template>
  <div class="background-wrapper">
    <div class="container">
      <form class="form dissociate-decoder">
        <p class="title">Dissocier un décodeur </p>

        <label>
          <select v-model="selectedDecoder" class="input" required>
            <option v-for="decoder in decoders" :key="decoder.id" :value="decoder.id">
              {{ decoder.name }}
            </option>
          </select>
          <span>Sélectionner un décodeur</span>
        </label>

        <label>
          <select v-model="selectedClient" class="input" required>
            <option v-for="client in clients" :key="client.id" :value="client.id">
              {{ client.name }}
            </option>
          </select>
          <span>Sélectionner un client</span>
        </label>

        <div class="button-group">
          <button class="submit" type="submit">Valider</button>
          <button class="cancel" type="button" @click="cancel">Annuler</button>
        </div>
      </form>
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
      ]
    };
  },
  methods: {
    cancel() {
      this.selectedDecoder = null;
      this.selectedClient = null;
    }
  }
};
</script>

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
}

.form:hover {
  box-shadow: 0 0 20px rgba(2, 140, 81, 0.4);
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
  justify-content: center; /* Centrer les boutons */
  gap: 15px;
}

/* 🌟 STYLE DES BOUTONS 🌟 */
button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer; /* Ajout de la propriété pour le curseur */
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
</style>
