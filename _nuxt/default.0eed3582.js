import{_ as p}from"./nuxt-link.2c9a3051.js";import{a as w,_ as g}from"./entry.23820d05.js";import{c as x,d as $,b as C,a as N,_ as L}from"./logo_active.79dea01a.js";import{a as h,w as y,Y as E,Z as H,A as d,M as m,N as _,D as t,C as s,_ as u,P as o,a1 as P,ae as V}from"./swiper-vue.6225d076.js";const Y={class:"header__content"},b=_("img",{class:"header__logo--origin",src:x,alt:"湧業能源"},null,-1),A=_("img",{class:"header__logo--active",src:$,alt:"湧業能源"},null,-1),B={class:"nav"},M=_("span",{class:"nav__toggle__line"},null,-1),R=_("span",{class:"nav__toggle__line"},null,-1),q=_("span",{class:"nav__toggle__line"},null,-1),S=[M,R,q],T={class:"nav__menu__list"},z={class:"nav__menu__item"},D={class:"nav__menu__item"},F={class:"nav__menu__item"},G={class:"nav__menu__item"},O={class:"nav__menu__item"},U={class:"nav__menu__item"},Z={__name:"Header",setup(i){const a=w(),e=h(!1),c=()=>{a.path==="/"?(e.value=!1,window.addEventListener("scroll",r,!0)):(e.value=!0,window.removeEventListener("scroll",r,!0))},r=()=>{window.scrollY>50?e.value=!0:e.value=!1},l=h(!1),f=()=>{l.value=!l.value};return y(()=>a.path,(v,k)=>{c()}),E(()=>{c()}),H(()=>{window.removeEventListener("scroll",r,!0)}),(v,k)=>{const n=p;return d(),m("header",{class:u(["header",{"scroll-active":e.value}])},[_("div",Y,[t(n,{to:"/",class:"header__logo"},{default:s(()=>[b,A]),_:1}),_("nav",B,[_("div",{class:u(["nav__toggle",{active:l.value}]),onClick:f},S,2),_("div",{class:u(["nav__menu",{active:l.value}]),onClick:f},[_("ul",T,[_("li",z,[t(n,{to:"/",class:"nav__menu__link"},{default:s(()=>[o("首頁")]),_:1})]),_("li",D,[t(n,{to:"/about",class:"nav__menu__link"},{default:s(()=>[o("關於湧業")]),_:1})]),_("li",F,[t(n,{to:"/service",class:"nav__menu__link"},{default:s(()=>[o("服務項目")]),_:1})]),_("li",G,[t(n,{to:"/case",class:"nav__menu__link"},{default:s(()=>[o("實績案例")]),_:1})]),_("li",O,[t(n,{to:"/contact",class:"nav__menu__link"},{default:s(()=>[o("聯絡我們")]),_:1})]),_("li",U,[t(n,{to:"/qa",class:"nav__menu__link"},{default:s(()=>[o("常見問題")]),_:1})])])],2)])])],2)}}},j=Z,I={},J={class:"footer"},K={class:"footer__container"},Q={class:"footer__main"},W={class:"footer__menu"},X=P('<ul class="footer__contact"><li class="footer__contact__item"><div class="footer__contact__icon"><img src="'+C+'"></div><p class="footer__contact__text">0952652942</p></li><li class="footer__contact__item"><div class="footer__contact__icon"><img src="'+N+'"></div><p class="footer__contact__text">kevin.yang@gush-energy.com</p></li><li class="footer__contact__item"><div class="footer__contact__icon"><img src="'+L+'"></div><p class="footer__contact__text">雲林縣斗六市文華街1-1號</p></li></ul>',1),__=_("p",{class:"footer__copyright"}," Copyright © Gush Energy Co. , Ltd. All Rights Reserved. ",-1);function t_(i,a){const e=p;return d(),m("footer",J,[_("div",K,[_("div",Q,[_("nav",W,[t(e,{to:"/",class:"footer__menu__link"},{default:s(()=>[o("首頁")]),_:1}),t(e,{to:"/about",class:"footer__menu__link"},{default:s(()=>[o("關於湧業")]),_:1}),t(e,{to:"/service",class:"footer__menu__link"},{default:s(()=>[o("服務項目")]),_:1}),t(e,{to:"/case",class:"footer__menu__link"},{default:s(()=>[o("實績案例")]),_:1}),t(e,{to:"/qa",class:"footer__menu__link"},{default:s(()=>[o("常見問題")]),_:1}),t(e,{to:"/contact",class:"footer__menu__link"},{default:s(()=>[o("聯絡我們")]),_:1})]),X]),__])])}const e_=g(I,[["render",t_]]),s_={};function o_(i,a){const e=j,c=e_;return d(),m("div",null,[t(e),V(i.$slots,"default"),t(c)])}const i_=g(s_,[["render",o_]]);export{i_ as default};