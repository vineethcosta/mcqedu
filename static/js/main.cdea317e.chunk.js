(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{245:function(t,e,n){},247:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(52),o=n.n(s),i=n(250),c=(n(89),n(15)),u=n.n(c),l=n(20),h=n(5),p=n(6),y=n(10),f=n(9),d=n(11),m=n(249),w=n(251),b=n(79),g=new(function(){function t(){Object(h.a)(this,t),this.auth0=new b.a.WebAuth({domain:"bk-tmp.auth0.com",audience:"https://bk-tmp.auth0.com/userinfo",clientID:"PVafIu9Q5QN65DiPByAFvCCJryY7n432",redirectUri:"https://github.com/vineethcosta/mcqedu/callback",responseType:"id_token",scope:"openid profile"}),this.getProfile=this.getProfile.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.signIn=this.signIn.bind(this),this.signOut=this.signOut.bind(this)}return Object(p.a)(t,[{key:"getProfile",value:function(){return this.profile}},{key:"getIdToken",value:function(){return this.idToken}},{key:"isAuthenticated",value:function(){return(new Date).getTime()<this.expiresAt}},{key:"signIn",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var t=this;return new Promise(function(e,n){t.auth0.parseHash(function(a,r){return a?n(a):r&&r.idToken?(t.setSession(r),void e()):n(a)})})}},{key:"setSession",value:function(t){this.idToken=t.idToken,this.profile=t.idTokenPayload,this.expiresAt=1e3*t.idTokenPayload.exp}},{key:"signOut",value:function(){this.auth0.logout({returnTo:"https://github.com/vineethcosta/mcqedu/",clientID:"PVafIu9Q5QN65DiPByAFvCCJryY7n432"})}},{key:"silentAuth",value:function(){var t=this;return new Promise(function(e,n){t.auth0.checkSession({},function(a,r){if(a)return n(a);t.setSession(r),e()})})}}]),t}()),v=n(248);var E=Object(w.a)(function(t){return r.a.createElement("nav",{className:"navbar navbar-dark bg-primary fixed-top"},r.a.createElement(v.a,{className:"navbar-brand",to:"/"},"MCQ APP"),!g.isAuthenticated()&&r.a.createElement("button",{className:"btn btn-dark",onClick:g.signIn},"Sign In"),g.isAuthenticated()&&r.a.createElement("div",null,r.a.createElement("label",{className:"mr-2 text-white"},g.getProfile().name),r.a.createElement("button",{className:"btn btn-dark",onClick:function(){g.signOut(),t.history.replace("/")}},"Sign Out")))}),q=n(18),C=n(28),A=[{question:" Every quadratic polynomial can have at most",correctanswer:"C",difficulty:"Easy",answers:[{type:"A",content:"three zeros"},{type:"B",content:"one zero"},{type:"C",content:"two zeros"},{type:"D",content:"none of these"}],category:"Quadratic Equations"},{question:" If x2 + 5px + 16 has no real roots, then",correctanswer:"B",difficulty:"Easy",answers:[{type:"A",content:"p>8/5"},{type:"B",content:"-8/5<p<8/5"},{type:"C",content:"p<-8/5"},{type:"D",content:"none of these"}],category:"Quadratic Equations"},{question:" For ax2 + bx + c = 0, which of the following statement is wrong?",correctanswer:"D",difficulty:"Easy",answers:[{type:"A",content:"If b2 \u2013 4ac is a perfect square, the roots are rational."},{type:"B",content:" If b2 = 4ac , the roots are real and equal."},{type:"C",content:" If b2 \u2013 4ac is negative, no real roots exist."},{type:"D",content:"If b2 = 4ac , the roots are real and unequal"}],category:"Quadratic Equations"},{question:"  Roots of quadratic equation x2 \u2013 3x = 0 , will be",correctanswer:"D",difficulty:"Hard",answers:[{type:"A",content:"3"},{type:"B",content:"0,-3"},{type:"C",content:"0,3"},{type:"D",content:"none of these"}],category:"Quadratic Equations"},{question:"  In the given figure, PT is a tangent to a circle whose centre is O. If PT = 12 cm and PO = 13 cm then find teh radius of the circle.",correctanswer:"B",difficulty:"Hard",answers:[{type:"A",content:"5 cm"},{type:"B",content:"4 cm"},{type:"C",content:"6 cm"},{type:"D",content:"4.5"}],category:"Circles"},{question:"  In the given figure, PT is a tangent to the circle and O is its centre. Find OP.",correctanswer:"D",difficulty:"Hard",answers:[{type:"A",content:"16 cm"},{type:"B",content:"15 cm"},{type:"C",content:"18 cm"},{type:"D",content:"17 cm"}],category:"Circles"},{question:" In the given figure, ABC is right angled at B such that BC = 6 cm and AB = 8 cm. Find the radius of the circle.",correctanswer:"B",difficulty:"Easy",answers:[{type:"A",content:"3 cm"},{type:"B",content:"2 cm"},{type:"C",content:"4 cm"},{type:"D",content:"5 cm"}],category:"Circles"},{question:" The angle in a stright line is",correctanswer:"B",difficulty:"Easy",answers:[{type:"A",content:"360"},{type:"B",content:"180"},{type:"C",content:"90"},{type:"D",content:"none of these"}],category:"Circles"},{question:"  The probability of a leap year selected at random contain 53 Sunday is:",correctanswer:"A",difficulty:"Easy",answers:[{type:"A",content:"53/366"},{type:"B",content:"1/7"},{type:"C",content:"2/7"},{type:"D",content:"53/365"}],category:"Probability"},{question:" A bag contains 3 red and 2 blue marbles. A marble is drawn at random. The probability of drawing a black ball is :",correctanswer:"C",difficulty:"Easy",answers:[{type:"A",content:"3/5"},{type:"B",content:"2/5"},{type:"C",content:"0/5"},{type:"D",content:"1/5"}],category:"Probability"},{question:" The probability that it will rain tomorrow is 0.85. What is the probability that it will not rain tomorrow",correctanswer:"C",difficulty:"Hard",answers:[{type:"A",content:"0.25"},{type:"B",content:"0.145"},{type:"C",content:"3/20"},{type:"D",content:"none of these"}],category:"Probability"},{question:" The sum of the probability of an event and non event is :",correctanswer:"B",difficulty:"Hard",answers:[{type:"A",content:"2"},{type:"B",content:"1"},{type:"C",content:"0"},{type:"D",content:"none of these"}],category:"Probability"},{question:" The first and last term of an A.P. are 1 and 11. If the sum of its terms is 36, then the number of terms will be",correctanswer:"B",difficulty:"Hard",answers:[{type:"A",content:"5"},{type:"B",content:"6"},{type:"C",content:"7"},{type:"D",content:"8"}],category:"Arithmetic Progression"},{question:"    If the sum of three consecutive terms of an increasing A.P. is 51 and the product of the first and third of these terms is 273, then the third term is",correctanswer:"C",difficulty:"Easy",answers:[{type:"A",content:"13"},{type:"B",content:"9"},{type:"C",content:"21"},{type:"D",content:"17"}],category:"Arithmetic Progression"},{question:" If 7th and 13th term of an A.P. are 34 and 64 respectively, then its 18th term is",correctanswer:"C",difficulty:"Hard",answers:[{type:"A",content:"87"},{type:"B",content:"88"},{type:"C",content:"89 "},{type:"D",content:"90"}],category:"Arithmetic Progression"},{question:" If nth terms of the APs 63, 65, 67, ... and 3, 10, 17, ... are equal, then n is",correctanswer:"D",difficulty:"Easy",answers:[{type:"A",content:"27"},{type:"B",content:"23"},{type:"C",content:"15"},{type:"D",content:"13"}],category:"Arithmetic Progression"},{question:" Every quadratic polynomial can have at most",correctanswer:"C",difficulty:"Hard",answers:[{type:"A",content:"three zeros"},{type:"B",content:"one zero"},{type:"C",content:"two zeros"},{type:"D",content:"none of these"}],category:"Real Numbers"},{question:" LCM of 2,4",correctanswer:"C",difficulty:"Easy",answers:[{type:"A",content:"4"},{type:"B",content:"5"},{type:"C",content:"2"},{type:"D",content:"7"}],category:"Real Numbers"},{question:"  L.C.M. of 23 \xd7 32 and 22 \xd7 33 is :",correctanswer:"C",difficulty:"Easy",answers:[{type:"A",content:"23"},{type:"B",content:"33"},{type:"C",content:"23*33"},{type:"D",content:"22*32"}],category:"Real Numbers"},{question:"  The HCF and LCM of two numbers are 33 and 264 respectively. When the first number is completely divided by 2 the quotient is 33. The other number is:",correctanswer:"C",difficulty:"Hard",answers:[{type:"A",content:"66"},{type:"B",content:"130"},{type:"C",content:"132"},{type:"D",content:"196"}],category:"Real Numbers"}],k=n(39);var O=function(t){return r.a.createElement("div",null,r.a.createElement("h3",{className:"question"},t.content),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"column"},"Hard"===t.difficulty&&r.a.createElement("button",{className:"btn btn-danger"},"HARD"),"Easy"===t.difficulty&&r.a.createElement("button",{className:"btn btn-success"},"EASY")),r.a.createElement("div",{class:"column"},r.a.createElement("b",null,"category :")," ",t.category)))};var j=function(t){return r.a.createElement("div",{className:"questionCount"},"Question ",r.a.createElement("span",null,t.counter)," of ",r.a.createElement("span",null,t.total))};var S=function(t){return r.a.createElement("li",{className:"answerOption"},r.a.createElement("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",checked:t.answerType===t.answer,id:t.answerType,value:t.answerType,disabled:t.answer,onChange:t.onAnswerSelected}),r.a.createElement("label",{className:"radioCustomLabel",htmlFor:t.answerType},t.answerContent))};var T=function(t){return r.a.createElement(k.CSSTransitionGroup,{className:"container",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},r.a.createElement("div",{key:t.questionId},r.a.createElement(j,{counter:t.questionId,total:t.questionTotal}),r.a.createElement(O,{content:t.question,difficulty:t.difficulty,category:t.category}),r.a.createElement("ul",{className:"answerOptions"},t.answerOptions.map(function(e){return r.a.createElement(S,{key:e.content,answerContent:e.content,answerType:e.type,answer:t.answer,questionId:t.questionId,onAnswerSelected:t.onAnswerSelected})}))))};var I=function(t){var e=t.correct/(t.correct+t.wrong)*100;return r.a.createElement("div",null,r.a.createElement(k.CSSTransitionGroup,{className:"container result",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},r.a.createElement("h2",{class:"report"},"REPORT CARD"),r.a.createElement("div",null,r.a.createElement("p",null,"Most of Your answers are ",r.a.createElement("strong",null,t.quizResult),"!   "),r.a.createElement("p",null,"No of Correct Answers:",t.correct),r.a.createElement("p",null,"No of Wrong Answers:",t.wrong),r.a.createElement("p",null,"Success Percent is ",e,"%"),r.a.createElement("p",null,"You got wrong answers from the given fields"),r.a.createElement("ul",null,r.a.createElement("li",null,"Quadratic:",t.nq),r.a.createElement("li",null,"Circles:",t.nc),r.a.createElement("li",null,"Probability:",t.np),r.a.createElement("li",null,"Arithematic Progression:",t.na),r.a.createElement("li",null,"Real Numbers:",t.nr)))))},P=n(82),N=function(t){function e(){return Object(h.a)(this,e),Object(y.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this.props.correct,e={labels:["Wrong","Correct"],datasets:[{data:[this.props.wrong,t],backgroundColor:["#cd0000","#008000"],hoverBackgroundColor:["#FF6384","#006400"]}]};return r.a.createElement("div",null,r.a.createElement(P.a,{data:e,options:{options:{maintainAspectRatio:!1,responsive:!1,legend:{position:"left",labels:{boxWidth:10}}}}}))}}]),e}(a.Component),B=function(t){function e(t){var n;return Object(h.a)(this,e),(n=Object(y.a)(this,Object(f.a)(e).call(this,t))).state={counter:0,difficulty:A[0].difficulty,category:A[0].category,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{correct:0,wrong:0},result:"",Ncorrect:0,Nwrong:0,checkingSession:!0,cat:{qu:0,cir:0,prob:0,ap:0,re:0},nq:0,nc:0,np:0,na:0,nr:0},n.handleAnswerSelected=n.handleAnswerSelected.bind(Object(C.a)(Object(C.a)(n))),n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentWillMount",value:function(){var t=this,e=A.map(function(e){return t.shuffleArray(e.answers)});this.setState({question:A[0].question,answerOptions:e[0]})}},{key:"shuffleArray",value:function(t){for(var e,n,a=t.length;0!==a;)n=Math.floor(Math.random()*a),e=t[a-=1],t[a]=t[n],t[n]=e;return t}},{key:"handleAnswerSelected",value:function(t){var e=this;t.currentTarget.value===A[this.state.questionId-1].correctanswer?this.setUserAnswerCorrect(t.currentTarget.value):this.setUserAnswerWrong(t.currentTarget.value),this.state.questionId<A.length?setTimeout(function(){return e.setNextQuestion()},300):setTimeout(function(){return e.setResults(e.getResults())},300)}},{key:"setUserAnswerCorrect",value:function(t){this.setState(function(e,n){return{answersCount:Object(q.a)({},e.answersCount,{correct:e.answersCount.correct+1}),answer:t}})}},{key:"setUserAnswerWrong",value:function(t){this.setState(function(e,n){return{answersCount:Object(q.a)({},e.answersCount,{wrong:e.answersCount.wrong+1}),answer:t}}),"Circles"===A[this.state.questionId-1].category&&this.setState(function(t,e){return{cat:Object(q.a)({},t.cat,{cir:t.cat.cir+1})}}),"Arithmetic Progression"===A[this.state.questionId-1].category&&this.setState(function(t,e){return{cat:Object(q.a)({},t.cat,{ap:t.cat.ap+1})}}),"Quadratic Equations"===A[this.state.questionId-1].category&&this.setState(function(t,e){return{cat:Object(q.a)({},t.cat,{qu:t.cat.qu+1})}}),"Real Numbers"===A[this.state.questionId-1].category&&this.setState(function(t,e){return{cat:Object(q.a)({},t.cat,{re:t.cat.re+1})}}),"Probability"===A[this.state.questionId-1].category&&this.setState(function(t,e){return{cat:Object(q.a)({},t.cat,{prob:t.cat.prob+1})}}),console.log(this.state.cat),console.log(this.state.answersCount)}},{key:"setNextQuestion",value:function(){var t=this.state.counter+1,e=this.state.questionId+1;this.setState({counter:t,questionId:e,question:A[t].question,answerOptions:A[t].answers,category:A[t].category,difficulty:A[t].difficulty,answer:""})}},{key:"getResults",value:function(){var t=this.state.answersCount,e=Object.keys(t),n=e.map(function(e){return t[e]}),a=Math.max.apply(null,n);return e.filter(function(e){return t[e]===a})}},{key:"getResultscat",value:function(){var t=this.state.cat,e=Object.keys(t),n=e.map(function(e){return t[e]}),a=Math.max.apply(null,n);return e.filter(function(e){return t[e]===a})}},{key:"setResults",value:function(t){var e=this.state.answersCount,n=Object.keys(e).map(function(t){return e[t]});this.getResultscat();1===t.length?this.setState({result:t[0],Ncorrect:n[0],Nwrong:n[1],nq:this.state.cat.qu,nc:this.state.cat.cir,np:this.state.cat.prob,na:this.state.cat.ap,nr:this.state.cat.re}):this.setState({result:"Undetermined"})}},{key:"renderQuiz",value:function(){return r.a.createElement(T,{answer:this.state.answer,difficulty:this.state.difficulty,category:this.state.category,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:A.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",null,r.a.createElement(I,{quizResult:this.state.result,correct:this.state.Ncorrect,wrong:this.state.Nwrong,nq:this.state.nq,nc:this.state.nc,np:this.state.np,na:this.state.na,nr:this.state.nr})),r.a.createElement("div",null,r.a.createElement(N,{correct:this.state.Ncorrect,wrong:this.state.Nwrong})))}},{key:"componentDidMount",value:function(){var t=Object(l.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("/callback"!==this.props.location.pathname){t.next=3;break}return this.setState({checkingSession:!1}),t.abrupt("return");case 3:return t.prev=3,t.next=6,g.silentAuth();case 6:this.forceUpdate(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),"login_required"!==t.t0.error&&console.log(t.t0.error);case 12:this.setState({checkingSession:!1});case 13:case"end":return t.stop()}},t,this,[[3,9]])}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"MCQ Test"),this.state.result?this.renderResult():this.renderQuiz())}}]),e}(a.Component),D=function(t){function e(){return Object(h.a)(this,e),Object(y.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{class:"message"},r.a.createElement("h2",{class:"report"},"Please Sign in to take the MCQ test"))}}]),e}(a.Component),x=function(t){function e(){return Object(h.a)(this,e),Object(y.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=Object(l.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.handleAuthentication();case 2:this.props.history.replace("/question/1");case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("p",null,"Loading profile...")}}]),e}(a.Component),R=Object(w.a)(x),Q=(n(245),function(t){function e(t){var n;return Object(h.a)(this,e),(n=Object(y.a)(this,Object(f.a)(e).call(this,t))).state={checkingSession:!0},n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=Object(l.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("/callback"!==this.props.location.pathname){t.next=3;break}return this.setState({checkingSession:!1}),t.abrupt("return");case 3:return t.prev=3,t.next=6,g.silentAuth();case 6:this.forceUpdate(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),"login_required"!==t.t0.error&&console.log(t.t0.error);case 12:this.setState({checkingSession:!1});case 13:case"end":return t.stop()}},t,this,[[3,9]])}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(m.a,{exact:!0,path:"/",component:D}),r.a.createElement(m.a,{exact:!0,path:"/question/:questionId",component:B}),r.a.createElement(m.a,{exact:!0,path:"/callback",component:R}))}}]),e}(a.Component)),M=Object(w.a)(Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},84:function(t,e,n){t.exports=n(247)},89:function(t,e,n){}},[[84,2,1]]]);
//# sourceMappingURL=main.cdea317e.chunk.js.map