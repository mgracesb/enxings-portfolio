import{_ as l,g as n,h as m,i as d,o as s,c as t,a as p,F as g,j as v}from"./index-78824a85.js";import{D as k}from"./DummyStore-4d0c8b0d.js";const B={class:"BookView"},f={class:"BookView__grid"},h=["src"],w={__name:"BookView",setup(y){const o=n(),a=n([]),r=k;m(()=>{const e=d();o.value=e.params.id,r.DummyStore.hasOwnProperty(o.value)&&(a.value=r.DummyStore[o.value])});const c=(e,_)=>`/enxings-portfolio/photos/${e}/${e}-${_}.jpg`;return(e,_)=>(s(),t("div",B,[p("div",f,[(s(!0),t(g,null,v(a.value,(i,u)=>(s(),t("img",{key:u,src:c(o.value,i),class:"BookView__grid__item"},null,8,h))),128))])]))}},D=l(w,[["__scopeId","data-v-5d42b1a5"]]);export{D as default};
