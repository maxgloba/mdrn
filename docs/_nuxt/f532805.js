(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{265:function(t,e,n){"use strict";var r=n(15),o=n(6),d=n(69),c=n(18),l=n(16),m=n(33),h=n(168),v=n(68),f=n(7),x=n(70),w=n(106).f,_=n(41).f,z=n(21).f,k=n(267).trim,C=o.Number,A=C.prototype,N="Number"==m(x(A)),y=function(t){var e,n,r,o,d,c,l,code,m=v(t,!1);if("string"==typeof m&&m.length>2)if(43===(e=(m=k(m)).charCodeAt(0))||45===e){if(88===(n=m.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+m}for(c=(d=m.slice(2)).length,l=0;l<c;l++)if((code=d.charCodeAt(l))<48||code>o)return NaN;return parseInt(d,r)}return+m};if(d("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var Q,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(N?f((function(){A.valueOf.call(n)})):"Number"!=m(n))?h(new C(y(e)),n,E):y(e)},I=r?w(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;I.length>S;S++)l(C,Q=I[S])&&!l(E,Q)&&z(E,Q,_(C,Q));E.prototype=A,A.constructor=E,c(o,"Number",E)}},266:function(t,e,n){var content=n(273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("63d37501",content,!0,{sourceMap:!1})},267:function(t,e,n){var r=n(17),o="["+n(268)+"]",d=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),l=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(d,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},268:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},269:function(t,e,n){var map={"./offer-female/tidbit-img.png":270,"./offer-male/tidbit-img.png":271};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=269},270:function(t,e,n){t.exports=n.p+"img/tidbit-img.e888082.png"},271:function(t,e,n){t.exports=n.p+"img/tidbit-img.2c0229e.png"},272:function(t,e,n){"use strict";n(266)},273:function(t,e,n){(e=n(13)(!1)).push([t.i,".tidbit[data-v-3bdd5fae]{background:#fff;max-width:100%;padding-bottom:100px;padding-top:155px;position:relative;height:auto}@media(min-width:576px){.tidbit[data-v-3bdd5fae]{padding-top:200px}}@media(min-width:768px){.tidbit[data-v-3bdd5fae]{padding-bottom:160px;padding-top:160px}}.tidbit-box[data-v-3bdd5fae]{position:relative;z-index:2}@media(min-width:992px){.tidbit-box[data-v-3bdd5fae]{margin-left:50%}}img[data-v-3bdd5fae]{position:absolute;z-index:1}@media(max-width:767px){img[data-v-3bdd5fae]{width:calc(100% - 40px);left:0;transform:translateY(-35%)}}@media(min-width:768px){img[data-v-3bdd5fae]{right:55%;top:50%;transform:translateY(-50%)}}.title[data-v-3bdd5fae]{font-family:Agrandir;font-size:15px;text-transform:uppercase;letter-spacing:.04em;color:#000;border-bottom:1px solid #000;margin-bottom:40px}@media(min-width:768px){.title[data-v-3bdd5fae]{font-size:20px}}.title span[data-v-3bdd5fae]{padding-bottom:22px;line-height:1.2;display:inline-block;position:relative;border-bottom:3px solid #000}p[data-v-3bdd5fae]{font-family:Montserrat;font-size:16px;font-weight:400;line-height:24px;color:#000}p[data-v-3bdd5fae]:not(:last-child){margin-bottom:35px}",""]),t.exports=e},274:function(t,e,n){"use strict";n.r(e);var r={computed:{answers:function(){return this.$store.state.answers}},beforeCreate:function(){this.$store.dispatch("getAnswers")}},o=(n(272),n(2)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"tidbit"},[e("img",{attrs:{src:n(269)("./offer-"+(this.answers.q1?this.answers.q1:"female")+"/tidbit-img.png")}}),this._v(" "),this._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"tidbit-box"},[n("div",{staticClass:"title"},[n("span",[t._v("Prenez un morceau de votre "),n("br"),t._v(" séance d'entraînement")])]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n        Les résultats peuvent varier en fonction de votre point de départ, de vos objectifs et de vos efforts. "),n("br"),n("br"),t._v("\n        La pratique d’une activité physique et le suivi d’un régime alimentaire sont nécessaires pour obtenir et maintenir votre perte de poids et/ou prise de masse. "),n("br"),n("br"),t._v("\n        Les témoignages présents sur notre site ont été, dans certains cas, effectués par des membres ayant utilisé plusieurs produits MDRN Training, et ce, parfois, sur une période plus longue que les 90 jours du programme afin de maximiser leurs résultats. "),n("br"),n("br"),t._v("\n        Consultez votre médecin et suivez l’ensemble des instructions données avant d’entamer une activité physique, un régime alimentaire ou un programme de compléments alimentaires. "),n("br"),n("br"),t._v("\n        L’ensemble de nos contenus présentés sur notre site internet et nos programmes ne sont proposés qu’à titre informatif. Ils n’ont pas vocation à se substituer à un quelconque avis médical ou à un diagnostique réalisé par un professionnel de santé.\n      ")])])])}],!1,null,"3bdd5fae",null);e.default=component.exports},299:function(t,e,n){var content=n(378);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("66c920e2",content,!0,{sourceMap:!1})},300:function(t,e,n){var content=n(380);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("479706a9",content,!0,{sourceMap:!1})},301:function(t,e,n){t.exports=n.p+"img/cris-mob.449326b.png"},302:function(t,e,n){var content=n(384);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("770efbac",content,!0,{sourceMap:!1})},377:function(t,e,n){"use strict";n(299)},378:function(t,e,n){(e=n(13)(!1)).push([t.i,".page-index[data-v-5f6db56c]{background:#ecf0f5}.quiz-section[data-v-5f6db56c]{max-width:1920px;margin:0 auto}@media(min-width:768px){.quiz-section[data-v-5f6db56c]{display:flex}}.quiz-section .column[data-v-5f6db56c]{position:relative}@media(min-width:768px){.quiz-section .column[data-v-5f6db56c]{flex:1 50%;max-width:50%}.quiz-section .column-quiz[data-v-5f6db56c]{order:2}}@media(min-width:768px)and (max-height:1100px){.quiz-section .column[data-v-5f6db56c]{min-height:100vh}}",""]),t.exports=e},379:function(t,e,n){"use strict";n(300)},380:function(t,e,n){var r=n(13),o=n(169),d=n(381);e=r(!1);var c=o(d);e.push([t.i,'.quiz[data-v-5587b24d]{padding:40px 16px}@media(min-width:768px){.quiz[data-v-5587b24d]{padding-left:30px;padding-right:30px;padding-bottom:80px}}@media(min-width:1200px){.quiz[data-v-5587b24d]{padding-bottom:150px}}@media(min-width:1920px){.quiz[data-v-5587b24d]{padding-bottom:180px}}.quiz-wrap[data-v-5587b24d]{width:100%}.quiz .logo[data-v-5587b24d]{margin-bottom:50px}@media(min-width:768px){.quiz .logo[data-v-5587b24d]{margin-bottom:80px}}.survey[data-v-5587b24d]{font-family:Agrandir;font-weight:500;font-size:16px;line-height:24px;text-transform:uppercase;color:#000;margin-bottom:24px}@media(min-width:1200px){.survey[data-v-5587b24d]{font-size:20px;text-align:right;margin-bottom:40px}}.survey br[data-v-5587b24d]{display:none}@media(min-width:1200px){.survey br[data-v-5587b24d]{display:block}}.title[data-v-5587b24d]{font-family:Agrandir;font-weight:500;font-size:29px;line-height:44px;color:#000;margin-bottom:32px}@media(min-width:576px){.title[data-v-5587b24d]{font-size:36px}}@media(min-width:1200px){.title[data-v-5587b24d]{font-size:45px;line-height:50px}}@media(min-width:1440px){.title[data-v-5587b24d]{font-size:68px;line-height:72px;margin-bottom:40px}}.question[data-v-5587b24d]{font-family:Agrandir;font-weight:300;font-size:13px;line-height:20px;text-transform:uppercase;color:#000;margin-bottom:24px}@media(min-width:576px){.question[data-v-5587b24d]{font-size:15px}}@media(min-width:768px){.question[data-v-5587b24d]{font-size:14px}}@media(min-width:992px){.question[data-v-5587b24d]{font-size:15px}}@media(min-width:1200px){.question[data-v-5587b24d]{font-size:16px;line-height:20px}}@media(min-width:1440px){.question[data-v-5587b24d]{margin-bottom:50px;font-size:18px;line-height:24px}}.question span[data-v-5587b24d]{font-weight:500}.quiz-progress[data-v-5587b24d]{height:4px;width:100%;background:#ccccd9;position:relative;margin-bottom:32px}@media(min-width:1440px){.quiz-progress[data-v-5587b24d]{margin-bottom:40px}}.quiz-progress span[data-v-5587b24d]{width:0;height:8px;background:#000;transition:width .5s ease;position:absolute;left:0;bottom:0}.btn[data-v-5587b24d]{border:none;padding:0;background:none}.btn-radio[data-v-5587b24d]{background-color:grey;padding:20px 85px 20px 24px;font-weight:500;font-size:18px;letter-spacing:.02em;line-height:1.2;text-transform:uppercase;color:#fdfdfd;position:relative;text-align:left;font-family:Agrandir}@media(min-width:1440px){.btn-radio[data-v-5587b24d]{font-size:17px}}.btn-radio[data-v-5587b24d]:after{content:"";background:url('+c+') no-repeat 50%/24px 24px;display:block;position:absolute;right:0;top:0;border-left:1.4px solid #f1d4c1;width:64px;height:100%}.btn-radio__last[data-v-5587b24d]{padding:24px 16px;text-align:center;font-size:12px;line-height:17px;letter-spacing:.02em}.btn-radio__last[data-v-5587b24d]:after{display:none}.btn-age span[data-v-5587b24d]{color:#fff}.btn-continue[data-v-5587b24d]{background-color:grey;padding:20px 24px;font-weight:500;font-size:17px;text-transform:uppercase;color:#fdfdfd;position:relative;text-align:left;font-family:Agrandir;width:300px;max-width:100%;text-align:center;margin-left:auto;margin-right:auto;display:block;margin-top:50px;letter-spacing:.02em}.btn-continue[data-v-5587b24d]:disabled{background:#ccccd9;opacity:.7!important;cursor:default;pointer-events:none}.btn-female[data-v-5587b24d]{background-color:#d99466}.btn-male[data-v-5587b24d]{background-color:#004889}.btn[data-v-5587b24d]:hover{opacity:.9}@media(min-width:1200px){.radio[data-v-5587b24d]{display:flex;justify-content:space-around;flex-wrap:wrap}}.radio button[data-v-5587b24d]{margin-top:10px;margin-bottom:10px;width:100%}@media(min-width:1200px){.radio button[data-v-5587b24d]{flex:1 calc(50% - 10px);max-width:calc(50% - 10px)}}.range-wrap[data-v-5587b24d]{display:flex;align-items:center;justify-content:center}@media(max-width:576px){.range-wrap[data-v-5587b24d]{flex-direction:column;align-items:flex-start}}.range label[data-v-5587b24d]{font-weight:500;font-size:16px;line-height:24px;color:#000;width:230px}@media(max-width:576px){.range label[data-v-5587b24d]{margin-bottom:22px}}.range-bg[data-v-5587b24d]{position:relative;max-width:575px;width:100%;height:24px}.range-bg[data-v-5587b24d]:before{border:1px solid #ccccd9;height:4px;width:100%;content:"";z-index:1}.range-bg[data-v-5587b24d]:before,.range span[data-v-5587b24d]{position:absolute;left:0;top:50%;transform:translateY(-50%)}.range span[data-v-5587b24d]{width:0;height:7px;z-index:2}.range input[data-v-5587b24d]{width:100%;height:24px;margin:0;background-color:transparent;-webkit-appearance:none;position:relative;z-index:3}.range input[data-v-5587b24d]:focus{outline:none}.range input[data-v-5587b24d]::-webkit-slider-runnable-track{background:transparent;border:1px solid transparent;width:100%;height:6px;cursor:pointer}.range input[data-v-5587b24d]::-webkit-slider-thumb{margin-top:-12px;width:24px;height:24px;background:#d99466;border:0;-webkit-appearance:none}.range input[data-v-5587b24d]::-moz-range-track{background:transparent;border:1px solid transparent;width:100%;cursor:pointer}.range input[data-v-5587b24d]::-moz-range-thumb{width:24px;height:24px;background:#d99466;border:0;cursor:pointer;border-radius:0;margin:0;padding:0}.range input[data-v-5587b24d]::-ms-track{background:transparent;border-color:transparent;border-width:0;width:100%;cursor:pointer}.range input[data-v-5587b24d]::-ms-fill-lower,.range input[data-v-5587b24d]::-ms-fill-upper{background:transparent}.range input[data-v-5587b24d]::-ms-thumb{width:24px;height:24px;background:#d99466;border:0;cursor:pointer;margin-top:0}@supports(-ms-ime-align:auto){.range input[data-v-5587b24d]{margin:0}}.range input[data-v-5587b24d]::-ms-track{border:none;color:transparent}.range input[data-v-5587b24d]::-moz-range-progress{padding:0;height:6px}.range input.female[data-v-5587b24d]::-moz-range-thumb{background:#d99466}.range input.female[data-v-5587b24d]::-webkit-slider-thumb{background:#d99466}.range input.female[data-v-5587b24d]::-ms-thumb{background:#d99466}.range input.male[data-v-5587b24d]::-moz-range-thumb{background:#004889}.range input.male[data-v-5587b24d]::-webkit-slider-thumb{background:#004889}.range input.male[data-v-5587b24d]::-ms-thumb{background:#004889}.back[data-v-5587b24d]{margin-top:10px;text-transform:uppercase;font-size:13px;color:#000;opacity:.7;border:0;font-family:Agrandir;font-weight:300;letter-spacing:1px;-webkit-appearance:none}.back[data-v-5587b24d]:before{content:"❮";margin-right:4px}.back[data-v-5587b24d]:hover{opacity:1}',""]),t.exports=e},381:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACkSURBVHgB7ZTBDYMwDEWdqMq5IzACq3QCOkI36CjtJh2hIwATcIwUJTGfQyQOwAX7AOJJViIl+l92HBNdHB5mvpMWKaVPzvnvva/W7ljaAcR7ZFA7535bJrsIIbyQCSNaNZMY4/McJihXDYNhbmKKu7W2IQHw6BWWKToYPW7lAB1BEhhjylb+fyyVSAyUptEW50OKv1V7H+39nYad6kRVFb8QYQRJWrL0duJWsAAAAABJRU5ErkJggg=="},382:function(t,e,n){t.exports=n.p+"img/cris-mob.ff5a0b7.webp"},383:function(t,e,n){"use strict";n(302)},384:function(t,e,n){var r=n(13),o=n(169),d=n(385);e=r(!1);var c=o(d);e.push([t.i,".chris[data-v-019d97ff]{width:100%;background:url("+c+") no-repeat top}@media(min-width:768px){.chris[data-v-019d97ff]{position:absolute;left:0;top:0;height:100%}}.chris img[data-v-019d97ff]{display:block;width:100%}@media(min-width:768px){.chris img[data-v-019d97ff]{display:none}}",""]),t.exports=e},385:function(t,e,n){t.exports=n.p+"img/cris-desc.92b5405.png"},396:function(t,e,n){"use strict";n.r(e);n(265);var r={data:function(){return{quizNumber:1,quizProgress:0,height:0,heightWidth:0,weight:0,weightWidth:0}},methods:{heightAction:function(){this.heightWidth=100*(this.height-90)/150},weightAction:function(){this.weightWidth=100*(this.weight-40)/160},setQ1:function(a){this.quizProgress=100/6,this.quizNumber=2;var t=this.answers;t.q1=a,localStorage.answers=JSON.stringify(t)},setQ2:function(a){this.quizProgress=100/6*this.quizNumber,this.quizNumber=3;var t=this.answers;t.q2=a,localStorage.answers=JSON.stringify(t)},setQ3:function(a){this.quizProgress=100/6*this.quizNumber,this.quizNumber=4;var t=this.answers;t.q3=a,localStorage.answers=JSON.stringify(t)},setQ4:function(a){this.quizProgress=100/6*this.quizNumber,this.quizNumber=5;var t=this.answers;t.q4=a,localStorage.answers=JSON.stringify(t)},setQ5:function(a){this.quizProgress=100/6*this.quizNumber,this.quizNumber=6;var t=this.answers;t.q5=a,localStorage.answers=JSON.stringify(t)},setQ6:function(a){this.quizProgress=100;var t=this.answers;t.q6=a,localStorage.answers=JSON.stringify(t),t.q1&&t.q2&&t.q3&&t.q4&&t.q5&&t.q6?this.$router.push("/offer"):this.quizProgress=100/6*(this.quizNumber-1)},stepBack:function(){this.quizNumber=Number(this.quizNumber)-1,this.quizProgress=100/6*(this.quizNumber-1),this.answers["q".concat(this.quizNumber)]=!1,localStorage.answers=JSON.stringify(this.answers)}},computed:{answers:function(){return this.$store.state.answers}},beforeCreate:function(){this.$store.dispatch("getAnswers")},mounted:function(){(this.answers.q1&&this.setQ1(this.answers.q1),this.answers.q2&&this.setQ2(this.answers.q2),this.answers.q3&&this.setQ3(this.answers.q3),this.answers.q4&&this.setQ4(this.answers.q4),this.answers.q5&&this.setQ5(this.answers.q5),this.answers.q6&&this.setQ6(this.answers.q6),localStorage.offer&&this.answers.q1&&this.answers.q2&&this.answers.q3&&this.answers.q4&&this.answers.q5&&this.answers.q6)&&(JSON.parse(localStorage.offer)&&(this.$router.push("/checkout"),this.$store.state.offerActive=!0))}},o=(n(379),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quiz"},[n("Logo"),t._v(" "),n("div",{staticClass:"quiz-wrap"},[t._m(0),t._v(" "),n("div",{staticClass:"title"},[t._v("Découvrez quel est le meilleur régime et programme d'entraînement pour vous")]),t._v(" "),1===t.quizNumber?n("div",{staticClass:"question"},[t._v("Vous êtes:")]):2===t.quizNumber?n("div",{staticClass:"question"},[t._v("Votre âge ?")]):3===t.quizNumber?n("div",{staticClass:"question"},[t._v("Votre taille: "),n("span",[t._v(t._s(t.height)+" CM")])]):4===t.quizNumber?n("div",{staticClass:"question"},[t._v("Votre poids actuel: "),n("span",[t._v(t._s(t.weight)+" KG")])]):5===t.quizNumber?n("div",{staticClass:"question"},[t._v("Décrivez-nous votre activité physique")]):6===t.quizNumber?n("div",{staticClass:"question"},[t._v("Qu’estce qui vous décrit le mieux?")]):t._e(),t._v(" "),n("div",{staticClass:"quiz-progress"},[n("span",{class:"bg-"+t.answers.q1,style:"width: "+t.quizProgress+"%;"})]),t._v(" "),1===t.quizNumber?n("div",{staticClass:"answers"},[n("div",{staticClass:"radio"},[n("button",{staticClass:"btn btn-radio btn-female",on:{click:function(e){return t.setQ1("female")}}},[t._v("UNE Femme")]),t._v(" "),n("button",{staticClass:"btn btn-radio btn-male",on:{click:function(e){return t.setQ1("male")}}},[t._v("UN Homme")])])]):t._e(),t._v(" "),2===t.quizNumber?n("div",{staticClass:"answers"},[n("div",{staticClass:"radio"},[n("button",{staticClass:"btn btn-radio btn-age",class:"bg-"+t.answers.q1+" cl-age-"+t.answers.q1,on:{click:function(e){return t.setQ2("20")}}},[t._v("Moins de "),n("span",[t._v("20")]),t._v(" ans")]),t._v(" "),n("button",{staticClass:"btn btn-radio btn-age",class:"bg-"+t.answers.q1+" cl-age-"+t.answers.q1,on:{click:function(e){return t.setQ2("30")}}},[t._v("Entre "),n("span",[t._v("20")]),t._v(" et "),n("span",[t._v("29")]),t._v(" ans")]),t._v(" "),n("button",{staticClass:"btn btn-radio btn-age",class:"bg-"+t.answers.q1+" cl-age-"+t.answers.q1,on:{click:function(e){return t.setQ2("40")}}},[t._v("Entre "),n("span",[t._v("30")]),t._v(" et "),n("span",[t._v("39")]),t._v(" ans")]),t._v(" "),n("button",{staticClass:"btn btn-radio btn-age",class:"bg-"+t.answers.q1+" cl-age-"+t.answers.q1,on:{click:function(e){return t.setQ2("50")}}},[t._v("Entre "),n("span",[t._v("40")]),t._v(" et "),n("span",[t._v("49")]),t._v(" ans")]),t._v(" "),n("button",{staticClass:"btn btn-radio btn-age",class:"bg-"+t.answers.q1+" cl-age-"+t.answers.q1,on:{click:function(e){return t.setQ2("60")}}},[t._v("Entre "),n("span",[t._v("50")]),t._v(" et "),n("span",[t._v("59")]),t._v(" ans")]),t._v(" "),n("button",{staticClass:"btn btn-radio btn-age",class:"bg-"+t.answers.q1+" cl-age-"+t.answers.q1,on:{click:function(e){return t.setQ2("70")}}},[n("span",[t._v("60")]),t._v(" ans et plus")])])]):t._e(),t._v(" "),3===t.quizNumber?n("div",{staticClass:"answers"},[n("div",{staticClass:"range"},[n("div",{staticClass:"range-wrap"},[n("label",[t._v("En centimètres")]),t._v(" "),n("div",{staticClass:"range-bg"},[n("span",{class:"bgslider-"+t.answers.q1,style:"width: "+t.heightWidth+"%"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.height,expression:"height"}],class:t.answers.q1,attrs:{type:"range",min:"90",max:"240",step:"1"},domProps:{value:t.height},on:{input:t.heightAction,change:t.heightAction,__r:function(e){t.height=e.target.value}}})])]),t._v(" "),n("button",{staticClass:"btn btn-continue",class:"bg-"+t.answers.q1,attrs:{disabled:!(t.height>0)},on:{click:function(e){return t.setQ3(t.height)}}},[t._v("Continuez")])])]):t._e(),t._v(" "),4===t.quizNumber?n("div",{staticClass:"answers"},[n("div",{staticClass:"range"},[n("div",{staticClass:"range-wrap"},[n("label",[t._v("Kilogrammes")]),t._v(" "),n("div",{staticClass:"range-bg"},[n("span",{class:"bgslider-"+t.answers.q1,style:"width: "+t.weightWidth+"%"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],class:t.answers.q1,attrs:{type:"range",min:"40",max:"200",step:"1"},domProps:{value:t.weight},on:{input:t.weightAction,change:t.weightAction,__r:function(e){t.weight=e.target.value}}})])]),t._v(" "),n("button",{staticClass:"btn btn-continue",class:"bg-"+t.answers.q1,attrs:{disabled:!(t.weight>0)},on:{click:function(e){return t.setQ4(t.weight)}}},[t._v("Continuez")])])]):t._e(),t._v(" "),5===t.quizNumber?n("div",{staticClass:"answers"},[n("div",{staticClass:"radio"},[n("button",{staticClass:"btn btn-radio",class:"bg-"+t.answers.q1,on:{click:function(e){return t.setQ5("1")}}},[t._v("Légèrement active")]),t._v(" "),n("button",{staticClass:"btn btn-radio",class:"bg-"+t.answers.q1,on:{click:function(e){return t.setQ5("2")}}},[t._v("Modérément active")]),t._v(" "),n("button",{staticClass:"btn btn-radio",class:"bg-"+t.answers.q1,on:{click:function(e){return t.setQ5("3")}}},[t._v("Très active")])])]):t._e(),t._v(" "),6===t.quizNumber&&"female"===t.answers.q1?n("div",{staticClass:"answers"},[n("div",{staticClass:"radio"},[n("button",{staticClass:"btn btn-radio btn-radio__last bg-female",on:{click:function(e){return t.setQ6("1")}}},[t._v("J’ai besoin de perdre 3 à 5 kilos et de tonifier mon ventre mes fesses et mes bras")]),t._v(" "),n("button",{staticClass:"btn btn-radio btn-radio__last bg-female",on:{click:function(e){return t.setQ6("2")}}},[t._v("J’ai besoin de perdre environ 10 kilos")]),t._v(" "),n("button",{staticClass:"btn btn-radio btn-radio__last bg-female",on:{click:function(e){return t.setQ6("3")}}},[t._v("Je suis mince. J’ai besoin de me tonifier et de perdre un peu de gras à certains endroits pour être bien")])])]):t._e(),t._v(" "),6===t.quizNumber&&"male"===t.answers.q1?n("div",{staticClass:"answers"},[n("div",{staticClass:"radio"},[n("button",{staticClass:"btn btn-radio btn-radio__last bg-male",on:{click:function(e){return t.setQ6("4")}}},[t._v("Je n’arrive pas à prendre de la masse musculaire, peu importe ce que je mange ou la façon dont je m’entraine")]),t._v(" "),n("button",{staticClass:"btn btn-radio btn-radio__last bg-male",on:{click:function(e){return t.setQ6("5")}}},[t._v("Je suis un « faux maigre », j’ai l’air mince habillé mais j’ai un peu de graisse")]),t._v(" "),n("button",{staticClass:"btn btn-radio btn-radio__last bg-male",on:{click:function(e){return t.setQ6("6")}}},[t._v("Je suis plutôt satisfait de mon apparence mais je voudrais juste perdre un petit peu de masse graisseuse")]),t._v(" "),n("button",{staticClass:"btn btn-radio btn-radio__last bg-male",on:{click:function(e){return t.setQ6("7")}}},[t._v("Je ne suis pas content de mon apparence, je voudrais perdre du poids")])])]):t._e(),t._v(" "),t.quizNumber>1?n("button",{staticClass:"back",on:{click:t.stepBack}},[t._v("retour")]):t._e()])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"survey"},[this._v("Répondez "),e("br"),this._v(" à l'enquête")])}],!1,null,"5587b24d",null);e.default=component.exports;installComponents(component,{Logo:n(73).default})},401:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chris"},[e("picture",[e("source",{attrs:{srcset:n(382),type:"image/webp"}}),this._v(" "),e("source",{attrs:{srcset:n(301),type:"image/png"}}),this._v(" "),e("img",{attrs:{src:n(301)}})])])}],o=(n(383),n(2)),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),r,!1,null,"019d97ff",null);e.default=component.exports},406:function(t,e,n){"use strict";n.r(e);var r={layout:"index",mounted:function(){localStorage.fullPath||(localStorage.fullPath=this.$route.fullPath),this.$route.query.gclid&&(localStorage.gclid=this.$route.query.gclid),this.$route.query.affId&&(localStorage.affId=this.$route.query.affId),localStorage.httpReferer=window.location.href,snaptr("init","8e2daa52-aa46-4ef7-88e5-72a03964197d"),snaptr("track","PAGE_VIEW"),fbq("track","ViewContent",{content_name:"mdrn, homepage"})}},o=(n(377),n(2)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page page-index"},[e("section",{staticClass:"quiz-section"},[e("div",{staticClass:"column column-quiz"},[e("Quiz")],1),this._v(" "),e("div",{staticClass:"column column-img"},[e("Chris")],1)]),this._v(" "),e("Tidbit")],1)}),[],!1,null,"5f6db56c",null);e.default=component.exports;installComponents(component,{Quiz:n(396).default,Chris:n(401).default,Tidbit:n(274).default})}}]);