// Editable content of the COIL website. Teachers can change anything here without touching the rest of the code.
// Dates are provisional until confirmed by the three universities.

window.COIL_CONTENT = {
  title: 'Comparing Europe with Data',
  subtitle: 'A Ulysseus COIL on comparative socio-economic data analysis',
  // The COIL is part of these courses (each student follows one of them at their home university)
  course: 'Econometrics · Advanced Data Analysis and Visualization',
  period: '12 October – 11 December 2026',
  provisional: true,

  universities: [
    {name: 'University of Seville', country: 'Spain', logo: 'img/us.svg', url: 'https://www.us.es'},
    {name: 'Technical University of Košice', country: 'Slovakia', logo: 'img/tuke.svg', url: 'https://www.tuke.sk'},
    {name: 'University of Montenegro', country: 'Montenegro', logo: 'img/uom.svg', url: 'https://www.ucg.ac.me'},
  ],

  teamIntro: 'The COIL is designed and run jointly by teachers from the three universities. We share the schedule, the dataset and the final presentation, and each of us guides and grades the students of our own university.',
  teamWork: [
    'Week 1: joint online welcome session with all teachers and students.',
    'During the COIL: your home teacher follows your progress, answers your questions and grades your deliverables.',
    'Week 9: all teachers attend the joint online presentation and give feedback to every team.',
    'At the end: the teachers coordinate the extra points and the certificates of participation.',
  ],

  // Teaching team: {name, university, email, photo: 'img/team/file.jpg', bio: one sentence (optional)}
  teachers: [
    {name: 'Daniel Ruiz Romera', university: 'University of Seville', email: 'druiz8@us.es', bio: 'Department of Applied Economics II. Teaches econometrics; works on innovation policy, entrepreneurship, academic spin-offs and EU funding for firms.', photo: 'img/team/daniel-ruiz-romera.jpg'},
    {name: 'Alena Mojsejová', university: 'Technical University of Košice', email: 'alena.mojsejova@tuke.sk', bio: 'Faculty of Economics (Applied Mathematics and Business Informatics). Teaches probability and statistics; works on income inequality and gender gaps.', photo: 'img/team/alena-mojsejova.jpg'},
    {name: 'Bojan Pejović', university: 'University of Montenegro', email: 'bojan.p@ucg.ac.me', bio: 'Faculty of Economics. Head of the Center for Statistical Analysis; teaches statistics and econometrics. PhD in Economics, University of Belgrade.', photo: 'img/team/bojan-pejovic.jpg'},
    {name: 'Dana Paľová', university: 'Technical University of Košice', email: 'dana.palova@tuke.sk', bio: 'Faculty of Economics (Applied Mathematics and Business Informatics). Teaches data analysis and visualisation; works on business intelligence and digital transformation.', photo: 'img/team/dana-palova.jpg'},
    {name: 'Víctor Ernesto Pérez León', university: 'University of Seville', email: 'vpleon@us.es', bio: 'Department of Applied Economics II. Teaches econometrics and business statistics; works on composite indicators, multicriteria analysis and sustainable tourism.', photo: 'img/team/victor-perez-leon.jpg'},
  ],

  outcomes: [
    'Collaborate effectively in virtual international teams.',
    'Compare economic and social phenomena across different national contexts.',
    'Communicate analytical findings to international audiences in English.',
    'Apply data analysis techniques to datasets from different countries.',
    'Reflect on how cultural and institutional differences influence data interpretation.',
  ],

  // Submission rules that apply to every week
  // submitLink (in each deliverable): upload link pasted by the teachers ('' = not published yet).
  deadline: 'Sunday, 23:59 CET',
  submission: 'this website: use the Submit button of the deliverable (Home, Guide and Schedule)',

  // One entry per week (Monday date). Only weeks 2, 6 and 9 have a deliverable, due on the Sunday of that week.
  // Weeks without a deliverable show "goal": what the team should have ready by the end of the week.
  schedule: [
    {week: 1, start: '2026-10-12', phase: 'Orientation', title: 'Kick-off and intercultural orientation',
      activities: 'Joint online welcome session. Introductions and icebreaker in mixed groups. How the COIL works.',
      goal: 'Read this website and the student guide, attend the kick-off and agree with your team on a communication channel and a weekly meeting time.'},
    {week: 2, start: '2026-10-19', phase: 'Orientation', title: 'International teams and topic selection',
      activities: 'Teams with students from the three universities. Agree on working rules, tools and meeting times. Choose a socio-economic or public-policy question.',
      deliverable: {submitLink: '', number: 1, name: 'Team charter and topic proposal', who: 'Team', format: 'One PDF, maximum 2 pages (use the templates in the guide)',
        include: ['Team charter: team name, members and universities, roles, communication channel, weekly meeting time, how you take decisions, what you do if someone does not contribute.',
          'Topic proposal: research question, why it matters for Spain, Slovakia and Montenegro, 3–6 indicators from the COIL dataset (with their codes), countries and years, and the methods you expect to use.',
          'A short note on your use of AI tools (which tool, for what, and how you checked the result), or a sentence saying you did not use any.']}},
    {week: 3, start: '2026-10-26', phase: 'Data', title: 'Data collection and preparation',
      activities: 'Start from the COIL dataset; add national sources if needed. Document every variable.',
      goal: 'Your dataset is ready (one row per country and year) and every variable is documented in a data dictionary.'},
    {week: 4, start: '2026-11-02', phase: 'Data', title: 'Exploratory data analysis',
      activities: 'Descriptive statistics, distributions, missing values, first visual comparisons of Spain, Slovakia and Montenegro within Europe.',
      goal: 'Descriptive statistics and first charts are done, and the team agrees on what the data show.'},
    {week: 5, start: '2026-11-09', phase: 'Methods', title: 'Regression and classification',
      activities: 'Relationships between indicators across European countries and over time, and simple classification models. Interpreting results in different institutional contexts.',
      goal: 'Your regression or classification model is estimated and interpreted.'},
    {week: 6, start: '2026-11-16', phase: 'Methods', title: 'Dimensionality reduction and clustering',
      activities: 'Principal component analysis and clustering of countries: which European countries look alike, and where do Spain, Slovakia and Montenegro fall?',
      deliverable: {submitLink: '', number: 2, name: 'Analysis notebook', who: 'Team', format: 'Python or R notebook (.ipynb, .Rmd or Quarto), or Gretl script (.inp) with its output, + exported HTML or PDF + your dataset (CSV or Excel)',
        include: ['Data: the dataset you analysed and a data dictionary (name, code, definition, unit, source and years of every variable), with missing values and how you handled them.',
          'Exploratory analysis: descriptive statistics and at least three charts, one comparing Spain, Slovakia and Montenegro with the rest of Europe.',
          'Regression or classification: model specification, results table and interpretation in plain English.',
          'PCA and clustering: variance explained, number of clusters and why, and where Spain, Slovakia and Montenegro fall.',
          'Limitations (sample size, missing data, causality) and your three main conclusions.',
          'A short note on your use of AI tools (which tool, for what, and how you checked the result), or a sentence saying you did not use any.']}},
    {week: 7, start: '2026-11-23', phase: 'Communication', title: 'Dashboards and data storytelling',
      activities: 'Design the dashboard for a non-specialist audience. Give and receive feedback with another team.',
      goal: 'A first version of your dashboard, shown to another team for feedback.'},
    {week: 8, start: '2026-11-30', phase: 'Communication', title: 'Final dashboard and rehearsal',
      activities: 'Incorporate feedback, prepare the presentation, rehearse online.',
      goal: 'Final dashboard and slides ready; the presentation has been rehearsed.'},
    {week: 9, start: '2026-12-07', phase: 'Presentation', title: 'Joint online presentation and reflection',
      activities: 'All teams present to students and teachers from the three universities. Closing discussion.',
      deliverable: {submitLink: '', number: 3, name: 'Final dashboard, presentation and final reflection', who: 'Team (dashboard, slides and presentation) + individual (reflection)',
        format: 'Dashboard link or PDF + slides (maximum 6 slides, 5-minute presentation) + one-page PDF reflection',
        note: 'Upload the dashboard and the slides before the joint presentation. The reflection is due on Sunday.',
        include: ['Final dashboard: your question, the data, three key findings and limitations, for a non-specialist audience.',
          'Slides and live presentation in the joint online session: every team member presents a part. This is required to receive the extra points.',
          'Final individual reflection (300–400 words): what did you learn about data analysis, about working internationally and about yourself?',
          'A short note on your use of AI tools (which tool, for what, and how you checked the result), or a sentence saying you did not use any.']}},
  ],

  // Joint online sessions (Microsoft Teams) with students and teachers of the three universities.
  // Every session is given twice (slots A and B), on two different days and times, with the same content.
  // poll: link to the vote on the dates and times (e.g. Microsoft Forms), shown until the meeting links are published.
  // slots: when = day and time of each slot; link = its Teams meeting link, pasted here by the teachers ('' = not published yet).
  // recording: link to the recording, pasted after the session ('' = not yet). slides: PDF of the session slides.
  sessionsIntro: 'There are four joint online sessions with students and teachers of the three universities, on Microsoft Teams, of 45 minutes at most. Each session is given twice, on two different days and at different times, with the same content, so that it fits the timetables of the three universities: your team chooses one slot and attends it together. If you cannot attend, the recording and the slides of every session are published here afterwards. The rest of the time you work with your team: meet at least once a week, and ask your home teacher whenever you need help.',
  sessionRules: [
    'The link to each session is published on this website (Sessions section and Home page). You do not need an account of another university: open the link and join from the browser or the Teams app.',
    'Each session is given in two slots (A and B), on different days and at different times, with the same content. Agree with your team which slot you attend and go together: part of every session is work in team break-out rooms.',
    'Join on time, with your camera on if possible, and use your real name.',
    'The language of all sessions is English.',
    'The plenary parts of one slot of every session are recorded, and the recording and the slides are published on this website (Sessions section) for students who could not attend. Break-out rooms are never recorded.',
    'If you cannot attend a session, tell your home teacher and your team in advance, and watch the recording before the next team meeting. The final presentation (week 9) is the exception: it is compulsory to receive the extra points.',
  ],
  sessions: [
    {week: 1, recording: '', slides: 'docs/slides/COIL_1_kickoff.pdf', title: 'Kick-off', duration: '45 minutes', poll: '',
      slots: [{label: 'Slot A', when: 'Date and time to be confirmed', link: ''}, {label: 'Slot B', when: 'Date and time to be confirmed', link: ''}],
      goal: 'Meet the people you will work with, understand how the COIL works and hold your first team meeting.',
      prepare: ['Read the student guide and the schedule.', 'Think of one surprising fact or figure about the economy or society of your country.'],
      agenda: [
        {min: 5, item: 'Welcome from the teachers of the three universities. What is a COIL and what is Ulysseus.'},
        {min: 10, item: 'How the COIL works: this website, the schedule, three deliverables, the dataset, extra points and certificate.'},
        {min: 25, item: 'First team meeting in break-out rooms (teams announced by the teachers, with students from the three universities): introduce yourself with your fact about your country, choose a communication channel and a weekly meeting time.'},
        {min: 5, item: 'Questions and closing.'},
      ]},
    {week: 3, recording: '', slides: 'docs/slides/COIL_2_data_workshop.pdf', title: 'Data workshop', duration: '45 minutes', poll: '',
      slots: [{label: 'Slot A', when: 'Date and time to be confirmed', link: ''}, {label: 'Slot B', when: 'Date and time to be confirmed', link: ''}],
      goal: 'Be able to load and document the COIL data in your tool (Python, R, Gretl or Power BI) before the analysis starts.',
      prepare: ['Download the COIL dataset from the Data section.', 'Install your tool and open the CSV once.', 'Bring your team\'s research question.'],
      agenda: [
        {min: 5, item: 'The dataset: indicators, sources, coverage and gaps (especially Montenegro).'},
        {min: 20, item: 'Live demo, about 5 minutes per tool: loading the data, selecting countries and indicators and a first chart in Python, R, Gretl and Power BI.'},
        {min: 5, item: 'How to write the data dictionary and handle missing values.'},
        {min: 15, item: 'Questions from the teams.'},
      ]},
    {week: 5, recording: '', slides: 'docs/slides/COIL_3_midpoint_clinic.pdf', title: 'Mid-point clinic', duration: '45 minutes', poll: '',
      slots: [{label: 'Slot A', when: 'Date and time to be confirmed', link: ''}, {label: 'Slot B', when: 'Date and time to be confirmed', link: ''}],
      goal: 'Check how every team is doing and solve problems with the methods before deliverable 2 (week 6).',
      prepare: ['One slide per team: question, data, first result and the main problem you have.'],
      agenda: [
        {min: 20, item: 'Lightning updates: each team presents its slide in 2 minutes.'},
        {min: 20, item: 'Methods clinic in break-out rooms: regression, classification, PCA and clustering. Teachers rotate between teams.'},
        {min: 5, item: 'Wrap-up: what to submit in deliverable 2.'},
      ]},
    {week: 9, recording: '', slides: 'docs/slides/COIL_4_final_presentations.pdf', title: 'Final presentations', duration: '45 minutes', poll: '',
      slots: [{label: 'Slot A', when: 'Date and time to be confirmed', link: ''}, {label: 'Slot B', when: 'Date and time to be confirmed', link: ''}],
      goal: 'Present your project to students and teachers of the three universities. Compulsory to receive the extra points. The teachers tell each team in which slot it presents.',
      prepare: ['Submit the final dashboard and the slides with the Submit button on this website before the session.', 'Rehearse: 5 minutes per team, every member presents a part.'],
      agenda: [
        {min: 5, item: 'Opening by the teachers.'},
        {min: 35, item: 'Team presentations: 5 minutes each + 2 minutes of questions and feedback (about five teams per slot).'},
        {min: 5, item: 'Closing: next steps (final reflection due on Sunday, extra points and certificates) and group photo.'},
      ]},
  ],

  // Why join: intro, two highlights and a grid of benefits (icon: grade, certificate, globe, portfolio, skills, thesis, internship, network)
  benefits: {
    intro: 'Nine weeks, three universities, one real data project. This is what you get.',
    points: [
      {value: '+1', scale: '/ 10', where: 'University of Seville'},
      {value: '+10', scale: '/ 100', where: 'Technical University of Košice · University of Montenegro'},
    ],
    pointsNote: 'Extra points on your course grade for students who complete the final presentation.',
    certificate: 'Certificate of participation in a Ulysseus European University COIL, signed by three European universities: Seville, Košice and Montenegro. Add it to your CV and LinkedIn.',
    items: [
      {icon: 'globe', title: 'International, from home', text: 'Nine weeks working with students from Spain, Slovakia and Montenegro, without travelling.'},
      {icon: 'portfolio', title: 'A real project for your portfolio', text: 'Real European data and a dashboard you can show to employers. The best ones are published here.'},
      {icon: 'skills', title: 'Skills employers ask for', text: 'Data analysis in Python, R or Gretl, dashboards, international teamwork and presenting in English.'},
      {icon: 'thesis', title: 'A head start for your thesis', text: 'Develop your COIL project further in your bachelor\'s thesis (TFG), in agreement with your supervisor.'},
      {icon: 'internship', title: 'A step towards internships abroad', text: 'An international project and contacts in three countries strengthen applications such as Erasmus+ traineeships.'},
      {icon: 'network', title: 'Your Ulysseus network', text: 'Meet students and teachers from other Ulysseus universities: a first step towards an exchange.'},
    ],
  },

  // Example projects: ideas that work with the COIL dataset (teams may propose their own).
  // image: photo in site/img/projects (800x500); credit: author, licence and Wikimedia Commons page.
  examples: [
    {title: 'Education and youth unemployment', image: 'img/projects/education.jpg', credit: {author: 'Tungsten', license: 'Public domain', url: 'https://commons.wikimedia.org/wiki/File:Mathematics_lecture_at_the_Helsinki_University_of_Technology.jpg'},
      question: 'Do countries with more young people in higher education have lower youth unemployment?',
      indicators: ['SL.UEM.1524.ZS', 'SE.TER.ENRR', 'NY.GDP.PCAP.PP.KD'], methods: 'Regression on the country panel; compare Spain, Slovakia and Montenegro with the European pattern.'},
    {title: 'The digital divide in Europe', image: 'img/projects/digital.jpg', credit: {author: 'Shixart1985', license: 'CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:Man_working_on_laptop_while_enjoying_a_cold_beverage_in_a_cozy_cafe_setting.jpg'},
      question: 'Which European countries are digital leaders and which are lagging behind, and does it depend on income?',
      indicators: ['IT.NET.USER.ZS', 'IT.NET.BBND.P2', 'NY.GDP.PCAP.PP.KD'], methods: 'Correlation, then clustering of countries by their digital profile.'},
    {title: 'Ageing and public spending', image: 'img/projects/ageing.jpg', credit: {author: 'Jules Verne Times Two', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Elderly_women_walking_past_a_roasted_chestnuts_vendor,_Pra%C3%A7a_de_Londres,_Lisbon,_Portugal_julesvernex2.jpg'},
      question: 'Do older societies spend more on health, and do they have more public debt?',
      indicators: ['SP.POP.65UP.TO.ZS', 'SH.XPD.CHEX.GD.ZS', 'GGXWDG_NGDP'], methods: 'Regression with time trends; discuss differences in welfare systems.'},
    {title: 'Women in the labour market', image: 'img/projects/women.jpg', credit: {author: 'Smithsonian Institution', license: 'Public domain', url: 'https://commons.wikimedia.org/wiki/File:Barbara_McClintock_(1902-1992)_shown_in_her_laboratory_in_1947.jpg'},
      question: 'Is higher female participation in the labour market linked to fertility and income across Europe?',
      indicators: ['SL.TLF.CACT.FE.ZS', 'SP.DYN.TFRT.IN', 'NY.GDP.PCAP.PP.KD'], methods: 'Regression and classification of countries into high and low participation groups.'},
    {title: 'The green transition', image: 'img/projects/green.jpg', credit: {author: 'Cgoodwin', license: 'CC BY 3.0', url: 'https://commons.wikimedia.org/wiki/File:Wind_farm_Spain.JPG'},
      question: 'Are richer countries greener? Renewable energy and income in Europe.',
      indicators: ['EG.FEC.RNEW.ZS', 'NY.GDP.PCAP.PP.KD', 'EN.GHG.CO2.PC.CE.AR5'], methods: 'Regression and clustering. Note: there are no CO2 data for Montenegro, so explain how you deal with it.'},
    {title: 'Inequality and the structure of the economy', image: 'img/projects/inequality.jpg', credit: {author: 'ZheerGout', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Vue_de_plusieurs_tours_%C3%A0_La_D%C3%A9fense.jpg'},
      question: 'Are economies with a larger service sector more or less unequal?',
      indicators: ['SI.POV.GINI', 'NV.SRV.TOTL.ZS', 'NY.GDP.MKTP.KD.ZG'], methods: 'PCA to summarise the economic structure, then clustering.'},
  ],

  // Templates referred to in the weekly deliverables
  templates: [
    {title: 'Template: topic proposal (week 2)', items: ['Team name and members (name, university).', 'Research question (one sentence, ending with a question mark).',
      'Why it matters for Spain, Slovakia and Montenegro (3–4 sentences).', 'Indicators: name and code of 3–6 indicators from the COIL dataset.',
      'Countries and years you will use.', 'Methods you expect to use.', 'Possible problems (missing data, comparability) and how you will handle them.']},
    {title: 'Template: team charter (week 2)', items: ['Our goal as a team.', 'Roles for the first weeks (coordinator, data lead, analyst, visualisation lead, editor) and when we will rotate them.',
      'Communication channel and maximum answer time.', 'Weekly meeting day and time (CET).', 'How we take decisions.', 'What we do if a member does not contribute or misses a deadline.']},
    {title: 'Template: data dictionary (week 3)', items: ['One row per variable with these columns: variable name · indicator code · definition · unit · source · years covered · missing values and how they were handled.']},
  ],

  // Student guide: one block per topic. text = paragraphs; items = bullet points (both optional).
  guide: [
    {title: 'What is this COIL and what will you do?',
      text: ['A COIL (Collaborative Online International Learning) connects your course with courses at two partner universities of the Ulysseus alliance. For nine weeks you will work online in an international team with students from Seville, Košice and Podgorica.',
        'Together you will choose a socio-economic question, analyse real data from European countries with the methods of your course (Econometrics or Advanced Data Analysis and Visualization), build a dashboard and present your results to everybody in a joint online session. The COIL is part of your own course: you receive credits and are graded by your home university.']},
    {title: 'Before you start: checklist',
      items: ['Read this guide and the schedule.',
        'Make sure you can use Python, R or Gretl, and Power BI if your course uses it.',
        'Download the COIL dataset from the Data section and open it once.',
        'Bookmark this website: session links, submission links, data and materials are all here.',
        'Check that your camera and microphone work in Microsoft Teams (sessions are Teams meetings).']},
    {title: 'Working in an international team',
      text: ['Spain, Slovakia and Montenegro are in the same time zone (CET), so scheduling meetings is easy. Cultural and academic habits may differ, and that is part of the learning.'],
      items: ['Agree on one main communication channel and answer messages within 48 hours on working days.',
        'Meet online at least once a week and write down what was decided and who does what.',
        'Use English in all team communication, so that nobody is left out.',
        'Rotate roles every two or three weeks: coordinator, data lead, analyst, visualisation lead and editor.',
        'Write a team charter in week 2: goals, roles, deadlines, how you take decisions and what you do if someone does not contribute.',
        'If a problem in the team cannot be solved within the team, tell your teacher early.']},
    {title: 'The project step by step',
      items: ['Weeks 1–2: get to know each other, form teams and choose a question that can be answered with data from several countries (deliverable 1).',
        'Weeks 3–4: prepare the data and explore it. Document every variable and every change you make.',
        'Weeks 5–6: apply the methods of the course (regression, classification, dimensionality reduction and clustering) and interpret the results in each national context (deliverable 2).',
        'Weeks 7–8: turn your results into a clear dashboard for a non-specialist audience and give feedback to another team.',
        'Week 9: present to students and teachers of the three universities and write your final reflection (deliverable 3).']},
    {title: 'Using the data',
      items: ['Start from the COIL dataset; you may add other sources if you document them.',
        'Always cite the source of each indicator (World Bank, IMF, Eurostat…).',
        'Some indicators have gaps, especially for Montenegro. Do not fill them in silently: either leave them out or explain clearly what you did.',
        'Check units and years before comparing countries.',
        'Correlation is not causation: be careful with your conclusions.']},
    {title: 'Deliverables and assessment',
      text: ['There are three deliverables: in week 2, week 6 and week 9 (see the table above and the schedule). Each university grades its own students.',
        'The COIL gives you additional points on top of your course grade: up to 1 extra point (out of 10) at the University of Seville, and up to 10 extra points (out of 100) at the Technical University of Košice and the University of Montenegro. The extra points are awarded to students who complete the final presentation of the project in week 9.'],
      items: ['Each deliverable is due on Sunday at 23:59 CET of its week and is submitted with the Submit button on this website.',
        'If you cannot meet a deadline, tell your team and your teacher before the deadline, not after.',
        'Final dashboard: an interactive link, or a PDF or screenshots if Power BI publishing is not allowed in your university account.',
        'The final team projects will be shown in the Projects section of this website (team name and topic only, no personal data).']},
    {title: 'Reflection',
      text: ['At the end of the COIL you will write a short individual reflection (part of deliverable 3). Keep some notes along the way. Some questions to guide you:'],
      items: ['What did you expect from working with students from other countries, and what actually happened?',
        'How did cultural or institutional differences change the way your team read the data?',
        'What would you do differently in an international team next time?',
        'Which skill (technical or personal) improved the most?']},
    {title: 'Academic integrity and AI tools',
      text: ['AI tools (ChatGPT, Copilot, Claude, Gemini…) are allowed in this COIL, on two conditions: you declare how you used them, and you review everything they produce.'],
      items: ["Your work must be your own and your team's. Cite all sources, data and code you reuse.",
        'Declare your use of AI in every deliverable: add a short note saying which tool you used, for what (e.g. debugging code, improving the English, suggesting chart types) and how you checked the result.',
        'You are responsible for the result: check the code, the numbers and the text that an AI tool gives you before you submit them. AI tools make mistakes and can invent data or references.',
        'Never present AI output as data: all figures must come from the COIL dataset or from a source you cite.',
        'Every team member must be able to explain the analysis and the results.']},
    {title: 'Questions and contact',
      text: ['For anything about grades, deadlines or your course, contact your teacher at your home university (see the Teaching team section). For questions about the joint activities or the dataset, any teacher of the COIL can help you.']},
  ],

  // Team projects, added by the teachers after each team submits its link.
  // {team, universities: ['US','TUKE','UoM'], topic, link, image}
  projects: [],

  // Frequently asked questions, in groups: {group, icon, intro, items: [{q, a}]}. icon: start, team, video, check, help. Keep the answers consistent with the rest of this file.
  faq: [
    {group: 'Getting started', icon: 'start', intro: 'What you need before you start: skills, course, tools and English.', items: [
      {q: 'Do I need to know how to code?',
        a: 'No. Everything in the COIL can be done with menus in Power BI or Gretl. Python and R are optional, for students whose course already uses them. The methods module (Resources) shows the menus first for every method, and the code only as an extra.'},
      {q: 'Which course is the COIL part of?',
        a: 'Econometrics or Advanced Data Analysis and Visualization, depending on your university and degree. The COIL is part of that course: you receive its credits and you are graded by your home teacher.'},
      {q: 'Which tool should I use?',
        a: 'The one you use in your course: Python, R, Gretl or Power BI. Students in the same team can use different tools, but agree on one for the final notebook and the dashboard.'},
      {q: 'Is my English good enough?',
        a: 'English is the working language of the COIL, but you do not need perfect English: clear and simple is enough. You may use AI tools to improve your English if you declare it.'},
    ]},
    {group: 'Teams and topics', icon: 'team', intro: 'How teams are formed, how to choose your question and how to work together.', items: [
      {q: 'Who decides the teams?',
        a: 'The teachers, so that every team has students from the three universities. Teams are announced in the kick-off session (week 1).'},
      {q: 'Can we choose our own topic?',
        a: 'Yes. You can take one of the proposed projects (Projects section), adapt it, or propose your own question in deliverable 1, as long as it can be answered with data from several countries.'},
      {q: 'Can we use data that are not in the COIL dataset?',
        a: 'Yes, if you cite the source and describe every variable in your data dictionary (code, unit, source and years).'},
      {q: 'What if a team member does not contribute?',
        a: 'Your team charter says what you do in that case. Apply it, and if the problem continues, tell your home teacher early.'},
      {q: 'We are in different countries. What about time zones?',
        a: 'Spain, Slovakia and Montenegro are all in the same time zone (CET), so meetings are easy to schedule.'},
    ]},
    {group: 'Joint sessions', icon: 'video', intro: 'The four online sessions: the two slots, attendance, links and recordings.', items: [
      {q: 'Why are there two slots for each session?',
        a: 'So that every student can attend despite the different timetables of the three universities. The two slots are on different days and at different times, and have the same content. Your team chooses one slot and attends it together, because part of every session is work in team break-out rooms. For the final presentations, the teachers tell each team its slot.'},
      {q: 'Are the joint sessions compulsory?',
        a: 'The final presentation (week 9) is required to receive the extra points. The other three are strongly recommended. If you cannot attend one, tell your home teacher and your team in advance.'},
      {q: 'I cannot attend a session. Will I miss it?',
        a: 'No. Every session is recorded and the recording and the slides are published in the Sessions section of this website, usually within two days. Watch it before your next team meeting. Break-out rooms are not recorded, so ask your team what they agreed.'},
      {q: 'Where do I find the session links?',
        a: 'On this website: Sessions section and Home page. Before the dates are fixed you will find a vote on the dates and times there. Each session has two links, one per slot. You do not need an account of another university to join.'},
    ]},
    {group: 'Deliverables and grades', icon: 'check', intro: 'How and when to submit, grades, extra points and the certificate.', items: [
      {q: 'How and when do we submit?',
        a: 'With the Submit button of each deliverable on this website. Each deliverable is due on Sunday at 23:59 CET of its week: week 2, week 6 and week 9.'},
      {q: 'What if we cannot meet a deadline?',
        a: 'Tell your team and your home teacher before the deadline, not after.'},
      {q: 'Power BI does not let me publish my dashboard. What now?',
        a: 'Submit a PDF export or screenshots, an interactive HTML file made with Python or R, or the Gretl charts in one PDF. Any of these is fine (see Resources).'},
      {q: 'Who grades me?',
        a: 'Your teacher at your home university, following the rules of your own course.'},
      {q: 'How do I get the extra points and the certificate?',
        a: 'The extra points (+1 out of 10 at the University of Seville; +10 out of 100 at the Technical University of Košice and the University of Montenegro) go to students who complete the final presentation. You also receive a certificate of participation signed by the three universities.'},
    ]},
    {group: 'AI tools and help', icon: 'help', intro: 'Using AI tools, and where to ask anything else.', items: [
      {q: 'Can I use ChatGPT or other AI tools?',
        a: 'Yes, on two conditions: you declare in every deliverable which tool you used and for what, and you check everything it produces. All figures must come from the data, never from the AI.'},
      {q: 'I have another question.',
        a: 'Ask your home teacher (see Team). For the joint activities or the dataset, any teacher of the COIL can help you.'},
    ]},
  ],

  // Course materials, built with presentaciones/construir.js (slides) and presentaciones/codigo (code).
  // files: [label, path]; the first file is the main one.
  materials: [
    {group: 'Joint sessions', items: [
      {title: 'Kick-off (week 1)', files: [['PDF', 'docs/slides/COIL_1_kickoff.pdf'], ['PowerPoint', 'docs/slides/COIL_1_kickoff.pptx']]},
      {title: 'Data workshop (week 3)', files: [['PDF', 'docs/slides/COIL_2_data_workshop.pdf'], ['PowerPoint', 'docs/slides/COIL_2_data_workshop.pptx']]},
      {title: 'Mid-point clinic (week 5)', files: [['PDF', 'docs/slides/COIL_3_midpoint_clinic.pdf'], ['PowerPoint', 'docs/slides/COIL_3_midpoint_clinic.pptx']]},
      {title: 'Final presentations (week 9)', files: [['PDF', 'docs/slides/COIL_4_final_presentations.pdf'], ['PowerPoint', 'docs/slides/COIL_4_final_presentations.pptx']]},
    ]},
    {group: 'Methods module (study material)', items: [
      {title: 'Correlation, regression, panel data, classification, PCA, clustering and missing values, with COIL data. Menus first; code optional.',
        files: [['PDF', 'docs/slides/COIL_methods_module.pdf'], ['PowerPoint', 'docs/slides/COIL_methods_module.pptx']]},
      {title: 'Code that reproduces every number in the module (put it next to coil_indicators_gretl.csv)',
        files: [['Python', 'docs/code/methods.py'], ['R', 'docs/code/methods.R'], ['Gretl', 'docs/code/methods.inp']]},
    ]},
    {group: 'Templates for your slides', items: [
      {title: 'Lightning-update slide (week 5) and the six final slides (week 9)', files: [['PowerPoint', 'docs/slides/COIL_student_templates.pptx'], ['PDF', 'docs/slides/COIL_student_templates.pdf']]},
    ]},
  ],

  resources: [
    {title: 'Ulysseus COIL Handbook: A Practical Guide for Educators',
      url: 'https://ulysseus.eu/wp-content/uploads/2025/02/Ulysseus-COIL-Handbook-for-teachers-1.pdf'},
    {title: 'World Bank Open Data (source of most indicators)', url: 'https://data.worldbank.org'},
    {title: 'IMF DataMapper (government debt)', url: 'https://www.imf.org/external/datamapper'},
    {title: 'Eurostat database (more European indicators)', url: 'https://ec.europa.eu/eurostat/data/database'},
  ],
};
