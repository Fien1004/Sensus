export const onlineGesprekVast = {
  id: "online-gesprek-loopt-vast",
  title: "Online gesprek loopt vast",
  subtitle: "Kort gesprek. Haar antwoorden blijven afstandelijk en kort.",
  description: "Je verkent hoe jij reageert in een online gesprek dat niet vlot loopt.",
  durationLabel: "Dit scenario duurt ongeveer 2–3 minuten.",
  introCta: "Start scenario",
  steps: [
    // Start van het scenario
    {
      id: "eerste-contact",
      title: "Eerste contact",
      body:
        "Je hebt iemand toegevoegd op Instagram. Ze accepteert je verzoek. Je stuurt een eerste bericht. Haar antwoord is kort.",
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
    // Eerste interpretatie
    {
      id: "eerste-signaal",
      title: "Eerste signaal van afstand",
      body:
        "Je stuurt een nieuw bericht. Haar antwoord is opnieuw kort, en ze laat lang op zich wachten.",
      chat: [
        { id: "m1", side: "you", text: "Wat ben je aan het doen?", time: "Vandaag 13:36" },
        { id: "m2", side: "her", text: "Bwa, niks..", time: "Vandaag 15:22" },
      ],
      question: "Hoe lees jij dit?",
      options: [
        { id: "druk", label: "Ze is druk", nextStepId: "jouw-reactie" },
        {
          id: "niet-geinteresseerd",
          label: "Ze is niet echt geïnteresseerd",
          nextStepId: "jouw-reactie",
        },
        { id: "geen-idee", label: "Geen idee", nextStepId: "jouw-reactie" },
        { id: "anders", label: "Eigen input", type: "text", nextStepId: "jouw-reactie" },
      ],
    },
    // Keuzemoment. Split in 2 paden
    {
      id: "jouw-reactie",
      title: "Jouw eerste reactie",
      body: "Je merkt dat haar antwoorden kort blijven. Wat doe jij nu?",
      chat: [
        {
          id: "m1",
          side: "you",
          text: "Gewoon aan het niksen, moet kunnen hahaha :)",
          time: "Vandaag 15:24",
        },
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
    // Pad A. Gesprek verder duwen
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
        { id: "m2", side: "system", text: "Gelezen", time: "" },
      ],
      question: "Hoe voelt dit voor jou?",
      options: [
        { id: "teleurstellend", label: "Teleurstellend", nextStepId: "jouw-actie" },
        { id: "frustrerend", label: "Frustrerend", nextStepId: "jouw-actie" },
        { id: "verwarrend", label: "Verwarrend", nextStepId: "jouw-actie" },
        { id: "eigen-input", label: "Eigen input", type: "text", nextStepId: "jouw-actie" },
      ],
    },
     
    {
      id: "jouw-actie",
      title: "Jouw actie",
      body: "Het gesprek loopt niet zoals je had gehoopt.",
      chat: [
        {
          id: "m1",
          side: "you",
          text: "Anders kunnen we een keertje samen niksen hé ;)",
          time: "Gisteren 22:48",
        },
        { id: "m2", side: "system", text: "Gelezen", time: "" },
      ],
      question: "Wat stuur je nu?",
      options: [
        {
          id: "doorvragen",
          label: "Waarom reageer je zo weinig? Je kan toch gewoon iets sturen?",
          nextStepId: "reflectie-a",
        },
        {
          id: "begrip",
          label: "Sorry, ik push denk ik te veel. Als je geen zin hebt om te praten is dat oké.",
          nextStepId: "reflectie-a",
        },
        { id: "eigen-input", label: "Eigen input", type: "text", nextStepId: "reflectie-a" },
      ],
    },

    {
      id: "reflectie-a",
      title: "Reflectie",
      body:
        "Je zag de signalen en je nam verantwoordelijkheid. Het is niet makkelijk om online aan te voelen wat iemand wil. Je keuze toont inzicht.",
      question: "Wat wil je in de toekomst sneller herkennen?",
      options: [
        {
          id: "reflectie-input",
          label: "Eigen input",
          type: "text",
          nextStepId: "einde",
        },
      ],
    },
    // Pad B. Gesprek stoppen
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
        { id: "m2", side: "her", text: "Dankje. Wordt gewaardeerd :)", time: "" },
      ],
      question: "Hoe voelt dit voor jou?",
      options: [
        { id: "opluchtend", label: "Opluchtend", nextStepId: "gesprek-niet-in-balans" },
        { id: "teleurstellend", label: "Teleurstellend", nextStepId: "gesprek-niet-in-balans" },
        { id: "onzeker", label: "Onzeker", nextStepId: "gesprek-niet-in-balans" },
        {
          id: "eigen-input",
          label: "Eigen input",
          type: "text",
          nextStepId: "gesprek-niet-in-balans",
        },
      ],
    },

    {
      id: "gesprek-niet-in-balans",
      title: "Je merkt dat het gesprek niet in balans was",
      body: "Je merkt dat jullie energie en verwachtingen niet gelijk waren.",
      question: "Heb je spijt dat je een berichtje stuurde?",
      options: [
        { id: "ja", label: "Ja", nextStepId: "reflectie-b" },
        { id: "nee", label: "Nee, ik leer hier uit", nextStepId: "reflectie-b" },
        { id: "eigen-input", label: "Eigen input", type: "text", nextStepId: "reflectie-b" },
      ],
      hint:
        "Kort of veel sturen zegt niet altijd iets over interesse. Soms lopen verwachtingen gewoon uiteen.",
    },

    {
      id: "reflectie-b",
      title: "Reflectie",
      body:
        "Je nam afstand en gaf jezelf en de ander ruimte. Dat is soms het beste wat je kan doen. Niet elk gesprek hoeft verder te gaan.",
      question: "Wat zou jou helpen in de toekomst?",
      options: [
        {
          id: "reflectie-input",
          label: "Eigen input",
          type: "text",
          nextStepId: "einde",
        },
      ],
    },

    {
      id: "einde",
      title: "Je hebt het scenario afgerond!",
      body:
        "Goed gedaan! Je hebt scenario 1 succesvol afgerond. Bedankt voor je deelname.\n\nHeb je nog vragen? Aarzel niet om de moderator aan te spreken.",
      question: "",
      options: [
        {
          id: "afronden",
          label: "Afronden",
          nextStepId: "intro",
          variant: "primary",
        },
      ],
    },
  ],
}
