// Editable content of the COIL website. Teachers can change anything here without touching the rest of the code.
// Dates are provisional until confirmed by the three universities.

window.COIL_CONTENT = {
  title: 'Comparing Europe with Data',
  subtitle: 'A Ulysseus COIL on comparative socio-economic data analysis',
  course: 'Advanced Data Analysis and Visualization (3 ECTS)',
  period: '12 October – 18 December 2026',
  provisional: true,

  universities: [
    {name: 'Universidad de Sevilla', country: 'Spain', logo: 'img/us.svg', url: 'https://www.us.es'},
    {name: 'Technical University of Košice', country: 'Slovakia', logo: 'img/tuke.svg', url: 'https://www.tuke.sk'},
    {name: 'University of Montenegro', country: 'Montenegro', logo: 'img/uom.svg', url: 'https://www.ucg.ac.me'},
  ],

  // Teaching team: {name, university, email}
  teachers: [
    {name: 'Daniel Ruiz Romera', university: 'Universidad de Sevilla', email: 'druiz8@us.es'},
    {name: 'Víctor Ernesto Pérez León', university: 'Universidad de Sevilla', email: 'vpleon@us.es'},
    {name: 'Alena Mojsejová', university: 'Technical University of Košice', email: 'alena.mojsejova@tuke.sk'},
    {name: 'Dana Paľová', university: 'Technical University of Košice', email: 'dana.palova@tuke.sk'},
    {name: 'Bojan Pejović', university: 'University of Montenegro', email: 'bojan.p@ucg.ac.me'},
  ],

  outcomes: [
    'Collaborate effectively in virtual international teams.',
    'Compare economic and social phenomena across different national contexts.',
    'Communicate analytical findings to international audiences in English.',
    'Apply data analysis techniques to datasets from different countries.',
    'Reflect on how cultural and institutional differences influence data interpretation.',
  ],

  // One entry per week (Monday date). phase groups the weeks; deliverable is what teams hand in.
  schedule: [
    {week: 1, start: '2026-10-12', phase: 'Orientation', title: 'Kick-off and intercultural orientation',
      activities: 'Joint online welcome session. Introductions and icebreaker in mixed groups. How the COIL works.',
      deliverable: 'Personal profile and first reflection (expectations).'},
    {week: 2, start: '2026-10-19', phase: 'Orientation', title: 'International teams and topic selection',
      activities: 'Teams with students from the three universities. Agree on working rules, tools and meeting times. Choose a socio-economic or public-policy question.',
      deliverable: 'Team charter and one-page topic proposal (question, countries, indicators).'},
    {week: 3, start: '2026-10-26', phase: 'Data', title: 'Data collection and preparation',
      activities: 'Start from the COIL dataset; add national sources if needed. Document every variable.',
      deliverable: 'Clean dataset and data dictionary.'},
    {week: 4, start: '2026-11-02', phase: 'Data', title: 'Exploratory data analysis',
      activities: 'Descriptive statistics, distributions, missing values, first visual comparisons of Spain, Slovakia and Montenegro within Europe.',
      deliverable: 'EDA notebook (Python or R).'},
    {week: 5, start: '2026-11-09', phase: 'Methods', title: 'Correlation and regression',
      activities: 'Relationships between indicators across European countries and over time. Interpreting results in different institutional contexts.',
      deliverable: 'Mid-term reflection (team work and intercultural collaboration).'},
    {week: 6, start: '2026-11-16', phase: 'Methods', title: 'Classification and dimensionality reduction',
      activities: 'Principal component analysis and simple classification models on the country panel.',
      deliverable: 'Short methods memo.'},
    {week: 7, start: '2026-11-23', phase: 'Methods', title: 'Clustering countries',
      activities: 'Which European countries look alike? Where do Spain, Slovakia and Montenegro fall?',
      deliverable: 'Analysis notebook with results.'},
    {week: 8, start: '2026-11-30', phase: 'Communication', title: 'Dashboards and data storytelling',
      activities: 'Design the dashboard for a non-specialist audience. Peer feedback between teams.',
      deliverable: 'Dashboard draft.'},
    {week: 9, start: '2026-12-07', phase: 'Communication', title: 'Final dashboard and rehearsal',
      activities: 'Incorporate feedback, prepare the presentation, rehearse online.',
      deliverable: 'Final dashboard (link or PDF) and slides.'},
    {week: 10, start: '2026-12-14', phase: 'Presentation', title: 'Joint online presentation and reflection',
      activities: 'All teams present to students and teachers from the three universities. Closing discussion.',
      deliverable: 'Final individual reflection.'},
  ],

  // Team projects, added by the teachers after each team submits its link.
  // {team, universities: ['US','TUKE','UoM'], topic, link, image}
  projects: [],

  resources: [
    {title: 'Ulysseus COIL Handbook: A Practical Guide for Educators',
      url: 'https://ulysseus.eu/wp-content/uploads/2025/02/Ulysseus-COIL-Handbook-for-teachers-1.pdf'},
    {title: 'World Bank Open Data (source of most indicators)', url: 'https://data.worldbank.org'},
    {title: 'IMF DataMapper (government debt)', url: 'https://www.imf.org/external/datamapper'},
    {title: 'Eurostat database (more European indicators)', url: 'https://ec.europa.eu/eurostat/data/database'},
  ],
};
