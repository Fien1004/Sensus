import { defineStore } from "pinia"
import { getScenarioById } from "../../data/scenarios"

export const useScenarioStore = defineStore("scenario", {
  state: () => ({
    answers: {},
  }),
  actions: {
    saveAnswer(key, value) {
      this.answers[key] = value
    },
    getScenario(id) {
      return getScenarioById(id)
    },
    getStep(scenarioId, stepId) {
      const scenario = getScenarioById(scenarioId)
      if (!scenario) return null
      return scenario.steps.find((s) => s.id === stepId) || null
    },
  },
})
