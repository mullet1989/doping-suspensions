(this["webpackJsonpdoping-suspensions"]=this["webpackJsonpdoping-suspensions"]||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),c=n.n(l),i=(n(17),n(4)),u=n.n(i),o=n(11),s=n(8),m=n(1),f=function(e){var t=e.athlete;return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,t.Name),r.a.createElement("td",null,t["Date of Birth"]),r.a.createElement("td",null,t.Nationality),r.a.createElement("td",null,t.Sanction),r.a.createElement("td",null,t["Ineligibility until"]),r.a.createElement("td",null,t.Description))},h=function(e){var t=e.violations;return e.loading?r.a.createElement("span",null,"Loading ..."):t.length>0?r.a.createElement("table",{style:{tableLayout:"fixed"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Date of Birth"),r.a.createElement("th",null,"Nationality"),r.a.createElement("th",null,"Sanction"),r.a.createElement("th",null,"Ineligibility until"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement(f,{athlete:e}))})))):r.a.createElement("span",null," No results ")},E=n(10),p=n(5),d=n.n(p),v=function(e){var t=e.onCheck;return r.a.createElement("label",{htmlFor:"active",style:{cursor:"pointer"}},r.a.createElement("input",{id:"active",type:"checkbox",value:"Active Suspensions",onChange:function(e){return t(e.target.checked)}}),"\xa0Active suspensions only")},b=function(e){var t=e.setViolations,n=Object(a.useState)(""),l=Object(m.a)(n,2),c=l[0],i=l[1],u=Object(a.useState)(!1),o=Object(m.a)(u,2),s=o[0],f=o[1],h={shouldSort:!0,threshold:.1,location:0,distance:100,minMatchCharLength:1,keys:["Name"]};Object(a.useEffect)((function(){p(S,c).then((function(e){return b(e,s)})).then((function(e){return t(e)}))}),[c,s]);var p=function(e,t){return new Promise((function(n){if(""===t)return n(e);n(new E.a(e,h).search(t).map((function(e){return e.item})))}))},b=function(e,t){return new Promise((function(n){if(t){var a=d()();return n(e.filter((function(e){return d()(e["Ineligibility until"],"DD/MM/YYYY").isAfter(a)})))}n(e)}))};return r.a.createElement("form",null,r.a.createElement("fieldset",null,r.a.createElement("h1",null,"Search for violations"),r.a.createElement("input",{style:{fontSize:"1.5rem"},type:"text",id:"search",onKeyUp:function(e){return i(e.target.value)}}),r.a.createElement(v,{onCheck:function(e){return f(!s)}})))},g=n(9),y=n.n(g)()(),S=[];var j=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),i=Object(m.a)(c,2),f=(i[0],i[1]);return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t,n,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),e.prev=1,f(!0),n="/doping-suspensions/banned-athletes.csv?".concat(t),e.next=6,fetch(n);case 6:return a=e.sent,e.next=9,a.text();case 9:return r=e.sent,e.next=12,y.fromString(r);case 12:c=e.sent,S.push.apply(S,Object(o.a)(c)),l(c),f(!1),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),S.splice(0,S.length),l([]);case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement(b,{setViolations:l}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{overflowX:"auto"}},r.a.createElement("div",{className:"column"},r.a.createElement(h,{violations:n}))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.17fd390d.chunk.js.map