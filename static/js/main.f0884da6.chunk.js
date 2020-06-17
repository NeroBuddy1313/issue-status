(this["webpackJsonpissue-status"]=this["webpackJsonpissue-status"]||[]).push([[0],{13:function(n,t,e){n.exports=e(23)},18:function(n,t,e){},19:function(n,t,e){},23:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(9),c=e.n(o),u=(e(18),e(3)),i=e(1),l=(e(19),e(2)),s={message:"All Systems Operational",backgroundColour:"#3da751"},d={message:"Some systems are experiencing issues",backgroundColour:"#4990e2"},m={message:"Some systems are experiencing a major outage",backgroundColour:"#d94430"},f=function(n,t){return 100*n.filter((function(n){return n.labels.find((function(n){return n.name===t}))})).length/n.length},g=e(4),b=e.n(g);function p(){var n=Object(i.a)(["\n  white-space: pre-wrap;\n  display: block;\n"]);return p=function(){return n},n}function v(){var n=Object(i.a)(["\n  background-color: transparent;\n  color: white;\n  text-decoration: underline;\n  border: none;\n  cursor: pointer;\n  text-align: right;\n  padding: 0;\n"]);return v=function(){return n},n}function h(){var n=Object(i.a)(["\n  font-size: 20px;\n  margin: 0;\n  font-weight: normal;\n"]);return h=function(){return n},n}function x(){var n=Object(i.a)(["\n  background-color: ",";\n  color: white;\n  padding: 16px;\n  border-radius: 3px;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  transition: 0.3s;\n"]);return x=function(){return n},n}var E=l.a.div(x(),(function(n){return n.backgroundColour?n.backgroundColour:"#b1b1b1"})),O=l.a.h2(h()),w=l.a.button(v()),j=l.a.code(p()),S=function(n){var t=n.loading,e=n.error,o=n.components,c=n.refetch,i=function(n){var t=Object(a.useState)(),e=Object(u.a)(t,2),r=e[0],o=e[1];return Object(a.useEffect)((function(){var t=!1;f(n,"operational")<70&&(o(d),t=!0),f(n,"major outage")>0&&(o(m),t=!0),t||o(s)}),[n]),[r]}(o),l=Object(u.a)(i,1)[0],g=function(n,t){var e=Object(a.useState)(b()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow()),r=Object(u.a)(e,2),o=r[0],c=r[1];return Object(a.useEffect)((function(){var t=setInterval((function(){new Date(localStorage.getItem("issueStatusLastFetchcomponent"))<new Date-24e4?n((function(){c(b()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())})):c(b()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),1e3);return function(){clearInterval(t)}}),[n]),Object(a.useEffect)((function(){c(b()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),[t]),[o]}(c,t),p=Object(u.a)(g,1)[0];return r.a.createElement(r.a.Fragment,null,e.hasError&&r.a.createElement(j,null,r.a.createElement("div",null,"An error occured"),r.a.createElement("div",null,"You may have exceeded the rate limit. Try again in 1 hour to fetch the latest data."),JSON.stringify(e.errors,null,3)),r.a.createElement(E,{backgroundColour:null===l||void 0===l?void 0:l.backgroundColour},r.a.createElement(O,null,null===l||void 0===l?void 0:l.message),r.a.createElement(w,{onClick:c},t?"reloading":p)))},k=function(n){var t=Object(a.useState)([]),e=Object(u.a)(t,2),r=e[0],o=e[1],c=Object(a.useState)(),i=Object(u.a)(c,2),l=i[0],s=i[1],d=Object(a.useState)(!0),m=Object(u.a)(d,2),f=m[0],g=m[1];return Object(a.useEffect)((function(){new Date(localStorage.getItem("issueStatusLastFetch".concat(n)))<new Date-24e4?C(g,s,o,n):(o(JSON.parse(localStorage.getItem("issueStatus".concat(n)))),g(!1),s())}),[n]),[f,l,r||[],function(){return C(g,s,o,n)}]},C=function(n,t,e,a){n(!0),fetch("https://api.github.com/repos/".concat("tadhglewis","/issue-status/issues?state=all&labels=issue status,").concat(a)).then((function(n){return n.json()})).then((function(r){t(),localStorage.setItem("issueStatusLastFetch".concat(a),new Date),localStorage.setItem("issueStatus".concat(a),JSON.stringify(r)),e(r),n(!1)})).catch((function(r){t(r.toString()),localStorage.setItem("issueStatusLastFetch".concat(a),new Date),e(JSON.parse(localStorage.getItem("issueStatus".concat(a)))),n(!1)}))};function I(){var n=Object(i.a)(["\n  text-align: center;\n  margin-bottom: 16px;\n"]);return I=function(){return n},n}function _(){var n=Object(i.a)([""]);return _=function(){return n},n}function y(){var n=Object(i.a)(["\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n"]);return y=function(){return n},n}l.a.h1(y());var A=l.a.img(_()),P=l.a.div(I()),T=function(){return r.a.createElement(P,null,r.a.createElement(A,{src:"https://raw.githubusercontent.com/tadhglewis/issue-status/master/.isstatus/logo.png",alt:"Issue Status"}))};function D(){var n=Object(i.a)(["\n  width: 100%;\n  height: 44px;\n  border-radius: 3px;\n  background-color: #f7f8f9;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]);return D=function(){return n},n}var N=l.a.div(D()),F={operational:{name:"Operational",colour:"#247234",backgroundColour:"rgba(61, 167, 81, 0.1)"},performanceIssues:{name:"Performance Issues",colour:"#2f5888",backgroundColour:"rgba(73, 144, 226, 0.1)"},partialOutage:{name:"Partial Outage",colour:"#74582a",backgroundColour:"rgba(255, 198, 103, 0.1)"},majorOutage:{name:"Major Outage",colour:"#8e3b31",backgroundColour:"rgba(217, 68, 48, 0.1)"},unknown:{name:"Unknown",colour:"#6e6b6b",backgroundColour:"rgba(177, 177, 177, 0.1)"}};function L(){var n=Object(i.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"]);return L=function(){return n},n}var R=l.a.div(L(),(function(n){return n.colour}),(function(n){return n.backgroundColour})),M=function(n){var t=function(n){var t=Object(a.useState)(),e=Object(u.a)(t,2),r=e[0],o=e[1];return Object(a.useEffect)((function(){o(Object.values(F).find((function(t){return n.find((function(n){return n.name===t.name.toLowerCase()}))})))}),[n]),r||o(F.unknown),[r]}(n.labels),e=Object(u.a)(t,1)[0];return r.a.createElement(R,{colour:null===e||void 0===e?void 0:e.colour,backgroundColour:null===e||void 0===e?void 0:e.backgroundColour},null===e||void 0===e?void 0:e.name)};function z(){var n=Object(i.a)(["\n  background-color: #f7f8f9;\n  padding: 8px 16px;\n  border-radius: 3px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]);return z=function(){return n},n}var J=l.a.div(z()),U=function(n){var t=n.component;return r.a.createElement(J,null,t.title," ",r.a.createElement(M,{labels:t.labels}))},W=function(n){var t=n.loading,e=n.components;return t&&0===e.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(N,null),r.a.createElement(N,null)):(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map((function(n){return r.a.createElement(U,{key:n.id,component:n})})):r.a.createElement("p",null,"No Components found.")};function Y(){var n=Object(i.a)(["\n  font-size: 13px;\n  color: #6e6b6b;\n  font-weight: bold;\n"]);return Y=function(){return n},n}function B(){var n=Object(i.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"]);return B=function(){return n},n}function K(){var n=Object(i.a)(["\n  white-space: break-spaces;\n  color: #1e1e1e;\n"]);return K=function(){return n},n}function G(){var n=Object(i.a)(["\n  margin-right: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n  color: #1e1e1e;\n"]);return G=function(){return n},n}function H(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3px;\n"]);return H=function(){return n},n}function V(){var n=Object(i.a)(["\n  transition: 0.3s;\n  border-left: 16px solid\n    ",";\n  background-color: white;\n  border-radius: 3px;\n  padding: 16px;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  margin-top: 8px;\n\n  :not(:last-child) {\n    margin-bottom: 16px;\n  }\n"]);return V=function(){return n},n}var $=l.a.div(V(),(function(n){return n.active?"rgba(177, 177, 177,0.2)":"rgba(73, 144, 226, 0.2)"})),q=l.a.div(H()),Q=l.a.div(G()),X=l.a.div(K()),Z=l.a.div(B(),(function(n){return n.active?"#6e6b6b":"#2f5888"}),(function(n){return n.active?"rgba(177, 177, 177, 0.1)":"rgba(73, 144, 226, 0.1)"})),nn=l.a.div(Y()),tn=function(n){var t=n.incident;return r.a.createElement($,{active:t.closed_at},r.a.createElement(q,null,r.a.createElement(nn,null,b()(t.created_at).format("MMMM Do YYYY, h:mm a").toUpperCase()),r.a.createElement(Z,{active:t.closed_at},t.closed_at?"Closed":"Active")),r.a.createElement(Q,null,t.title),r.a.createElement(X,null,t.body))};function en(){var n=Object(i.a)(["\n  width: 100%;\n  height: 84px;\n  border-radius: 3px;\n  background-color: white;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]);return en=function(){return n},n}var an=l.a.div(en());function rn(){var n=Object(i.a)(["\n  margin: 0 8px;\n"]);return rn=function(){return n},n}function on(){var n=Object(i.a)(["\n  padding: 0 16px;\n  font-size: 20px;\n  margin-bottom: 16px;\n"]);return on=function(){return n},n}function cn(){var n=Object(i.a)(["\n  margin: 32px auto 0 auto;\n  max-width: 1040px;\n"]);return cn=function(){return n},n}var un=l.a.div(cn()),ln=l.a.div(on()),sn=l.a.div(rn()),dn=function(n){var t=n.loading,e=n.incidents;return r.a.createElement(un,null,r.a.createElement(ln,null,"Incidents"),t&&0===e.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(an,null),r.a.createElement(an,null),r.a.createElement(an,null)):(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map((function(n){return r.a.createElement(tn,{key:n.id,incident:n})})):r.a.createElement(sn,null,"No Incidents found."))};function mn(){var n=Object(i.a)(["\n  color: #6e6b6b;\n  font-size: 13px;\n  text-decoration: none;\n  transition: 0.3s;\n  display: ",";\n\n  :hover {\n    opacity: 0.9;\n  }\n"]);return mn=function(){return n},n}function fn(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n"]);return fn=function(){return n},n}var gn=l.a.div(fn()),bn=l.a.a(mn(),(function(n){return n.visible?"block":"none"})),pn=function(){return r.a.createElement(gn,null,r.a.createElement("div",null),r.a.createElement(bn,{visible:"false"!==Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_MANIFEST:"https://raw.githubusercontent.com/tadhglewis/issue-status/master/.isstatus/manifest",REACT_APP_FAVICON:"https://raw.githubusercontent.com/tadhglewis/issue-status/master/.isstatus/favicon.ico",REACT_APP_TITLE:"Issue Status Demo",REACT_APP_DESCRIPTION:"",REACT_APP_LOGO:"https://raw.githubusercontent.com/tadhglewis/issue-status/master/.isstatus/logo.png",REACT_APP_NAME:"Issue Status",REACT_APP_USER:"tadhglewis"}).REACT_APP_BRANDING,href:"https://github.com/tadhglewis/issue-status",target:"_blank"},"Powered by Issue Status"))};function vn(){var n=Object(i.a)(["\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  border-radius: 3px;\n  background-color: white;\n  padding: 16px;\n"]);return vn=function(){return n},n}function hn(){var n=Object(i.a)(["\n  max-width: 1008px;\n  padding: 16px;\n  margin: 16px auto;\n"]);return hn=function(){return n},n}var xn=l.a.div(hn()),En=l.a.div(vn()),On=function(){var n=k("component"),t=Object(u.a)(n,4),e=t[0],a=t[1],o=t[2],c=t[3],i=k("incident"),l=Object(u.a)(i,4),s=l[0],d=l[1],m=l[2],f=l[3];return r.a.createElement(xn,null,r.a.createElement(T,null),r.a.createElement(En,null,r.a.createElement(S,{loading:e||s,error:{hasError:a||d,errors:{componentsError:a,incidentsError:d}},components:o,refetch:function(){c(),f()}}),r.a.createElement(W,{loading:e,components:o})),r.a.createElement(dn,{loading:s,incidents:m}),r.a.createElement(pn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(On,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.f0884da6.chunk.js.map