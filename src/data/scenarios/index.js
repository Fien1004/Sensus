import { onlineGesprekVast } from "./onlineGesprekVast"

const scenarios = {
  [onlineGesprekVast.id]: onlineGesprekVast,
}

export function getScenarioById(id) {
  return scenarios[id] || null
}
