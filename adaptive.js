/* NiveshPath 2.0: transparent, entirely local recommendation and curriculum engine.
   No AI models, user accounts, hidden profiling, remote requests, or financial advice. */
(function(root){
'use strict';
const nodes={
 goalplan:{pre:[],area:'budget',why:'Start with spending needs, goals and budgeting before discussing investment products.'},
 saving:{pre:['goalplan'],area:'budget',why:'A realistic savings habit follows understanding spending and goals.'},
 inflation:{pre:['saving'],area:'budget',why:'Purchasing power makes more sense after the reason for saving is clear.'},
 investwhy:{pre:['saving','inflation'],area:'investing',why:'Understand saving and inflation before considering why investing may matter.'},
 risk:{pre:['investwhy'],area:'risk',why:'Potential losses and uncertainty should be understood before choosing instruments.'},
 instruments:{pre:['investwhy','risk'],area:'investing',why:'Different financial products should be introduced after risk and purpose.'},
 basics:{pre:['instruments'],area:'investing',why:'Learn what securities represent before market mechanisms.'},
 markets:{pre:['basics'],area:'demat',why:'Market infrastructure explains the role of intermediaries and exchanges.'},
 accounts:{pre:['markets'],area:'demat',why:'Understand market participants before an account walkthrough.'},
 demat:{pre:['accounts'],area:'demat',why:'Electronic securities ownership builds on understanding the purpose of a demat account.'},
 ipo:{pre:['markets','demat'],area:'demat',why:'New issues are easier to understand after markets and holding records.'},
 taxfees:{pre:['instruments'],area:'investing',why:'Understand basic products before considering associated costs and taxation.'},
 funds:{pre:['instruments'],area:'risk',why:'Understand risk and the types of instruments before pooled products.'},
 bonds:{pre:['instruments'],area:'risk',why:'Bond credit and interest-rate risk build on basic securities knowledge.'},
 behaviour:{pre:['risk'],area:'bias',why:'Decision biases matter once uncertainty and risk are understood.'},
 psychology:{pre:['behaviour'],area:'bias',why:'Apply the pause-and-verify habit before deeper behavioural finance.'},
 digital:{pre:[],area:'safety',why:'Digital safety can be learned immediately, regardless of investing experience.'},
 scams:{pre:['digital'],area:'safety',why:'Common credential risks make fraud-warning signs easier to recognise.'},
 upi:{pre:['digital'],area:'safety',why:'Secure app and payment practices build on basic digital protection.'},
 rights:{pre:['basics'],area:'rights',why:'Knowing who is responsible makes investor protections easier to navigate.'},
 digitalrights:{pre:['demat','digital'],area:'rights',why:'Holding statements and alerts require both account knowledge and digital safety.'},
 complaints:{pre:['rights'],area:'rights',why:'Know investor entitlements before distinguishing grievance and cybercrime reporting.'},
 estate:{pre:['digitalrights'],area:'rights',why:'Nomination and transmission follow account ownership and recordkeeping.'},
 retirement:{pre:['goalplan','inflation'],area:'budget',why:'Long-term preparedness begins with goals, essential spending and inflation.'}
};
const goals={
 budget:{label:'Manage money and savings',hi:'खर्च और बचत',targets:['goalplan','saving','inflation','investwhy']},
 investing:{label:'Understand investing safely',hi:'सुरक्षित निवेश समझें',targets:['investwhy','risk','instruments','basics','markets']},
 demat:{label:'Understand demat and markets',hi:'डीमैट और बाज़ार समझें',targets:['basics','markets','accounts','demat','digitalrights']},
 safety:{label:'Recognize scams and stay safe',hi:'धोखाधड़ी से सुरक्षा',targets:['digital','scams','upi']},
 risk:{label:'Understand investment risk',hi:'निवेश का जोखिम',targets:['risk','funds','behaviour','psychology']},
 rights:{label:'Know my investor rights',hi:'निवेशक अधिकार',targets:['basics','rights','complaints','digitalrights','estate']},
 bias:{label:'Make calmer decisions',hi:'बेहतर निर्णय लें',targets:['risk','behaviour','psychology']},
 unsure:{label:'Help me identify what to learn',hi:'सीखने में मार्गदर्शन',targets:['goalplan','saving','digital','investwhy']}
};
const questions=[
 {id:'q-budget',skill:'goalplan',focus:['budget','unsure'],en:'Your monthly essentials are ₹8,000 and income is ₹10,000. Before optional spending, what is sensible?',hi:'आवश्यक खर्च ₹8,000 और आय ₹10,000 हो तो पहले क्या करें?',opts:['Use all the remainder immediately','Plan for saving and unexpected expenses','Borrow to spend more'],right:1},
 {id:'q-saving',skill:'saving',focus:['budget','unsure'],en:'What is the main purpose of an accessible emergency buffer?',hi:'आपातकालीन बचत का उद्देश्य क्या है?',opts:['Pay unexpected essential expenses','Guarantee investment profits','Avoid checking spending'],right:0},
 {id:'q-inflation',skill:'inflation',focus:['budget','investing','unsure'],en:'If prices rise but the money you hold stays unchanged, its purchasing power usually…',hi:'कीमतें बढ़ें और पैसा उतना ही रहे, तो खरीद शक्ति…',opts:['Increases','Remains exactly the same','Decreases'],right:2},
 {id:'q-risk',skill:'risk',focus:['investing','risk','bias'],en:'Which statement about investments is accurate?',hi:'निवेश के बारे में सही बात क्या है?',opts:['Past gains guarantee future gains','Returns can be uncertain and losses can occur','Every investment must earn more than savings'],right:1},
 {id:'q-instruments',skill:'instruments',focus:['investing','risk'],en:'Which instrument generally represents a part-ownership interest in a company?',hi:'किस निवेश साधन से कंपनी में हिस्सेदारी मिलती है?',opts:['Equity share','Bank savings balance','An OTP'],right:0},
 {id:'q-market',skill:'markets',focus:['demat','rights'],en:'What is a stock exchange mainly used for?',hi:'स्टॉक एक्सचेंज का मुख्य काम क्या है?',opts:['Hold bank deposits','Facilitate trading of listed securities','Guarantee prices rise'],right:1},
 {id:'q-demat',skill:'demat',focus:['demat','rights'],en:'What is a demat account primarily used for?',hi:'डीमैट खाते का मुख्य उपयोग?',opts:['Hold eligible securities electronically','Hold cash like a savings bank account','Guarantee returns'],right:0},
 {id:'q-otp',skill:'digital',focus:['safety','unsure'],safety:true,en:'A caller claims to be your DP and asks for your OTP to stop account freezing. You should…',hi:'कोई डीपी बनकर OTP माँगे, तो आप…',opts:['Share it quickly','Share only half of it','Refuse and verify independently through an official channel'],right:2},
 {id:'q-fraud',skill:'scams',focus:['safety','bias','risk'],safety:true,en:'A message guarantees 5% weekly returns and insists you pay today. The safest first response is…',hi:'कोई साप्ताहिक गारंटीकृत लाभ और तुरंत भुगतान माँगे, तो…',opts:['Verify independently and do not pay under pressure','Pay a small test amount first','Trust the logo and reviews'],right:0},
 {id:'q-app',skill:'upi',focus:['safety'],safety:true,en:'A stranger sends an APK and asks you to install it for a KYC update. What should you do?',hi:'अजनबी KYC के लिए APK भेजे, तो क्या करें?',opts:['Install because KYC is mandatory','Use only independently verified official channels','Give them remote access instead'],right:1},
 {id:'q-rights',skill:'complaints',focus:['rights','demat'],en:'For an eligible securities-market service grievance, which is the right starting point?',hi:'प्रतिभूति सेवा संबंधी शिकायत की शुरुआत कहाँ करें?',opts:['An unknown recovery agent','The concerned entity through its official grievance channel','A random social media group'],right:1},
 {id:'q-behaviour',skill:'behaviour',focus:['bias','risk'],en:'Friends say an investment will double by tomorrow. What helps you decide responsibly?',hi:'मित्र कहें कि कल तक पैसा दोगुना होगा, तब क्या करें?',opts:['Act before missing out','Trust the crowd','Pause, verify sources, and assess possible losses'],right:2},
 {id:'q-diversify',skill:'funds',focus:['risk'],en:'Putting all money in one security mainly creates which concern?',hi:'सारा पैसा एक शेयर में लगाने से क्या जोखिम है?',opts:['Greater concentration risk','Guaranteed safety','No uncertainty'],right:0},
 {id:'q-records',skill:'digitalrights',focus:['rights','demat'],en:'If your holdings statement shows an unfamiliar transaction, a sensible action is…',hi:'होल्डिंग स्टेटमेंट में अनजान लेनदेन दिखे तो…',opts:['Ignore it','Verify through the DP’s official channel promptly','Share credentials publicly'],right:1}
];
const games={
 savings:{title:'Savings Challenge',icon:'🪙',skill:'goalplan',lesson:'goalplan',description:'Balance essentials and an emergency buffer using a fictional budget.'},
 inflation:{title:'Inflation Detective',icon:'🔎',skill:'inflation',lesson:'inflation',description:'Compare price changes and purchasing power.'},
 instruments:{title:'Instrument Match-Up',icon:'🧩',skill:'instruments',lesson:'instruments',description:'Match shares, bonds and funds with their characteristics.'},
 shield:{title:'Build Your Safety Shield',icon:'🛡️',skill:'digital',lesson:'digital',description:'Identify account-protection habits and risky digital actions.'},
 flags:{title:'Spot the Red Flags',icon:'🚩',skill:'scams',lesson:'scams',description:'Spot manipulative claims in a fictional investment promotion.'},
 demat:{title:'Demat Journey',icon:'🗂️',skill:'accounts',lesson:'accounts',description:'Put verified account-learning steps in the right order.'},
 diversification:{title:'Diversification Lab',icon:'⚖️',skill:'risk',lesson:'risk',description:'Recognize concentration risk without simulating profits.'},
 pressure:{title:'Decision Under Pressure',icon:'🧠',skill:'behaviour',lesson:'behaviour',description:'Pause and verify when a group pressures you to act.'}
};
const safetyTopics=['digital','scams','upi'];
function profile(input={}){return {contexts:[],experience:'unsure',goals:['unsure'],format:'mixed',lang:'en',accessibility:[],...input};}
function assessList(p){const selected=(p.goals||[]).filter(x=>goals[x]);const primary=selected.includes('unsure')?['unsure']:selected;
 const baseline=['q-budget','q-risk','q-otp'];
 const pool=[...questions].filter(q=>q.focus.some(f=>primary.includes(f)));
 const list=[...baseline.map(id=>questions.find(q=>q.id===id)),...pool,...questions];
 return [...new Map(list.map(q=>[q.id,q])).values()].slice(0,8);}
function chain(id,seen=new Set()){if(seen.has(id))return [];seen.add(id);return [...(nodes[id]?.pre||[]).flatMap(x=>chain(x,seen)),id];}
function orderIsValid(){const seen=new Set(),visiting=new Set();const visit=id=>{if(visiting.has(id))throw Error('Curriculum cycle: '+id);if(seen.has(id))return; if(!nodes[id])throw Error('Missing topic '+id);visiting.add(id); for(const x of nodes[id].pre)visit(x);visiting.delete(id);seen.add(id)}; Object.keys(nodes).forEach(visit);return true;}
orderIsValid();
function mastery(s,id){return Math.max(0,Math.min(100,Number(s.skills?.[id])||0));}
function mastered(s,id){return (s.completed||[]).includes(id)||mastery(s,id)>=75;}
function recommendations(s){
 const p=profile(s.profile),gids=(p.goals||[]).filter(x=>goals[x]);const selected=gids.length?gids:['unsure'];
 let targets=[...new Set(selected.flatMap(g=>goals[g].targets))];
 const errors=s.misconceptions||{};
 const hot=safetyTopics.filter(id=>(errors[id]||0)>0);
 // Direct intervention for a demonstrated safety issue: skip normal prerequisite sequencing.
 const urgent=hot.length?hot[0]:null;
 const candidates=[];
 function addTopic(id,goal,reason,emergency=false){
   if(!nodes[id]||mastered(s,id)||candidates.some(x=>x.id===id))return;
   const deficit=100-mastery(s,id),safety=hot.includes(id)?1:0,interest=goals[goal]?.targets.includes(id)?1:0;
   const score=deficit*.35 + safety*25 + interest*20 + (emergency||nodes[id].pre.every(pre=>mastered(s,pre))?10:0) + (p.format==='games'&&gamesFor(id).length?10:6);
   candidates.push({id,kind:'lesson',score,goal,reason:reason||(emergency?'Safety comes first. You missed a protective decision.':nodes[id].why),emergency});
 }
 if(urgent)addTopic(urgent,'safety','Safety first: practise the protective skill you missed.',true);
 for(const id of targets){if(mastered(s,id))continue;
   const missing=chain(id).find(dep=>!mastered(s,dep));
   if(missing)addTopic(missing,selected.find(g=>goals[g].targets.includes(id))||selected[0],missing===id?nodes[id].why:`Before ${id}, this prerequisite builds the understanding you need.`);
 }
 // A missed objective diagnostic can surface its topic only if aligned with goals, except for safety.
 for(const id of Object.keys(errors)){if(errors[id]>0&&(targets.includes(id)||hot.includes(id))){let first=chain(id).find(dep=>!mastered(s,dep));if(first)addTopic(first,selected.find(g=>goals[g].targets.includes(id))||'unsure',undefined,hot.includes(id));}}
 const order=new Map(Object.keys(nodes).map((k,i)=>[k,i]));
 candidates.sort((a,b)=>(b.emergency?1:0)-(a.emergency?1:0)||b.score-a.score||order.get(a.id)-order.get(b.id));
 const lessons=candidates.slice(0,3);
 const out=[];
 if(lessons[0])out.push(lessons[0]);
 const relevantGame=(s.gameResults||{}),first=lessons[0];
 if(first){const game=gamesFor(first.id).find(g=>!relevantGame[g]); if(game && (mastery(s,first.id)>=50 || (p.format==='games'&&mastery(s,first.id)>=20)))out.push({kind:'game',id:game,topic:first.id,reason:'Apply this precise learning need in a short interactive activity.',score:75});}
 for(const x of lessons.slice(1)){if(out.length>=3)break;out.push(x);}
 if(out.length<3){for(const g of Object.keys(games)){if(out.length>=3)break;const cfg=games[g];if(!relevantGame[g]&&mastered(s,cfg.lesson)&&targets.includes(cfg.lesson)&&((s.activity||[]).some(a=>a.kind==='lesson'&&a.id===cfg.lesson)||(errors[cfg.skill]||0)>0)&&!out.some(x=>x.id===g))out.push({kind:'game',id:g,topic:cfg.skill,reason:'Test whether you can apply a recently learned skill.',score:50});}}
 return out.slice(0,3);
}
function gamesFor(topic){return Object.keys(games).filter(id=>games[id].skill===topic||games[id].lesson===topic);}
function relevantScenarios(s){const gs=s.profile?.goals||[]; if(gs.includes('safety')||((s.misconceptions||{}).digital>0)||((s.misconceptions||{}).scams>0))return ['otp','advisor','app','remote','report'];
 if(gs.includes('demat')||gs.includes('rights'))return ['app','kyc','report'];
 if(gs.includes('bias')||gs.includes('risk'))return ['advisor','fomo'];
 return [];
}
function demonstrate(id){let template={student_beginner:{contexts:['student'],experience:'never',goals:['budget'],format:'mixed',lang:'en'},student_investor:{contexts:['student'],experience:'experienced',goals:['bias'],format:'games',lang:'en'},senior_safety:{contexts:['retired'],experience:'experienced',goals:['safety'],format:'audio',lang:'en'},demat_beginner:{contexts:['employed'],experience:'exploring',goals:['demat'],format:'mixed',lang:'en'},digital_beginner:{contexts:['other'],experience:'never',goals:['safety'],format:'audio',lang:'en'},unsure:{contexts:[],experience:'unsure',goals:['unsure'],format:'mixed',lang:'en'}}[id];
 if(!template)return null;
 const skills={}; if(id==='student_investor')Object.assign(skills,{goalplan:90,saving:90,inflation:90,investwhy:90,risk:90,instruments:86,basics:86});
 if(id==='senior_safety')Object.assign(skills,{goalplan:90,saving:90,inflation:90,investwhy:90,risk:90,instruments:90,basics:90,markets:90,accounts:90,demat:90,digital:85});
 if(id==='demat_beginner')Object.assign(skills,{goalplan:90,saving:90,inflation:90,investwhy:90,risk:90,instruments:90,basics:90,markets:90});
 if(id==='digital_beginner')Object.assign(skills,{digital:18});
 return {profile:profile(template),skills,misconceptions:id==='senior_safety'?{scams:1}:id==='digital_beginner'?{digital:2}:id==='student_investor'?{behaviour:2}:{},completed:[],gameResults:{},assessed:true};
}
root.NiveshCore={nodes,goals,questions,games,profile,assessList,chain,orderIsValid,recommendations,gamesFor,relevantScenarios,demonstrate,mastery,mastered};
})(typeof window==='undefined'?globalThis:window);
