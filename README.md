
## Scenario flow

De scenarioflow is data-gedreven opgebouwd.
Dit betekent dat alle schermen, keuzes en vertakkingen worden aangestuurd via data, niet via aparte views.

Daardoor kan de inhoud aangepast of uitgebreid worden zonder wijzigingen aan de interface-logica.
Dit maakt het systeem schaalbaar en onderhoudsvriendelijk.

## Bestandsstructuur

Scenario’s staan in:
src/data/scenarios

Belangrijkste bestanden:
- onlineGesprekVast.js
    Bevat de volledige inhoud en flow van het scenario.
- ScenarioStepView.vue
    Toont elke stap van een scenario op basis van de data.
- ScenarioIntroView.vue
    Toont de intro van een scenario.
- scenarioStore.js
    Haalt scenario’s en steps op en bewaart antwoorden.

## Scenario

### Hoe een scenario is opgebouwd

Een scenario bestaat uit:

- metadata
    titel, beschrijving, duur, startknop
- steps
    een lijst van schermen die de gebruiker doorloopt

Voorbeeldstructuur:
{
  id: "scenario-id",
  title: "Scenario titel",
  description: "Beschrijving",
  steps: []
}

### Hoe een step werkt

Elke step bepaalt:
- wat de gebruiker ziet
- welke keuzes mogelijk zijn
- waar de gebruiker naartoe gaat

Structuur van een step:
{
  id: "step-id",
  title: "Titel op scherm",
  body: "Uitlegtekst",
  chat: [],
  question: "Vraag aan de gebruiker",
  options: []
}

### Chat

Een step kan een chat bevatten.
chat: [
  { side: "you", text: "Bericht van gebruiker" },
  { side: "her", text: "Antwoord van de ander" },
  { side: "system", text: "Systeemmelding zoals 'Gelezen'" }
]

### Opties en navigatie

Elke optie bepaalt de volgende stap via nextStepId.
{
  id: "keuze-id",
  label: "Tekst op knop",
  nextStepId: "volgende-step-id"
}

### Extra eigenschappen:

- type: "text"
    Toont een invoerveld voor eigen input.
- variant: "primary"
    Toont een fuchsia knop.
- nextStepId: "intro"
    Brengt de gebruiker terug naar de scenario-intro.

Als nextStepId null is
→ de gebruiker gaat naar de safe exit.

### Scenario flow aanpassen

Een scenario aanpassen doe je door:
- steps toe te voegen of te wijzigen in onlineGesprekVast.js
- nextStepId’s te veranderen om nieuwe vertakkingen te maken

Er hoeven geen nieuwe Vue-views aangemaakt te worden.