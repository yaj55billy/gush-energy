import{_ as y}from"./PageKv.083512a7.js";import{g as v,h as m,i as k,j as w,u as x}from"./useAssetHandle.f772ea20.js";import{u as b}from"./useCase.83c617a9.js";import{M as a,D as P,N as s,a3 as n,a4 as l,u as o,A as t,O as _,a5 as c,B as d,C as r,a6 as S,a2 as B,E as C,z as N,a7 as A,a8 as E,a9 as V,aa as z,ab as D}from"./swiper-vue.6225d076.js";import"./entry.b2245170.js";import"./logo_active.2525daa6.js";const F={class:"page case"},T=["id"],j={class:"case__container"},M={class:"case__main"},O={class:"case__textarea"},H={class:"case__textarea__content"},K={class:"page__title"},L={class:"case__info"},$=s("img",{class:"case__info__icon",src:v},null,-1),q={class:"case__info__city"},G={class:"case__info__place"},J=s("span",{class:"case__info__line"},null,-1),Q={key:0,class:"case__info__capacity"},R={class:"case__details"},U={key:0,class:"case__details__lists"},W=s("div",{class:"case__details__pic"},[s("img",{src:m,alt:"power generation icon"})],-1),X={class:"case__details__content"},Y={key:1,class:"case__details__lists"},Z=s("div",{class:"case__details__pic"},[s("img",{src:k,alt:"carbon reduction icon"})],-1),I={class:"case__details__content"},ss={key:2,class:"case__details__lists"},es=s("div",{class:"case__details__pic"},[s("img",{src:w,alt:"planting amount icon"})],-1),ts={class:"case__details__content"},as={class:"case__pic"},us={__name:"case",setup(_s){const{useAsset:p}=x(),u=b(),h={modules:[E,V,z,D],slidesPerView:1,spaceBetween:16,loop:!0,pagination:{clickable:!0},autoplay:{delay:6e3,disableOnInteraction:!1},effect:"fade",fadeEffect:{crossFade:!0},allowTouchMove:!1};return(cs,os)=>{const f=y;return t(),a("div",F,[P(f,{title:"實績案例",text:"湧業為您提供專業的光電整合服務，伴您與綠能未來同行",picPath:"case_kv.jpg"}),s("div",null,[(t(!0),a(n,null,l(o(u).caseData,e=>(t(),a("section",{key:e.sectionId,id:e.sectionId,class:"case__section"},[s("div",j,[s("div",M,[s("div",O,[s("div",H,[s("h2",K,_(e.buildType?e.buildType:"屋頂平鋪、棚架型"),1),s("div",L,[$,s("span",q,_(e.city?e.city:"台灣"),1),s("span",G,_(e.place?e.place:"工廠"),1),J,e.capacity?(t(),a("span",Q,_(e.capacity),1)):c("",!0)]),s("ul",R,[e.content1?(t(),a("li",U,[W,s("p",X,_(e.content1),1)])):c("",!0),e.content2?(t(),a("li",Y,[Z,s("p",I,_(e.content2),1)])):c("",!0),e.content3?(t(),a("li",ss,[es,s("p",ts,_(e.content3),1)])):c("",!0)])])]),s("div",as,[e.caseImagePath.length!==0?(t(),d(o(A),C(N({key:0},h)),{default:r(()=>[(t(!0),a(n,null,l(e.caseImagePath,(i,g)=>(t(),d(o(S),{key:i+g},{default:r(()=>[s("div",{class:"case__pic__content",style:B({backgroundImage:`url(${o(p)(i)})`})},null,4)]),_:2},1024))),128))]),_:2},1040)):c("",!0)])])])],8,T))),128))])])}}};export{us as default};
