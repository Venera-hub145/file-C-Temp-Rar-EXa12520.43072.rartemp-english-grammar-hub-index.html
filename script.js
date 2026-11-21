const topics = [
 {id:"present",title:"Present Tenses",category:"Tenses",icon:"⏰",color:"#eeeaff",level:"STARTER",desc:"Present Simple, Continuous, Perfect and Perfect Continuous.",questions:[
  {q:"She usually _____ to school by bus.",opts:["go","goes","is going","has gone"],a:1,why:"Use Present Simple for routines. With he/she/it, add -s or -es: she goes."},
  {q:"Be quiet! The baby _____.",opts:["sleeps","is sleeping","has slept","sleep"],a:1,why:"Use Present Continuous for an action happening now. Signal: 'Be quiet!'"},
  {q:"I _____ this film three times.",opts:["see","am seeing","have seen","saw"],a:2,why:"Present Perfect describes experience up to now. 'Three times' does not give a finished past time."},
  {q:"How long _____ you _____ English?",opts:["do / learn","are / learning","have / been learning","did / learn"],a:2,why:"Use Present Perfect Continuous with 'how long' for an activity that started in the past and continues now."},
  {q:"Water _____ at 100°C.",opts:["is boiling","boils","has boiled","boil"],a:1,why:"Use Present Simple for scientific facts and general truths."}
 ]},
 {id:"past",title:"Past Tenses",category:"Tenses",icon:"🕰️",color:"#fff0df",level:"STARTER",desc:"Past Simple, Past Continuous and Past Perfect.",questions:[
  {q:"We _____ to London last summer.",opts:["go","have gone","went","were going"],a:2,why:"'Last summer' is a finished past time, so use Past Simple: went."},
  {q:"I _____ dinner when the phone rang.",opts:["cooked","was cooking","have cooked","had cooked"],a:1,why:"Past Continuous describes the longer action in progress when another action happened."},
  {q:"When we arrived, the film _____.",opts:["already started","has already started","had already started","was already starting"],a:2,why:"Use Past Perfect for an action completed before another past action."},
  {q:"They _____ football at 5 p.m. yesterday.",opts:["played","were playing","have played","had played"],a:1,why:"A specific time in the past can show an action in progress: were playing."},
  {q:"She _____ her homework before she went out.",opts:["finished","had finished","has finished","was finishing"],a:1,why:"The homework was completed before she went out, so Past Perfect is appropriate."}
 ]},
 {id:"future",title:"Future Forms",category:"Tenses",icon:"🚀",color:"#e5f5ff",level:"STARTER",desc:"Will, be going to and Present Continuous for future.",questions:[
  {q:"Look at those dark clouds! It _____ rain.",opts:["will","is going to","is","has"],a:1,why:"Use 'be going to' for a prediction based on present evidence. The clouds are evidence."},
  {q:"I think people _____ live on Mars one day.",opts:["are going to","will","are","have"],a:1,why:"Use 'will' for opinions and predictions, often with 'I think'."},
  {q:"We _____ our cousins at 6. The tickets are booked.",opts:["meet","will meet","are meeting","met"],a:2,why:"Present Continuous can describe a fixed personal arrangement in the future."},
  {q:"The lesson _____ at 9 o'clock tomorrow.",opts:["starts","is starting","will have started","start"],a:0,why:"Present Simple is often used for timetables and schedules."},
  {q:"Don't worry. I _____ help you with your project.",opts:["am going","will","am","have"],a:1,why:"Use 'will' for a spontaneous offer or decision."}
 ]},
 {id:"modals",title:"Modal Verbs",category:"Modal verbs",icon:"💪",color:"#e9f8ec",level:"INTERMEDIATE",desc:"Ability, advice, obligation, permission and possibility.",questions:[
  {q:"You _____ wear a seat belt in a car. It's the law.",opts:["might","must","could","would"],a:1,why:"'Must' expresses strong obligation, especially a rule or law."},
  {q:"You look tired. You _____ go to bed earlier.",opts:["should","mustn't","can't","may"],a:0,why:"'Should' is used to give advice."},
  {q:"When I was five, I _____ swim very well.",opts:["can","could","must","may"],a:1,why:"'Could' expresses general ability in the past."},
  {q:"It _____ rain later, so take an umbrella.",opts:["mustn't","might","shouldn't","has to"],a:1,why:"'Might' expresses possibility, not certainty."},
  {q:"You _____ use your phone during the exam.",opts:["don't have to","mustn't","might not","couldn't"],a:1,why:"'Mustn't' means something is prohibited. It is not allowed."}
 ]},
 {id:"conditionals",title:"Conditionals",category:"Conditionals",icon:"🔀",color:"#fff0f3",level:"INTERMEDIATE",desc:"Zero, First, Second and Third Conditionals.",questions:[
  {q:"If you heat ice, it _____.",opts:["melts","will melt","would melt","melted"],a:0,why:"Zero Conditional describes general facts: If + Present Simple, Present Simple."},
  {q:"If it rains tomorrow, we _____ at home.",opts:["stay","would stay","will stay","stayed"],a:2,why:"First Conditional describes a real future possibility: If + Present Simple, will + infinitive."},
  {q:"If I _____ more free time, I would learn Spanish.",opts:["have","had","will have","would have"],a:1,why:"Second Conditional uses Past Simple after 'if' for an imaginary or unlikely situation."},
  {q:"If she had studied harder, she _____ the test.",opts:["would pass","will pass","would have passed","passed"],a:2,why:"Third Conditional imagines a different past: If + Past Perfect, would have + past participle."},
  {q:"If I were you, I _____ apologise.",opts:["will","would","have","am"],a:1,why:"'If I were you' gives advice using the Second Conditional: would + infinitive."}
 ]},
 {id:"passive",title:"Passive Voice",category:"Voice",icon:"🔁",color:"#f1eaff",level:"INTERMEDIATE",desc:"Form and use the passive in different tenses.",questions:[
  {q:"English _____ in many countries.",opts:["speaks","is spoken","is speaking","spoke"],a:1,why:"Present Simple Passive = am/is/are + past participle. The focus is on English."},
  {q:"The bridge _____ in 1998.",opts:["built","was built","is built","has building"],a:1,why:"Past Simple Passive = was/were + past participle. 'In 1998' is a finished past time."},
  {q:"The invitations _____ already _____.",opts:["have / sent","have been / sent","were / send","are / sending"],a:1,why:"Present Perfect Passive = have/has + been + past participle."},
  {q:"This problem _____ tomorrow.",opts:["will solve","will be solved","is solving","solved"],a:1,why:"Future Simple Passive = will be + past participle."},
  {q:"The classroom _____ every day.",opts:["cleans","is cleaned","cleaned","is cleaning"],a:1,why:"A routine in the passive uses Present Simple Passive: is cleaned."}
 ]},
 {id:"reported",title:"Reported Speech",category:"Speech",icon:"💬",color:"#e5f7f7",level:"ADVANCED",desc:"Report statements, questions and commands.",questions:[
  {q:"Tom said, “I am tired.” → Tom said that he _____ tired.",opts:["is","was","has been","will be"],a:1,why:"In reported speech after a past reporting verb, Present Simple/Continuous usually backshifts: am → was."},
  {q:"She asked me, “Do you like music?” → She asked me _____ music.",opts:["do I like","if I liked","that I like","if do I like"],a:1,why:"Reported yes/no questions use if/whether and statement word order. Present often shifts to Past."},
  {q:"“Where do you live?” he asked. → He asked me where I _____.",opts:["live","do I live","lived","was live"],a:2,why:"Reported wh-questions use statement word order and usually backshift: live → lived."},
  {q:"“Don't touch it,” Mum said. → Mum told me _____ it.",opts:["don't touch","not to touch","to not touching","not touch"],a:1,why:"Reported commands use told + object + (not) to-infinitive."},
  {q:"Anna said, “I have finished.” → Anna said she _____ finished.",opts:["has","had","is","will have"],a:1,why:"Present Perfect usually backshifts to Past Perfect in reported speech: have finished → had finished."}
 ]},
 {id:"relative",title:"Relative Clauses",category:"Clauses",icon:"🧩",color:"#fff5df",level:"ADVANCED",desc:"Defining and non-defining relative clauses.",questions:[
  {q:"A dentist is a person _____ looks after your teeth.",opts:["which","whose","who","where"],a:2,why:"Use 'who' for people in a defining relative clause."},
  {q:"This is the house _____ I grew up.",opts:["who","where","whose","which"],a:1,why:"Use 'where' to refer to a place when it means 'in which'."},
  {q:"The girl _____ brother is in my class is very kind.",opts:["who","which","whose","where"],a:2,why:"'Whose' shows possession: the girl's brother."},
  {q:"My laptop, _____ I bought last year, is already broken.",opts:["that","who","which","where"],a:2,why:"In a non-defining clause with commas, use 'which' for things. Do not use 'that'."},
  {q:"The book _____ you lent me was fascinating.",opts:["who","that","where","whose"],a:1,why:"Use 'that' or 'which' for things in a defining relative clause."}
 ]},
 {id:"gerunds",title:"Gerunds & Infinitives",category:"Verb patterns",icon:"✍️",color:"#eaf0ff",level:"INTERMEDIATE",desc:"Choose gerunds or infinitives after common verbs.",questions:[
  {q:"I enjoy _____ books in my free time.",opts:["read","to read","reading","reads"],a:2,why:"'Enjoy' is followed by a gerund (-ing form): enjoy reading."},
  {q:"She decided _____ a new language.",opts:["learning","learn","to learn","learned"],a:2,why:"'Decide' is followed by a to-infinitive: decide to learn."},
  {q:"He suggested _____ a taxi.",opts:["take","to take","taking","takes"],a:2,why:"'Suggest' is followed by a gerund: suggested taking."},
  {q:"Remember _____ the door when you leave.",opts:["locking","lock","to lock","locked"],a:2,why:"'Remember to do' means do not forget a task you need to do."},
  {q:"I'm interested in _____ Japanese.",opts:["learn","to learn","learning","learned"],a:2,why:"A preposition is followed by a gerund. 'In' is a preposition here."}
 ]},
 {id:"articles",title:"Articles & Determiners",category:"Articles",icon:"🔤",color:"#fceafa",level:"STARTER",desc:"A, an, the, zero article and quantifiers.",questions:[
  {q:"I saw _____ elephant at the zoo.",opts:["a","an","the","—"],a:1,why:"Use 'an' before a vowel sound. 'Elephant' begins with a vowel sound."},
  {q:"_____ sun rises in the east.",opts:["A","An","The","—"],a:2,why:"Use 'the' with unique things, such as the sun."},
  {q:"There isn't _____ milk left.",opts:["many","some","any","few"],a:2,why:"Use 'any' in negative sentences with uncountable nouns."},
  {q:"How _____ students are there in your class?",opts:["much","many","little","any"],a:1,why:"Use 'many' with plural countable nouns: students."},
  {q:"She is _____ honest person.",opts:["a","an","the","—"],a:1,why:"'Honest' begins with a silent h, so the first sound is a vowel: an honest person."}
 ]}
];

const $ = id => document.getElementById(id);
const STORAGE_KEY = "englishGrammarHubGrade9_v1";
let saved = loadProgress();
let activeTopic = null, questionIndex = 0, selected = null, answered = false;
let roundPoints = 0, roundCorrect = 0, roundAnswers = [];

function loadProgress(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||{points:0,results:{}}}catch(e){return {points:0,results:{}}}}
function saveProgress(){localStorage.setItem(STORAGE_KEY,JSON.stringify(saved));}
function levelFor(points){if(points>=700)return "Grammar Master";if(points>=400)return "Word Wizard";if(points>=200)return "Rising Star";if(points>=80)return "Quick Learner";return "Rookie"}
function levelEmoji(points){if(points>=700)return "👑";if(points>=400)return "🧙";if(points>=200)return "🌟";if(points>=80)return "🚀";return "🌱"}
function completedCount(){return Object.keys(saved.results).length}
function averageAccuracy(){let arr=Object.values(saved.results);if(!arr.length)return null;return Math.round(arr.reduce((s,x)=>s+x.accuracy,0)/arr.length)}
function updateStats(){
 $("total-points").textContent=saved.points;$("streak-count").textContent=completedCount();
 $("accuracy-rate").textContent=averageAccuracy()===null?"—":averageAccuracy()+"%";$("level-name").textContent=levelFor(saved.points);
}
function topicCard(t){
 const result=saved.results[t.id];
 return `<article class="topic-card"><div class="topic-card-top"><div class="topic-icon" style="background:${t.color}">${t.icon}</div><span class="topic-level">${t.level}</span></div><h3>${t.title}</h3><p>${t.desc}</p><div class="topic-card-bottom">${result?`<span class="done-label">✓ Best: ${result.accuracy}%</span>`:`<span class="question-count">5 QUESTIONS · 20 PTS EACH</span>`}<button class="play-btn" data-topic="${t.id}">${result?"Practise again":"Start challenge"} →</button></div></article>`;
}
function renderTopics(){
 $("home-topics").innerHTML=topics.slice(0,6).map(topicCard).join("");
 const q=($("topic-search").value||"").toLowerCase();
 const filtered=topics.filter(t=>(t.title+" "+t.desc+" "+t.category).toLowerCase().includes(q));
 $("all-topics").innerHTML=filtered.map(topicCard).join("");$("topic-count").textContent=`${filtered.length} topics`;
}
function showView(name){
 document.querySelectorAll(".view").forEach(v=>v.classList.add("hidden"));
 $(name+"-view").classList.remove("hidden");
 document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.view===name|| (name==="quiz"||name==="result")&&b.dataset.view==="topics"));
 if(name==="topics")renderTopics();if(name==="progress")renderProgress();
 window.scrollTo({top:0,behavior:"smooth"});
}
function startTopic(id){
 activeTopic=topics.find(t=>t.id===id);questionIndex=0;roundPoints=0;roundCorrect=0;roundAnswers=[];showView("quiz");renderQuestion();
}
function renderQuestion(){
 const q=activeTopic.questions[questionIndex];selected=null;answered=false;
 $("quiz-category").textContent=activeTopic.category.toUpperCase();
 $("question-counter").textContent=`QUESTION ${questionIndex+1} / ${activeTopic.questions.length}`;
 $("quiz-progress").style.width=((questionIndex)/activeTopic.questions.length*100)+"%";
 $("question-icon").textContent=activeTopic.icon;$("question-title").textContent=q.q;
 $("question-instruction").textContent="Choose the correct answer.";
 $("feedback").className="feedback hidden";$("feedback").textContent="";
 $("check-answer").classList.remove("hidden");$("next-question").classList.add("hidden");
 $("round-points").textContent=roundPoints;$("round-correct").textContent=roundCorrect;
 $("question-area").innerHTML=`<div class="answer-list">${q.opts.map((o,i)=>`<button class="answer-option" data-answer="${i}"><span class="answer-letter">${String.fromCharCode(65+i)}</span>${o}</button>`).join("")}</div>`;
}
function chooseAnswer(index){
 if(answered)return;selected=index;
 document.querySelectorAll(".answer-option").forEach(b=>b.classList.toggle("selected",Number(b.dataset.answer)===index));
}
function checkAnswer(){
 if(selected===null){toast("Choose an answer first!");return}
 const q=activeTopic.questions[questionIndex];answered=true;
 const correct=selected===q.a;const earned=correct?20:0;roundPoints+=earned;if(correct)roundCorrect++;
 roundAnswers.push({correct,selected,answer:q.a});
 document.querySelectorAll(".answer-option").forEach((b,i)=>{b.disabled=true;b.classList.remove("selected");if(i===q.a)b.classList.add("correct");else if(i===selected)b.classList.add("wrong")});
 const fb=$("feedback");fb.className="feedback "+(correct?"good":"bad");
 fb.innerHTML=correct?`<b>✨ Excellent! +20 points</b><br>${q.why}`:`<b>Not quite! The correct answer is “${q.opts[q.a]}”.</b><br>${q.why}`;
 $("check-answer").classList.add("hidden");$("next-question").classList.remove("hidden");
 $("next-question").textContent=questionIndex===activeTopic.questions.length-1?"See my results →":"Next question →";
 $("round-points").textContent=roundPoints;$("round-correct").textContent=roundCorrect;
}
function nextQuestion(){if(questionIndex<activeTopic.questions.length-1){questionIndex++;renderQuestion()}else finishTopic()}
function finishTopic(){
 const accuracy=Math.round(roundCorrect/activeTopic.questions.length*100);
 const previous=saved.results[activeTopic.id];
 saved.points+=roundPoints;
 saved.results[activeTopic.id]={bestScore:Math.max(roundPoints,previous?.bestScore||0),accuracy:Math.max(accuracy,previous?.accuracy||0),lastScore:roundPoints,attempts:(previous?.attempts||0)+1};
 saveProgress();updateStats();showView("result");
 $("result-medal").textContent=accuracy===100?"🏆":accuracy>=60?"🥇":"💪";
 $("result-title").textContent=accuracy===100?"Perfect score!":accuracy>=80?"Amazing work!":accuracy>=60?"Good progress!":"Keep practising!";
 $("result-subtitle").textContent=`You completed ${activeTopic.title}. Every attempt makes you stronger.`;
 $("result-points").textContent=roundPoints;$("result-correct").textContent=`${roundCorrect}/${activeTopic.questions.length}`;
 $("result-percent").textContent=accuracy+"%";$("result-xp").textContent="+"+roundPoints+" XP";
 $("result-message").textContent=accuracy>=80?"Fantastic! You have a strong understanding of this topic.":accuracy>=60?"Well done! Review the explanations and try again to improve your score.":"Don't give up! Read the explanations, revise the rule and take the challenge again.";
}
function renderProgress(){
 $("progress-total").textContent=saved.points;$("progress-level").textContent=levelEmoji(saved.points)+" "+levelFor(saved.points)+" level";
 $("progress-completed").textContent=completedCount();$("progress-accuracy").textContent=averageAccuracy()===null?"—":averageAccuracy()+"%";
 $("progress-table").innerHTML=topics.map(t=>{const r=saved.results[t.id];return `<tr><td>${t.icon} ${t.title}</td><td>${r?r.bestScore+" / 100":"—"}</td><td class="muted">${r?r.accuracy+"%":"—"}</td><td>${r?'<span class="status-done">COMPLETED</span>':'<span class="muted">Not started</span>'}</td></tr>`}).join("");
}
let toastTimer;function toast(message){const el=$("toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2100)}
document.addEventListener("click",e=>{
 const nav=e.target.closest("[data-view]");if(nav){showView(nav.dataset.view);return}
 const topic=e.target.closest("[data-topic]");if(topic){startTopic(topic.dataset.topic);return}
 const answer=e.target.closest("[data-answer]");if(answer){chooseAnswer(Number(answer.dataset.answer));return}
});
$("start-learning").addEventListener("click",()=>showView("topics"));
$("topic-search").addEventListener("input",renderTopics);
$("check-answer").addEventListener("click",checkAnswer);
$("next-question").addEventListener("click",nextQuestion);
$("back-to-topics").addEventListener("click",()=>showView("topics"));
$("retry-topic").addEventListener("click",()=>startTopic(activeTopic.id));
$("result-topics").addEventListener("click",()=>showView("topics"));
$("reset-progress").addEventListener("click",()=>{if(confirm("Reset all saved points and results on this device?")){saved={points:0,results:{}};saveProgress();updateStats();renderProgress();renderTopics();toast("Progress has been reset.")}});
updateStats();renderTopics();