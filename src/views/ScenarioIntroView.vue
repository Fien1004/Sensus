<template>
  <!-- Container die enkel rendert als het scenario bestaat -->
  <div class="phone" v-if="scenario">

    <!-- Terugknop: gaat naar vorige pagina in de browser history -->
    <button class="back" @click="goBack">Terug</button>

    <!-- Titel van het scenario -->
    <h1 class="title">{{ scenario.title }}</h1>

    <!-- Subtitel / korte context -->
    <p class="subtitle">{{ scenario.subtitle }}</p>

    <!-- Beschrijving van wat het scenario inhoudt -->
    <p class="desc">{{ scenario.description }}</p>

    <!-- Visuele ruimte om content te spreiden -->
    <div class="spacer"></div>

    <!-- Startknop: brengt gebruiker naar de eerste step -->
    <button class="primary" @click="start">
      {{ scenario.introCta }}
    </button>

    <!-- Extra info zoals geschatte duur -->
    <p class="meta">{{ scenario.durationLabel }}</p>

    <!-- Safe exit: gebruiker kan het scenario verlaten -->
    <button class="stop" @click="stop">Stoppen?</button>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useScenarioStore } from "../app/store/scenarioStore"

const route = useRoute()
const router = useRouter()
const store = useScenarioStore()

// Haalt het scenario op op basis van de route-parameter
// Wordt automatisch geüpdatet als de route verandert
const scenario = computed(() =>
  store.getScenario(route.params.scenarioId)
)

// Start het scenario:
// navigeert naar de eerste step van het scenario
function start() {
  router.push({
    name: "scenario-step",
    params: {
      scenarioId: scenario.value.id,
      stepId: scenario.value.steps[0].id,
    },
  })
}

// Safe exit: brengt gebruiker naar het stop-scherm
function stop() {
  router.push({ name: "stop" })
}

// Gaat één stap terug in de navigatiegeschiedenis
function goBack() {
  router.back()
}
</script>

<style scoped>
/* Hoofdcontainer die een mobiel scherm simuleert */
.phone{
  max-width: var(--maxw);
  margin: 24px auto;
  background: var(--bg);
  padding: 22px;
  min-height: 820px;
}

/* Terugknop bovenaan */
.back{
  border: 0;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
  padding: 6px 0;
  color: var(--text);
}

/* Scenario titel */
.title{
  margin: 18px 0 10px;
}

/* Subtitel onder de titel */
.subtitle{
  font-size: 16px;
  margin: 0 0 12px;
  color: var(--text);
}

/* Beschrijvende tekst */
.desc{
  margin: 0;
}

/* Lege ruimte om layout te sturen */
.spacer{
  height: 260px;
}

/* Primaire actieknop */
.primary{
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: var(--primary);
  color: white;
  font-size: 16px;
  font-weight: 650;
  cursor: pointer;
}
.primary:active{
  background: var(--primary-pressed);
}

/* Extra metadata zoals duur */
.meta{
  font-size: 12px;
  color: var(--muted);
  margin-top: 12px;
}

/* Secundaire actie: stoppen */
.stop{
  width: 100%;
  border: 0;
  margin-top: 18px;
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
