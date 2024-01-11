import{_ as h,o as c,c as _,D as g,a as t,t as r,s as u,b as d,w as v,v as f,x as m,E as l,T as w,F as y,p as k,e as x,r as O}from"./entry.04ba322c.js";import{_ as I}from"./PageKv.08122c33.js";import"./useAssetHandle.43e32130.js";import"./logo_active.84db7035.js";const q=o=>(k("data-v-4772ef2d"),o=o(),x(),o),$=["onClick"],D={class:"accordion__header__text"},A=q(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",fill:"none"},[t("path",{d:"M22 12L15 19L8 12",stroke:"white","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),b=[A],B={class:"accordion__body"},C={key:0},E={key:1},H={__name:"AccordionItem",props:{accordionData:{type:Object},toggleItemHandle:{type:Function}},setup(o){const a=o,i=n=>{n.style.height=n.scrollHeight+"px"},s=n=>{n.style.height=""};return(n,M)=>(c(!0),_(y,null,g(a.accordionData,(e,p)=>(c(),_("section",{class:"accordion__item",key:e.title},[t("div",{class:"accordion__header",onClick:P=>a.toggleItemHandle(p)},[t("h5",D,r(e.title),1),t("span",{class:u(["accordion__header__arrow",{active:e.isOpen}])},b,2)],8,$),d(w,{name:"accordion-item",onEnter:i,onAfterEnter:s,onBeforeLeave:i,onAfterLeave:s},{default:v(()=>[f(t("div",B,[t("p",null,r(e.content),1),e.paragraph2?(c(),_("p",C,r(e.paragraph2),1)):l("",!0),e.paragraph3?(c(),_("p",E,r(e.paragraph3),1)):l("",!0)],512),[[m,e.isOpen]])]),_:2},1024)]))),128))}},L=h(H,[["__scopeId","data-v-4772ef2d"]]),S={class:"page qa"},T={class:"qa__container"},j={class:"qa__content"},F=t("div",{class:"qa__content__head"},[t("ul",{class:"qa__content__headlist"},[t("li",{class:"qa__content__headitem active"},"太陽能系統設置")])],-1),N={class:"qa__content__body"},V={class:"qa__content__bodysection"},z={class:"accordion"},R={__name:"qa",setup(o){const a=O([{title:"建置太陽能發電系統有什麼好處？",content:"設置太陽能發電系統具有多重好處，包括降低室內溫度、利用閒置空間獲取實質收入、減少碳足跡、提高企業形象等。",paragraph2:"躉售投資： 若與台電簽約20年，您將擁有持續穩定的年收益，通常可達8~12%的獲利，這是一個具有長期投資價值的選擇。",paragraph3:"自發自用： 太陽能系統提高了能源供應的可靠性，確保您在停電或緊急情況下仍能供應電力。同時，透過使用太陽能，您有助於減少碳排放，落實具體的減碳行動。",isOpen:!0},{title:"台灣地震、颱風多，建置太陽能系統真的安全嗎？",content:"我們在每個案場的設計階段都經過結構技師簽證、計算評估，以確認系統的結構和設備的安全性，這有助於保護系統不受損害，確保運行的安全性。",isOpen:!1},{title:"廢棄的太陽能板如何處理？",content:"太陽能板本身並不具有毒性，其原材料包括玻璃、矽砂、金屬及少量的塑膠，不會造成土地或水質汙染。我們將依循「廢棄物清理法」，根據合法流程進行廢太陽能板回收清除處理，確保符合環保標準。",isOpen:!1},{title:"太陽能系統的發電效率是否會隨時間而下降？",content:"是的，但根據目前太陽能板的製造技術來看，即便太陽能板使用了20年，在正常維運管理下，其發電效率還是能維持在80%以上。",isOpen:!1},{title:"太陽能系統的建置需要多長時間？",content:"建置時間會因案場規模而異，大案場通常需要數個月完成，而小案場可能僅需數周。我們將根據具體項目的需求提供預估的建置時間。",isOpen:!1},{title:"是否提供太陽能系統的保固？",content:"大多數太陽能發電模組產品的保固是20年以上，而直流轉交流的變流器產品保固期則為5年左右。",isOpen:!1},{title:"太陽能發電系統如何有助於減少碳足跡？",content:"太陽能發電系統於使用時完全無汙染、無噪音，對生態環境的影響極小。雖然太陽能板在製造過程中，會產生工業廢水及廢氣，若工廠依法做好污染防治，就可將對環境的影響降到最低。並且，相較於傳統的燃煤火力發電，太陽能發電可減少90%以上的空氣汙染及碳排。",isOpen:!1}]),i=s=>{a.value[s].isOpen=!a.value[s].isOpen};return(s,n)=>(c(),_("div",S,[d(I,{title:"常見問題",text:"還有更多問題嗎？可以看看我們的Q&A問答集",picPath:"qa_kv.jpg"}),t("div",T,[t("div",j,[F,t("div",N,[t("section",V,[t("div",z,[d(L,{accordionData:a.value,toggleItemHandle:i},null,8,["accordionData"])])])])])])]))}};export{R as default};
