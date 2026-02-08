<template>
  <div class="phone" v-if="step">

    <!-- Titel van de huidige step -->
    <h1 class="title">{{ step.title }}</h1>

    <!-- Uitleg / context van de step -->
    <p class="desc">{{ step.body }}</p>

    <!-- Chatweergave -->
    <div class="chatbox">
      <!-- Loop over alle chatberichten in deze step -->
      <div v-for="m in step.chat" :key="m.id">

        <!-- Tijdsaanduiding boven een bericht -->
        <div v-if="m.time" class="time">{{ m.time }}</div>

        <!-- Systeembericht (bv. "Gelezen") -->
        <div v-if="m.side === 'system'" class="systemRow">
          <div class="systemText">{{ m.text }}</div>
        </div>

        <!-- Normaal chatbericht (van gebruiker of ander) -->
        <div v-else class="row" :class="m.side">
          <div class="bubble">{{ m.text }}</div>
        </div>
      </div>
    </div>

    <!-- Vraag aan de gebruiker (optioneel per step) -->
    <h2 v-if="step.question" class="question">
      {{ step.question }}
    </h2>

    <!-- Keuzeknoppen -->
    <div class="options">
      <!-- Loop over alle opties van deze step -->
      <template v-for="opt in step.options" :key="opt.id">

        <!-- Keuzeknop -->
        <button
          :class="buttonClass(opt)"
          :disabled="opt.disabled"
          @click="choose(opt)"
        >
          <span class="label">{{ opt.label }}</span>

          <!-- Potlood-icoon bij eigen input -->
          <img
            v-if="opt.type === 'text'"
            :src="pencilIcon"
            alt=""
            class="icon"
          />
        </button>

        <!-- Eigen input veld (enkel bij type === text) -->
        <div v-if="opt.type === 'text' && showCustom" class="customWrap">
          <textarea
            v-model="customText"
            class="customInput"
            rows="3"
            placeholder="Typ jouw antwoord"
            @keydown.enter.exact.prevent="submitCustom"
            @keydown.enter.shift.exact.stop
          ></textarea>

          <!-- Verzenden van eigen input -->
          <button
            class="navy submit"
            :disabled="!canSubmitCustom"
            @click="submitCustom"
          >
            Verstuur
          </button>
        </div>
      </template>
    </div>

    <!-- Extra hint onder de opties -->
    <p v-if="step.hint" class="hint">{{ step.hint }}</p>

    <!-- Safe exit -->
    <button class="stop" @click="stop">Stoppen?</button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useScenarioStore } from "../app/store/scenarioStore"
import pencilIcon from "../components/icons/icon_pencil.svg"

const route = useRoute()
const router = useRouter()
const store = useScenarioStore()

// Haalt de huidige step op op basis van scenarioId + stepId
const step = computed(() =>
  store.getStep(route.params.scenarioId, route.params.stepId)
)

// State voor eigen input
const showCustom = ref(false)
const customText = ref("")
const customNextStepId = ref(null)
const customOptId = ref("anders")

// Validatie: minimum 2 karakters
const canSubmitCustom = computed(() =>
  customText.value.trim().length >= 2
)

// Bepaalt welke knopstijl gebruikt wordt
function buttonClass(opt) {
  const base = opt.variant === "primary" ? "primaryBtn" : "navy"
  const active = opt.type === "text" && showCustom.value ? " active" : ""
  return base + active
}

// Afhandeling van een optie
function choose(opt) {
  // Eigen input gekozen
  if (opt.type === "text") {
    showCustom.value = !showCustom.value
    customNextStepId.value = opt.nextStepId || null
    customOptId.value = opt.id || "anders"
    return
  }

  // Reset custom input
  showCustom.value = false
  customText.value = ""

  // Sla antwoord op
  store.saveAnswer(route.params.stepId, opt.id)

  // Geen volgende step → safe exit
  if (!opt.nextStepId) {
    router.push({ name: "stop" })
    return
  }

  // Terug naar scenario intro
  if (opt.nextStepId === "intro") {
    router.push({
      name: "scenario-intro",
      params: { scenarioId: route.params.scenarioId },
    })
    return
  }

  // Normale navigatie naar volgende step
  router.push({
    name: "scenario-step",
    params: {
      scenarioId: route.params.scenarioId,
      stepId: opt.nextStepId,
    },
  })
}

// Verzenden van eigen input
function submitCustom() {
  if (!canSubmitCustom.value) return

  // Sla vrije tekst op
  store.saveAnswer(route.params.stepId, {
    id: customOptId.value,
    text: customText.value.trim(),
  })

  // Geen volgende step → safe exit
  if (!customNextStepId.value) {
    router.push({ name: "stop" })
    return
  }

  showCustom.value = false

  // Ga naar volgende step
  router.push({
    name: "scenario-step",
    params: {
      scenarioId: route.params.scenarioId,
      stepId: customNextStepId.value,
    },
  })
}

// Safe exit knop
function stop() {
  router.push({ name: "stop" })
}
</script>

<style scoped>
/* Layout van het scherm */
.phone{
  max-width: var(--maxw);
  margin: 24px auto;
  background: var(--bg);
  padding: 22px;
  min-height: 820px;
}

/* Titel en beschrijving */
.title{
  margin: 10px 0;
}
.desc{
  margin: 0 0 18px;
}

/* Chat container */
.chatbox{
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: 16px;
  margin: 12px 0 22px;
}

/* Tijdstip boven berichten */
.time{
  text-align: center;
  font-size: 14px;
  color: var(--muted);
  margin: 10px 0;
}

/* Systeembericht */
.systemRow{
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
.systemText{
  font-size: 12px;
  color: var(--muted);
}

/* Chat bubbles */
.row{
  display: flex;
  margin: 10px 0;
}
.row.you{
  justify-content: flex-end;
}
.row.her{
  justify-content: flex-start;
}
.bubble{
  max-width: 75%;
  padding: 14px 16px;
  border-radius: 22px;
  font-size: 18px;
  line-height: 1.25;
}
.row.you .bubble{
  background: var(--bubble-you);
  color: var(--snow);
}
.row.her .bubble{
  background: var(--bubble-her);
  color: var(--charcoal);
}

/* Vraag en opties */
.question{
  margin: 10px 0 14px;
}
.options{
  display: grid;
  gap: 12px;
}

/* Knoppen */
.navy,
.primaryBtn{
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: var(--radius-lg);
  font-size: 16px;
  font-weight: 650;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.navy{
  background: var(--navy);
  color: var(--snow);
}
.navy.active{
  background: var(--navy-pressed);
}
.navy:disabled{
  opacity: 0.5;
  cursor: not-allowed;
}

.primaryBtn{
  background: var(--primary);
  color: var(--snow);
}
.primaryBtn:active{
  background: var(--primary-pressed);
}

/* Eigen input */
.customWrap{
  padding-top: 10px;
  display: grid;
  gap: 10px;
}
.customInput{
  width: 100%;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(0,0,0,0.12);
  padding: 12px 14px;
  resize: none;
  background: var(--snow);
}
.submit{
  padding: 14px;
}

/* Hint en stopknop */
.hint{
  margin-top: 10px;
  color: var(--muted);
  font-size: 14px;
}
.stop{
  width: 100%;
  border: 0;
  margin-top: 22px;
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
