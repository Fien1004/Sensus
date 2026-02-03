<template>
  <div class="phone" v-if="step">
    <h1 class="title">{{ step.title }}</h1>
    <p class="desc">{{ step.body }}</p>

    <div class="chatbox">
      <div v-for="m in step.chat" :key="m.id">
        <div v-if="m.time" class="time">{{ m.time }}</div>

        <div class="row" :class="m.side">
          <div class="bubble">{{ m.text }}</div>
        </div>
      </div>
    </div>

    <h2 class="question">{{ step.question }}</h2>

    <div class="options">
      <button
        v-for="opt in step.options"
        :key="opt.id"
        class="navy"
        @click="choose(opt)"
      >
        {{ opt.label }}
      </button>
    </div>

    <p v-if="step.hint" class="hint">{{ step.hint }}</p>

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

const step = computed(() => store.getStep(route.params.scenarioId, route.params.stepId))

function choose(opt) {
  store.saveAnswer(route.params.stepId, opt.id)

  if (!opt.nextStepId) {
    router.push({ name: "stop" })
    return
  }

  router.push({
    name: "scenario-step",
    params: { scenarioId: route.params.scenarioId, stepId: opt.nextStepId },
  })
}

function stop() {
  router.push({ name: "stop" })
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
.title{
  font-size: 24px;
  margin: 10px 0 10px;
}
.desc{
  font-size: 16px;
  color: var(--muted);
  margin: 0 0 18px;
  line-height: 1.4;
}

.chatbox{
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: 16px;
  margin: 12px 0 22px;
}
.time{
  text-align: center;
  font-size: 14px;
  color: var(--muted);
  margin: 10px 0;
}
.row{ display: flex; margin: 10px 0; }
.row.you{ justify-content: flex-end; }
.row.her{ justify-content: flex-start; }

.bubble{
  max-width: 75%;
  padding: 14px 16px;
  border-radius: 22px;
  line-height: 1.25;
  font-size: 18px;
}
.row.you .bubble{ background: var(--bubble-you); color: white; }
.row.her .bubble{ background: var(--bubble-her); color: #111; }

.question{
  font-size: 16px;
  margin: 10px 0 14px;
}

.options{
  display: grid;
  gap: 12px;
}

.navy{
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: var(--navy);
  color: white;
  font-size: 16px;
  font-weight: 650;
  cursor: pointer;
}
.navy:active{ background: var(--navy-pressed); }

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
  background: #dbe8ef;
  color: #0b3a4a;
  font-size: 16px;
  font-weight: 650;
  cursor: pointer;
}
</style>
