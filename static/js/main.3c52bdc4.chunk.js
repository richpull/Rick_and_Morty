(this.webpackJsonprick_and_morty=this.webpackJsonprick_and_morty||[]).push([[0],{36:function(e,n,t){e.exports=t(48)},48:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),i=t(21),c=t.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(5),l=t(7);function u(){var e=Object(o.a)(["\n  width: 100%;\n  max-width: 810px;\n  margin: 142px auto;\n"]);return u=function(){return e},e}var m={Main:l.b.div(u())},s=t(11),d=t(27);function f(){var e=Object(o.a)(["\n  width: 100%;\n  height: 80px;\n  border: 1px solid #a0a0a0;\n  padding: 0 27px;\n  font-weight: 300;\n  font-size: 30px;\n  text-transform: uppercase;\n  &::placeholder {\n    text-transform: none;\n  }\n"]);return f=function(){return e},e}function h(){var e=Object(o.a)(["\n  display: block;\n  margin-bottom: 30px;\n"]);return h=function(){return e},e}var g={Search:l.b.form(h()),SearchControl:l.b.input(f())},p=t(25);function v(){var e=Object(o.a)(["\n  query($name: String!) {\n    characters(filter: { name: $name }) {\n      results {\n        id\n        name\n        image\n      }\n    }\n  }\n"]);return v=function(){return e},e}var b=t.n(p)()(v()),x=t(35);function E(){var e=Object(o.a)(["\n  display: grid;\n  grid-gap: 30px;\n  margin-bottom: 30px;\n  grid-template-columns: repeat(4, 1fr);\n"]);return E=function(){return e},e}var j={CharacterGrid:l.b.div(E())};function O(){var e=Object(o.a)(["\n  display: flex;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 8px;\n  z-index: 200;\n  align-items: center;\n  justify-content: right;\n  * > {\n    &:not(:first-child) {\n      margin-left: 8px;\n    }\n  }\n"]);return O=function(){return e},e}function C(){var e=Object(o.a)(["\n  position: absolute;\n  z-index: 100;\n  left: 10px;\n  right: 10px;\n  bottom: 28px;\n  text-transform: uppercase;\n  color: #fff;\n  line-height: 1;\n  text-align: center;\n"]);return C=function(){return e},e}function w(){var e=Object(o.a)(["\n  width: 100%;\n  height: inherit;\n  object-fit: cover;\n  z-index: 150;\n"]);return w=function(){return e},e}function k(){var e=Object(o.a)(["\n  line-height: 0;\n  background-color: #dadada;\n  position: relative;\n  height: 220px;\n  overflow: hidden;\n  > * {\n    position: relative;\n  }\n"]);return k=function(){return e},e}var y={CharacterGridItem:l.b.div(k()),CharacterGridItem__img:l.b.img(w()),CharacterGridItem__name:l.b.div(C()),CharacterGridItem__control:l.b.div(O())},_=function(e){var n=e.data,t=void 0===n?{}:n,r=e.children,i=void 0===r?{}:r,c=e.onClick,o=Object.assign({},t,i),l=o.image,u=o.name,m=o.Control;return a.a.createElement(y.CharacterGridItem,{onClick:c,style:{cursor:c?"pointer":"default"}},m&&a.a.createElement(y.CharacterGridItem__control,null,m),l&&a.a.createElement(y.CharacterGridItem__img,{src:l,alt:u||""}),u&&a.a.createElement(y.CharacterGridItem__name,null,u))},G=function(e){var n=e.data,t=e.children,r=Object(x.a)(e,["data","children"]);return t?a.a.createElement(j.CharacterGrid,r,t):n&&n.length?a.a.createElement(j.CharacterGrid,r,n.map((function(e){return a.a.createElement(_,{data:e})}))):null};function I(){var e=Object(o.a)(["\n  display: inline-flex;\n  cursor: pointer;\n  height: 30px;\n  min-width: 30px;\n  border-radius: 100%;\n  align-items: center;\n  justify-content: center;\n  line-height: 0;\n  font-size: 14px;\n  background-color: rgba(255, 255, 255, 0.75);\n  transition: background-color 0.25s ease;\n  &:hover {\n    background-color: rgba(255, 255, 255, 1);\n  }\n"]);return I=function(){return e},e}var S={ButtonClose:l.b.div(I())},N=function(e){var n=e.onClick,t=e.children;return a.a.createElement(S.ButtonClose,{onClick:n},t||a.a.createElement("i",{className:"fas fa-times"}))},z=function(e){var n=e.data,t=void 0===n?[]:n,i=Object(r.useContext)(B).selectResultHandler,c=Object(r.useState)([]),o=Object(s.a)(c,2),l=o[0],u=o[1];Object(r.useEffect)((function(){u(t)}),[t]);return l.length?a.a.createElement(G,null,l.map((function(e){return a.a.createElement(_,{onClick:function(){i(e.id)},key:e.id,data:e},{Control:a.a.createElement(a.a.Fragment,null,a.a.createElement(N,{onClick:function(n){var t;n.stopPropagation(),t=e.id,u(l.filter((function(e){return e.id!==t})))}}))})}))):null},T=t(16),F=t(26),R=function(e){var n=e.scrollTo,t=void 0!==n&&n,i=e.setMatchName,c=void 0===i?[]:i,o=e.item,l=e.cacheClear,u=void 0!==l&&l,m=Object(r.useState)({}),d=Object(s.a)(m,2),f=d[0],h=d[1],g=Object(r.useRef)(null);return Object(r.useEffect)((function(){if(t&&o&&g.current&&window.scroll({top:g.current.offsetTop-30,left:0,behavior:"smooth"}),o){var e=c.find((function(e){return o.name.search(new RegExp(e,"ig"))>-1}))||"";h(u?{}:Object(F.a)({},f,Object(T.a)({},e,o)))}}),[o,u,t]),a.a.createElement("div",{ref:g},c.length&&Object.keys(f).length?a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"uppercase text-center"},"Party"),a.a.createElement(G,{className:"mb-0"},c.map((function(e){return a.a.createElement(_,{key:e,data:{image:f[e]&&f[e].image,name:e}})})))):null)},B=a.a.createContext({selectResultHandler:function(){},results:[]}),M=B.Provider,q=function(){var e=Object(r.useState)(""),n=Object(s.a)(e,2),t=n[0],i=n[1],c=Object(r.useState)(void 0),o=Object(s.a)(c,2),l=o[0],u=o[1],m=Object(d.a)(b),f=Object(s.a)(m,2),h=f[0],p=f[1],v=p.data,x=void 0===v?{}:v,E=p.loading;Object(r.useEffect)((function(){if(!(t.length<2)){var e=setTimeout((function(){h({variables:{name:t}})}),300);return function(){return clearTimeout(e)}}}),[t]);var j=(x.characters||{}).results,O=void 0===j?[]:j;return a.a.createElement(a.a.Fragment,null,a.a.createElement(g.Search,null,a.a.createElement(g.SearchControl,{className:"ellipsis",type:"text",placeholder:"Enter character name...",value:t,onChange:function(e){return function(e){i(e.currentTarget.value.trim())}(e)}})),E?a.a.createElement("div",null,"loading ..."):!O.length&&t.length>=2?a.a.createElement("div",null,"Nothing found for your request"):null,a.a.createElement(M,{value:{selectResultHandler:function(e){var n=O.filter((function(n){return n.id===e}))[0]||!1;n&&u(n)},results:O}},null!==O&&a.a.createElement(a.a.Fragment,null,a.a.createElement(z,{data:O}),a.a.createElement(R,{scrollTo:!0,setMatchName:["rick","morty"],item:l}))))},H=function(){return a.a.createElement(m.Main,null,a.a.createElement(q,null))};function P(){var e=Object(o.a)(["\n\th1{\n\t  font-size: 30px;\n\t  margin-bottom: 30px;\n\t}\n\t.ellipsis{\n\t\twhite-space: nowrap;\n\t    text-overflow:ellipsis;\n\t    overflow: hidden;\n\t}\n    .uppercase{\n      text-transform: uppercase;\n    }\n    .text-center{\n      text-align: center;\n    }\n    .text-left{\n      text-align: left;\n    }\n    .text-right{\n      text-align: right;\n    }\n    .mb-0{\n      margin-bottom: 0;\n    }\n"]);return P=function(){return e},e}var $=Object(l.a)(P()),J=(t(45),t(46),t(47),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement($,null),a.a.createElement(H,null))}),W=t(12),A=t(33),D=t(32),K=t(8);t.d(n,"client",(function(){return L}));var L=new W.a({cache:new D.a,link:Object(A.a)({uri:"https://rickandmortyapi.com/graphql"})});c.a.render(a.a.createElement(K.a,{client:L},a.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.3c52bdc4.chunk.js.map