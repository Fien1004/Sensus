<template>
  <!-- Safe exit / pauzescherm -->
  <div class="phone">

    <!-- Pauze-icoon, puur visueel -->
    <div class="iconWrap" aria-hidden="true">
      <img
        :src="pauseIcon"
        alt=""
        class="pauseIcon"
      />
    </div>

    <!-- Titel van het pauzescherm -->
    <h1 class="title">Even pauze?</h1>

    <!-- Uitleg waarom dit scherm er is -->
    <p class="desc">
      Je hoeft niet verder te gaan als het niet goed voelt. Neem een moment voor jezelf.
      Je kan altijd later opnieuw starten.
    </p>

    <!-- Extra geruststelling -->
    <p class="note">Er wordt niets opgeslagen.</p>

    <!-- Gebruiker keert terug naar de vorige step -->
    <button class="primary" @click="goBack">
      Ga verder
    </button>

    <!-- Gebruiker verlaat het scenario volledig -->
    <button class="stop" @click="goHome">
      Stoppen?
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import pauseIcon from "../components/icons/icon_pause.svg"

const router = useRouter()

// Gaat één stap terug in de navigatiegeschiedenis
// Wordt gebruikt wanneer de gebruiker verder wil gaan
function goBack() {
  router.back()
}

// Brengt de gebruiker terug naar de startpagina
// Wordt gebruikt wanneer de gebruiker definitief stopt
function goHome() {
  router.push("/")
}
</script>

<style scoped>
/* Container die een mobiel scherm simuleert */
.phone{
  max-width: var(--maxw);
  margin: 24px auto;
  background: var(--bg);
  padding: 22px;
  min-height: 820px;
}

/* Wrapper rond het pauze-icoon */
.iconWrap{
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 34px;
}

/* Groot pauze-icoon */
.pauseIcon{
  width: 120px;
  height: auto;
}

/* Typography: enkel spacing, geen font-sizes */
.title{
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}

.desc{
  margin: 0 0 26px;
  max-width: 520px;
}

.note{
  margin: 0 0 22px;
}

/* Primaire knop: verdergaan */
.primary{
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: var(--primary);
  color: var(--snow);
  font-size: 16px;
  font-weight: 650;
  cursor: pointer;
}
.primary:active{
  background: var(--primary-pressed);
}

/* Secundaire knop: scenario verlaten */
.stop{
  width: 100%;
  border: 0;
  margin-top: 14px;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: var(--glass);
  color: var(--teal);
  font-size: 16px;
  font-weight: 650;
  cursor: pointer;
}
.stop:active{
  background: var(--dirty-window);
}
</style>
