import{_ as u}from"./PageKv.8cc36e44.js";import{r as p,c as f,b as v,a as t,B as b,v as a,C as c,o as h}from"./entry.b9109cd3.js";import"./useAssetHandle.316c969a.js";import"./logo_active.3f4311a6.js";const C={class:"page contact"},M={class:"contact__container"},N=["onSubmit"],E={class:"contact__form__content"},D={class:"contact__form__col"},U={class:"form__item"},x=t("label",{for:"contactName",class:"form__label"},"姓名",-1),y={class:"form__item"},A=t("label",{for:"contactMobile",class:"form__label"},"聯繫電話",-1),$={class:"form__item"},g=t("label",{for:"contactEmail",class:"form__label"},"電子信箱",-1),V={class:"contact__form__col"},k={class:"form__item"},w=t("label",{for:"contactContent",class:"form__label"},"內容",-1),I=t("div",{class:"form__btn"},[t("button",{type:"submit",class:"btn formbtn"},"深入了解")],-1),P={__name:"contact",setup(B){const o=p({contactName:"",contactMobile:"",contactEmail:"",contactContent:""}),i=()=>{const s="姓名: "+encodeURIComponent(o.value.contactName),e="聯繫電話: "+encodeURIComponent(o.value.contactMobile),l="電子信箱: "+encodeURIComponent(o.value.contactEmail),n=encodeURIComponent(o.value.contactContent),_=`您好：%0D%0A${n}%0D%0A%0D%0A`,m=`以下是我的聯繫資訊：%0D%0A${s}%0D%0A${e}%0D%0A${l}`,r="kevin.yang@gush-energy.com",d=`mailto:${r}?subject=聯繫表單提交&body=${_}%0D%0A${m}`;window.location.href=d};return(s,e)=>{const l=u;return h(),f("div",C,[v(l,{title:"聯絡我們",text:"若你對我們有何想法或建議，歡迎連寫下方資訊供我們聯繫您",picPath:"contact_kv.jpg"}),t("div",M,[t("form",{onSubmit:b(i,["prevent"]),class:"contact__form"},[t("div",E,[t("div",D,[t("div",U,[x,a(t("input",{type:"text",id:"contactName",name:"contactName",class:"form__control",placeholder:"請輸入姓名","onUpdate:modelValue":e[0]||(e[0]=n=>o.value.contactName=n),required:""},null,512),[[c,o.value.contactName]])]),t("div",y,[A,a(t("input",{type:"tel",id:"contactMobile",name:"contactMobile",class:"form__control",placeholder:"請輸入聯繫電話","onUpdate:modelValue":e[1]||(e[1]=n=>o.value.contactMobile=n)},null,512),[[c,o.value.contactMobile]])]),t("div",$,[g,a(t("input",{type:"email",id:"contactEmail",name:"contactEmail",class:"form__control",placeholder:"請輸入電子信箱","onUpdate:modelValue":e[2]||(e[2]=n=>o.value.contactEmail=n),required:""},null,512),[[c,o.value.contactEmail]])])]),t("div",V,[t("div",k,[w,a(t("textarea",{cols:"30",rows:"12",name:"contactContent",id:"contactContent",class:"form__control",placeholder:"請在此輸入內容","onUpdate:modelValue":e[3]||(e[3]=n=>o.value.contactContent=n)},null,512),[[c,o.value.contactContent]])])])]),I],40,N)])])}}};export{P as default};
