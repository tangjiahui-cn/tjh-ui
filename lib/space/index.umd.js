!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):(e="undefined"!=typeof globalThis?globalThis:e||self)["tjh-ui_umd_space"]=t(e.vue)}(this,(function(e){"use strict";const t={size:{type:Number,default:8},direction:{type:String,default:"row"}};var n=e.defineComponent({name:"TSpace",props:t,emits:[],setup(t,{slots:n}){const o=e.getCurrentInstance().proxy,i=e.ref([]);function u(e,n){const o=[];n.forEach((n=>{const i=function(e){const n=document.createElement("div");return n.appendChild(e),n.className="t-space-item","row"===t.direction?n.update=function(e){n.style.marginRight=`${e}px`}:"column"===t.direction&&(n.update=function(e){n.style.width="100%",n.style.marginBottom=`${e}px`}),n.update&&n.update(t.size),n}(n);o.push(i),e.appendChild(i)})),i.value=o}e.watch((()=>t.size),(()=>function(e=8){i.value.forEach((t=>{t.update&&t.update(e)}))}(t.size))),e.onMounted((()=>{let e=n.default().length,t=[];const i=o.$el,{children:c}=i;for(;e-- >0;){const e=c[0];e&&(t.push(e),i.removeChild(e))}u(i,t)}))}});const o={class:"t-space"};return n.render=function(t,n,i,u,c,s){return e.openBlock(),e.createElementBlock("div",o,[e.renderSlot(t.$slots,"default")])},n.__file="packages/space/space.vue",n.install=function(e){e.component(n.name,n)},n}));