(function(e){function t(t){for(var n,r,o=t[0],l=t[1],u=t[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},i={app:0},a=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"069e":function(e,t,s){e.exports=s.p+"img/special.f385cd03.jpg"},"083d":function(e,t,s){e.exports=s.p+"img/Luck.53bbf5fb.jpg"},"0e80":function(e,t,s){},"16b0":function(e,t,s){},"3df8":function(e,t,s){e.exports=s.p+"img/Charisma.48e932ec.jpg"},"416a":function(e,t,s){var n={"./Agility.jpg":"b55b","./Charisma.jpg":"3df8","./Endurance.jpg":"5c9d","./Intelligence.jpg":"e63c","./Luck.jpg":"083d","./Perception.jpg":"4aba","./Strength.jpg":"f82f","./logo.jpg":"b640","./special.jpg":"069e"};function i(e){var t=a(e);return s(t)}function a(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id="416a"},"4aba":function(e,t,s){e.exports=s.p+"img/Perception.87179c2c.jpg"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},a=[];ImageBitmap;var r={name:"app"},o=r,l=(s("5c0b"),s("2877")),u=Object(l["a"])(o,i,a,!1,null,null,null),c=u.exports,p=s("8c4f"),d=s("d907"),f=(s("098a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome"},[n("p",[e._v(" Tell us about yourself! We need to know what kind of developer you are. ")]),n("router-link",{attrs:{to:"/quiz"}},[n("img",{staticClass:"quiz-link",attrs:{src:s("855c")}})])],1)}),h=[],m={},v=m,g=(s("c2e4"),Object(l["a"])(v,f,h,!1,null,"6252135a",null)),b=g.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"quiz"},[s("b-steps",{attrs:{type:"is-success",animated:!0,"has-navigation":!0},model:{value:e.activeStep,callback:function(t){e.activeStep=t},expression:"activeStep"}},e._l(e.quiz.categories,(function(t,n){return s("b-step-item",{key:n,attrs:{label:"",clickable:!1}},[s("question-set",{ref:"skill-"+t.skill,refInFor:!0,attrs:{skill:t.skill,title:t.title,questions:t.questions},on:{"update-skill":e.updateSkill}})],1)})),1),6===e.activeStep?s("div",{staticClass:"result-link",on:{click:e.jumpToResult}},[e._v("Result..")]):e._e()],1)},k=[],w={title:"Software Engineering Practice - Skill quiz",categories:[{title:"Let's start with 'Strength'",skill:"Strength",questions:["I'm experienced with cloud development and IoT devices","I have worked several years with backend framworks","Good architecture is crucial to bring the best result for the customer's requirements."]},{title:"Next: 'Perception'",skill:"Perception",questions:["Not happy before the customer get's the best possible experience!","Have already used tons of UI frameworks (or few extensively)","I'm up to date with all kind of new frontend technologies and can tell about traid-offs and advantages."]},{title:"Continue with 'Endurance'",skill:"Endurance",questions:["If I need to do something twice, I'll automate it. This is true especially for our toolchain.","I provoke testing, as it is the base for good quality, maintainabilty and reliability.","Only with metric-graphs and well defined alerts I can be sleep well on the knowledge that my solution runs smoothly."]},{title:"Nice job so far! Tell us about your 'Charisma' now",skill:"Charisma",questions:["My work is well documented and naming makes it easy for others to read the code","I am a good listener and regulary share experiences with others.","I arrange discussions with the right people if something is not clear to me or the team"]},{title:"What about 'Intelligence'",skill:"Intelligence",questions:["I can explain in detail what is AI and when to use neural networks","I'm an expert for databases","Collecting and processing a huge bunch of data is something I've done a lot"]},{title:"Almost done after 'Agility'",skill:"Agility",questions:["Scrum and/or Kanban are my daily business","Refactoring is daily business and will be done regulary","I can adapt to challenges and new situations quickly and embrace it along the way"]},{title:"Last we want to know about your attitude with 'Luck'",skill:"Luck",questions:["I am optimistic, upbeat, and have a positive outlook","Think big, start small.  I'll analyze and solve the problems as they occour.","Never stop learning something new"]}]},_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"question-set"},[s("h2",{staticClass:"title"},[e._v(e._s(e.title))]),e._l(e.questions,(function(t,n){return s("b-field",{key:n,attrs:{label:t}},[s("b-slider",{attrs:{type:"is-success",min:0,max:5,"aria-label":t,tooltip:!1},model:{value:e.results[n],callback:function(t){e.$set(e.results,n,t)},expression:"results[idx]"}},[s("b-slider-tick",{attrs:{value:0}},[e._v("Nope")]),s("b-slider-tick",{attrs:{value:1}}),s("b-slider-tick",{attrs:{value:2}}),s("b-slider-tick",{attrs:{value:3}}),s("b-slider-tick",{attrs:{value:4}}),s("b-slider-tick",{attrs:{value:5}},[e._v("Pro")])],1)],1)}))],2)},x=[],j={props:{skill:String,questions:Array,title:String},data:function(){return{results:{0:0,1:0,2:0}}},methods:{calc:function(){var e,t=0;for(e in this.results)e&&(t+=this.results[e]);return{skill:this.skill,points:t}}}},S=j,C=(s("b3f6"),Object(l["a"])(S,_,x,!1,null,"11cbbcc2",null)),I=C.exports,O={name:"quiz",components:{"question-set":I},data:function(){return{quiz:w,activeStep:0,results:{Strength:0,Perception:0,Endurance:0,Charisma:0,Intelligence:0,Agility:0,Luck:0}}},methods:{updateSkill:function(){this.results[this.data.skill]=this.data.points},jumpToResult:function(){var e=JSON.stringify(this.results);this.$router.push({path:"/result/"+e})}}},q=O,E=(s("9f70"),Object(l["a"])(q,y,k,!1,null,"a83c4a32",null)),P=E.exports,A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"section"},[s("h2",[e._v("Thanks for your time! Your most developed skill seems to be '"+e._s(e.score().name)+"'.")]),s("hr"),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},["Strength"===e.score().name?s("div",[s("p",[e._v("Also known as 'Servers' or 'Backend'.")]),s("p",[e._v(" You know about a strong backbone! Seems you be an outstanding backend expert! ")])]):e._e(),"Perception"===e.score().name?s("div",[s("p",[e._v("Also known as 'Presentation' or 'Frontend'.")]),s("p",[e._v(" You have a greate awareness! You master the world of JavaScript frameworks to provide the best possible experience! ")])]):e._e(),"Endurance"===e.score().name?s("div",[s("p",[e._v("Also known as 'Ensure Production' or 'DevOps'.")]),s("p",[e._v(" You are a resilient type of person! Without DevOps no system will run and be updated in production in a way that let developers sleep well and customers trust the solution! ")])]):e._e(),"Charisma"===e.score().name?s("div",[s("p",[e._v("Also known as 'Communication' or 'Knowledge Sharing'.")]),s("p",[e._v(" Nobody can resist your charm! You are articulate both verbal and written, distribution of knowledge for you is as natural as asking for advice. ")])]):e._e(),"Intelligence"===e.score().name?s("div",[s("p",[e._v("Also known as 'Intelligence, artificial' or 'Data Analysis' (or 'Databases' in general).")]),s("p",[e._v(" Wow, what a high IQ! Or is it the one of your artificial system? Either way, without mastering databases and big data we'll never provide additional features based on what we collect every day! ")])]):e._e(),"Agility"===e.score().name?s("div",[s("p",[e._v("Also known as 'Agile'.")]),s("p",[e._v(" Scrum! But... nobody is perfect, but you adapt to changing requirements in a professional way, because agile dosen't mean 'no processes'. Keep fighting for the best delivered incerement possible! ")])]):e._e(),"Luck"===e.score().name?s("div",[s("p",[e._v("Also known as 'Lighthearted' or 'Team Spirit'.")]),s("p",[e._v(" Feeling lucky? You know that with a good team spirit, life is only half as bad. With SOLID, KISS and YAGNI in mind your future-self will be able to cope with whatever comes up. ")])]):e._e(),s("hr"),s("div",{staticClass:"custom-inputs"},[s("h2",[e._v("You can create your profile now, please fill in the following to do so and then click on the image:")]),s("b-field",{attrs:{label:"Name",type:"is-success"}},[s("b-input",{attrs:{minlength:"2",maxlength:"18",placeholder:"Your Name"}})],1),s("b-field",{attrs:{label:"Experience",type:"is-success"}},[s("b-input",{attrs:{type:"number",min:"0",max:"50",placeholder:"Years of Experience"}})],1),s("b-field",{attrs:{label:"Key Fact",type:"is-success"}},[s("b-input",{attrs:{minlength:"8",maxlength:"60",placeholder:"Something people tell about you"}})],1)],1)]),s("div",{staticClass:"column is-two-fifths "},[s("img",{staticClass:"clickable-img",attrs:{src:e.getImgUrl()},on:{click:e.jumpToProfile}})])])])},N=[],T=(s("b0c0"),s("4fad"),s("3835")),L={props:{result:{type:String,default:'{"Luck": 0}'}},data:function(){return{profile:{name:"",fact:"",exp:0,results:{Strength:0,Perception:0,Endurance:0,Charisma:0,Intelligence:0,Agility:0,Luck:0}}}},methods:{score:function(){var e={name:"nothing'. You're talentless. Can't believe that, try again!",value:0};try{this.profile.results=JSON.parse(this.$route.params.result)}catch(o){}for(var t=0,s=Object.entries(this.profile.results);t<s.length;t++){var n=Object(T["a"])(s[t],2),i=n[0],a=n[1],r=parseInt(a);r>e.value&&(e.name=i,e.value=r)}return e},getImgUrl:function(){var e=s("416a"),t=this.score().name;return e("nothing'. You're talentless. Can't believe that, try again!"===t?"./special.jpg":"./"+t+".jpg")},jumpToProfile:function(){var e=JSON.stringify(this.profile);this.$router.push({path:"/profile/"+e})}}},Y=L,$=(s("aada"),Object(l["a"])(Y,A,N,!1,null,null,null)),z=$.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",{staticClass:"title"},[e._v("Your Profile:")]),e._m(0),s("div",{staticClass:"columns section"},[s("div",{staticClass:"column"},[e._v(e._s(e.user.name))]),s("div",{staticClass:"column"},[s("div",{staticClass:"special-skill"},[s("b-progress",{attrs:{type:"is-success",value:7*e.user.results.Strength}}),s("b-progress",{attrs:{type:"is-success",value:7*e.user.results.Perception}}),s("b-progress",{attrs:{type:"is-success",value:7*e.user.results.Endurance}}),s("b-progress",{attrs:{type:"is-success",value:7*e.user.results.Charisma}}),s("b-progress",{attrs:{type:"is-success",value:7*e.user.results.Intelligence}}),s("b-progress",{attrs:{type:"is-success",value:7*e.user.results.Agility}}),s("b-progress",{attrs:{type:"is-success",value:7*e.user.results.Luck}})],1)]),s("div",{staticClass:"column"},[e._v(e._s(e.user.exp))]),s("div",{staticClass:"column"},[e._v(e._s(e.user.fact))])])])},J=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns section"},[s("div",{staticClass:"column"},[e._v("Name:")]),s("div",{staticClass:"column"},[e._v("Strength:")]),s("div",{staticClass:"column"},[e._v("Exp.:")]),s("div",{staticClass:"column"},[e._v("Good to know:")])])}],M={props:{},data:function(){return{user:JSON.parse(this.$route.params.profile)}}},F=M,K=(s("b3d7"),Object(l["a"])(F,D,J,!1,null,null,null)),U=K.exports,W=[{path:"/",component:b},{path:"/quiz",component:P},{path:"/result/:result",component:z,props:!0},{path:"/profile/:profile",component:U,props:!0}],R=new p["a"]({routes:W});n["a"].use(d["a"]),n["a"].use(p["a"]),n["a"].config.productionTip=!1,new n["a"]({router:R,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("9c0c"),i=s.n(n);i.a},"5c9d":function(e,t,s){e.exports=s.p+"img/Endurance.4d6f2ad6.jpg"},"855c":function(e,t,s){e.exports=s.p+"img/special.77bef53a.png"},"9c0c":function(e,t,s){},"9d50":function(e,t,s){},"9f70":function(e,t,s){"use strict";var n=s("a486"),i=s.n(n);i.a},a486:function(e,t,s){},aada:function(e,t,s){"use strict";var n=s("0e80"),i=s.n(n);i.a},b3d7:function(e,t,s){"use strict";var n=s("16b0"),i=s.n(n);i.a},b3f6:function(e,t,s){"use strict";var n=s("9d50"),i=s.n(n);i.a},b55b:function(e,t,s){e.exports=s.p+"img/Agility.4503b1cc.jpg"},b640:function(e,t,s){e.exports=s.p+"img/logo.3081325b.jpg"},c2e4:function(e,t,s){"use strict";var n=s("cd39"),i=s.n(n);i.a},cd39:function(e,t,s){},e63c:function(e,t,s){e.exports=s.p+"img/Intelligence.e6edb7be.jpg"},f82f:function(e,t,s){e.exports=s.p+"img/Strength.c8b9b132.jpg"}});
//# sourceMappingURL=app.eee075f9.js.map