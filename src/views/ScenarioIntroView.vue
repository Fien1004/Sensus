<template>
  <div class="phone" v-if="scenario">
    <button class="back" @click="goBack">Terug</button>

    <h1 class="title">{{ scenario.title }}</h1>
    <p class="subtitle">{{ scenario.subtitle }}</p>
    <p class="desc">{{ scenario.description }}</p>

    <div class="spacer"></div>

    <button class="primary" @click="start">{{ scenario.introCta }}</button>
    <p class="small">{{ scenario.durationLabel }}</p>

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

const scenario = computed(() => store.getScenario(route.params.scenarioId))

function start() {
  router.push({
    name: "scenario-step",
    params: { scenarioId: scenario.value.id, stepId: scenario.value.steps[0].id },
  })
}

function stop() {
  router.push({ name: "stop" })
}

function goBack() {
  router.back()
}
</script>

<style scoped>
.phone{
  max-width: var(--maxw);
  margin: 24px auto;
  background: var(--bg);
  padding: 22px;
  min-height: 820px;
}
.back{
  border: 0;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  padding: 6px 0;
}
.title{
  font-size: 24px;
  margin: 18px 0 10px;
}
.subtitle{
  font-size: 16px;
  margin: 0 0 12px;
}
.desc{
  font-size: 14px;
  margin: 0;
  color: var(--muted);
  line-height: 1.4;
}
.spacer{ height: 260px; }

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
.primary:active{ background: var(--primary-pressed); }

.small{
  font-size: 14px;
  color: var(--muted);
  margin-top: 12px;
}

.stop{
  width: 100%;
  border: 0;
  margin-top: 18px;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: #D2E7F0;
  color: #0b3a4a;
  font-size: 16px;
  font-weight: 650;
  cursor: pointer;
}
</style>
