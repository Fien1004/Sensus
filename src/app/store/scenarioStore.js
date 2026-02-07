import { defineStore } from "pinia"
import { getScenarioById } from "../../data/scenarios"

export const useScenarioStore = defineStore("scenario", {
  state: () => ({
    answers: {},
  }),
  actions: {
    saveAnswer(key, value) {
      // normale optie, je stuurt enkel de id string door
      if (typeof value === "string") {
        this.answers[key] = { type: "option", value }
        return
      }

      // custom tekst, je stuurt { id, text } door
      if (value && typeof value === "object") {
        this.answers[key] = { type: "text", value }
        return
      }

      // fallback
      this.answers[key] = { type: "option", value: String(value) }
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
