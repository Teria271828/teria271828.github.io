(function(){"use strict";var n={5399:function(n,t,e){var r=e(8935),o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("homePage"),e("particles-bg",{attrs:{type:"cobweb",bg:!0}})],1)},i=[],u=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("transition-group",{staticClass:"container",attrs:{name:"title"}},n._l(n.originText,(function(t,r){return e("div",{directives:[{name:"show",rawName:"v-show",value:r<n.shown,expression:"index < shown"}],key:"idx-"+r,staticClass:"letters",on:{click:n.typing}},[n._v(n._s(t))])})),0)],1)},a=[],s={name:"homePage",data(){return{originText:["I","t","'","s"," ","T","e","r","i","a"],shown:0}},mounted(){this.typing()},methods:{typing(){this.shown=0;for(let n=0;n<=this.originText.length;n++)setTimeout((()=>{this.shown++}),400*n)}}},c=s,f=e(1001),l=(0,f.Z)(c,u,a,!1,null,"3b08370a",null),p=l.exports,h={name:"App",components:{homePage:p}},v=h,d=(0,f.Z)(v,o,i,!1,null,null,null),g=d.exports,m=e(3498);r.Z.config.productionTip=!1,r.Z.use(m.Z),new r.Z({render:n=>n(g)}).$mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return n[r].call(i.exports,i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,i){if(!r){var u=1/0;for(f=0;f<n.length;f++){r=n[f][0],o=n[f][1],i=n[f][2];for(var a=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[s])}))?r.splice(s--,1):(a=!1,i<u&&(u=i));if(a){n.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],s=r[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(s)var f=s(e)}for(t&&t(r);c<u.length;c++)i=u[c],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(f)},r=self["webpackChunkhomepage"]=self["webpackChunkhomepage"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(5399)}));r=e.O(r)})();
//# sourceMappingURL=app.0b3c13e9.js.map