import{_ as u,g as c,h as l,i as m,o,c as s,a as i,F as d,j as v,k as p,v as k}from"./index-0e147bc9.js";import{D as f}from"./DummyStore-4d0c8b0d.js";const h={class:"BookView"},w={class:"BookView__grid"},B=["src"],g={__name:"BookView",setup(y){const e=c(),t=c([]),a=f;return l(()=>{const _=m();e.value=_.params.id,a.DummyStore.hasOwnProperty(e.value)&&(t.value=a.DummyStore[e.value])}),(_,V)=>(o(),s("div",h,[i("div",w,[(o(!0),s(d,null,v(t.value,(r,n)=>(o(),s("div",{key:n},[p(i("img",{src:`/src/assets/photos/${e.value}/${e.value}-${r}.jpg`,class:"BookView__grid__item"},null,8,B),[[k,r]])]))),128))])]))}},S=u(g,[["__scopeId","data-v-5a8ea55f"]]);export{S as default};
