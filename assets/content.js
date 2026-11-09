/* ===== EDIT YOUR CONTENT HERE (one entry = one line/block) ===== */
const news = [
  ["Nov 2026","Organized DevFest Monastir."],
  ["Sep 2026","Graduated as a software engineer and defended my final-year project on named entity recognition for heliophysics literature."],
  ["May 2026","Ran a hands-on workshop on explainable AI (LIME) at IMSET."],
  ["Mar 2025","Joined BASIRA Lab (London) as a deep learning intern."]
];

const focus = [
  ["Explainable AI","Making model decisions inspectable, with attribution methods such as LIME and prototype-based reasoning."],
  ["Medical image analysis","Segmentation and diagnosis from clinical images, from spiral drawings to cardiac MRI."],
  ["Language models for science","Information extraction from scientific literature with transformer models."]
];

const projects = [
  {title:"Explainable Parkinson's diagnosis from spiral drawings", meta:"Master's thesis, BASIRA Lab and ISIMM, 2025",
   text:"Multi-task U-Net for spiral segmentation and four-stage severity classification using prototypes, on 1,500+ samples from about 300 patients, with over 97% accuracy. The code is not public; I am happy to walk through the method and results.",
   tags:["PyTorch","U-Net","XAI","Prototypes"], link:"", featured:true},
  {title:"NER for heliophysics literature", meta:"End-of-studies project, 2026",
   text:"Named entity recognition pipeline for scientific papers built on ModernBERT and FLAN-T5.",
   tags:["ModernBERT","FLAN-T5","NLP"], link:""},
  {title:"Cardiac MRI segmentation with STUNet", meta:"Lab-TIM",
   text:"Segmentation of cardiac MRI with the STUNet architecture.",
   tags:["Segmentation","MRI"], link:""},
  {title:"Real-time mask detection", meta:"Year project, Polytech Monastir, 2024/2025",
   text:"YOLOv8 detector served through a Flask API with an Angular front end and a MySQL database.",
   tags:["YOLOv8","Flask","Angular"], link:""}
];

const path = [
  ["Deep Learning Intern, BASIRA Lab, London","Mar to Dec 2025","Explainable models for Parkinson's diagnosis from spiral drawings."],
  ["Engineering degree, Polytech Monastir","Graduated Sep 2026","Ranked 1st of the class throughout, average 17/20, Très Bien."],
  ["Research Master's in Software Engineering, ISIMM","2020 to 2025 (Licence and Master)","Deep learning specialisation, ranked 2nd in the class."]
];

const teaching = [
  ["Part-time lecturer, ISIMM","Software Engineering, Licence 3 practical sessions; previously web development for 160+ students."],
  ["AI fundamentals, IMSET","Machine learning, NLP, computer vision and deep learning for 80+ students."]
];

// Add articles here. featured:true adds a purple * (use it for your best / start-here pieces). link = "blogs/your-article.html" or any external URL
const posts = [
  {title:"Can a model read solar physics papers?", date:"November 2026", summary:"I built a corpus of 102 heliophysics papers, annotated 34,888 entities by hand, and tested what ModernBERT and FLAN-T5 can extract. What worked, and what didn't.", link:"blogs/heliophysics-ner.html", featured:true},
];
/* =============================================================== */
