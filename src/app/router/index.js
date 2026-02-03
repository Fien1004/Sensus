import { createRouter, createWebHistory } from "vue-router"
import ScenarioIntroView from "../../views/ScenarioIntroView.vue"
import ScenarioStepView from "../../views/ScenarioStepView.vue"
import StopView from "../../views/StopView.vue"

const routes = [
  { path: "/", redirect: "/scenario/online-gesprek-loopt-vast" },
  { path: "/scenario/:scenarioId", name: "scenario-intro", component: ScenarioIntroView },
  { path: "/scenario/:scenarioId/step/:stepId", name: "scenario-step", component: ScenarioStepView },
  { path: "/stop", name: "stop", component: StopView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
