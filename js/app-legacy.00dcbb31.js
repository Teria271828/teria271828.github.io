(function(){"use strict";var n={3258:function(n,t,e){e(6992),e(8674),e(9601),e(7727);var r=e(8935),o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("homePage"),e("particles-bg",{attrs:{type:"cobweb",bg:!0}})],1)},i=[],u=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("transition-group",{attrs:{name:"title"}},n._l(n.originText,(function(t,r){return e("span",{directives:[{name:"show",rawName:"v-show",value:r<n.shown,expression:"index < shown"}],key:"idx-"+r,on:{click:n.typing}},[n._v(n._s(t))])})),0)],1)},c=[],a={name:"homePage",data:function(){return{originText:["I","t","'","s"," ","T","e","r","i","a"],shown:0}},mounted:function(){this.typing()},methods:{typing:function(){var n=this;this.shown=0;for(var t=0;t<=this.originText.length;t++)setTimeout((function(){n.shown++}),400*t)}}},f=a,s=e(1001),l=(0,s.Z)(f,u,c,!1,null,"6dc31462",null),p=l.exports,h={name:"App",components:{homePage:p}},v=h,d=(0,s.Z)(v,o,i,!1,null,null,null),g=d.exports,m=e(4404);r.Z.config.productionTip=!1,r.Z.use(m.Z),new r.Z({render:function(n){return n(g)}}).$mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return n[r].call(i.exports,i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,i){if(!r){var u=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var c=!0,a=0;a<r.length;a++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[a])}))?r.splice(a--,1):(c=!1,i<u&&(u=i));if(c){n.splice(s--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,u=r[0],c=r[1],a=r[2],f=0;if(u.some((function(t){return 0!==n[t]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(a)var s=a(e)}for(t&&t(r);f<u.length;f++)i=u[f],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(s)},r=self["webpackChunkhomepage"]=self["webpackChunkhomepage"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(3258)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.00dcbb31.js.map