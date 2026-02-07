export const onlineGesprekVast = {
  id: "online-gesprek-loopt-vast",
  title: "Online gesprek loopt vast",
  subtitle: "Kort gesprek. Haar antwoorden blijven afstandelijk en kort.",
  description: "Je verkent hoe jij reageert in een online gesprek dat niet vlot loopt.",
  durationLabel: "Dit scenario duurt ongeveer 2–3 minuten.",
  introCta: "Start scenario",
  steps: [
    {
      id: "eerste-contact",
      title: "Eerste contact",
      body: "Je hebt iemand toegevoegd op Instagram. Ze accepteert je verzoek. Je stuurt een eerste bericht. Haar antwoord is kort.",
      chat: [
        { id: "m1", side: "you", text: "Hey, alles goed?", time: "Vandaag 13:14" },
        { id: "m2", side: "her", text: "Cv", time: "" },
      ],
      question: "Hoe voelt dit voor jou?",
      options: [
        { id: "enthousiast", label: "Enthousiast", nextStepId: "eerste-signaal" },
        { id: "neutraal", label: "Neutraal", nextStepId: "eerste-signaal" },
        { id: "onzeker", label: "Onzeker", nextStepId: "eerste-signaal" },
        { id: "anders", label: "Eigen input", type: "text", nextStepId: "eerste-signaal" },
      ],
    },
    {
      id: "eerste-signaal",
      title: "Eerste signaal van afstand",
      body: "Je stuurt een nieuw bericht. Haar antwoord is opnieuw kort, en ze laat lang op zich wachten.",
      chat: [
        { id: "m1", side: "you", text: "Wat ben je aan het doen?", time: "Vandaag 13:36" },
        { id: "m2", side: "her", text: "Bwa, niks..", time: "Vandaag 15:22" },
      ],
      question: "Hoe lees jij dit?",
      options: [
        { id: "druk", label: "Ze is druk", nextStepId: "jouw-reactie" },
        { id: "niet-geinteresseerd", label: "Ze is niet echt geïnteresseerd", nextStepId: "jouw-reactie" },
        { id: "geen-idee", label: "Geen idee", nextStepId: "jouw-reactie" },
        { id: "anders", label: "Eigen input", type: "text", nextStepId: "jouw-reactie" },
      ],
    },
    {
      id: "jouw-reactie",
      title: "Jouw eerste reactie",
      body: "Je merkt dat haar antwoorden kort blijven. Wat doe jij nu?",
      chat: [
        { id: "m1", side: "you", text: "Gewoon aan het niksen, moet kunnen hahaha :)", time: "Vandaag 15:24" },
        { id: "m2", side: "her", text: "Hahaha", time: "Vandaag 15:36" },
      ],
      question: "Kies wat jij zou doen.",
      options: [
        {
          id: "stuur-nog",
          label: "Ik stuur nog een bericht om het gesprek gaande te houden",
          nextStepId: "gesprek-verder-duwen",
        },
        {
          id: "stilte",
          label: "Ik laat even stilte vallen",
          nextStepId: "gesprek-stoppen",
        },
        {
          id: "eigen-input",
          label: "Eigen input",
          type: "text",
          nextStepId: "gesprek-verder-duwen",
        },
      ],

      hint: "Beide keuzes leiden naar een andere situatie.",
    },
    {
      id: "gesprek-verder-duwen",
      title: "Je duwt het gesprek verder",
      body: "Je stuurt nog een bericht. Ze reageert helemaal niet.",
      chat: [
        {
          id: "m1",
          side: "you",
          text: "Anders kunnen we een keertje samen niksen hé ;)",
          time: "Gisteren 22:48",
        },
        {
          id: "m2",
          side: "system",
          text: "Gelezen",
          time: "",
        },
      ],
      question: "",
      options: [
        {
          id: "volgende",
          label: "Volgende",
          nextStepId: null,
          variant: "primary",
        },
      ],
    },
    {
      id: "gesprek-stoppen",
      title: "Je stopt het gesprek",
      body: "Je verontschuldigt je. Je voelt dat de ander niet echt mee is.",
      chat: [
        {
          id: "m1",
          side: "you",
          text: "Ik merk dat je niet echt interesse hebt in dit gesprek, helemaal oké natuurlijk. Sorry voor de spam :p",
          time: "Vandaag 18:36",
        },
      ],
      question: "",
      options: [
        {
          id: "volgende",
          label: "Volgende",
          nextStepId: null,
          variant: "primary",
        },
      ],
    },


  ],
}
