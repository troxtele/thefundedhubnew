import{r as a,j as e,a as oe}from"./react-eaab5ef2.js";import{c as le}from"./react-dom-d3eb90c1.js";import{L as c,B as de}from"./react-router-dom-085c26a6.js";import{R as X}from"./react-ga-ba683049.js";import{a as R}from"./axios-21b846bc.js";import{S as ce,N as he,a as ue}from"./swiper-fe0503f0.js";import{R as pe,F as me}from"./react-icons-6256392a.js";import{b as j,a as fe,d as ge,e as ye,f as g}from"./react-router-9803986a.js";import{P as K}from"./prop-types-67b1fb73.js";import{c as ve,T as xe,S as be,P as we}from"./@mui-d808bd18.js";import{R as je}from"./react-loader-spinner-2be84f58.js";import"./hoist-non-react-statics-95ec5a95.js";import"./scheduler-765c72db.js";import"./@remix-run-d753ad9e.js";import"./ssr-window-c9202916.js";import"./react-is-e5978b8b.js";import"./@babel-5d790daf.js";import"./clsx-1229b3e0.js";import"./@emotion-8b66b15f.js";import"./stylis-79144faa.js";import"./react-transition-group-0db4bb7d.js";import"./styled-components-edc81f87.js";import"./styled-tools-bf41095e.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();const M="/assets/logo-f6759efc.webp",Z="/assets/arrow-cfc95aca.svg",w="/assets/circle-56f758db.webp",F="/assets/half-circle-d6403a1d.webp",V="/assets/meta-trader-5-ec51858e.webp";function ke({data:t,fls:i}){const[r,o]=a.useState(0),[s,l]=a.useState(i),d=a.useRef(null),{name:h,phase1:p,phase2:f,funded:u,para:N}=t;return a.useEffect(()=>{o(d.current.clientHeight)},[s]),e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:()=>l(!s),className:"grid py-3 px-4 border-primary/10 text-center relative z-40 cursor-pointer hover:bg-dark/20",children:e.jsxs("div",{className:"item grid grid-cols-10 gap-6",children:[e.jsxs("span",{className:"col-span-4 text-start flex items-center gap-2",children:[e.jsx("div",{className:"arrow",children:e.jsx("img",{className:`w-4 opacity-70 transition-all duration-300 ${s?"0":"-rotate-90"}`,src:Z,alt:""})}),e.jsx("div",{dangerouslySetInnerHTML:{__html:h}})]}),e.jsx("span",{className:"col-span-2 flex justify-center ",children:e.jsx("div",{className:"wrap relative",children:p})}),e.jsx("span",{className:"col-span-2 flex justify-center",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:f})}),e.jsx("span",{className:"col-span-2 flex justify-center",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:u})})]})}),e.jsx("div",{style:{maxHeight:s?r+"px":"0"},className:"faq-content transition-all duration-300 overflow-hidden ",children:e.jsx("div",{ref:d,className:"wrapper",children:e.jsx("div",{className:"text-[0.9rem] xs:text-base px-4 pb-5 pt-4 bg-primary/[4%]",children:e.jsx("div",{className:"faq-collaps !font-light",dangerouslySetInnerHTML:{__html:N}})})})})]})}function Ne(){const[t,i]=a.useState(!1),[r,o]=a.useState(),[s,l]=a.useState(""),[d,h]=a.useState(""),[p,f]=a.useState(""),[u,N]=a.useState(!0),[k,S]=a.useState(!0),[y,A]=a.useState(!1);a.useEffect(()=>{/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(r)&&r!==""?S(!0):y&&S(!1)},[r,u]);const[T,I]=a.useState("100000"),[C,W]=a.useState("0"),[E,z]=a.useState("3"),[m,rt]=a.useState("5"),[q,st]=a.useState("10"),[L,nt]=a.useState("8"),[P,te]=a.useState(0),[B,U]=a.useState("meta-5"),$="https://api.thefundedhub.com";a.useEffect(()=>{const n=`${$}/v1/website/prices?startingCapital=${T}&phase1MaximumTradingDays=${C}&phase1MinimumTradingDays=${E}&phase1ProfitTargetPercentage=${L}&phase1MaximumDailyLossPercentage=${m}&phase1MaximumTotalLossPercentage=${q}`;R.get(n).then(b=>{te(b.data.data.totalPrice)}).catch(b=>{console.error("There was an error!",b)})},[T,m,q,L,E,C]);const ae=()=>{R.post(`${$}/v1/website/purchases`,{voucherCode:p,email:r,firstName:s,lastName:d,paymentProvider:"STRIPE",platform:"MT5",startingCapital:T,phase1MaximumTradingDays:C,phase1MinimumTradingDays:E,phase1ProfitTargetPercentage:L,phase1MaximumDailyLossPercentage:m,phase1MaximumTotalLossPercentage:q}).then(n=>{const b=n.data.data;localStorage.setItem("purchaseUuid",b.uuid),window.location.replace(n.data.data.paymentUrl)})};a.useEffect(()=>{/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(r)&&r!==""?S(!0):y&&S(!1)},[r,u]);const ie=n=>{n.preventDefault(),N(!1),s&&d&&k?ae():A(!0)},re="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus quos aliquam laboriosam iste architecto corporis quidem fuga modi illo obcaecati quasi labore provident, optio soluta repudiandae? Similique, eum facilis!",H=[{name:"Trading <b>Period</b>",phase1:"Unlimited",phase2:"Unlimited",funded:"Unlimited"},{name:"<b>Min</b> Trading Days ",phase1:"3 Days",phase2:"3 Days",funded:"0 Days"},{name:" Max <b>Daily</b> Loss",phase1:"5%",phase2:"5%",funded:"5%"},{name:" Max <b>Overall</b> Loss",phase1:"10%",phase2:"10%",funded:"10%"},{name:"Profit <b>Target</b>",phase1:"5%",phase2:"5%",funded:"-"},{name:"Leverage",phase1:"1:100",phase2:"1:100",funded:"1:50"},{name:" Weekend Holding",phase1:"Yes",phase2:"Yes",funded:"Yes"},{name:"News Trading",phase1:"Yes",phase2:"Yes",funded:"Yes"},{name:"EA Trading",phase1:"Allowed",phase2:"Allowed",funded:"Allowed"},{name:"Profit Split",phase1:"-",phase2:"-",funded:"From 80/20% to 90/10%"}],se=["phase1","phase2","funded"],Y=[{value:"5k",price:"5000"},{value:"10k",price:"10000"},{value:"25k",price:"25000"},{value:"50k",price:"50000"},{value:"100k",price:"100000"}];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"price-table relative z-50 before:absolute before:h-36 before:w-full before:z-10",children:[e.jsxs("div",{className:"desktop-content relative z-[999] hidden lg:grid gap-10 w-full rounded-2xl font-Montserrat",children:[e.jsxs("div",{className:"left flex items-center justify-center gap-6  font-medium relative ",children:[e.jsx("div",{className:"price-table-border relative grid col-span-3 gap-5 h-full rounded-3xl price-table-shadow ",children:e.jsx("div",{className:"heading py-4 px-5 h-full grid gap-3 rounded-3xl price-table-bg relative",children:e.jsx("div",{className:"prices flex items-center flex-wrap lg:flex-nowrap gap-4 font-medium text-lg xl:text-xl",children:Y.map((n,b)=>e.jsx("div",{className:"price",children:e.jsx("button",{className:`py-2.5 px-2 leading-[0.7] w-[3.5rem] ${T===n.price?"text-white font-bold":"text-wht/70 font-light"}`,onClick:()=>I(n.price),children:n.value})},b))})})}),e.jsx("div",{className:"price-table-border col-span-2 relative h-full max-w-[12rem] ",children:e.jsx("div",{className:"right-inside rounded-3xl h-full price-table-bg price-table-shadow",children:e.jsx("div",{className:"tranders h-full flex gap-3 items-center w-full relative z-30",children:e.jsx("div",{className:`img transition-all duration-200 py-2 px-6 rounded-3xl  ${B==="meta-5"?"text-white":"border-transparent "}`,onClick:()=>U("meta-5"),children:e.jsx("img",{className:"max-w-[8rem] w-full opacity-[0.87]",src:V,alt:"meta-trader-5"})})})})})]}),e.jsx("div",{className:"relative mt-7 text-base",children:e.jsx("div",{className:"wrap grid",children:e.jsxs("div",{className:"left price-table-border grid rounded-3xl w-full p-5 price-table-bg price-table-shadow relative",children:[e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 border-primary/10 text-center relative z-[50]",children:[e.jsx("div",{className:"col-span-4"}),["Phase_1","Phase_2","Funded"].map(n=>e.jsx("div",{className:`col-span-2 relative before:absolute before:font-bold before:content-['${n}'] flex justify-center before:-top-16 whitespace-nowrap !font-normal`},n))]}),H.map((n,b)=>e.jsx(ke,{data:{...n,para:re}},b))]})})}),e.jsx("div",{className:"price-table-border relative max-w-[40rem] w-full mx-auto",children:e.jsxs("div",{className:"bottom relative flex justify-between items-center gap-5 py-5 px-7 rounded-3xl price-table-bg",children:[e.jsx("div",{className:"refund flex items-center",children:e.jsxs("h4",{className:"text-[2.25rem] font-extrabold w-[7rem]",children:["$ ",P]})}),e.jsxs("div",{className:" font-Montserrat text-sm",children:["Or pay in 4 installments ",e.jsx("br",{})," from"," ",e.jsxs("span",{className:"font-bold",children:["$",P/4]})," / Month"]}),e.jsx("div",{className:"btn flex justify-start items-center",children:e.jsx("div",{onClick:()=>i(!0),className:"price-table-btn cursor-pointer py-3 px-8 rounded-3xl uppercase font-bold",children:"Get Funded Now"})})]})})]}),e.jsxs("div",{className:"mobile-content relative z-20 lg:hidden flex flex-wrap justify-start items-center mt-2 ",children:[e.jsx("div",{className:"top font-medium w-full",children:e.jsx("div",{className:"heading flex justify-center",children:e.jsx("div",{className:"prices grid grid-cols-3 gap-2",children:Y.map(n=>e.jsx("div",{className:"price",children:e.jsx("button",{className:`p-3 xs:px-5 rounded-mdg text-[0.95] ex: transition-all duration-300 leading-[0.7] whitespace-nowrap border rounded-full bg-light/40 relative before:absolute before:w-full before:h-full before:inset-0 before:rounded-full font-Montserrat price-btn-shadow w-[5.5rem] ${T===(n==null?void 0:n.price)?"text-white font-bold opacity-100":"text-wht/70 opacity-60"}`,onClick:()=>I(n==null?void 0:n.price),children:n==null?void 0:n.value})},n.value))})})}),e.jsxs("div",{className:"tranders grid items-center w-full relative z-30",children:[e.jsxs("p",{className:"mt-7 ml-5 relative before:absolute before:w-2 before:h-2 before:bg-white before:left-[-1rem] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2",children:[" ",e.jsx("b",{className:"font-bold",children:"Step 2:"})," ","  ","Customize your Platform:"]}),e.jsx("div",{className:"wrap flex justify-center gap-3 mt-4",children:e.jsx("div",{className:`img transition-all duration-200 py-2 px-6 rounded-3xl bg-light/60 border hover:border-primary price-btn-shadow ${B==="meta-5"?"text-white":"border-transparent"}`,onClick:()=>U("meta-5"),children:e.jsx("img",{className:"max-w-[7rem] w-full opacity-[0.87]",src:V,alt:"meta-trader-5"})})})]}),e.jsx("div",{className:"flex flex-wrap gap-8 md:gap-12 justify-center items-center -mx-[1.5rem] px-[1.5rem] w-screen sm:w-[70vw] sm:m-auto relative z-20",children:e.jsx(ce,{navigation:!0,grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",modules:[he],spaceBetween:30,className:"flex flex-wrap gap-8 md:gap-10 justify-center items-center w-full px-3 xs:px-6 mt-4 text-white font-Montserrat",children:["Phase 1","Phase 2","Funded"].map((n,b)=>e.jsx(ue,{children:e.jsxs("div",{className:"pt-2 pb-6 item grid gap-3 border border-primary/20 rounded-3xl uni-bg-gradient h-full card-shadow",children:[e.jsx("div",{className:"heading pb-3 mt-2 ",children:e.jsx("h3",{className:"px-5 text-center m-auto max-w-[10rem]-2 border-primary/30 pb-3 font-codeProBold font-extrabold",children:n})}),e.jsx("div",{className:"items grid gap-4 px-4",children:H.map((ne,G)=>e.jsxs("div",{className:"item grid grid-cols-5 gap-6 items-center",children:[e.jsx("div",{className:"price-collaps col-span-3 flex gap-1.5 !font-light whitespace-nowrap",dangerouslySetInnerHTML:{__html:H[G].name}}),e.jsx("div",{className:"wrap flex gap-2 justify-center items-center relative z-[10] col-span-2 text-center",children:H[G][se[b]]})]},ne.name))})]})},n))})}),e.jsxs("div",{className:"wrap mt-6 grid sm:grid-cols-2 justify-center items-center gap-4 w-full",children:[e.jsxs("div",{className:"grid justify-center",children:[e.jsxs("div",{className:"refund flex items-center justify-center",children:[e.jsx("span",{className:"!text-lg",children:"Refundable fee: "}),e.jsxs("h4",{className:"text-[1.5rem] font-Montserrat font-extrabold ml-4",children:["$ ",P]})]}),e.jsxs("div",{className:" font-Montserrat text-sm",children:["Or pay in 4 installments from"," ",e.jsxs("span",{className:"font-bold",children:["$",P/4]})," / Month"]})]}),e.jsx("div",{className:"btn flex w-full justify-center",children:e.jsx("div",{onClick:()=>i(!0),className:"font-Montserrat text-xs font-bold py-4 px-12  rounded-3xl home-glowing-btn uppercase",children:"Get Funded Now"})})]})]})]}),e.jsxs("div",{className:`modal fixed inset-0 z-[99999] transition-all duration-100 flex justify-center items-center overflow-hidden ${t?"visible opacity-100":"invisible opacity-0"}`,children:[e.jsx("div",{className:`bg absolute inset-0 w-full h-full transition-all duration-200 backdrop-blur-xl ${t?"opacity-100 ":"opacity-0"}`,onClick:()=>i(!1)}),e.jsxs("div",{className:`box relative m-6 max-w-[600px] w-full text-main text-wht bg-light-gray uni-bg-gradient transition-all duration-300 rounded-3xl z-[999] py-10 px-6 font-Montserrat ${t?"visible opacity-100":"invisible opacity-0"}`,children:[e.jsxs("form",{className:"content grid w-full text-center gap-4 font-semibold",children:[e.jsx("div",{className:"heading text-xl mt-6 font-Montserrat",children:e.jsx("h3",{children:"To proceed with your purchase, kindly fill out the form below"})}),e.jsxs("div",{className:"wrap grid sm:grid-cols-2 gap-7 mt-4",children:[e.jsxs("div",{className:"name relative",children:[e.jsx("input",{name:"name",onChange:n=>l(n.target.value),required:!0,className:`name w-full  bg-transparent backdrop-blur-3xl border-none outline outline-2  py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 ${u||s!==""?"outline-primary/30 focus:outline-primary/70 focus:ring-4 focus:ring-primary/30":"outline-red-700 focus:ring-4 focus:ring-red-600/40"}`,type:"text",value:s,placeholder:"Name"}),e.jsx("div",{className:`required absolute left-[0.5rem] -bottom-[1.25rem] text-red-600 text-[0.66rem] ${u||s!==""?"invisible opacity-0":"visible opacity-100"}`,children:"This field is required"})]}),e.jsxs("div",{className:"surname relative",children:[e.jsx("input",{name:"surname",required:!0,onChange:n=>h(n.target.value),value:d,className:`lastName w-full  bg-transparent backdrop-blur-3xl border-none outline outline-2  py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 ${u||s!==""?"outline-primary/30 focus:outline-primary/70 focus:ring-4 focus:ring-primary/30":"outline-red-700 focus:ring-4 focus:ring-red-600/40"}`,placeholder:"Surname"}),e.jsx("div",{className:`required absolute left-[0.5rem] -bottom-[1.25rem] text-red-600 text-[0.66rem] ${u||d!==""?"invisible opacity-0":"visible opacity-100"}`,children:"This field is required"})]}),e.jsxs("div",{className:"email relative col-span-full",children:[e.jsx("input",{name:"email",required:!0,onChange:n=>o(n.target.value),value:r,className:`email w-full  bg-transparent backdrop-blur-3xl border-none outline outline-2  py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 ${k?"outline-primary/30 focus:outline-primary/70 focus:ring-4 focus:ring-primary/30":"outline-red-700 focus:ring-4 focus:ring-red-600/40"}`,type:"email",placeholder:"Email"}),e.jsx("div",{className:`required absolute left-[0.5rem] -bottom-[1.25rem] text-red-600 text-[0.66rem] ${k?"invisible opacity-0":"visible opacity-100"}`,children:"Please enter a valid email address"})]}),e.jsx("div",{className:"voucher relative col-span-full",children:e.jsx("input",{name:"voucher",onChange:n=>f(n.target.value),value:p,className:"voucher w-full  bg-transparent backdrop-blur-3xl border-none outline outline-2  py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 outline-primary/30 focus:outline-primary/70 focus:ring-4 focus:ring-primary/30",type:"voucher",placeholder:"Vourcher Code"})})]}),e.jsx("div",{className:"proceed flex justify-center items-center mt-5",children:e.jsx("button",{onClick:n=>ie(n),className:"py-2.5 px-16 transition-all duration-300 rounded-3xl font-Montserrat font-semibold glowing-btn max-w-[12rem] cursor-pointer",children:"Proceed payment"})})]}),e.jsx("div",{className:"cross",onClick:()=>i(!1),children:e.jsx(pe,{className:"absolute cursor-pointer text-xl sm:text-2xl text-dim-gray right-4 md:right-6 top-4 md:top-6"})})]})]})]})}function Te(){return e.jsxs("section",{id:"price-table",className:"prices relative pt-20 sm:pt-32",children:[e.jsx("div",{className:"border-b border-slate-400/10 left-1/2 transform -translate-x-1/2 absolute w-[80vw] m-auto -mt-10 sm:-mt-16"}),e.jsx("div",{className:"container relative z-10",children:e.jsx("div",{className:"wrapper relative z-20 grid 2xl:px-36",children:e.jsxs("div",{className:"heading flex flex-col sm:text-center",children:[e.jsx("h2",{className:"text-2xl xs:text-[1.7rem] text-wht-gradient",children:"Get Funded Now"}),e.jsx("p",{className:"mt-2 hidden sm:block",children:"Choose your favorite account size, start trading, earn profit-splits and scale."}),e.jsxs("p",{className:"sm:hidden mt-2 ml-5 relative before:absolute before:w-2 before:h-2 before:bg-white before:left-[-1rem] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2",children:[" ",e.jsx("b",{className:"font-bold",children:"Step 1:"})," Choose your balance:"]})]})})}),e.jsx("div",{className:"wrap sm:max-w-[65rem] px-[1.5rem] sm:w-full sm:m-auto sm:pt-4 overflow-hidden",children:e.jsx(Ne,{})}),e.jsx("div",{className:"circle-shadow hidden sm:grid justify-end absolute opacity-[33%] -top-[50%] -right-0 w-full h-full max-w-[50rem]",children:e.jsx("img",{className:"w-full",src:F,alt:"circle-shadow"})}),e.jsx("div",{className:"circle-shadow sm:hidden absolute grid justify-end items-end opacity-[33%] bottom-0 -top-[40%] rotate-180 left-0 w-full h-full max-w-[40rem]",children:e.jsx("img",{src:F,alt:"circle-shadow"})})]})}function v(){const[t,i]=a.useState(!1);a.useState(window.pageYOffset),a.useState(!0);const{pathname:r}=j();a.useEffect(()=>{window.scrollTo(0,0)},[r]);const o=()=>{navigator.clipboard.writeText("LAUNCH20")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"uni-bg-gradient fixed left-0 right-0 z-[9999] ",children:e.jsxs("div",{onClick:o,className:"container text-[0.8rem] sm:text-base md:text-lg !py-4 px-3 text-center text-white flex justify-center font-Montserrat sm:cursor-pointer",children:[e.jsxs("span",{className:"font-bold px-1.5 font-Montserrat text-[0.8rem] sm:text-base md:text-lg",children:[" ","20% OFF"," "]}),"LAUNCH PROMO -",e.jsx("span",{className:"font-bold px-1.5 font-Montserrat text-[0.8rem] sm:text-base md:text-lg",children:'"LAUNCH20"'})]})}),e.jsx("div",{className:"wrap pt-[50px] md:pt-[60px] ",children:e.jsx("header",{className:"uppercase transition-all duration-300 border-b border-transparent fpy-3 pb-3 fixedf z-[999]f left-0 right-0 ftop-0 top-[3.2rem] pt-2 shadow-2xlf transform",children:e.jsx("div",{className:"container pt-3",children:e.jsxs("div",{className:"wrapper flex justify-between z-[999]",children:[e.jsx(c,{to:"/",className:"main-logo",children:e.jsx("img",{className:"max-w-[8rem] sm:max-w-[10rem]",src:M,alt:"TheFundedHub"})}),e.jsxs("nav",{className:"nav-links text-wht font-light flex justify-center items-center",children:[e.jsxs("ul",{className:"hidden md:flex gap-6 justify-center items-center text-sm",children:[e.jsx("li",{children:e.jsx(c,{to:"/blog",className:`flex font-Montserrat font-semibold border-b border-transparent hover:text-white transition-all duration-300 ${r==="/blog"?"text-white":"text-white/40"}`,children:"BLOG"})}),e.jsx("li",{children:e.jsx(c,{to:"/faq",className:`flex font-Montserrat font-semibold border-b border-transparent hover:text-white transition-all duration-300 ${r==="/faq"?"text-white":"text-white/40"}`,children:"FAQ"})}),e.jsx("li",{children:e.jsx(c,{to:"/contact-us",className:`flex relative group font-Montserrat font-semibold border-b border-transparent fhover:text-white transition-all duration-300 ${r==="/contact-us"?"text-white":"text-white/40"}`,children:"CONTACT US"})}),e.jsx("li",{className:"relative",children:e.jsx("a",{href:"https://dashboard.thefundedhub.com/",className:"bg-primary/20 md:bg-transparent flex justify-center items-center py-2.5 px-7 sm:px-12 hover:text-white/70 text-white transition-all duration-200 rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.9rem] w-full glowing-btn uppercase pb-[0.725rem]",children:"Personal Hub Login"})})]}),e.jsx("div",{className:"menu-bar md:hidden",children:e.jsx("svg",{onClick:()=>i(!t),stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"1.8em",width:"1.8em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"})})})]})]})})})}),e.jsxs("div",{className:"mobile-nav z-[9999] relative uppercase",children:[e.jsx("svg",{onClick:()=>i(!1),className:`text-wht fixed right-[5%] top-8 z-[88] transition-all duration-500 ${t?"opacity-100 rotate-180 visible":"opacity-0 invisible"}`,stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 15 15",height:"2.2em",width:"2.2em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"})}),e.jsx("div",{onClick:()=>i(!1),className:`darkbg fixed inset-0 bg-main-bg/20 bottom-0  backdrop-blur-xl z-[77] transition-all duration-500 ${t?"opacity-100 visible":"opacity-0 invisible"}`}),e.jsx("nav",{className:`mobile-nav md:hidden fixed top-0 bottom-0 w-[80%] xs:w-[70%] sm:w-[60%] bg-main-bg/30 z-[99] transition-all duration-500 ${t?"left-0 opacity-100":"-left-full opacity-0"}`,children:e.jsxs("div",{className:"wrapper",children:[e.jsx(c,{to:"/",className:"logo block pt-6 px-6",children:e.jsx("img",{className:"max-w-[10rem] w-full md:hidden",src:M,alt:"TheFundedHub"})}),e.jsxs("ul",{className:"flex flex-col justify-start text-sm mt-6",children:[e.jsx("li",{children:e.jsx(c,{to:"/blog",className:"flex font-Montserrat py-3 pl-6 w-full font-semibold border-y border-light/30 transition-all duration-300",children:"Blog"})}),e.jsx("li",{children:e.jsx(c,{to:"/faq",className:"flex font-Montserrat py-3 pl-6 w-full font-semibold border-b border-light/30 transition-all duration-300",children:"FAQ"})}),e.jsx("li",{children:e.jsx(c,{to:"/contact-us",className:"flex font-Montserrat py-3 pl-6 w-full font-semibold border-b border-light/30 transition-all duration-300",children:"Contact Us"})}),e.jsx("li",{className:"flex mt-4 pl-6",children:e.jsx("a",{href:"https://dashboard.thefundedhub.com/",className:"flex justify-center items-center font-Montserrat font-semibold rounded-3xl w-56 h-10 glowing-btn uppercase text-sm",children:"Personal Hub Login"})})]})]})})]})]})}const Se=[{name:"PHASE 1",content:`<p>
        The proving ground where you demonstrate your
        trading skills through our challenge, laying the foundation for your
        journey.
      </p>`},{name:"PHASE 2",content:`<p>
        Advance confidently, showcasing your consistency
        and expertise, and solidify your path to trading success.
      </p>`},{name:"FUNDED",content:`<p>
        Access trading opportunities without risking your
        own capital, allowing you to grow your trading career with real
        potential rewards.
      </p>`}];function Fe(){return e.jsxs("section",{className:"evaluation relative pt-6",children:[e.jsx("div",{className:"border-b border-slate-400/10 left-1/2 transform -translate-x-1/2 absolute w-[80vw] m-auto  -mt-[4.5rem]"}),e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper relative z-40",children:[e.jsxs("div",{className:"heading flex flex-col justify-center sm:items-center sm:text-center",children:[e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"Evaluation Program"}),e.jsx("div",{className:"paras mt-2",children:e.jsxs("p",{children:["Prove your trading skills by passing our two phases Evaluation Program. ",e.jsx("br",{})," Configure your own target profits and drawdown limits, follow simple rules and start trading with our capital."," ",e.jsx("br",{})," You earn up to 90% of the profits."]})})]}),e.jsx("div",{className:"wrapper max-w-[25rem] sm:max-w-[45rem] lg:max-w-[70rem] m-auto grid gap-12 mt-6",children:e.jsx("div",{className:"cards grid auto-rows-fr sm:grid-cols-2 lg:grid-cols-3 gap-6 font-normal",children:Se.map((t,i)=>e.jsx("div",{className:"card h-full sm:relative sticky top-20 sm:top-0 p-[0.15rem] rounded-3xl social-shadow",children:e.jsxs("div",{className:"eval-card-bg relative p-3 rounded-3xl h-full flex flex-col gap-5",children:[e.jsx("div",{className:"header eval-card-header-border rounded-2xl p-[0.15] card-header-shadow",children:e.jsx("h4",{className:"bg-black eval-card-header font-extrabold font-Montserrat py-3 px-4 rounded-2xl",dangerouslySetInnerHTML:{__html:t.name}})}),e.jsxs("div",{className:"evaluation-content flex flex-col justify-between h-full font-light",children:[e.jsx("div",{className:"px-4",dangerouslySetInnerHTML:{__html:t.content}}),e.jsx("div",{className:"btn flex justify-start py-4 px-4",children:e.jsx("a",{href:"#price-table",className:"p-3 px-10 rounded-3xl text-[0.9rem] font-Montserrat font-bold uppercase home-glowing-btn text-start",children:"Get Funded Now"})})]})]})},i))})})]})})]})}const Ie="/assets/x-de5c4fb2.png",Ce="/assets/instagram-ce072b26.png",Ee="/assets/discord-ee47c7ba.png";function Ae(){return e.jsxs("section",{className:"discord pt-24 mb-32 relative",children:[e.jsx("div",{className:"border-b border-slate-400/10 left-1/2 transform -translate-x-1/2 absolute w-[80vw] m-auto -mt-12"}),e.jsxs("div",{className:"container relative z-10",children:[e.jsx("div",{className:"heading z-10 relative flex flex-col justify-center sm:items-center sm:text-center",children:e.jsxs("div",{className:"heading flex flex-col justify-center sm:items-center sm:text-center",children:[e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"Let’s Connect!"}),e.jsx("div",{className:"paras mt-2 max-w-[60rem]",children:e.jsx("p",{children:"To ensure you're always in the know about TFH's official updates and news, don't forget to follow us on our social pages! Stay tuned for the latest developments."})})]})}),e.jsxs("div",{className:"items relative grid auto-rows-fr md:grid-cols-2 lg:grid-cols-3f gap-7 justify-center max-w-[50rem] fmax-w-[74rem] w-full m-auto items-center md:px-6 mt-8",children:[e.jsxs("div",{className:"grid gap-2 px-6 py-8 rounded-3xl discord-bg h-full social-shadow max-w-[360px] sticky top-20 sm:top-0 sm:relative scale-100f hover:scale-[1.02]f transition-allf",children:[e.jsx("div",{className:"img flex justify-center items-center relative h-[150px]",children:e.jsx("img",{className:`w-full absolute top-[2rem] left-0\r
                  `,src:Ee,alt:"discord"})}),e.jsxs("div",{className:"w-full flex flex-col justify-between gap-8",children:[e.jsx("p",{className:"text-center",children:"Trading is a challenge! Join our Discord for market discussions, strategies, and Friday night gaming sessions!"}),e.jsx("div",{className:"wrap flex justify-center",children:e.jsx("div",{className:"mt-4 btn uppercase flex justify-center self-end",children:e.jsx("a",{target:"__blank",href:"https://discord.gg/thefundedhub",className:"uppercase font-base flex h-full justify-center items-center py-3 px-10 text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem] max-w-[228px] border-2 border-primary/30",children:"Join our Discord"})})})]})]}),e.jsxs("div",{className:"grid gap-4 px-6 py-8 rounded-3xl x-bg h-full social-shadow max-w-[360px] sticky top-20 sm:top-0 sm:relative scale-100f hover:scale-[1.02]f transition-alf",children:[e.jsx("div",{className:"img flex justify-center items-center relative h-[150px]",children:e.jsx("img",{className:`w-full absolute top-[0.5rem] left-0\r
                  `,src:Ie,alt:"x"})}),e.jsxs("div",{className:"w-full flex flex-col justify-between gap-8",children:[e.jsx("p",{className:"text-center",children:"To ensure you're always in the know about TFH's official updates and news, don't forget to follow us on Twitter! Stay tuned for the latest developments."}),e.jsx("div",{className:" btn uppercase flex justify-center",children:e.jsx("a",{target:"__blank",href:"https://twitter.com/TheFundedHub",className:"uppercase font-base flex h-full justify-center items-center py-3 px-10 text-white rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem]  max-w-[228px] border-2 border-primary/30",children:"Join us on Twitter"})})]})]}),e.jsxs("div",{className:"gridf hidden gap-4 px-6 pt-2 pb-8 rounded-3xl h-full insta-bg social-shadow max-w-[360px]",children:[e.jsx("div",{className:"img flex justify-center items-center",children:e.jsx("img",{className:`sm:max-w-[12rem] md:max-w-[12rem] w-full opacity-80\r
                  `,src:Ce,alt:"instagram"})}),e.jsxs("div",{className:"w-full grid justify-center gap-3",children:[e.jsx("p",{className:"text-center",children:"Trading is certainly not easy! Interact with other traders and discuss about the markets, strategies and stay up to date with all the TFH official announcements."}),e.jsx("div",{className:"mt-4 btn uppercase flex justify-center",children:e.jsx("a",{target:"__blank",href:"https://www.instagram.com/fundedhub/",className:"uppercase font-base flex h-full justify-center items-center py-3 px-10 text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem] max-w-[228px] insta-glowing-btn",children:"Join us on Instagram"})})]})]})]})]}),e.jsx("div",{className:"circle-shadow hidden sm:block absolute opacity-[40%] -top-[120%] -left-[50%] w-full h-full sm:min-w-[50rem]",children:e.jsx("img",{className:"w-full",src:w,alt:"circle-shadow"})}),e.jsx("div",{className:"circle-shadow sm:hidden absolute grid justify-end items-end opacity-[40%] bottom-0 -top-[100%] right-0 w-full h-full max-w-[40rem]",children:e.jsx("img",{src:F,alt:"circle-shadow"})}),e.jsx("div",{className:"circle-shadow hidden absolute sm:grid justify-end items-end opacity-[20%] bottom-0 -top-[100%] right-0 w-full h-full max-w-[40rem]",children:e.jsx("img",{src:F,alt:"circle-shadow"})})]})}const Pe="/assets/x-a3a9855d.webp",He="/assets/discord-b0b80765.webp",Re="/assets/instagram-3e95cfc6.webp";function O(){return e.jsxs("div",{className:"logos flex gap-4",children:[e.jsx("a",{target:"__blank",href:"https://www.instagram.com/fundedhub/",className:"w-[1.5rem] hover:opacity-70 transition-all duration-300 flex justify-center items-center",children:e.jsx("img",{className:"w-full",src:Re,alt:"Instagram"})}),e.jsx("a",{target:"__blank",href:"https://twitter.com/TheFundedHub",className:"logo w-[1.5rem] hover:opacity-70 transition-all duration-300 flex justify-center items-center",children:e.jsx("img",{className:"w-full",src:Pe,alt:"X"})}),e.jsx("a",{target:"__blank",href:"https://discord.gg/thefundedhub",className:"logo w-[1.9rem] hover:opacity-70 transition-all duration-300 flex justify-center items-center",children:e.jsx("img",{className:"w-full",src:He,alt:"discord"})})]})}function x(){const[t,i]=a.useState(""),{pathname:r}=j();return a.useEffect(()=>{i(r)},[]),e.jsx("footer",{className:"footer relative body-background pt-6 pb-5 z-40",children:e.jsxs("div",{className:"container relative z-10",children:[e.jsxs("div",{className:"footer-desktop hidden lg:grid gap-10",children:[e.jsxs("div",{className:"top flex justify-between",children:[e.jsx("div",{className:"left ",children:e.jsx(c,{to:"/",className:"main-logo flex gap-1",children:e.jsx("img",{className:"max-w-[10rem]",src:M,alt:"TheFundedHub"})})}),e.jsx("div",{className:"middle grid gap-6 justify-end items-center",children:e.jsx("div",{className:"item flex justify-center items-center",children:e.jsxs("ul",{className:"flex font-Montserrat font-medium gap-4 flex-wrap md:flex-nowrap",children:[e.jsx("li",{children:e.jsx(c,{onClick:()=>i("/terms-condition"),to:"/terms-condition",className:`text-sm  hover:text-white transition-all duration-300 ${t==="/terms-condition"?"text-white":"text-white/40"}`,children:"Terms and Condition"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>i("/privacy-policy"),to:"/privacy-policy",className:`text-sm  hover:text-white transition-all duration-300 ${t==="/privacy-policy"?"text-white":"text-white/40"}`,children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>i("/cookie-policy"),to:"/cookie-policy",className:`text-sm  hover:text-white transition-all duration-300 ${t==="/cookie-policy"?"text-white":"text-white/40"}`,children:"Cookie Policy"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>i("/risk-disclosure"),to:"/risk-disclosure",className:`text-sm  hover:text-white transition-all duration-300 ${t==="/risk-disclosure"?"text-white":"text-white/40"}`,children:"Risk Disclosure"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>i("/report-problem"),to:"/report-problem",className:`text-sm relative group hover:text-white transition-all duration-300  ${t==="/report-problem"?"text-white":"text-white/40"}`,children:"Report a problem"})})]})})}),e.jsx("div",{className:"right",children:e.jsx(O,{})})]}),e.jsx("div",{className:"bottom",children:e.jsx("div",{className:"hidden sm:block bottom-content text-center",children:e.jsx("p",{className:"text-[0.65rem] font-light mt-2",children:"All information disseminated by The Funded Hub and its affiliates (collectively, 'the Company') is presented for general informational purposes only. None of the data or content provided by the Company is intended to be construed as investment advice, an invitation to engage in buying or selling activities, or an endorsement or sponsorship of any specific security, enterprise, or fund. It's important to note that The Funded Hub does not function as a broker or custodian. Individuals who enroll in our programs do so of their own volition. It is crucial to understand that the acquisition of program offerings should not be equated with making deposits. The fees associated with our programs are utilized to cover various operational expenses, such as staff salaries, technology infrastructure, and other pertinent business-related outlays. It's important to clarify that none of the information in this communication constitutes a solicitation or an offer to engage in trading futures, options, or forex. Past performance does not guarantee or imply future results."})})})]}),e.jsxs("div",{className:"footer-mobile grid gap-6 lg:hidden",children:[e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsx("div",{className:"logo flex justify-center items-center",children:e.jsx(c,{to:"/",className:"main-logo flex gap-1",children:e.jsx("img",{className:"max-w-[8rem]",src:M,alt:"TheFundedHub"})})}),e.jsx(O,{})]}),e.jsxs("div",{className:"content grid gap-8 mt-4",children:[e.jsx("div",{className:"top",children:e.jsx("div",{className:"items gap-4",children:e.jsx("div",{className:"item grid justify-center items-center",children:e.jsxs("ul",{className:"flex flex-wrap gap-4 justify-center items-center",children:[e.jsx("li",{children:e.jsx(c,{onClick:()=>i("/terms-condition"),to:"/terms-condition",className:` ${t==="/terms-condition"?"text-white":"text-white/40"} hover:text-white`,children:"Term and Condition"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>i("/privacy-policy"),to:"/privacy-policy",className:` ${t==="/privacy-policy"?"text-white":"text-white/40"} hover:text-white`,children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>i("/ookie-policy"),to:"/cookie-policy",className:` ${t==="/cookie-policy"?"text-white":"text-white/40"} hover:text-white`,children:"Cookie Policy"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>i("/risk-disclosure"),to:"/risk-disclosure",className:` ${t==="/risk-disclosure"?"text-white":"text-white/40"} hover:text-white`,children:"Risk Disclosure"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>i("/report-problem"),to:"/report-problem",className:` relative group ${t==="/report-problem"?"text-white":"text-white/40"} fhover:text-white`,children:"Report a problem"})})]})})})}),e.jsx("div",{className:"bottom text-center",children:e.jsx("p",{className:"text-[0.65rem] font-light mt-2",children:"All information disseminated by The Funded Hub and its affiliates (collectively, 'the Company') is presented for general informational purposes only. None of the data or content provided by the Company is intended to be construed as investment advice, an invitation to engage in buying or selling activities, or an endorsement or sponsorship of any specific security, enterprise, or fund. It's important to note that The Funded Hub does not function as a broker or custodian. Individuals who enroll in our programs do so of their own volition. It is crucial to understand that the acquisition of program offerings should not be equated with making deposits. The fees associated with our programs are utilized to cover various operational expenses, such as staff salaries, technology infrastructure, and other pertinent business-related outlays. It's important to clarify that none of the information in this communication constitutes a solicitation or an offer to engage in trading futures, options, or forex. Past performance does not guarantee or imply future results."})})]})]})]})})}const Me=[{name:"<span>CRAFT</span> YOUR CHALLENGE",id:1,content:`<p>
                    All other prop firms with the same rules?
                    <br />
                    With us you can <span>customize</span> basically everything;
                    from the trading period to the target profits to the max
                    drawdown.
                  </p>`},{name:"<span>REGUALATED</span> BROKER",id:2,content:`<p>
                Our traders deserve the best, only! We're thrilled to be
                partnering with BlackBull to offer you the best trading
                conditions in the market.
              </p>`},{name:"PAY IN 3 <span>INSTALLMENT</span>",id:3,content:`<p>
                Don&lsquo;t wait to succeed! Split your challenge payment
                into 3/4 installments for ultimate flexibility. Join us
                today!
              </p>`},{name:"PAY IN 3 <span>INSTALLMENT</span>",id:4,content:`<p>
                Don&lsquo;t wait to succeed! Split your challenge payment
                into 3/4 installments for ultimate flexibility. Join us
                today!
              </p>`}];function Oe(){return e.jsxs("section",{className:"benefits relative md:m-auto pt-20 sm:pt-24",children:[e.jsx("div",{className:"container",children:e.jsxs("div",{className:"wrapper grid gap-6 relative z-30",children:[e.jsxs("div",{className:"heading z-10 relative flex flex-col justify-center sm:items-center sm:text-center",children:[e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"The Funded Hub Benefits"}),e.jsx("div",{className:"paras mt-2 max-w-[55rem]",children:e.jsx("p",{children:"We are partnering up directly with a regulated liquidity provider to offer you unbeatable trading conditions. Our accounts will let you trade in an excellent environment with tight spreads and lighting-fast execution."})})]}),e.jsx("div",{className:"wrapper max-w-[25rem] sm:max-w-[45rem] lg:max-w-[70rem] m-auto grid gap-12",children:e.jsx("div",{className:"cards grid auto-rows-fr sm:grid-cols-2 gap-6",children:Me.map(t=>e.jsx("div",{className:"card-border card-border-gradient p-[0.2rem] rounded-3xl card-shadow sticky top-20 sm:top-0 sm:relative",children:e.jsxs("div",{className:"card relative uni-bg-gradient p-3 rounded-3xl h-full flex flex-col gap-5",children:[e.jsx("div",{className:"header card-header-gradient rounded-2xl p-[0.25rem] card-header-shadow max-w-[20rem]",children:e.jsx("h4",{className:"bg-black py-3 px-4 rounded-2xl",dangerouslySetInnerHTML:{__html:t.name}})}),e.jsxs("div",{className:"benefit-content flex flex-col justify-between h-full",children:[e.jsx("div",{className:"px-4",dangerouslySetInnerHTML:{__html:t.content}}),e.jsx("div",{className:"btn flex justify-start py-2 px-4",children:e.jsx("a",{href:"#price-table",className:"p-3 px-10 rounded-3xl text-[0.9rem] font-Montserrat font-bold uppercase home-glowing-btn text-start",children:"Get Funded Now"})})]})]})},t.id))})})]})}),e.jsx("div",{className:"circle-shadow hidden sm:block absolute opacity-[40%] -top-[10%] -left-[35%] w-full h-full min-w-[10rem]",children:e.jsx("img",{src:w,alt:"circle-shadow"})}),e.jsx("div",{className:"circle-shadow sm:hidden absolute grid justify-end items-end opacity-[33%] bottom-0 -top-[30%] right-0 w-full h-full max-w-[40rem]",children:e.jsx("img",{src:F,alt:"circle-shadow"})}),e.jsx("div",{className:"circle-shadow sm:hidden absolute grid justify-end items-end opacity-[40%] bottom-0 -top-[40%] rotate-180 left-0 w-full h-full max-w-[40rem]",children:e.jsx("img",{src:F,alt:"circle-shadow"})})]})}function qe(){return e.jsx("main",{className:"hero relative pt-10 md:pt-20 pb-20 lg:px-[2rem]",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper z-10 relative flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-4",children:[e.jsxs("div",{className:"left-content flex flex-col gap-4 justify-center w-full relative font-Montserrat text-right",children:[e.jsxs("div",{className:"title text-start",children:[e.jsxs("h1",{className:"text-[1.7rem] sm:text-4xl md:text-5xl lg:text-4xl xl:text-[3.13rem] font-light uppercase text-wht-gradient",children:[e.jsx("div",{className:"font-bold text-[inherit] inline-block text-shadow",children:"Empowering"})," ","Traders"]}),e.jsxs("h2",{className:"text-[#8190a8] one-time tracking-tighter leading-[0.95] text-[3.5rem] sm:text-4xl md:text-5xl lg:text-6xl  xl:text-[6.5rem] font-MontBold text-shadow scale-100f hover:scale-[1.02]f transition-allf",children:["Two steps ",e.jsx("br",{})," at a time."]})]}),e.jsxs("div",{className:"wrap grid gap-4 text-start font-normal",children:[e.jsxs("div",{className:"wrap ",children:[e.jsx("p",{children:"Customize your challenge, get funded with our capital and earn"}),e.jsx("p",{className:"text-start",children:"up to 90% profit split plus a fixed monthly salary."}),e.jsx("p",{className:"text-start",children:"We take all the trading risks."})]}),e.jsxs("div",{className:"btns flex flex-col md:flex-row gap-4 sm:gap-8",children:[e.jsx("div",{className:"btn flex font-extrabold",children:e.jsx("a",{href:"#price-table",className:`home-glowing-btn transition-all\r
                     duration-200 hover:scale-[1.05] py-[0.8rem] px-12 rounded-full uppercase max-w-[270px] w-full`,children:"Get Funded Now"})}),e.jsx("div",{className:"btn flex font-extrabold",children:e.jsx("a",{target:"__blank",href:"https://discord.gg/thefundedhub",className:"uppercase hero-blue-bnt before:py-6 md:before:py-5 px-12 relative flex justify-center items-center transition-all text-center duration-200 hover:scale-[1.05] w-[270px] py-7 md:py-6",children:e.jsx("span",{className:"absolute left-0 right-0 top-1/2 transform -translate-y-1/2",children:"Join our Discord"})})})]})]})]}),e.jsx("div",{className:"right-content flex justify-end rounded-[2.5rem] overflow-hidden p-1 video video-shadow scale-100 hover:scale-[1.02] transition-all duration-200 h-[250px] md:h-[350px]",children:e.jsx("div",{className:"w-full rounded-[2.5rem] overflow-hidden ",children:e.jsx("iframe",{className:"w-full h-full",src:"https://www.youtube.com/embed/-Pg819il8lY",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})})]})})})}const Le="/assets/blackBull-metaTrader-5-11d3ba62.png",De=[{name:"Login",value:"567185"},{name:"Investor Password",value:"TheFundedHub-Test1"},{name:"Server",value:"BlackBullMarkts-Demo"}];function We(){const[t,i]=a.useState(!1);return a.useEffect(()=>{navigator.clipboard.writeText(t)},[t]),e.jsxs("section",{className:"spread relative md:m-auto pt-20",children:[e.jsx("div",{className:"container",children:e.jsxs("div",{className:"wrapper grid gap-6 relative z-30",children:[e.jsxs("div",{className:"heading z-10 relative flex flex-col justify-center sm:items-center sm:text-center",children:[e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"Check The Spread"}),e.jsx("div",{className:"paras mt-2 max-w-[55rem]",children:e.jsx("p",{className:"font-light",children:"We are partnering up directly with a regulated liquidity provider to offer you unbeatable trading conditions. Our accounts will let you trade in an excellent environment with tight spreads and lighting-fast execution."})})]}),e.jsxs("div",{className:"wrapper max-w-[55rem] justify-center md:justify-between m-auto flex flex-col md:flex-row gap-8 w-full",children:[e.jsx("div",{className:"left",children:e.jsx("div",{className:"bull-logo flex justify-center",children:e.jsx("img",{className:"max-w-[20rem] pt-4",src:Le,alt:"blackbull-meta5"})})}),e.jsx("div",{className:"relative p-[0.2rem] rounded-3xl",children:e.jsx("div",{className:"cardf relative spread-card-bg p-[0.2rem] rounded-3xl card-shadow sm:top-0 scale-100 hover:scale-[1.02] transition-all duration-200 sm:whitespace-nowrap xl:w-[40rem]",children:e.jsxs("div",{className:"wrap my-2 px-4 grid gap-5",children:[e.jsx("div",{className:"header spread-card-header rounded-2xl p-[0.25rem] card-header-shadow max-w-[25rem] ",children:e.jsx("h4",{className:"bg-black/20 md:whitespace-nowrap py-3 px-4 rounded-2xl font-Montserrat font-bold text-base sm:text-lg",children:"MMETATRADER 5 CREDENTIALS"})}),e.jsx("div",{className:"spread-content flex flex-col justify-between h-full mb-4",children:e.jsx("div",{className:"sm:px-4 font-normal grid gap-4 font-Montserrat z-20",children:De.map((r,o)=>e.jsxs("div",{className:"item flex flex-col sm:grid grid-cols-2 gap-1 sm:gap-4",children:[e.jsxs("div",{className:"font-bold",children:[r.name,":"]}),e.jsxs("div",{className:"wrap flex gap-4 items-center",children:[e.jsx("div",{children:r.value}),e.jsx("div",{onClick:()=>i(r.value),className:"copy cursor-pointer opacity-75 -mt-1",children:e.jsx(me,{})})]})]},o))})})]})})})]})]})}),e.jsx("div",{className:"circle-shadow hidden sm:blockf absolute opacity-[40%] -top-[10%] -left-[35%] w-full h-full min-w-[10rem]",children:e.jsx("img",{src:w,alt:"circle-shadow"})}),e.jsx("div",{className:"circle-shadow hidden absolute sm:grid justify-end items-end opacity-[33%] bottom-0 -top-[70%] right-0 w-full h-full max-w-[30rem]",children:e.jsx("img",{src:F,alt:"circle-shadow"})})]})}function ze(){const{pathname:t}=j();return a.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs("div",{className:"font-light",children:[e.jsx(v,{}),e.jsx(qe,{}),e.jsx(Fe,{}),e.jsx(Oe,{}),e.jsx(We,{}),e.jsx(Te,{}),e.jsx(Ae,{}),e.jsx(x,{}),e.jsx("div",{className:"hidden h-0 w-0 opacity-0 left-0 visible md:invisible"}),e.jsx("script",{src:"./js/script.js"})]})}function Q({clr:t,header:i}){const[r,o]=a.useState(""),[s,l]=a.useState(""),[d,h]=a.useState(""),[p,f]=a.useState(""),[u,N]=a.useState(""),[k,S]=a.useState(""),[y,A]=a.useState(!0),[T,I]=a.useState(!0),[C,W]=a.useState(!1);a.useEffect(()=>{/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(d)&&d!==""?I(!0):C&&I(!1)},[d,y]);const E=()=>{r&&s&&T&&p&&u!==""?R.post("https://api.thefundedhub.com/v1/website/questions",{firstName:r,lastName:s,email:d,subject:p,message:u}).then(m=>{S("success"),o(""),l(""),h(""),f(""),N(""),A(!0),I(!0)}).catch(m=>{S("failed")}):(A(!1),W(!0))},z=m=>{m.preventDefault(),E(),S("")};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{className:`grid gap-6 sm:gap-8 md:gap-10 px-4 py-6 sm:p-8 relative z-10 rounded-3xl border-primary backdrop-blur-3xl global-shadow  ${t==="dash-bar-clr"?"contact-clr":"uni-bg-gradient"}`,children:[e.jsx("div",{className:"head",children:e.jsx("h3",{className:"text-xl",children:i||"Have questions?"})}),e.jsxs("div",{className:"inputs grid sm:grid-cols-2 gap-7",children:[e.jsxs("div",{className:"name relative",children:[e.jsx("input",{name:"name",onChange:m=>o(m.target.value),required:!0,className:`name w-full  bg-transparent backdrop-blur-3xl border-none outline outline-2  py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 ${y||r!==""?"outline-primary/30 focus:outline-primary/70 focus:ring-4 focus:ring-primary/30":"outline-red-700 focus:ring-4 focus:ring-red-600/40"}`,type:"text",value:r,placeholder:"Name"}),e.jsx("div",{className:`required absolute left-[0.5rem] -bottom-[1.25rem] text-red-600 text-[0.66rem] ${y||r!==""?"invisible opacity-0":"visible opacity-100"}`,children:"This field is required"})]}),e.jsxs("div",{className:"surname relative",children:[e.jsx("input",{name:"surname",onChange:m=>l(m.target.value),value:s,className:`lastName w-full  bg-transparent backdrop-blur-3xl border-none outline outline-2  py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 ${y||r!==""?"outline-primary/30 focus:outline-primary/70 focus:ring-4 focus:ring-primary/30":"outline-red-700 focus:ring-4 focus:ring-red-600/40"}`,placeholder:"Surname"}),e.jsx("div",{className:`required absolute left-[0.5rem] -bottom-[1.25rem] text-red-600 text-[0.66rem] ${y||s!==""?"invisible opacity-0":"visible opacity-100"}`,children:"This field is required"})]}),e.jsxs("div",{className:"email relative",children:[e.jsx("input",{name:"email",required:!0,onChange:m=>h(m.target.value),value:d,className:`email w-full  bg-transparent backdrop-blur-3xl border-none outline outline-2  py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 ${T?"outline-primary/30 focus:outline-primary/70 focus:ring-4 focus:ring-primary/30":"outline-red-700 focus:ring-4 focus:ring-red-600/40"}`,type:"email",placeholder:"Email"}),e.jsx("div",{className:`required absolute left-[0.5rem] -bottom-[1.25rem] text-red-600 text-[0.66rem] ${T?"invisible opacity-0":"visible opacity-100"}`,children:"Please enter a valid email address"})]}),e.jsxs("div",{className:"subject relative",children:[e.jsx("input",{name:"subject",required:!0,onChange:m=>f(m.target.value),value:p,className:`subject w-full  bg-transparent backdrop-blur-3xl border-none outline outline-2  py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 ${y||p!==""?"outline-primary/30 focus:outline-primary/70 focus:ring-4 focus:ring-primary/30":"outline-red-700 focus:ring-4 focus:ring-red-600/40"}`,type:"text",placeholder:"Subject"}),e.jsx("div",{className:`required absolute left-[0.5rem] -bottom-[1.25rem] text-red-600 text-[0.66rem] ${y||p!==""?"invisible opacity-0":"visible opacity-100"}`,children:"This field is required"})]})]}),e.jsxs("div",{className:"textarea relative",children:[e.jsx("textarea",{onChange:m=>N(m.target.value),required:!0,value:u,className:`bg-transparent backdrop-blur-3xl border-none outline outline-2 p-4 rounded-xl transition-all duration-200 w-full min-h-[10rem] sm:min-h-[12rem] md:min-h-[15rem] ${y||u!==""?"outline-primary/30 focus:outline-primary/70 focus:ring-4 focus:ring-primary/30":"outline-red-700 focus:ring-4 focus:ring-red-600/40"}`,name:"message",id:"message",placeholder:"Comment"}),e.jsx("div",{className:`required absolute left-[0.5rem] -bottom-[1rem] text-red-600 text-[0.66rem] ${y||u!==""?"invisible opacity-0":"visible opacity-100"}`,children:"This field is required"})]}),e.jsx("div",{className:"login-btn flex justify-center items-center",children:e.jsx("button",{onClick:m=>z(m),className:"py-2.5 px-16 transition-all duration-300 rounded-3xl font-Montserrat font-semibold glowing-btn max-w-[12rem] cursor-pointer",children:"Send"})})]}),e.jsx("div",{className:`box  fixed z-[999999] top-[30%] transform -translate-y-1/2 -right-[3rem] lg:-right-[4rem]  text-main text-wht bg-light-gra transition-all border border-primary/10 backdrop-blur-3xl duration-300 rounded-l-full my-3 overflow-hidden p-3 sm:p-5 px-12 md:w-[30rem] text-center ${k==="success"?" bg-[#08be00] contact-send-popup":k==="failed"?"bg-red-600 contact-send-popup":"invisible opacity-0"}`,children:e.jsx("div",{className:"subscribe text-base sm:text-xl font-nomal text-center pr-[1.5rem]",children:k==="success"?e.jsx("div",{children:"Message Sent!"}):k==="failed"?e.jsx("div",{children:"Sorry, please try again :("}):""})})]})}function Be(){const{pathname:t}=j();return a.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsxs("section",{className:"contact relative pt-24 pb-28 sm:pb-44 overflow-hidden",children:[e.jsx("div",{className:"container z-10 relative",children:e.jsx("div",{className:"wrapper flex items-center justify-center w-full",children:e.jsxs("div",{className:"content grid md:grid-cols-3 gap-10 max-w-[75rem] w-full",children:[e.jsxs("div",{className:"left md:col-span-1",children:[e.jsxs("div",{className:"heading grid gap-2",children:[e.jsx("div",{className:"wrap",children:e.jsx("h3",{className:"text-3xl text-wht-gradient",children:"Contact Us"})}),e.jsxs("p",{children:["Questions? Doubts? ",e.jsx("br",{})," Please contact us anytime and our team will take care of you!"]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(O,{})})]}),e.jsx("div",{className:"right md:col-span-2",children:e.jsx(Q,{})})]})})}),e.jsx("div",{className:"circle-shadow absolute opacity-[33%] -top-[10%] -left-[50%] w-full h-full min-w-[10rem]",children:e.jsx("img",{src:w,alt:"circle-shadow"})}),e.jsx("div",{className:"circle-shadow absolute opacity-[25%] top-[40%] -right-[20%] w-full h-full min-w-[10rem]",children:e.jsx("img",{src:w,alt:"circle-shadow"})})]}),e.jsx(x,{})]})}function Ue(){const{pathname:t}=j();return a.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsxs("section",{className:"contact relative pb-28 pt-24 sm:pb-44 overflow-hidden",children:[e.jsx("div",{className:"container z-10 relative",children:e.jsx("div",{className:"wrapper flex items-center w-full",children:e.jsxs("div",{className:"content grid md:grid-cols-3 gap-10 max-w-[75rem] w-full m-auto",children:[e.jsxs("div",{className:"left md:col-span-1 break-all ",children:[e.jsxs("div",{className:"heading grid gap-2",children:[e.jsx("h3",{className:"text-3xl",children:"Report a Problem"}),e.jsxs("p",{children:["Did you notice any bug or technical error? ",e.jsx("br",{})," Please let us know!"]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(O,{})})]}),e.jsx("div",{className:"right md:col-span-2",children:e.jsx(Q,{header:"Contact Us"})})]})})}),e.jsx("div",{className:"circle-shadow absolute opacity-[15%] -top-[70%] -left-[50%] w-full h-full min-w-[10rem]",children:e.jsx("img",{src:w,alt:"circle-shadow"})}),e.jsx("div",{className:"circle-shadow absolute opacity-[20%] top-[40%] -right-[20%] w-full h-full min-w-[10rem]",children:e.jsx("img",{src:w,alt:"circle-shadow"})})]}),e.jsx(x,{})]})}function $e({heading:t,para:i,fls:r}){const[o,s]=a.useState(0),[l,d]=a.useState(r),h=a.useRef(null);return a.useEffect(()=>{s(h.current.clientHeight)},[l]),e.jsxs("article",{className:"item rounded-xl global-shadow ",children:[e.jsxs("header",{onClick:()=>d(!l),className:"flex justify-between cursor-pointer py-3 px-4",children:[e.jsx("h3",{className:"text-[0.9rem] xs:text-base font-Montserrat font-semibold",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:t}})}),e.jsx("div",{className:"arrow flex justify-center items-center ml-3",children:e.jsx("img",{className:`max-w-[1.4rem] transform-gpu transition-all duration-300 ${l?"rotate-180":""}`,src:Z,alt:"arrow"})})]}),e.jsx("div",{style:{maxHeight:l?o+"px":"0"},className:"faq-content transition-all duration-300 overflow-hidden ",children:e.jsx("div",{ref:h,className:"wrapper",children:e.jsx("div",{className:"text-[0.9rem] xs:text-base px-4 pb-5 pt-4 border-t border-primary/20",children:e.jsx("div",{className:"faq-collaps",dangerouslySetInnerHTML:{__html:i}})})})})]})}let Ye={General:[{name:"The Funded Hub: Empowering Traders, one step at a time",data:`<div className="paras">
              <p>
                The Funded Hub is a Fintech Startup headquartered in London,
                United Kingdom. Our team comprises individuals with diverse
                expertise in various fields, but a common passion unites us all:
                Trading
              </p>
              <p>
                With a collective experience spanning a decade in the world of
                trading, we aimed to introduce a platform that could empower
                traders by providing them with the essential support and capital
                needed to succeed
              </p>
            </div>`},{name:"How to Get Started with TFH?",data:`<div className="paras">
              <p>To begin your journey with TFH, follow these steps:</p>
              <ul>
                <li>
                  Familiarize Yourself with the Rules: Start by thoroughly
                  reading and understanding all the rules. If anything is
                  unclear, don&apos;t hesitate to reach out to us for
                  clarification.
                </li>
                <li>
                  Pay for Challenge Evaluation: After gaining a clear
                  understanding of the rules, you can proceed to pay for your
                  challenge evaluation.
                </li>
                <li>
                  Once you pass the challenge phases, you will be granted access
                  to your &apos;Funded&apos; account. This is where you will
                  trade on our accounts and, in return, receive a percentage of
                  the profits you generate.
                </li>
              </ul>
            </div>`},{name:"What is Klarna and Afterpay?",data:`<div className="paras">
              <p>
                Klarna and Afterpay are popular Buy Now, Pay Later (BNPL)
                services that allow you to shop online and make payments in
                installments. With Klarna and Afterpay, you can enjoy your
                purchases now and pay for them over time.
              </p>
              <h5>
                How can I use Klarna and Afterpay to pay for my TFH account in
                3/4 installments?
              </h5>
              <p>
                Using Klarna or Afterpay to pay for your TFH account is easy!
                Here&lsquo;s a step-by-step guide:
              </p>
              <h5>Step 1: Account Registration</h5>
              <p>
                Go to The Funded Hub&lsquo;s payment page. Select your desired
                package. <br /> Choose &ldquo;Klarna&ldquo; or
                &ldquo;Afterpay&ldquo; as your payment method during checkout.
                <br />
              </p>
              <h5>Step 2: Account Setup</h5>
              <p>
                If you&lsquo;re using Klarna, you will be redirected to
                Klarna&lsquo;s platform to create an account or log in if you
                already have one. For Afterpay, you will need to log in to your
                Afterpay account.
                <br />
                Follow the prompts to complete the setup process.
              </p>
              <h5>Step 3: Payment</h5>
              <p>
                After completing the account setup, you&lsquo;ll be redirected
                back to The Funded Hub&lsquo;s payment page.
                <br />
                Select the option to pay in 3/4 installments with Klarna or
                Afterpay.
                <br />
                Review the payment schedule and terms.
                <br />
                Confirm your purchase.
              </p>
              <h5>Step 4: Enjoy Your Account</h5>
              <p>
                -Once your payment is approved, you&lsquo;ll receive access to
                your TFH account. <br />
                Make sure to keep track of your installment payments based on
                the schedule provided by Klarna or Afterpay.
                <br />
                Having Issues?
                <br />
                If you encounter any problems related to Klarna or Afterpay, you
                can reach out to them through their official websites:
              </p>
              <a href="https://www.klarna.com">Klarna Support</a>
              <a href="https://www.afterpay.com">Afterpay Support</a>
              <h5>Which countries can use Klarna and Afterpay on TFH?</h5>
              <h5>Klarna:</h5>
              <ol>
                <li>Austria</li>
                <li>Belgium</li>
                <li>Canada</li>
                <li>Czech Republic</li>
                <li>Denmark</li>
                <li>Estonia</li>
                <li>Finland</li>
                <li>France</li>
                <li>Germany</li>
                <li>Greece</li>
                <li>Ireland</li>
                <li>Italy</li>
                <li>Latvia</li>
                <li>Lithuania</li>
                <li>Netherlands</li>
                <li>New Zealand</li>
                <li>Norway</li>
                <li>Poland</li>
                <li>Portugal</li>
                <li>Slovakia</li>
                <li>Slovenia</li>
                <li>Spain</li>
                <li>Sweden</li>
                <li>Switzerland</li>
                <li>United Kingdom</li>
                <li>United States</li>
              </ol>

              <h5>Afterpay:</h5>
              <ol>
                <li>Australia</li>
                <li>Canada</li>
                <li>New Zealand</li>
                <li>United Kingdom</li>
                <li>United States</li>
              </ol>

              <i>
                Please note that the availability of Klarna and Afterpay may
                vary by region, and additional countries may be added over time.
              </i>
            </div>`},{name:"What&apos;s the broker and what are the conditions?",data:`  <div className="paras">
              <p>
                We&apos;ve forged a robust partnership with BlackBull Markets, a
                globally recognized and rigorously regulated broker in the
                trading industry.
              </p>
              <p>
                Our trading accounts come with highly competitive conditions,
                featuring some of the industry&apos;s narrowest spreads,
                starting at an impressive 0.0 pips, and minimal slippage.
              </p>
              <p>
                For a comprehensive breakdown of commission details, please
                consult the article directly following this one .
              </p>
            </div>`},{name:"On which trading platform can I operate?",data:`<div className="paras">
              <p>
                Our technology is currently integrated with the MT5 platform.
                The platform, including pricing and execution, is provided by
                our broker, BlackBull Markets. We are actively working to make
                this technology available on the MT4 platform in the near future
              </p>
            </div>`},{name:"How long will it take to receive my Funded Account?",data:`<div className="paras">
              <p>
                After successfully completing the challenge phases, we will
                conduct a thorough review of your Phase 2 account to ensure
                there are no potential breaches or cheating practices. Once we
                assess that you are fully compliant and no violations have
                occurred, we will send the contract to your email via DocuSign
                along with instructions to complete the KYC registration.
              </p>
              <p>
                Once you have reviewed and signed this agreement and provided
                the necessary &apos;Know Your Customer (KYC)&apos; documents,
                your funded account will be established and funded, and your
                account details will typically be provided to you within 72
                hours.
              </p>
              <p>
                Please note that in certain circumstances, this process may take
                longer
              </p>
            </div>`},{name:" What is the minimum age requirement to participate in your program?",data:`<div className="paras">
              <p>
                To purchase a challenge account, you must be a minimum of 18
                years old.
              </p>
            </div>`},{name:" What instruments are available for trading?",data:`  <div className="paras">
              <p>
                You can trade a wide range of products offered by BlackBull
                Markets. This includes FX pairs, CFDs on Indices and Stocks,
                Metals, Energies, and Cryptocurrencies.
              </p>
            </div>`},{name:"What are the associated commission charges?",data:`    <div className="paras">
              <p>
                We offer you a wide array of trading options, encompassing
                Forex, Cryptocurrencies, Indices, Precious Metals, and Energies,
                all with RAW spreads.
              </p>
              <p>
                For every standard lot round turn, which includes both the
                opening and closing of a trade, there is a $3 commission fee.
              </p>
              <p>
                It&apos;s important to note that there are no commission fees
                associated with trading Indices.
              </p>
            </div>`},{name:" What is the tax arrangement?",data:`<div className="paras">
              <p>
                When trading a Funded account through The Funded Hub, you are
                classified as an independent contractor. This means that you are
                personally responsible for any taxes on your profit share.
                Please note that we do not provide guidance or advice on tax
                matters.
              </p>
            </div>`},{name:"Are TFH Accounts Live or Demo?",data:`<div className="paras">
              <p>
                TFH accounts, including the Funded account, are all DEMO
                accounts.
              </p>
              <p>
                They are integrated with our risk management system, which
                simplifies compliance for both our organization and the traders.
              </p>
            </div>`},{name:"What occurs if I breach my Challenge or Funded account?",data:`<div className="paras">
              <p>
                If you breach any of the &quot;hard breach&quot; rules, your
                account will regrettably be terminated.
              </p>
              <p>
                However, we do offer several discounts to assist you in resuming
                your trading journey:
              </p>
              <ul>
                <li>A 10% Discount on your next challenge if the breach occurred during Phase 1.</li>
                <li>A 15% Discount on your next challenge if the breach occurred during Phase 2.</li>
              </ul>
              <p>
                Regarding the Funded account, you have the option to utilize the
                &apos;<a href="#">Funded Reset</a>&apos; feature, which
                allows you to return to your Funded account without the need to
                retake the challenge
              </p>
            </div>`},{name:" Which Countries Are Off-Limits for your Services?",data:`<div className="paras">
              <p>
                As of Monday, October 2nd, 2023, due to limitations imposed by
                our payment gateway processors, bank accounts, and Crypto
                Exchanges, we are regrettably unable to provide our services,
                which encompass simulated trading and affiliate services, to
                residents of the following countries:
              </p>
              <ol>
                <li>Cuba</li>
                <li>Iran</li>
                <li>North Korea</li>
                <li>Syria</li>
                <li>Kenya</li>
                <li>Myanmar</li>
              </ol>
              <p>Key Restrictions and Measures:</p>
              <ul>
                <li>
                  The Funded Hub is unable to extend services, including trading
                  and affiliate services, to individuals residing in the
                  specified countries.
                </li>
                <li>
                  Traders engaging in any way with these sanctioned countries
                  will be in violation of our policies, resulting in the
                  deduction of simulated profits.
                </li>
              </ul>
            </div>`}],Challenge:[{name:"How does the Challenge works?",data:`<div className="paras">
              <p>
                The challenge is made of 2 phases, once you purchase an account
                with us you&apos;ll receive credentials for your “Phase 1” account,
                after passing it you&apos;ll be notified via email and on the
                dashboard and in few minutes you&apos;ll receive credentials for the
                “Phase 2”. <br />
                After successfully pass Phase 2, we&apos;ll manually review both
                “Phase 1” and “Phase 2” accounts
              </p>
            </div>`},{name:"How&apos;s the Maximum Daily Loss Calculated?",data:`<div className="paras">
              <p>
                The Maximum Daily Loss Limit represents the maximum amount a
                trader is allowed to lose each day. For calculation purposes,
                the higher value between equity and balance is considered.
              </p>
              <p>
                This limit is initially set at 5% of the starting equity or
                balance every day, but it can differ according to the value you
                choose. The rule stipulates that the equity of the day, derived
                from the currently floating Profit and Loss (PnL) combined with
                all closed positions of that day, must not exceed the Maximum
                Daily Loss Limit. This limit resets daily at 00:00 CEST/server
                time.
              </p>
              <p>
                Let&apos;s explore the Daily Loss Limit with a couple of
                different scenarios:
              </p>
              <h5>Example 1: Equity Exceeds Balance at the Day&apos;s Start</h5>
              <p>
                At the beginning of day 2, your account balance is $103,000, and
                your equity stands at $105,000. The Daily Loss Limit is
                calculated as 5% of your equity since it&apos;s the higher value
              </p>
              <p>
                <span>Daily loss </span> = $105,000 * 5% = $5,250 Daily Loss
                Limit.
              </p>
              <p>
                This means your equity cannot drop below $99,750 on day 5. If,
                at any point during the day, your equity falls below $99,750,
                your account will be breached and subsequently terminated.
              </p>
              <h5>Example 2: Balance Trumps Equity at the Day&apos;s Start</h5>
              <p>
                Now, let&apos;s consider day 3, where your account balance at
                the start is $103,000, but your equity is $101,000. In this
                case, the Daily Loss Limit is calculated as 5% of the balance,
                which is the higher figure.
              </p>
              <p>
                <span>Daily loss</span> = $103,000 * 5% = $5,150 Daily Loss
                Limit.
              </p>
              <p>
                This means your equity must not dip below $97,850 throughout day
                7. If, at any given moment on day 7, your equity falls below
                $97,850, your account will be breached and subsequently
                terminated.
              </p>
            </div`},{name:"How’s the Maximum Total Loss Calculated?",data:`  <div className="paras">
              <p>
                The Maximum Loss Limit signifies the minimum level to which
                equity or balance cannot fall. This rule is set at 10% of the
                initial account size, but it can differ according to the value
                you choose. For instance let’s assume that a trader possesses a
                $100,000 account, in this specific case the equity or balance
                cannot drop below $90,000 at any given moment.
              </p>
              <p>Here&apos;s an illustration:</p>
              <p>
                Let&apos;s say you opt for a $100,000 account with a Maximum
                Loss Limit set at 10% of the initial balance, which amounts to
                $10,000 in this scenario.
              </p>
              <p>
                <span>Maximum Loss</span> = $100,000 * 10% = $10,000 Maximum
                Loss Limit.
              </p>
              <p>
                This signifies that your equity or balance must remain above
                $90,000, as calculated: $100,000 - $10,000 Maximum Loss Limit =
                $90,000.
              </p>
              <p>
                If, at any point, your equity or balance falls below $90,000,
                your account will be breached and subsequently terminated.
              </p>
            </div>`},{name:"What trading styles are not accepted?",data:`  <div className="paras">
              <p>
                We have strict guidelines in place to maintain the integrity of
                our trading program. Trading styles that are considered
                malicious include, but are not limited to:
              </p>
              <ul>
                <li>
                  Exploiting errors or latency in the pricing and/or platform(s)
                  provided by the Broker.
                </li>
                <li>Utilizing non-public and/or insider information.</li>
                <li> Front-running trades placed elsewhere.</li>
                <li>
                  Trading practices that jeopardize our relationship with the
                  broker or may lead to trade cancellations.
                </li>
                <li>
                  Trading methods that create regulatory issues for the broker.
                </li>
                <li>
                  Using third-party strategies, off-the-shelf strategies, or
                  those marketed for assessment accounts.
                </li>
                <li>
                  Layering/Grid Trading: We define this as entering into a
                  fourth position after having three open positions. Engaging in
                  this practice will result in the termination of your account,
                  including any profits.
                </li>
                <li>
                  Martingale Strategy: This involves increasing trade sizes
                  after a losing trade to recoup losses. Adding multiple
                  positions of the same size also falls under this category. You
                  cannot increase your total margin on a pair after a loss. If
                  we detect martingale strategy three times, your account will
                  be terminated.
                </li>
                <li>
                  Cheating: Exploiting Meta Trader inefficiencies such as
                  HighFrequency Trading, Toxic Trading Order Flow, Long/Short
                  arbitrage, Reverse arbitrage, tick scalping, or server
                  execution is strictly prohibited. Engaging in these practices
                  will result in the termination of your account, including any
                  profits.
                </li>
                <li>
                  Reverse/Group Hedging: Betting in one direction against
                  another account is not allowed, as it attempts to reverse the
                  trade of another account for a guaranteed win.
                </li>
                <li>
                  Hedging: Exclusively relying on hedging to navigate a
                  challenge or live account is not allowed. If over 50% of your
                  trades involve hedging, you will be asked to retake the
                  challenge or have your profits denied.
                  <ul>
                    <li>
                      Gambling: Using a gambling approach to complete a
                      challenge phase is not acceptable. Gambling is defined as:
                    </li>
                    <li>
                      Having more than 75% of your trades placed without a stop
                      loss, even during challenge phases.
                    </li>
                    <li>
                      Generating over 50% of your profits from a news event,
                      even during challenge phases.
                    </li>
                    <li>Passing a challenge in one or two trades.</li>
                    <li>
                      If we observe gambling behavior, we will request you to
                      alter your trading strategy and/or rerun the challenge
                      phase.
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Expert Advisor (EA) Trading:</span> EA trading is
                  available upon request. If you wish to use an EA, feel free to
                  contact us. We may ask you to provide some information about
                  the EA you intend to use, such as a backtest report, to ensure
                  a smooth experience.
                </li>
                <li>
                  <span>Copy Trading:</span> Copy trading is allowed exclusively
                  among The Funded Hub accounts. Please note that copying trades
                  from accounts associated with other companies is not permitted
                  for compliance reasons
                  <p>
                    Please note that a &apos;trade&apos; is defined as a
                    position held on a specific pair, which may include one
                    entry or multiple entries with similar timings and lot
                    sizes. Multiple entries on the same pair at the same time
                    may also count as a single trade. Trades with significantly
                    smaller lot sizes will not be counted as individual trades.
                  </p>
                  <p>
                    If you are found to be engaging in any malicious practices
                    on our website, you will be blacklisted from using The
                    Funded Hub services, and no refund will be provided.
                  </p>
                </li>
              </ul>
            </div>`},{name:"Am I allowed to keep trades open over the weekend?",data:`<div className="paras">
              <p>
                Yes, you have the flexibility to maintain open trades over the
                weekend. Furthermore, you can also trade instruments that remain
                active during the weekend, such as Cryptocurrencies.
              </p>
            </div>`},{name:"Do I need to use a stop loss?",data:`<div className="paras">
        <ul><li>
                During the challenge phases, there are no specific restrictions
                regarding the use of stop losses. However, it&apos;s important
                to note that if we observe that over 75% of your trades are
                executed without a stop loss, we may request you to redo the
                challenge.
              </li>
              <li>
                Once funded, it&apos;s mandatory to place a stop loss within 60
                seconds from the execution of your trade. In case you forget to
                set a stop loss, you are allowed 3 warnings per week. On the 4th
                warning, your account will be breached.
              </li></ul>
              
            </div>`},{name:"How can I track the performance of my accounts?",data:`<div className="paras">
              <p>
                Once you&apos;ve purchased a Challenge account, you will gain access
                to your Personal Hub dashboard that allows you to track the
                progress of both your Challenge and Funded accounts. The
                dashboard is regularly updated, with metrics calculated
                approximately every 60 seconds. However, please be aware that
                monitoring your breach levels remains your responsibility.
              </p>
            </div>`}],Funded:[{name:" How does the merging of Funded accounts work?",data:` <div className="paras">
              <p>
                If you possess two funded accounts, you have the option to
                request a merger to consolidate them. For instance, if you have
                a 25k account and a 100k account, you can merge them to create a
                new 125k account. It&apos;s important to note that both accounts must
                be at their initial balance to be eligible for merging. To take
                advantage of this feature, please get in touch with our support
                team.
              </p>
            </div>`},{name:"Is it possible to reset my Funded account?",data:`<div className="paras">
              <p>
                Yes, you have the option to request a reset for your Funded
                account, which can be done through your Personal Hub Dashboard.
              </p>
              <p>
                The process is quite straightforward. If your account breaches
                the Maximum Daily Drawdown or the Maximum Total Drawdown, you
                can return to trading with your Funded account without the need
                to redo the initial challenge. You can achieve this by paying a
                variable percentage of the drawdown your account experienced at
                the time of the breach.
              </p>
              <p>
                After your Funded account breach, you can request a reset, and
                our team will promptly contact you with a reset offer. Upon
                making the payment, you will receive an email with new
                MetaTrader account credentials within 24 hours.
              </p>
            </div>`},{name:" How’s the withdrawal process working?",data:`<div className="paras">
              <ul>
                <li>
                  First Payout after 21 Days + 80% Profit Split. <br />
                  Upon executing the first trade in the funded account, your
                  initial payout becomes available after 21 calendar days. You
                  can then request payouts with an 80% profit split.
                </li>
                <li>
                  Bi-Weekly Payouts + 85% Profit Split: After the first payout,
                  traders can opt for bi-weekly payouts, available every 14
                  calendar days. Furthermore, the profit split for these payouts
                  increases to 85%.
                </li>
                <li>
                  Weekly Payouts + 90% Profit Split: <br />
                  Once you reach and complete the 7th payout, the payout
                  schedule transitions to weekly, allowing you to request
                  withdrawals every 7 calendar days. Additionally, the profit
                  split for these weekly payouts increases to 90%. Also you get
                  access to our Scaling Plan.
                </li>
              </ul>
              <p>
                We offer four convenient withdrawal methods: Wire transfer,
                Wise, PayPal, and Crypto
              </p>
              <p>
                Requesting a withdrawal is a straightforward process. Select the
                desired withdrawal amount, submit your Withdrawal Request
                through your Personal Hub dashboard, and our team will manually
                review your account to ensure compliance with our rules. After
                successful processing, your account will be reset accordingly.
              </p>
              <p>
                Please note: <br />
                <ul>
                  <li>
                    Before initiating a withdrawal request, make sure no trades
                    are actively running.
                  </li>
                  <li>
                    The minimum withdrawal amount is 1% of the initial balance,
                    inclusive of our split.
                  </li>
                </ul>
              </p>
            </div>`},{name:"How Does the Scaling Plan Work?",data:`  <div className="paras">
              <p>
                The Scaling Plan offers traders the opportunity to increase
                their account size by consistently demonstrating profitable
                performance, opening the door to higher potential earnings over
                time. Scaling takes place every 3 months, and to qualify,
                traders must meet specific criteria. Traders need to maintain
                profitability on their Simulated Funded Account for at least 2
                out of 3 months, with an average virtual profit of 6% or more.
                This achievement results in a 25% scale increase, adding to the
                initial starting account balance.
              </p>
              <p>
                Here&apos;s an example: A trader begins with a Virtual Funds
                $100K account and manages to achieve a minimum of 6%
                profitability in at least two out of three months. This
                accomplishment earns them a 25% scale increase, which translates
                to an extra Virtual Funds $25K added to the initial account
                balance, bringing the total account size to $125K
              </p>
              <p>
                What&apos;s more, the Scaling Plan opens the gateway to the
                &apos;<a href="#">Salary</a>&apos; program, allowing traders to
                explore additional opportunities and benefits as they continue
                to grow their trading prowess.
              </p>
            </div>`},{name:"How does the Salary Model Benefit You?",data:`<div className="paras">
              <p>
                As traders successfully progress through our scaling plan, they
                gain access to an additional perk – a fixed monthly salary. This
                salary is equal to 1% of the original account size, providing a
                steady source of income. Here&apos;s how it works:
              </p>
              <ol>
                <li>$5,000 Funded Account = $50 monthly salary</li>
                <li>$10,000 Funded Account = $100 monthly salary</li>
                <li>$25,000 Funded Account = $250 monthly salary</li>
                <li>$50,000 Funded Account = $500 monthly salary</li>
                <li>$100,000 Funded Account = $1,000 monthly salary</li>
                <li>$200,000 Funded Account = $2,000 monthly salary</li>
              </ol>
              <p>
                If you&apos;ve merged two accounts, your monthly salary is based
                on the balance of the &apos;merged&apos; account, up to the
                maximum available account size by default, which is $200,000.
              </p>
              <p>
                To qualify for your monthly salary, you must achieve a minimum
                of 1% profit on your account. If, for example, in a given month
                you don&apos;t reach at least 1% profit on your Funded account, there
                won&apos;t be any penalties, of course, but you won&apos;t receive any
                salary for that specific month.
              </p>
            </div>`}]};function Ge(){const[t,i]=a.useState("General"),{pathname:r}=j();return a.useEffect(()=>{window.scrollTo(0,0)},[r]),e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsxs("section",{className:"faq relative pt-16 z-10 overflow-hidden",children:[e.jsx("div",{className:"container relative z-10",children:e.jsx("div",{className:"wrapper relative pb-24 sm:pb-36 md:pb-44 w-full grid gap-16 xs:gap-20 md:gap-32 max-w-[75rem] m-auto",children:e.jsxs("div",{className:"top-content pb-10 md:pb-20 relative",children:[e.jsx("div",{className:"header grid relative",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"text-2xl xs:text-[1.65rem] xs:leading-[0.95] md:text-[1.6rem] font-codePro !leading-8 capitalize mt-2 text-wht-gradient",children:"Frequently asked questions"})})}),e.jsxs("div",{className:"content grid gap-12 mt-10 relative faq-content",children:[e.jsx("div",{className:"left relative",children:e.jsxs("div",{className:"options max-w-[50rem] mx-auto grid grid-cols-3 gap-6 w-full relative",children:[e.jsx("div",{className:`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-light/[15%]  backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 global-shadow ${t==="General"?"border-primary/30":"border-transparent hover:border-primary/40"}`,onClick:()=>i("General"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"General"})}),e.jsx("div",{className:`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-light/[15%] backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 global-shadow ${t==="Challenge"?"border-primary/30":"border-transparent hover:border-primary/40"}`,onClick:()=>i("Challenge"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"Challenge"})}),e.jsx("div",{className:`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-light/[15%]  backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 global-shadow ${t==="Funded"?"border-primary/30":"border-transparent hover:border-primary/40"}`,onClick:()=>i("Funded"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"Funded"})})]})}),e.jsx("div",{className:"right faq-collaps flex flex-col gap-4 relative",children:Ye[t].map((o,s)=>e.jsx($e,{heading:o.name,para:o.data},s+t))})]})]})})}),e.jsx("div",{className:"circle-shadow absolute opacity-[33%] -top-[10%] -left-[50%] w-full h-full min-w-[10rem]",children:e.jsx("img",{src:w,alt:"circle-shadow"})}),e.jsx("div",{className:"circle-shadow absolute opacity-[25%] top-[40%] -right-[20%] w-full h-full min-w-[10rem]",children:e.jsx("img",{src:w,alt:"circle-shadow"})})]}),e.jsx(x,{})]})}function Ke(){const{pathname:t}=j();return a.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx("main",{className:"cookie  pb-28 pt-24 border-b border-gray-400/20 overflow-hidden",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto",children:[e.jsx("div",{className:"heading text-center",children:e.jsx("h2",{className:"text-3xl font-codeProBold",children:"Cookie Policy"})}),e.jsxs("div",{className:"content grid gap-5",children:[e.jsxs("p",{children:["When displaying content, advertisements and other functionalities on the"," ",e.jsx(c,{to:"/",className:"underline",children:"www.thefundedhub.com"})," ","website (the “Website”) various technologies are used to collect and process personal data, including cookies. You will find details concerning this method of processing in this Cookie Policy."]}),e.jsxs("ul",{className:"",children:[e.jsx("span",{children:"In this Cookie Policy, you will find information regarding the following:"}),e.jsx("li",{children:"1) Who is the operator of the Website and whom to contact?"}),e.jsx("li",{children:"2) What technologies do we use and what are cookies?"}),e.jsx("li",{children:"3) How to set up the use of cookies on the Website?"}),e.jsx("li",{children:"4) How to set up cookies in the web browser?"}),e.jsx("li",{children:"5) What cookies do we use on the Website?"}),e.jsx("li",{children:"6) What are your rights and how can you exercise them"}),e.jsx("li",{})]}),e.jsxs("p",{children:["If you have any questions relating to the processing of your personal data, including cookies in connection with the operation of the Website, and to exercise your rights, you can contact us at"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})]}),e.jsx("span",{children:"We and some third parties process personal data using cookies and other technologies on the Website"}),e.jsxs("p",{children:[e.jsx("div",{children:"WHAT TECHNOLOGIES DO WE USE AND WHAT ARE COOKIES?"}),"Cookies are small files that are stored on your device and that help us collect information about your activities. In particular, cookies allow us to remember your settings, preferences, and your access data, provide targeted content and marketing communications, and analyses the operation of the Website. Cookies may come from us or from third parties whose services we use. In addition to cookies, we may also process your IP address, which is a unique number assigned to a computer or other device communicating via the internet protocol, and analytical scripts, which are small pieces of a computer code through which users and their behavior on websites can be tracked."]}),e.jsxs("p",{children:[e.jsx("div",{children:"HOW TO SET UP THE USE OF COOKIES ON THE WEBSITE?"}),"You can set up your preferences in your web browser and also in your operating system. Some parts of the Website are designed to work with the use of cookies. If you reject some cookies, it may affect the use of some features on the Website or parts of it."]}),e.jsxs("p",{children:[e.jsx("div",{children:"HOW TO SET UP COOKIES IN THE WEB BROWSER?"}),"You can set up the storage of cookies on your device in your web browser. You can set up your browser to accept all cookies, reject them, or indicate when a cookie is being sent, at any time. For more information and options, see the operating system settings of your device."]}),e.jsxs("ul",{children:[e.jsx("span",{children:"Most browsers automatically accept cookies by default. You can get more information about setting up cookies for the most common browsers here:"}),e.jsx("li",{children:"Google Chrome"}),e.jsx("li",{children:"Internet Explorer"}),e.jsx("li",{children:"Microsoft Edge"}),e.jsx("li",{children:"Mozilla Firefox"}),e.jsx("li",{children:"Opera"}),e.jsx("li",{children:"Safari"})]}),e.jsx("span",{children:"You can also delete cookies from your device’s memory at any time. For more information, access your browser or operating system."}),e.jsxs("p",{children:[e.jsx("div",{children:"WHAT COOKIES DO WE USE ON THE WEBSITE?"}),e.jsx("span",{children:"We use the following types of cookies on the Website:"}),e.jsxs("ul",{className:"grid gap-5 mt-5",children:[e.jsxs("li",{children:[e.jsx("div",{children:"➔ Necessary basic cookies:"}),"These cookies allow you to browse the Website and use its functionalities. Through these cookies, we also ensure the security and administration of the Website. Enabling these cookies is automatic and cannot be turned off, as they are necessary for the operation of the Website. We only keep the necessary basic cookies for the duration of your current session."]}),e.jsxs("li",{children:[e.jsx("div",{children:"➔ Functional cookies:"})," Thanks to these cookies, we are able to provide you with a better user experience when using the Website and services. For example, this type of cookie will ensure that the information displayed when you visit the Website corresponds to your preferences and your previous settings. We store functional cookies for the period specified for individual cookies in the list under the link below or until the withdrawal of consent."]}),e.jsxs("li",{children:[e.jsx("div",{children:"➔ Analytical cookies:"})," Thanks to these cookies, we obtain information on how our Website and services are used. These cookies allow us, for example, to find out that you have visited the Website before, or to monitor which parts of the Website you use most often. We use third-party tools for analytics. We store analytical cookies for the period specified for individual cookies in the list under the link below or until the withdrawal of consent."]}),e.jsxs("li",{children:[e.jsx("div",{children:"➔ Advertising cookies: "}),"Through these cookies, we and our partners can offer you targeted advertising, for example, based on the collection of information about the services that you have viewed or ordered on the Website or other websites. The Website may also display content from third-party websites or services, and third-party cookies may be stored on your device. The storage and use of those cookies is administered by third parties based on their own rules, which you will find in their privacy policies. We store advertising cookies for the period specified for individual cookies in the list under the link below or until the withdrawal of consent. A list of all cookies that we use is available here."]}),e.jsxs("li",{children:[e.jsx("div",{children:"What are your rights and how can you exercise them?"}),"You can withdraw your consent to the processing of certain cookies by deleting them in the settings of your web browser. You can exercise other rights specified below by sending a request to"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})]})]})]}),e.jsxs("p",{children:[e.jsx("div",{children:"Right of access to personal data"}),"You can ask us at any time to send you a confirmation as to whether or not your personal data are being processed. If we process your data, we will provide you with further details on the processing. If you request it, we will also provide you with a copy of the personal data processed. Please note that the first copy is free of charge, but any following copy will be provided for a small fee."]}),e.jsxs("p",{children:[e.jsx("div",{children:"Right to rectification of personal data"}),"If we process your personal data inaccurately, you can notify us of this fact, and we will rectify the inaccurate personal data without undue delay. If you register on the Website, you will be able to rectify and amend your personal data yourself by editing your user account"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Right to erasure of personal data (“right to be forgotten”)"}),"You have the right to obtain from us erasure of personal data concerning you without undue delay in the following cases: If the data are no longer necessary in relation to the purposes for which we have collected or otherwise processed them; If you withdraw your consent to their processing and, at the same time, there will be no other legal ground for their processing (this only applies in the cases where we process personal data on the basis of your consent);",e.jsx("br",{}),"If you object and there are no overriding legitimate grounds for the processing, or if you object to the processing for direct marketing purposes; or",e.jsx("br",{}),"If your personal data are processed unlawfully."]}),e.jsx("p",{children:"We will not be able to act on the request for erasure of personal data if their processing is necessary for exercising the right of freedom of expression and information, for compliance with any of our legal obligations, for the performance of a task carried out in the public interest, for the establishment, exercise, or defense of our legal claims, or for other reasons provided for by law."}),e.jsxs("p",{children:[e.jsx("div",{children:"Right to restriction of processing"}),"In cases stated in article 18 of the GDPR, you have the right to obtain from us restriction of processing of your personal data for a certain period."]}),e.jsxs("p",{children:["Right to data portability and to the provision of data in a machine-readable format In the case of automated processing based on your consent or performance of the contract, you have the right to receive the data in a structured, commonly used and machine-readable format and to have them transmitted by us to another personal data controller. ",e.jsx("br",{})," Right to object ",e.jsx("br",{})," ","If we process personal data on the basis of our legitimate interest, you have the right to object to such processing. If you file such an objection, we will not be able to process your personal data unless we demonstrate compelling legitimate grounds for the processing, which override your interests or rights and freedoms, or for the establishment, exercise or defense of our legal claims. In case we process your personal data for marketing purposes about our products and services, we will terminate the processing without undue delay upon receipt of the objection. In such a case, we will no longer be able to send you offers of our products and services."]}),e.jsx("p",{children:"If processing is based on your consent, you have the right to withdraw that consent at any time. Withdrawal of consent does not affect the lawfulness of processing based on the consent given before its withdrawal."}),e.jsxs("p",{children:[e.jsx("div",{children:"Right not to be the subject of automated decision-making"}),"Except where processing is necessary for entering into, or performance of, a contract, where this is permitted by applicable law, or based on your express consent, you have the right not to be the subject of any decision which is based solely on automated processing, including profiling, which produces legal effects concerning you or similarly affects you to a significant extent."]}),e.jsxs("p",{children:[e.jsxs("div",{children:["Right to lodge a complaint with the supervisory authority"," "]}),"If you believe that we are processing your data in violation of the relevant legal regulations, you can lodge a complaint with the relevant supervisory authority."]})]})]})})}),e.jsx(x,{})]})}function Ve(){const{pathname:t}=j();return a.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx("main",{className:"privacy pb-28 pt-24 border-b border-gray-400/20 ",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto",children:[e.jsx("div",{className:"heading text-center",children:e.jsx("h2",{className:"text-3xl font-codeProBold",children:"Privacy Policy"})}),e.jsxs("div",{className:"content grid gap-5",children:[e.jsxs("p",{children:["When you use our services, we collect and store personal data about you. This Privacy Statement (the 'Policy') informs you of the methods used to handle your personal data.",e.jsx("br",{}),"Information about the following is included in this Privacy Policy:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"How do you get in touch with the person in charge of your personal data?"}),e.jsxs("ul",{children:[e.jsx("li",{children:"In what ways do we obtain and what information do we gather about you?"}),e.jsx("li",{children:"How do we make use of the information you provide about yourself?"}),e.jsx("li",{children:"How do we keep our customers' personal information safe and secure?"}),e.jsx("li",{children:"We share your personal information with whom?"}),e.jsx("li",{children:"What about international organizations and third countries?"}),e.jsx("li",{children:"When it comes to enforcing your rights, how do you go about it?"})]})]}),e.jsxs("p",{children:[e.jsx("div",{children:"Who is the controller of your personal data and whom to contact?"}),"The controller of personal data is THE FUNDED HUB GLOBAL LLP with its registered office at 27 Old Gloucester Street, London, United Kingdom, WC1N 3AX you can contact AC THE FUNDED HUB GLOBAL LLP at"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})," ","regarding any questions and the exercise of rights relating to the processing of your personal data."]}),e.jsxs("p",{children:[e.jsx("div",{children:"What and how do we collect personal information about you?"}),"The information in this part is meant to give you a broad overview of how and what types of personal data we acquire from you. Personal data includes any information that can be used to identify or connect you to a specific individual."]}),e.jsx("p",{children:"When you use our services, you provide us with much of the information we need to know about you. In particular, this includes:"}),e.jsx("p",{children:"Specifically, whether you sign up for an account, provide personal information, place an order, participate in an event or project, or connect with us via customer service or social media. Identification and contact data include your name; surname; phone number; e-mail; postal address; date of birth; username and password; and any warranty claims you may have made. Payment data include your bank account information; and other data, such as records of communication between you and our company or information about any warranty claims."}),e.jsx("p",{children:"Your personal information that we automatically gather when you utilize our products or services. Among these are information about your device (such as your IP address), information about how you use a website (such as the time and date of your visit and the country from which you accessed the website), and information about how you use a service (such as the login and logout information, your account settings, the value of your fictitious capital, your account currency, business strategy)"}),e.jsx("p",{children:"If you choose to link your social networking accounts to your account on the website, third parties may give us information about you. Examples of these third parties include the providers of trading platforms on which you choose to trade using our services. Financial data (such as kind of instrument, time of starting and closing a trade), as well as data from social networks (such as profit or loss), are included (user name, profile picture, e-mail address associated with the account on the social network). For details on how trading platform providers and social network operators use your personal information for their own purposes, please refer to their privacy policies."}),e.jsxs("p",{children:[e.jsx("div",{children:"Do you know what we do with the information you provide us?"}),"This is how we make use of personally identifiable information:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Creating a user account and signing up:"}),"In order to utilize the services, you must register on the website and create an account, and we use your personal data for this purpose"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information:"}),"Your name, email address, and phone number are required to identify you and get in touch with you."]}),e.jsx("p",{children:e.jsx("div",{children:"The legal justification for the processing of personal data:"})}),e.jsxs("p",{children:["You must provide your personal data to us in order for us to register your user account, as we cannot do so without it.",e.jsx("br",{}),"Providing services, exercising contractual rights and responsibilities, and so on:",e.jsx("br",{}),"We need to process your personal data in order to offer you our services, i.e. to give you appropriate access, tools, and assistance, and to conduct transactions. As a rule of thumb, the following should be followed:"]}),e.jsxs("p",{children:["Personal data includes name, address, phone number, email address, payment information, information about how the service is used, information about simulated transactions, and information from social media profiles that you choose to link to your account on the website. ",e.jsx("br",{}),"Legitimate interest or fulfillment of a contract under which we provide our services are both sufficient legal grounds for processing. We retain your personal information for a short amount of time after we no longer provide you with services. The processing is necessary to preserve and defend our rights, which are based on our legitimate interests."]}),e.jsxs("p",{children:[e.jsx("div",{children:"Promotion of our products and services or participation in events:"}),"The marketing messages we send to our existing and former customers will be based on our products and services. Commercial communications may also be sent to you, to the extent to which you have given us your permission. To make it easy for you to discontinue receiving business communications, each email received will be clearly labelled as business communication and include a link that allows you to do so. As a rule of thumb, the following should be followed:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information"}),e.jsx("div",{children:"Contact information and identification:"}),"The legal justification for the processing of personal data:",e.jsx("br",{}),"If you have used our services, we may occasionally contact you with marketing materials because we have a genuine interest in staying in touch with those who have used our services. If you agree to allow us to use your personal data for marketing reasons, we will do so."]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information:"}),"If you contact us via social media, we collect your name, email address, phone number, and other personal information."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The legal justification for the processing of personal data:"}),"Our legitimate interest in processing data is to keep our customers happy and to make our services more useful to them. Your personal data may be processed in order for us to create, test, improve, and secure some of our services if you utilise them. As a rule of thumb, the following should be followed:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information:"}),"Personal information, such as your name, address, phone number, and email address, as well as information about your device, the website, and your use of the services."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The legal justification for the processing of personal data:"}),"Our legitimate interest in processing data is to make our services better."]}),e.jsxs("p",{children:[e.jsx("div",{children:"Analytics:"}),"We employ consumer behavior analysis to learn more about how our website and services are being used. As a rule of thumb, the following should be followed:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information:"}),"Personal information, such as your name, address, phone number, and email address, as well as information about your device, your use of the website, and the results of your simulated trades."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The legal justification for the processing of personal data:"}),"Our legitimate interest in processing data is to learn more about our customers' buying habits and preferences."]}),e.jsxs("p",{children:[e.jsx("div",{children:"How do we keep our personal information safe?"}),"Personal data is stored on computers and other devices in an encrypted database. Organizational and technical safeguards have been put in place to protect the data that we collect and handle from unauthorized access, modification, disclosure, or destruction."]}),e.jsxs("p",{children:[e.jsx("div",{children:"How long does it take us to process your information?"}),"As stated above, personal data are only processed as necessary to accomplish the stated goals and for as long as is required by law. It is then destroyed or anonymized after that. For the following periods of time, we collect and use personal information:",e.jsx("br",{}),"The processing of personal data is limited to the duration necessary to carry out the agreement and to execute the parties' rights and obligations under it, such as handling complaints, resolving damage claims, or engaging in legal action.",e.jsx("br",{}),"if you don't give us permission to send you business communications, we keep your personal data for a maximum of 5 years from the end of your last contract with us or until you object or unsubscribe from the business communications; if we need to fulfill our legal obligations, we keep your personal data for the period set out by the relevant law;"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Third parties use of your information:"}),"In order to deliver our services, we make your data available or transmit it to the following people:"]}),e.jsx("p",{children:"Simulated trades are made possible by your trading platform provider Website and service providers (such as other companies in the group, cloud service providers, payment system operators, financial institutions, service and support providers, IT companies, marketing and communication agencies, consultants, and postal service providers), as well as other third parties"}),e.jsx("p",{children:"In addition, we may send your personal information to parties for whom you have given your permission, as well as in circumstances where we are legally required to do so. The recipients of your personal data are contractually required to protect your information in accordance with applicable laws and to use it only in line with our instructions in accordance with the terms of their contract with us."}),e.jsx("p",{children:"As data controllers, third parties gather personal information for their own ends. Personal data will be processed in accordance with their own guidelines in this situation."}),e.jsxs("p",{children:[e.jsx("div",{children:"Your rights:"}),"Send a request to"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})," ","to exercise all of your rights, including the right to withdraw your permission. As a user, you have the following rights when it comes to personal data:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"The right to access personal information:"}),"Whenever you want to know if your personal information is being used, you can ask us to give you a confirmation letter. If we do anything with your data, we'll let you know about it. The personal data we collect and use will be made available to you if you request it. The first copy is free, however, subsequent copies can be purchased for a nominal cost. ",e.jsx("br",{}),"Individuals have the right to have their personal information corrected. Please contact us if your personal data is incorrectly processed and we will correct it as soon as possible. If you sign up for an account on the Website, you will be able to edit and correct your personal information."]}),e.jsxs("p",{children:["The 'right to be forgotten' (right to deletion of personal data)",e.jsx("br",{}),"In the following circumstances, you have the right to have your personal data deleted from our systems immediately: As soon as the data gathered or otherwise processed is no longer required for the stated purposes, Your consent to their processing will be revoked if you do so and there is no other legal basis for their processing (this only applies in circumstances where we treat personal data on your consent). Processing for direct marketing reasons, if you object to the processing and there are no overriding legal grounds;",e.jsx("br",{}),"Please contact us if your personal data is incorrectly processed and we will correct it as soon as possible. If you sign up for an account on the Website, you will be able to edit and correct your personal information."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The 'right to be forgotten' (right to deletion of personal data):"}),"In the following circumstances, you have the right to have your personal data deleted from our systems immediately: As soon as the data gathered or otherwise processed is no longer required for the stated purposes, Your consent to their processing will be revoked if you do so and there is no other legal basis for their processing (this only applies in circumstances where we treat personal data on your consent). Processing for direct marketing reasons, if you object to the processing and there are no overriding legal grounds; ",e.jsx("br",{}),"If you believe that your personal data has been improperly processed, please contact us. ",e.jsx("br",{}),"When a request is made for personal data to be erased, we will not be able to do so if their processing is necessary for exercising the right to freedom of expression and information; compliance with any of our legal obligations; performance of a task carried out in the public interest; establishment, exercise or defense of our legal claims; or other reasons permitted by law."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The right to limit the use of data:"}),"Article 18 of the GDPR gives you the right to request a temporary halt to the processing of your personal data. Possession and use of information in a machine-readable format, as well as the right to access to such data When we process your personal information through automatic means, you have the right to receive the data in a structured, commonly used, and machine-readable format and to have it transferred to another personal data controller."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The right to express one's views:"}),"You have the right to object to the processing of your personal data if we do so because it is in our legitimate interests to do so. Our ability to process your personal data is restricted if you raise an objection, and we must show that the processing is necessary to establish, exercise, or defend our legal claims and we have a compelling legitimate interest in doing so."]}),e.jsx("p",{children:"If you object to our use of your personal data for marketing purposes, we shall immediately stop doing so. Our ability to send you offers for our products and services will be terminated if you do this."}),e.jsx("span",{children:"The ability to revoke consent"}),e.jsx("p",{children:"You have the right to revoke your consent at any time if the processing is based on that consent. The lawfulness of processing based on prior consent is unaffected by the withdrawal of consent."}),e.jsxs("p",{children:[e.jsx("div",{children:"The right not to be subjected to automated decision-making processes:"}),"You have the right not to be the subject of any decision based purely on automated processing, including profiling, that generates legal effects concerning you or otherwise affects you to a significant extent, unless this is permitted by relevant legislation or based on your express consent."]}),e.jsx("p",{children:"The right to file a complaint with the governmental agency responsible for investigating complaints."}),e.jsx("p",{children:"You can file a complaint with the relevant supervisory authority if you believe that we are misusing your personal information. Our headquarters are located at this location."}),e.jsxs("p",{children:[e.jsx("div",{children:"Requirements to be met:"}),"We reserve the right to amend this policy at any time, but we will notify you of any such change. A copy of this policy can be found in your Client Section. Use of your own affiliate link shall not count as affiliate commission."]})]})]})})}),e.jsx(x,{})]})}function _e(){const{pathname:t}=j();return a.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx("main",{className:"terms-condition pb-28 pt-24 border-b border-gray-400/20 ",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto",children:[e.jsx("div",{className:"heading text-center",children:e.jsx("h2",{className:"text-3xl font-codeProBold",children:"Terms of Service"})}),e.jsxs("div",{className:"content grid gap-5",children:[e.jsx("h4",{className:"text-xl",children:"Overview"}),e.jsx("p",{children:"By using our site and/or purchasing something from us, you participate in our 'Service' and agree to be bound by the following terms and conditions ('Terms of Service', 'Terms'), as well as any other terms and conditions and policies linked herein and/or accessible through a hyperlink. These Terms of Service apply to all users of the site, including but not limited to browsers, vendors, consumers, merchants, and/or content creators."}),e.jsxs("p",{children:["Please carefully read these Terms of Service before accessing or using our website. You agree to be bound by these Terms of Service by accessing or using any portion of the site. You may not visit the website or use any services if you do not agree to all of the terms and conditions of this agreement. Acceptance is solely restricted to these Terms of Service if these Terms of Service are deemed an offer. The Services are only available to those over the age of 18 who live in the countries where the Services are provided.",e.jsx("br",{}),"Any additional features or tools added to the existing site (within the given accounts area) will be subject to the Terms of Service as well. The most recent version of the Terms of Service will be seen on this page at any time. By making updates and/or modifications to our website, we retain the right to update, amend, or replace any portion of these Terms of Service. It is your right and obligation to check this page for updates on a regular basis. Your continued use or access to the website after such modifications are posted implies acceptance of those changes."]}),e.jsx("p",{children:"IN ACCORDANCE WITH APPLICABLE LAWS, NONE OF THE SERVICES PROVIDED TO YOU BY THE PROVIDER CAN BE CONSIDERED INVESTMENT SERVICES. THE PROVIDER DOES NOT GIVE OR PROVIDE TO YOU ANY GUIDANCE, INSTRUCTIONS, OR INFORMATION ABOUT HOW OR IN WHAT MANNER YOU SHOULD PERFORM TRANSACTIONS WHEN USING THE SERVICES OR OTHERWISE, OR ANY OTHER SIMILAR INFORMATION ABOUT THE INVESTMENT TOOLS TRADED, AND THE PROVIDER DOES NOT ACCEPT ANY SUCH GUIDANCE, INSTRUCTIONS, OR INFORMATION FROM YOU. NEITHER THE SERVICES NOR THE RECOMMENDATIONS CONSTITUTE INVESTMENT ADVICE.THE PROVIDER'S EMPLOYEES, STAFF, AND REPRESENTATIVES ARE NOT AUTHORIZED TO GIVE INVESTMENT ADVICE OR RECOMMENDATIONS. IF ANY INFORMATION OR STATEMENT OF THE PROVIDER'S EMPLOYEES, STAFF, OR REPRESENTATIVES IS INTERPRETED AS INVESTMENT ADVICE OR RECOMMENDATIONS, THE PROVIDER EXPLICITLY DISCLAIMS THAT SUCH INFORMATION OR STATEMENT IS INVESTMENT ADVICE OR RECOMMENDATIONS AND SHALL NOT BE RESPONSIBLE FOR THEM."}),e.jsx("p",{children:"We may give third parties access to our website in order to debug and/or maintain issues with our website, database, or infrastructure. After the scope of work is undertaken, these accesses are monitored and restricted. ALL PAYMENTS ARE FINAL AND ONLY FOR THE PURPOSE OF EVALUATION."}),e.jsx("p",{children:"You must pay registration fees in order to have access to the TheFundedHub (THE FUNDED HUB GLOBAL LLP) platform, models, and services. If the service has begun (i.e the client has started trading and/or the client has not successfully completed the Evaluation, the customer is not entitled to a refund of the registration fee, Evaluation Program that are part of the TheFundedHub offer are not due a refund."}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 1 - Terms of Online Registration"}),"In signing these Terms of Service, you officially confirm that you are of legal age in your state or province of residence, or that you are of legal age and have given us your permission to allow any of your minor children to use this site. As a condition of using the Service, you agree that you will not engage in any illegal or unauthorized activity (including but not limited to copyright laws). Your Services will be terminated immediately if you violate any of the Terms."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 2 – General Conditions"}),"We have the right to refuse service to anyone at any time for any reason. You acknowledge that your content (except credit card information) may be conveyed unencrypted and may entail (a) transmissions across different networks, and (b) modifications to conform and adapt to the technical requirements of connecting networks or devices. Whenever credit card information is sent over a network, it is always encrypted. Without our explicit written consent, you undertake not to replicate, duplicate, copy, sell, resell, or exploit any component of the Service, use of the Service, or access to the Service or any contact on the website through which the service is offered. The titles in this agreement are given solely for convenience and have no bearing on the Terms."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 3 – Information Accuracy, Completeness, and Timeliness"}),"We make every effort to assure that the information we give is reliable; nevertheless, the information is also provided by third parties, and we are not responsible if the material on this site is not accurate, full, or up to date. This site's content is intended for general information purposes only and should not be relied on or used as the only basis for making choices without contacting primary, more accurate, more complete, or more current sources of information. Any reliance on the information on this site is entirely at your own risk. To reduce your risk, you may always send an email to",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})," ","with your inquiries. This website may contain historical information. Historical material is, by definition, out of date and is given only for your convenience. We retain the right to change the contents of this site at any time, but we are under no obligation to update any of the material on our site. You acknowledge that it is your obligation to keep track of changes to our website."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 4 – Changes to the Service and Prices"}),"Our product prices are subject to change without notice. We retain the right to alter or discontinue the Service (accounts offered) (or any part or content thereof) at any time and without notice. We will not be accountable to you or any third person if the Service is modified, priced, suspended, or discontinued."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 5 – Products or Services (if applicable)"}),"We retain the right, but not the obligation, to limit our product or service sales to any individual, geographic location, or jurisdiction. On a case-by-case basis, we may exercise this power. We have the right to limit the number of products or services we offer at any time. All product descriptions and prices are subject to change at our sole discretion at any time without notice. At any moment, we have the right to discontinue any product. Any offer made on this site for a product or service is invalid where prohibited. We don't promise that the quality of any items, services, information, or other material you buy or get from us will match your expectations, or that any flaws in the Service will be rectified."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 6 – Account Information and Billing Accuracy"}),"We have the right to reject any order placed with us. We reserve the right, in our sole discretion, to limit or cancel the number of items purchased per person, per household, or per order. Orders placed by or under the same customer account, the same payment card, and/or orders using the same billing and/or delivery address may be subject to these limitations. If we alter or cancel an order, we may attempt to tell you by contacting the e-mail address and/or billing address/phone number supplied at the time the transaction was placed. We have the right to limit or prohibit orders that appear to be placed by dealers, resellers, or unlicensed distributors at our sole discretion. For any purchases made at our site, you agree to provide current, complete, and accurate purchase and account information. You agree to keep your account and other information up to date, including your email address, credit card numbers, and expiry dates so that we can process transactions and contact you as required."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 7 – Additional Resources"}),"We may offer you access to third-party tools over which we have no control or involvement. You understand and agree that we provide access to such tools 'as is' and 'as available,' with no warranties, representations, or obligations of any kind, and without any endorsement. We accept no liability originating from or related to your use of optional third-party tools. Any use of optional tools made available through the site is solely at your own risk and discretion, and you should ensure that you are acquainted with and approve of the conditions under which the tools are made available by the relevant third-party source (s). We may also provide new services and/or features on the website in the future (including, the release of new tools and resources). These Terms of Service will apply to any additional features and/or services."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 8 – External Links"}),"Third-party materials may be included in certain content, products, and services offered via our Service. Third-party links on our site may take you to websites that are not associated with us. We are not responsible for reviewing or assessing the content or accuracy, and we make no warranty and accept no liability or obligation for any third-party materials or websites, or for any other materials, products, or services provided by third parties. We are not responsible for any risk or damages resulting from the purchase or use of goods, services, resources, materials, or other transactions conducted in connection with any third-party websites. Please carefully research and understand the third-rules parties and procedures before engaging in any transaction. Third-party product complaints, claims, concerns, or inquiries should be directed to the third party."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 9 – Comments, Feedback, and Other Submissions from Users"}),"If you send us creative ideas, suggestions, proposals, plans, or other materials (collectively, 'comments'), whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate, and otherwise use any comments that you forward to us in any medium. We are not and will not be obligated to (1) keep any comments confidential; (2) compensate for any remarks; or (3) reply to any comments."]}),e.jsx("p",{children:"We may, but are under no obligation to, monitor, edit, or delete material that we consider to be illegal, offensive, threatening, libelous, defamatory, pornographic, obscene, or otherwise objectionable, or that infringes any party's intellectual property or these Terms of Service."}),e.jsx("p",{children:"You agree that your comments will not infringe on any third rights, parties including copyright, trademark, privacy, personality, or any other personal or property right. You further agree that your comments will not contain libelous or otherwise illegal, abusive, or obscene content, nor will they contain any computer virus or other malware that might interfere with the functioning of the Service or any connected website. You may not use a fraudulent e-mail address, pose as someone other than yourself, or otherwise mislead us or third parties about the origin of any remarks. Any comments you make, as well as their correctness, are completely your responsibility. We accept no responsibility or liability for any remarks posted by you or any other party."}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 10 – Personal Information"}),"Our Privacy Policy governs the submission of personal data through the website."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 11 – Errors, Inaccuracies, and Omissions"}),"On rare occasions, information on our site or in the Service may contain typographical errors, inaccuracies, or omissions relating to product descriptions, price, promotions, offers, product shipping charges, transit times, or availability. If any information in the Service or on any connected website is erroneous, we have the right to remedy any mistakes, inaccuracies, or omissions, and to modify or update information or cancel orders at any time without prior notice (including after you have submitted your order). Except as required by law, we make no commitment to update, revise, or clarify anything in the Service or on any connected website, including, without limitation, price information. There is no specific update or refresh date applied in the Service or on any associated website to indicate that all information in the Service or on any related website has been edited or updated."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 12 – Restricted Uses"}),"You are prohibited from using the site or its content: (a) for any illegal purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any regional and global, federal, provincial, or state regulations, rules, laws, or state regulations; (d) to infringe upon or violate our intellectual rights or the intellectual property rights of others; and (e) to infringe upon or infringe our intellectual rights or the intellectual property rights of others.(e) to harass, misuse, insult, harm, besmirch, slander, disparage, intimidate, or discriminate due to gender, sexual orientation, faith, ethnic background, race, age, national or ethnic origin, or incapacity; (f) to submit misinformation; (g) to upload or transmit viruses or any other type of malicious code that will or may be used to affect the functionality or operation of the Service or any related website, other websites, or the Internet; (h) to submit false or misleadingFor breaching any of the prohibited uses, we retain the right to suspend your usage of the Service or any connected website."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 13 - Unauthorized trading practices"}),e.jsxs("ul",{className:" list-disc ml-8 grid gap-5",children:[e.jsx("li",{children:"It is prohibited for the Customer to intentionally or unintentionally use trading strategies that take advantage of errors in the Services, such as inaccuracies in displayed prices or delays in their updates."}),e.jsx("li",{children:"The Customer is not permitted to execute trades using an external or slow data feed."}),e.jsx("li",{children:"The Customer is prohibited from engaging, either alone or in cooperation with others, in any trades or combination of trades across connected accounts or accounts held with different TheFundedHub entities, if the purpose of such trades is to manipulate trading. Examples of such manipulation include entering into opposite positions simultaneous"}),e.jsx("li",{children:"The Customer is prohibited from conducting trades that violate the terms and conditions of TheFundedHub. Any trades that go against these terms and conditions are not allowed. The Customer must comply with the rules set by TheFundedHub and the Trading Platform when using the Services"}),e.jsx("li",{children:"Do not use any software, artificial intelligence, ultra-high speed, or mass data entry that could manipulate or abuse our systems or services, or give you an unfair advantage."}),e.jsx("li",{children:"The Customer is prohibited from performing gap trading by opening trades during scheduled major global news, macroeconomic events, or corporate reports or earnings that may affect the relevant financial market for trading financial instruments."}),e.jsx("li",{children:"The customer is not allowed to perform trades that are inconsistent with the way trading is typically carried out in the forex or any other financial market. They should also avoid any activities that may cause financial or other harm to TheFundedHub Trading, such as over-leveraging, over-exposure, making one-sided bets, or account rolling. If the customer engages in any of these activities, it may raise valid concerns that they are intentionally harming TheFundedHub Trading."}),e.jsxs("li",{children:["As one of our customers, you should be aware of this and acknowledge that all of our services are intended solely for personal use by the customer. As a result, only you may access your TheFundedHub Account and execute transactions. Hence, you should not, and you therefore do not,",e.jsxs("ul",{className:"inner-li mt-5 grid gap-5 ml-5",children:[e.jsx("li",{className:"relative before:absolute before:-left-[1rem] before:top-1/2 before:content-[''] before:h-[0.3rem] before:w-[0.3rem] before:rounded-full before:border",children:"Neither you nor any third party shall participate in or collaborate with any third party to have such third party execute trades for you, whether such third party is a private individual or a professional, or permit access to or trading on your TheFundedHub Account by any third party;"}),e.jsx("li",{className:"relative before:absolute before:-left-[1rem] before:top-1/2 before:content-[''] before:h-[0.3rem] before:w-[0.3rem] before:rounded-full before:border",children:"Access any third-party TheFundedHub Account, trade on behalf of any third-party, or conduct any account management or similar services where you commit to trade, run, or manage the TheFundedHub Account on behalf of another user, whether professionally or otherwise."})]})]}),e.jsx("li",{className:"marker:text-transparent ml-5",children:"Additionally, you agree not to abuse the Services by engaging in trades that do not adhere to market-accepted risk management guidelines for trading on financial markets. This includes, among other things, the following actions: (i)opening positions with sizes that are noticeably larger than those of your other trades, whether on this account or another one of yours; (ii) opening positions with numbers that are noticeably smaller or larger than those of your other trades, whether on this account or another one of yours.(iii) Using high level of margin."}),e.jsx("li",{className:"marker:text-transparent ml-5",children:"TheFundedHub reserves the right to determine, at its own discretion, whether certain trades, practices, strategies or situations are Forbidden Trading Practices."}),e.jsxs("li",{className:"marker:text-transparent ml-5",children:["It is advised that all TheFundedHub clients adhere to the following trading guidelines also. Otherwise, TheFundedHub won't be held responsible for whatever repercussions it chooses to have.",e.jsx("ul",{className:"mt-5 ml-5 text-wht inner-li",children:e.jsx("li",{className:"relative before:absolute before:-left-[1rem] before:top-1/2 before:content-[''] before:h-[0.3rem] before:w-[0.3rem] before:rounded-full before:border",children:"During KYC it’s strictly recommended to provide right information and not to manipulate or try to impersonate others. It is also advised not to use any VPS/VPN during KYC verification."})})]}),e.jsx("li",{className:"marker:text-transparent ml-5",children:"If the Customer engages in any of the prohibited trading practices mentioned above or does not follow the guidelines, TheFundedHub may pause or terminate payout. TheFundedHub may also remove any trades that violate the prohibition from the Customer's trading history and not count their results in the profits and losses achieved by the demo trading. Furthermore, TheFundedHub Trading reserves the right to cancel the Customer's TheFundedHub Account immediately and terminate this Agreement, and/or reduce the offered leverage on products to 1:5 or lower on any or all of the Customer's accounts. If any or all of the prohibited trading practices are performed on one or more TheFundedHub Accounts of one Customer or multiple Customers, or by combining trading on TheFundedHub Account and trading through Evaluation Services (i.e. TheFundedHub Demo phase-1 or Phase-2), then TheFundedHub Trading has the right to cancel all TheFundedHub Accounts and terminate respective agreements, used for or involved in the prohibited trading practices."})]})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 14 – Limitation of Liability; Disclaimer of Warranties"}),e.jsx("p",{children:"TheFundedHub does not promise, represent, or assure that your use of our service will be error-free, speedy, secure, or uninterrupted. We do not represent that the results that may be achieved from the use of the service will be accurate or trustworthy. You accept that we may suspend the service for an extended amount of time or terminate it at any moment, with or without notice to you. You expressly acknowledge that your use of the service, or inability to utilize it, is at your own risk. The service and all products and services delivered to you via the service are provided 'as is' and 'as available for your use, without any express or implied representation, warranties, or conditions of any kind, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.TheFundedHub, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors shall in no event be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation, lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability, or otherwise, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because certain states or countries do not allow the exclusion or limitation of responsibility for consequential or incidental damages, our liability shall be limited to the fullest extent permissible by law in such states or jurisdictions."})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 15 – Indemnification"}),e.jsx("p",{children:"You indemnify and hold, uphold, and retain Intellimeter and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns, and employees harmless from any claim or demand made by any third party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference or your violation of any law or regulation."})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 16 – Severability"}),e.jsx("p",{children:"If any provision of these Terms of Service is found to be unlawful, void, or unenforceable, that provision shall be enforced to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed severed from these Terms of Service; however, such determination shall have no bearing on the validity and enforceability of the remaining provisions."})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 17 – Termination"}),"For all reasons, the parties' responsibilities and liabilities accrued prior to the termination date will survive the termination of this agreement. Unless and until either you or us terminate these Terms of Service, they will remain in force. You may terminate these Terms of Service at any time by telling us that you no longer want to utilize our Services or by discontinuing your usage of our website."]}),e.jsx("p",{children:"We may also terminate this agreement at any time without notice if you fail, or we suspect you have failed, to comply with any term or provision of these Terms of Service, and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly deny you access to our Services (or any part thereof)."}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 18 – Refund Policy"}),"By sending an e-mail to"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"}),", the Customer may request the termination of the Client Section at any time. Sending a request to cancel the Client Section is regarded as a request by the Customer to terminate the contract, with the Customer losing access to the Services, including the Client Section and Trading Platform. The Provider will send an email to the Customer to confirm receipt of the request, at which point the contractual relationship between the Customer and the Provider will be dissolved. The Customer is not entitled to a refund of any fees previously paid or other expenditures spent in this situation."]}),e.jsxs("p",{children:["If the Customer engages in any of the forbidden practices repeatedly, and the Provider has previously notified the Customer thereof, the Provider may prevent the Customer from accessing all Services or their parts, including access to the Client Section and Trading Platform, without any compensation. In such a case, the Customer is not entitled to a refund of the fees paid. After paying the fee for the selected option of the TheFundedHub program, the Customer will receive the relevant login data for the Trading Platform at the e-mail address provided by the Customer or in the Client Section. The Customer activates the account by receiving the account credential. IF YOU ARE A CONSUMER, YOU ACKNOWLEDGE THAT, BY OPENING THE FIRST TRADE, YOU EXPRESSLY DEMAND THE PROVIDER TO COMPLETE THE SERVICES BEFORE THE EXPIRY OF THE PERIOD FOR WITHDRAWAL FROM THE CONTRACT, WHICH AFFECTS YOUR RIGHT TO WITHDRAW FROM THE CONTRACT. If you do not activate the TheFundedHub account within 30 calendar days of the date on which it was made available to you, your access to it will be suspended. You can request the renewal of access by sending an e-mail to"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})," ","within 3 days of the initial suspension, otherwise, we will terminate the provision of the Services without any right to a refund of the fee."]}),e.jsx("p",{children:"If the Customer files an unjustifiable complaint about the paid fee or disputes the paid fee with the Customer's bank or payment service provider (e.g., through chargeback services, dispute services, or other similar services), on the basis of which an annulment, cancellation, or refund of the fee or any part thereof is requested, the Provider reserves the right, at its sole discretion, to stop providing any services to the Customer and refuse any future provision of any services."}),e.jsx("p",{children:"Both the Customer and TheFundedHub mutually commit to conducting their dealings and interactions with fairness and respect. They shall refrain from causing harm to each other's reputation or legitimate interests, both during and after the trading period. Any disagreements or disputes that may arise between them will be resolved in accordance with the terms of this Agreement and the applicable legal framework."}),e.jsx("p",{children:"If you do not begin trading within 7 days after registering, you may request a refund. It should be noted that after the trader has begun trading on the account, the fees are non-refundable. This includes both full and partial refunds."}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 19 – Entire Agreement"}),"We shall not be deemed to have waived any right or provision of these Terms of Service if we fail to exert or enforce such right or provision. These Terms of Service, as well as any policies or operating rules posted by us on this site or in relation to The Service, represent the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications, and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service). Any ambiguity in the interpretation of these Terms of Service should not be interpreted against the party who drafted them."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 20 – Governing Law"}),e.jsx("p",{children:"These Terms of Service, as well as any additional agreements under which we give you Services, are regulated and construed in accordance with the user's legal jurisdiction."})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 21 – Local Law"}),"It's recommended to know your local regulations if there are any. You're taking service as per your own risk and responsibilities. By declaring that you are over 18 years old and thereby TheFundedHub isn't responsible for any action taken by its customer. If there is any violation of local law, you are solely responsible for this."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 22– Changes to Terms of Service"}),"The user's legal jurisdiction governs and is construed in line with these Terms of Service and any other agreements whereby we provide you Services."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 23 – Contact Information"}),"27 Old Gloucester Street, London, United Kingdom, WC1N 3AX."]}),e.jsx("p",{children:e.jsx("div",{})})]})]})})}),e.jsx(x,{})]})}function Je(){const{pathname:t}=j();return a.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx("main",{className:"privacy pb-28 pt-24 border-b border-gray-400/20 overflow-hidden",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto",children:[e.jsx("div",{className:"heading text-center",children:e.jsx("h2",{className:"text-3xl font-codeProBold",children:"Risk Disclosure"})}),e.jsxs("div",{className:"content grid gap-5",children:[e.jsx("p",{children:"The Funded Hub's content is intended to be generic in nature. A recommendation, endorsement, or sponsorship of any security, company, or fund is not intended by the Company`'s information. Lesser-known clients or consumers may not be represented in testimonials on the Company's websites. The Company, its partners, representatives, agents, employees, and contractors accept no responsibility or liability for any use or misuse of such information."}),e.jsxs("p",{children:[e.jsx("div",{children:"Futures and FX trading are not suitable for all investors."}),"An investor may lose all or part of their initial investment. Trading should only be done with risk capital—money that can be lost without endangering one's financial stability or lifestyle. This is not a solicitation or offer to buy or sell futures, options, or forex. Past performance does not guarantee future results."]}),e.jsx("p",{children:"There are some restrictions under CFTC Rule 4.41 - Hypothetical or simulated performance outcomes Simulated outcomes do not represent actual trading. Because the deals were not actually performed, the outcomes may have under-or over-compensated for market conditions like lack of liquidity. Simulated trading programs are generally created with the advantage of hindsight. Notification that any account will or is likely to generate such profit or loss is made."}),e.jsxs("p",{children:[e.jsx("div",{children:"Risky Warning:"}),"Margin trading CFDs include a high level of risk and are not suited for all investors. Before trading CFDs, you should carefully assess your trading objectives, experience, and risk appetite. You could lose more than your initial investment, so don't deposit anything you can't afford to lose. Understand the hazards and take precautions to manage them."]}),e.jsx("p",{children:"The site may contain links to third-party websites. Information or materials posted on sites connected to our site have not been reviewed by our company and are not our responsibility. By linking to a third-party website, the Company is not endorsing or recommending any of the third-product parties or This site's content is solely for informational purposes. It should not be construed as an offer or solicitation in any area where such action is prohibited or as a suggestion to purchase, sell, or otherwise deal with any particular currency or precious metal trade. You should exit this site immediately if you are unsure about your local currency and spot metal trading laws."}),e.jsx("p",{children:"It is advised to be aware of any local laws. Before trading currencies or metals, you should seek independent financial, legal, and tax counsel. This site does not constitute advice from the Company or any of its affiliates, directors, officers, or employees."}),e.jsx("p",{children:"Any person in any nation or territory where such distribution or usage would be contrary to local law or regulation is prohibited from using the Company's services."}),e.jsx("p",{children:"We want to sharpen your trading style more than ever. We believe that you will perform the best when you are within your comfort zone. So you’re allowed to trade with any trading style that you like most. We aim to get the best out of you and once you trade freely. We all will grow together. So choose your trading plan wisely."})]})]})})}),e.jsx(x,{})]})}function _(){return e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx("section",{className:"relative purple-shadow h-[450px] md:h-[550px] lg:h-[650px]",children:e.jsx("div",{className:"container z-10 relative h-full",children:e.jsxs("div",{className:"wrapper h-full flex flex-col gap-4 justify-center items-center text-center text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl",children:[e.jsx("h1",{children:"Your payment has been successfully processed!"}),e.jsx("h1",{className:"text-4xl text-primary",children:"Thank you!"})]})})}),e.jsx(x,{})]})}const J=()=>!(typeof window>"u"||!window.document||!window.document.createElement);class ee extends a.Component{constructor(i){super(i),this.insertScript=this.insertScript.bind(this),this.onScriptLoaded=this.onScriptLoaded.bind(this)}onScriptLoaded(){typeof this.props.onLoaded=="function"&&this.props.onLoaded()}insertScript(i,r){const o=document.createElement("script");r?o.defer=!0:o.async=!0,o.id="ze-snippet",o.src=`https://static.zdassets.com/ekr/snippet.js?key=${i}`,o.addEventListener("load",this.onScriptLoaded),document.body.appendChild(o)}componentDidMount(){if(J&&!window.zE){const{defer:i,zendeskKey:r,...o}=this.props;this.insertScript(r,i),window.zESettings=o}}componentWillUnmount(){!J||!window.zE||(delete window.zE,delete window.zESettings)}render(){return null}}ee.propTypes={zendeskKey:K.string.isRequired,defer:K.bool};function Xe(t,i){const[r,o]=a.useState(1),s=Math.ceil(t.length/i);function l(){const f=(r-1)*i,u=f+i;return t.slice(f,u)}function d(){o(f=>Math.min(f+1,s))}function h(){o(f=>Math.max(f-1,1))}function p(f){const u=Math.max(1,f);o(N=>Math.min(u,s))}return{next:d,prev:h,jump:p,currentData:l,currentPage:r,maxPage:s}}let D=[{link:"blog-1",img:"blog1",title:"Leveraging Leverage: A Guide for Forex Traders",date:"26 October 2023",alt:"blog-img",para:`<span></span> Explore the power of leverage
                  in forex trading and how it can magnify your potential gains
                  and losses. Discover how to use leverage wisely with valuable
                  insights throughout the post. Forex trading offers an
                  incredible opportunity for traders to capitalize on currency
                  price movements. One of the tools that magnifies this
                  potential is leverage. In this comprehensive guide,
                  we&apos;ll delve into the concept of leverage, its advantages
                  and risks, and how you can effectively utilize it to your
                  advantage in the dynamic forex market.`,data:`<div className="des">
                  <span></span> Explore the power of leverage
                  in forex trading and how it can magnify your potential gains
                  and losses. Discover how to use leverage wisely with valuable
                  insights throughout the post. Forex trading offers an
                  incredible opportunity for traders to capitalize on currency
                  price movements. One of the tools that magnifies this
                  potential is leverage. In this comprehensive guide,
                  we&apos;ll delve into the concept of leverage, its advantages
                  and risks, and how you can effectively utilize it to your
                  advantage in the dynamic forex market.
                </div>

                <div className="txt">
                  <h4>Understanding Leverage in Forex Trading</h4>
                  <p>
                    Leverage enables traders to control a larger position size
                    with a smaller amount of capital. For instance, with a
                    leverage of 1:100, you can control a $10,000 position with
                    just $100 of your own capital. This amplifies both potential
                    profits and potential losses.
                  </p>
                </div>

                <div className="para">
                  <h4>Advantages of Leverage</h4>
                  <ul>
                    <li>
                      <span>Maximized Exposure:</span> Leverage allows traders
                      to access larger positions than their initial investment,
                      potentially leading to higher returns when correctly used.
                    </li>
                    <li>
                      <span>Lower Capital Requirement: </span>
                      Leverage makes forex trading accessible to traders with
                      limited capital, enabling them to participate in the
                      market.
                    </li>
                    <li>
                      <span>Diversification: </span>
                      With leverage, you can diversify your trading portfolio
                      and explore different currency pairs without needing
                      significant capital.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>Risks of Leverage</h4>

                  <ul>
                    <li>
                      <span> Amplified Losses: </span>While leverage enhances
                      potential profits, it equally amplifies potential losses.
                      Unwise use of leverage can quickly deplete your trading
                      account.
                    </li>
                    <li>
                      <span>Margin Calls:</span> If your losses exceed the
                      margin requirements, you may receive a margin call,
                      requiring you to deposit additional funds to cover the
                      losses.
                    </li>
                    <li>
                      <span>Emotional Impact: </span>High leverage can induce
                      emotional trading, leading to impulsive decisions and poor
                      risk management.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>Using Leverage Wisely</h4>

                  <ul>
                    <li>
                      <span>Risk Management:</span> Always use proper risk
                      management techniques to protect your capital. Determine
                      your stop-loss and take-profit levels before entering a
                      trade.
                    </li>
                    <li>
                      <span> Leverage Levels: </span>Consider starting with
                      lower leverage levels until you gain experience and
                      confidence in your trading strategy.
                    </li>
                    <li>
                      <span> Education: </span> Invest time in educating
                      yourself about leverage, risk, and how to implement
                      effective risk management strategies.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>The Funded Hub: A Partner in Your Trading Journey</h4>
                  <p>
                    Navigating leverage requires not only knowledge but also
                    practical experience. The Funded Hub, a leading prop trading
                    firm, provides traders with the opportunity to showcase
                    their skills while minimizing personal financial risk.
                    Here&apos;s how The Funded Hub can support you:
                  </p>
                  <ul>
                    <li>
                      <span>Challenge Evaluation: </span>Prove your trading
                      abilities by passing our evaluation challenge.
                    </li>
                    <li>
                      <span>Trading Capital: </span>Gain access to our trading
                      capital and keep a substantial portion of the profits you
                      generate.
                    </li>
                    <li>
                      <span>Risk Management: </span>Benefit from risk management
                      guidelines, ongoing support, and a community of traders
                      dedicated to success.
                    </li>
                  </ul>
                </div>

                <div className="des">
                  <h5>Conclusion</h5>
                  <p>
                    Leverage can be a powerful tool in the hands of skilled
                    traders, offering the potential for significant gains.
                    However, it&apos;s essential to approach leverage with
                    caution, prioritizing risk management and ongoing education.
                    The Funded Hub is here to provide you with the resources and
                    support you need to leverage your trading potential and
                    succeed in the dynamic world of forex trading. Elevate your
                    trading journey with the wisdom of leverage and the backing
                    of The Funded Hub.
                  </p>
              </div>`},{link:"blog-2",img:"blog2",title:`Exploring the World of Forex Market Hours: A Guide to
                  Optimizing Your Trading Strategy`,para:`<span> </span>
                  Discover the significance of forex market hours and how they
                  impact your trading strategy. Learn how The Funded Hub offers
                  trading capital to successful traders, enabling them to excel
                  in the dynamic forex market.`,date:"23 October 2023",alt:"blog-img",data:`<div className="des">
                  <span> </span>
                  Discover the significance of forex market hours and how they
                  impact your trading strategy. Learn how The Funded Hub offers
                  trading capital to successful traders, enabling them to excel
                  in the dynamic forex market.
                  <br />
                  <p>
                    Forex trading is a 24-hour endeavor that spans the globe,
                    offering traders around-the-clock opportunities to
                    capitalize on price movements. Understanding the different
                    trading sessions and their characteristics is vital for
                    crafting a winning trading strategy. In this guide,
                    we&apos;ll delve into the intricacies of forex market hours
                    and showcase how The Funded Hub can provide trading capital
                    to qualified traders for optimal trading success.
                  </p>
                </div>

                <div className="para">
                  <h4>Navigating Forex Market Hours</h4>
                  <p>
                    The forex market is divided into distinct trading sessions,
                    each characterized by unique market dynamics:
                  </p>
                  <ul>
                    <li>
                      <span>Sydney Session: </span>
                      Kicking off the trading week, the Sydney session sets the
                      tone with relatively lower volatility and liquidity.
                    </li>
                    <li>
                      <span>Tokyo Session: </span>The Tokyo session witnesses
                      increased activity as it overlaps with the Sydney and
                      London sessions, offering potential trading opportunities.
                    </li>
                    <li>
                      <span>London Session: </span>The London session is
                      renowned for its high volatility and liquidity, with
                      significant price movements in major currency pairs.
                    </li>
                    <li>
                      <span>New York Session: </span>The New York session adds
                      to the excitement, especially when it overlaps with the
                      London session. This period often experiences strong
                      volatility.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>Tailoring Your Trading Strategy</h4>
                  <p>
                    Adapting your trading strategy to different market hours can
                    be the key to success:
                  </p>
                  <ul>
                    <li>
                      <span>Session Overlaps: </span>During overlapping
                      sessions, such as the London-New York overlap, market
                      volatility and liquidity tend to spike. These periods
                      present prime opportunities for active traders.
                    </li>
                    <li>
                      <span>Economic Events:</span> Stay informed about major
                      economic news releases, which frequently occur during the
                      London and New York sessions. Adjust your strategy based
                      on the anticipated impact of these releases.
                    </li>
                    <li>
                      <span>Time Zone Advantage: </span>If your time zone
                      doesn&apos;t align with your preferred trading session,
                      consider adjusting your schedule to participate during
                      peak activity times.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>The Funded Hub: Your Path to Success</h4>
                  <p>
                    The Funded Hub stands out as a prop trading firm dedicated
                    to empowering traders with trading capital and
                    opportunities. Our unique approach involves providing
                    talented traders with the capital they need to trade
                    profitably in the forex market. Here&apos;s how it works:
                  </p>
                  <ul>
                    <li>
                      <span>Challenge Evaluation:</span> Pass our trading
                      challenge by showcasing your trading skills and risk
                      management abilities.
                    </li>
                    <li>
                      <span>Trading Capital: </span>Upon successful completion
                      of the challenge, gain access to our trading capital and
                      keep a substantial share of the profits you generate.
                    </li>
                    <li>
                      <span>Ongoing Support: </span>Benefit from ongoing
                      support, risk management guidelines, and a community of
                      fellow traders, all aimed at helping you succeed.
                    </li>
                  </ul>
                </div>

                <div className="des">
                  <h5>Empower Your Trading Journey with The Funded Hub</h5>
                  <p>
                    The Funded Hub offers traders the chance to trade with
                    significant capital without the burden of personal financial
                    risk. We understand that success in the forex market
                    requires more than just theoretical knowledge; it demands
                    practical experience and the ability to navigate real market
                    conditions. That&apos;s why we provide aspiring traders with
                    the resources they need to thrive in this challenging yet
                    rewarding arena.
                  </p>
                </div>

                <div className="des">
                  <h5>Conclusion</h5>
                  <p>
                    Mastering forex market hours and aligning your strategy with
                    different trading sessions can significantly enhance your
                    trading results. The Funded Hub takes your trading journey a
                    step further by offering the capital you need to succeed.
                    Join us today, prove your skills, and embark on a journey of
                    trading excellence with The Funded Hub by your side.
                  </p>
                </div>
`},{link:"blog-3",img:"",title:"Understanding Major, Minor, and Exotic Currency Pairs in Forex Trading",para:`<span></span> Dive into the world of forex
                  trading and grasp the concept of major, minor, and exotic
                  currency pairs. Explore the dynamics of each pair and learn
                  how to leverage them to your advantage in the forex market.`,date:"19 October 2023",alt:"blog-img",data:`<div className="des">
                  <span></span> Dive into the world of forex
                  trading and grasp the concept of major, minor, and exotic
                  currency pairs. Explore the dynamics of each pair and learn
                  how to leverage them to your advantage in the forex market.
                  <br />
                  <p>
                    In the vast realm of forex trading, understanding the
                    various types of currency pairs is crucial to navigating the
                    markets effectively. Currency pairs are the backbone of
                    forex trading, allowing traders to speculate on the exchange
                    rate between two different currencies. These pairs are
                    categorized into three main groups: major, minor, and exotic
                    currency pairs.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Major Currency Pairs: The Cornerstone of Forex Trading
                  </h5>
                  <p>
                    Major currency pairs consist of the most traded currencies
                    globally and are paired with the US dollar (USD). They
                    include EUR/USD, GBP/USD, USD/JPY, USD/CHF, and USD/CAD.
                    These pairs offer high liquidity, tighter spreads, and are
                    known for their lower volatility compared to other pairs.
                    Traders are often drawn to major pairs due to their
                    stability and the availability of extensive market analysis
                    resources.
                  </p>
                </div>

                <div className="des">
                  <h5>Minor Currency Pairs: Broadening Your Options</h5>
                  <p>
                    Minor currency pairs, also known as cross currency pairs,
                    exclude the US dollar. They involve other major currencies
                    such as EUR, GBP, JPY, and AUD. Examples of minor pairs are
                    EUR/GBP, GBP/JPY, and AUD/JPY. Trading minors can provide
                    diversification in your trading portfolio and offer unique
                    trading opportunities. While they may exhibit slightly wider
                    spreads and lower liquidity, skilled traders can capitalize
                    on their price movements and trends.
                  </p>
                </div>

                <div className="des">
                  <h5>Exotic Currency Pairs: Unveiling Unique Opportunities</h5>
                  <p>
                    Exotic currency pairs involve one major currency and one
                    currency from a developing or emerging economy. Examples
                    include USD/SGD, EUR/TRY, and GBP/MXN. Exotic pairs offer
                    higher spreads and increased volatility, making them
                    appealing to traders seeking potentially larger profits.
                    However, due to their lower liquidity and increased risk,
                    they require a deep understanding of the economic and
                    geopolitical factors affecting the involved countries.
                  </p>
                </div>

                <div className="des">
                  <h5>Navigating the Market with Precision</h5>
                  <p>
                    To effectively trade these currency pairs, it&apos;s
                    essential to understand their characteristics and monitor
                    the factors that influence their movements. Market trends,
                    economic indicators, geopolitical events, and interest rate
                    differentials all play a role in determining currency pair
                    fluctuations. As you explore the forex market, remember that
                    each currency pair has its unique dynamics and risk factors.
                    Engaging in thorough research and analysis is key to making
                    informed trading decisions. And that&apos;s where
                    experienced firms like The Funded Hub come into play.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Elevate Your Forex Trading Experience with The Funded Hub
                  </h5>
                  <p>
                    The Funded Hub offers aspiring traders the opportunity to
                    trade with proprietary capital, advanced trading platforms,
                    and expert support. Our platform empowers you to access
                    major, minor, and exotic currency pairs while managing risk
                    effectively. Whether you&apos;re a beginner or an
                    experienced trader, The Funded Hub provides a supportive
                    environment to enhance your forex trading journey.
                  </p>
                </div>

                <div className="des">
                  <h5>In Conclusion</h5>
                  <p>
                    Understanding major, minor, and exotic currency pairs is a
                    fundamental step in becoming a successful forex trader. Each
                    pair comes with its own set of characteristics, offering
                    various trading opportunities and challenges. The Funded Hub
                    is your partner in exploring these pairs and harnessing
                    their potential for profitable trading. Begin your forex
                    journey today with The Funded Hub and unlock the world of
                    currency trading possibilities.
                  </p>
                </div>`},{link:"blog-4",img:"",title:"How Does Forex Trading Work? A Comprehensive Guide",para:`<span> </span>Unlock forex trading&apos;s
                  potential with The Funded Hub. Learn how forex trading works:
                  currency pairs, bid/ask prices, leverage, and more. Trade with
                  proprietary capital, advanced platforms, and expert support.
                  Start your journey now!`,date:"18 October 2023",alt:"blog-img",data:`<div className="des">
                  <span> </span>Unlock forex trading&apos;s
                  potential with The Funded Hub. Learn how forex trading works:
                  currency pairs, bid/ask prices, leverage, and more. Trade with
                  proprietary capital, advanced platforms, and expert support.
                  Start your journey now!
                </div>

                <div className="des">
                  <h5>Introduction</h5>
                  <p>
                    If you&apos;ve ever wondered how the world of forex trading
                    operates, you&apos;re in the right place. Forex trading,
                    also known as foreign exchange trading, is a dynamic and
                    exciting financial market that allows individuals and
                    institutions to trade currencies and potentially profit from
                    the fluctuations in exchange rates. In this guide, brought
                    to you by The Funded Hub, we&apos;ll take you through the
                    basics of how forex trading works, the key players involved,
                    and how you can get started on your forex trading journey.
                  </p>
                </div>

                <div className="des">
                  <h5>Understanding Forex Trading</h5>
                  <p>
                    Forex trading involves the exchange of one currency for
                    another at an agreed-upon price. The aim is to buy a
                    currency at a lower price and sell it at a higher price,
                    thus generating a profit. Unlike traditional stock markets,
                    the forex market operates 24 hours a day, five days a week,
                    due to its global nature and the involvement of major
                    financial centers around the world.
                  </p>
                </div>

                
                <div className="para">
                  <h4>Key Players in the Forex Market</h4>
                  <ul>
                    <li>
                      <span>Banks and Financial Institutions: </span>
                      Major banks and financial institutions participate in
                      forex trading to facilitate international trade, manage
                      foreign exchange reserves, and speculate on currency
                      movements.
                    </li>
                    <li>
                      <span>Central Banks: </span>Central banks play a
                      significant role by implementing monetary policies that
                      impact their country&apos;s currency. Interest rate
                      decisions and interventions are examples of tools they use
                      to influence exchange rates.
                    </li>
                    <li>
                      <span>Corporations: </span>Multinational corporations
                      engage in forex trading to manage currency risk associated
                      with their international operations and trade.
                    </li>
                    <li>
                      <span>Retail Traders: </span>Individual traders, like you,
                      participate in the forex market through online platforms
                      provided by brokers. These traders aim to profit from
                      price movements by speculating on currency pairs.
                    </li>
                    <li>
                      <span>Brokers and Proprietary Firms: </span>Forex brokers,
                      such as The Funded Hub, provide traders with access to the
                      market by offering trading platforms, market analysis, and
                      leverage. Proprietary firms like ours allocate trading
                      capital to traders, enabling them to trade with our
                      resources and share profits.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>How Forex Trading Works</h4>

                  <ul>
                    <li>
                      <span>Currency Pairs: </span>In forex trading, currencies
                      are quoted in pairs, such as EUR/USD, GBP/JPY, and
                      USD/JPY. The first currency in the pair is the base
                      currency, while the second is the quote currency. The
                      exchange rate indicates how much of the quote currency is
                      needed to purchase one unit of the base currency.
                    </li>
                    <li>
                      <span>Bid and Ask Price: </span>The bid price is the price
                      at which you can sell the base currency, and the ask price
                      is the price at which you can buy the base currency. The
                      difference between the bid and ask price is known as the
                      spread.
                    </li>
                    <li>
                      <span>Going Long and Going Short: </span>Going long means
                      buying the base currency and selling the quote currency in
                      anticipation of the base currency&apos;s value increasing.
                      Going short involves selling the base currency and buying
                      the quote currency, expecting the base currency&apos;s
                      value to decrease.
                    </li>
                    <li>
                      <span>Leverage: </span>Leverage allows traders to control
                      a larger position with a smaller amount of capital. While
                      it amplifies potential profits, it also increases the risk
                      of losses. The Funded Hub offers competitive leverage
                      options to suit different trading styles.
                    </li>
                    <li>
                      <span>Pips and Lots: </span>A pip is the smallest price
                      movement in a currency pair. Lot sizes determine the
                      volume of a trade. Standard lots are typically 100,000
                      units of the base currency, while mini and micro lots
                      offer smaller trading sizes.
                    </li>
                  </ul>
                </div>

                
                <div className="para">
                  <h4>Getting Started with The Funded Hub</h4>
                  <p>
                    At The Funded Hub, we&apos;re dedicated to empowering
                    traders of all experience levels to succeed in the forex
                    market. Our comprehensive approach includes:
                  </p>
                  <ul>
                    <li>
                      <span>Capital Allocation: </span>Trade with our
                      proprietary capital and share profits based on
                      performance.
                    </li>
                    <li>
                      <span>Advanced Trading Platforms: </span>Access
                      user-friendly and powerful trading platforms to execute
                      your trades.
                    </li>
                    <li>
                      <span>Educational Resources: </span>Benefit from training,
                      webinars, and market analysis to enhance your trading
                      skills.
                    </li>
                    <li>
                      <span>Risk Management: </span>Our risk management
                      guidelines help you navigate the market responsibly.
                    </li>
                    <li>
                      <span>Professional Support: </span>Count on our
                      experienced team for guidance and support throughout your
                      trading journey.
                    </li>
                  </ul>
                </div>

                <div className="des">
                  <h5>Conclusion</h5>
                  <p>
                    Forex trading offers immense potential for individuals to
                    participate in a global market and capitalize on currency
                    fluctuations. Understanding the basics, key players, and
                    trading mechanics is essential for success. The Funded Hub
                    provides a unique opportunity to trade with a prop
                    firm&apos;s resources, giving you the edge you need to excel
                    in the forex world. Whether you&apos;re a beginner or an
                    experienced trader, The Funded Hub is here to support your
                    forex trading aspirations. Join us today and embark on an
                    exciting journey towards financial success in the dynamic
                    world of forex trading.
                  </p>
                </div>
`},{link:"blog-5",img:"",title:"Introduction to Forex Trading with The Funded Hub: A Beginner's Guide",para:`<span></span> Explore the power of leverage
                  in forex trading and how it can magnify your potential gains
                  and losses. Discover how to use leverage wisely with valuable
                  insights throughout the post. Forex trading offers an
                  incredible opportunity for traders to capitalize on currency
                  price movements. One of the tools that magnifies this
                  potential is leverage. In this comprehensive guide,
                  we&apos;ll delve into the concept of leverage, its advantages
                  and risks, and how you can effectively utilize it to your
                  advantage in the dynamic forex market.`,date:"12 October 2023",alt:"blog-img",data:`<div className="des">
                  <span> </span>Unlock forex trading&apos;s
                  potential with The Funded Hub. Learn how forex trading works:
                  currency pairs, bid/ask prices, leverage, and more. Trade with
                  proprietary capital, advanced platforms, and expert support.
                  Start your journey now!
                </div>

                <div className="des">
                  <h5>Introduction</h5>
                  <p>
                    If you&apos;ve ever wondered how the world of forex trading
                    operates, you&apos;re in the right place. Forex trading,
                    also known as foreign exchange trading, is a dynamic and
                    exciting financial market that allows individuals and
                    institutions to trade currencies and potentially profit from
                    the fluctuations in exchange rates. In this guide, brought
                    to you by The Funded Hub, we&apos;ll take you through the
                    basics of how forex trading works, the key players involved,
                    and how you can get started on your forex trading journey.
                  </p>
                </div>

                <div className="des">
                  <h5>Understanding Forex Trading</h5>
                  <p>
                    Forex trading involves the exchange of one currency for
                    another at an agreed-upon price. The aim is to buy a
                    currency at a lower price and sell it at a higher price,
                    thus generating a profit. Unlike traditional stock markets,
                    the forex market operates 24 hours a day, five days a week,
                    due to its global nature and the involvement of major
                    financial centers around the world.
                  </p>
                </div>

                <div className="para">
                  <h4>Key Players in the Forex Market</h4>

                  <ul>
                    <li>
                      <span>Banks and Financial Institutions: </span>Major banks
                      and financial institutions participate in forex trading to
                      facilitate international trade, manage foreign exchange
                      reserves, and speculate on currency movements.
                    </li>
                    <li>
                      <span>Central Banks: </span>Central banks play a
                      significant role by implementing monetary policies that
                      impact their country&apos;s currency. Interest rate
                      decisions and interventions are examples of tools they use
                      to influence exchange rates.
                    </li>
                    <li>
                      <span>Corporations: </span>Multinational corporations
                      engage in forex trading to manage currency risk associated
                      with their international operations and trade.
                    </li>
                    <li>
                      <span>Retail Traders: </span>Individual traders, like you,
                      participate in the forex market through online platforms
                      provided by brokers. These traders aim to profit from
                      price movements by speculating on currency pairs.
                    </li>
                    <li>
                      <span>Brokers and Proprietary Firms: </span>Forex brokers,
                      such as The Funded Hub, provide traders with access to the
                      market by offering trading platforms, market analysis, and
                      leverage. Proprietary firms like ours allocate trading
                      capital to traders, enabling them to trade with our
                      resources and share profits.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>How Forex Trading Works</h4>
                  <p></p>
                  <ul>
                    <li>
                      <span>Currency Pairs: </span>In forex trading, currencies
                      are quoted in pairs, such as EUR/USD, GBP/JPY, and
                      USD/JPY. The first currency in the pair is the base
                      currency, while the second is the quote currency. The
                      exchange rate indicates how much of the quote currency is
                      needed to purchase one unit of the base currency.
                    </li>
                    <li>
                      <span>Bid and Ask Price: </span>The bid price is the price
                      at which you can sell the base currency, and the ask price
                      is the price at which you can buy the base currency. The
                      difference between the bid and ask price is known as the
                      spread.
                    </li>
                    <li>
                      <span>Going Long and Going Short: </span>Going long means
                      buying the base currency and selling the quote currency in
                      anticipation of the base currency&apos;s value increasing.
                      Going short involves selling the base currency and buying
                      the quote currency, expecting the base currency&apos;s
                      value to decrease.
                    </li>
                    <li>
                      <span>Leverage: </span>Leverage allows traders to control
                      a larger position with a smaller amount of capital. While
                      it amplifies potential profits, it also increases the risk
                      of losses. The Funded Hub offers competitive leverage
                      options to suit different trading styles.
                    </li>
                    <li>
                      <span>Pips and Lots: </span>A pip is the smallest price
                      movement in a currency pair. Lot sizes determine the
                      volume of a trade. Standard lots are typically 100,000
                      units of the base currency, while mini and micro lots
                      offer smaller trading sizes.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>Getting Started with The Funded Hub</h4>
                  <p>
                    At The Funded Hub, we&apos;re dedicated to empowering
                    traders of all experience levels to succeed in the forex
                    market. Our comprehensive approach includes:
                  </p>
                  <ul>
                    <li>
                      <span>Capital Allocation: </span>Trade with our
                      proprietary capital and share profits based on
                      performance.
                    </li>
                    <li>
                      <span>Advanced Trading Platforms: </span>Access
                      user-friendly and powerful trading platforms to execute
                      your trades.
                    </li>
                    <li>
                      <span>Educational Resources: </span>Benefit from training,
                      webinars, and market analysis to enhance your trading
                      skills.
                    </li>
                    <li>
                      <span>Risk Management: </span>Our risk management
                      guidelines help you navigate the market responsibly.
                    </li>
                    <li>
                      <span>Professional Support: </span>Count on our
                      experienced team for guidance and support throughout your
                      trading journey.
                    </li>
                  </ul>
                </div>

                <div className="des">
                  <h5>Conclusion</h5>
                  <p>
                    Forex trading offers immense potential for individuals to
                    participate in a global market and capitalize on currency
                    fluctuations. Understanding the basics, key players, and
                    trading mechanics is essential for success. The Funded Hub
                    provides a unique opportunity to trade with a prop
                    firm&apos;s resources, giving you the edge you need to excel
                    in the forex world. Whether you&apos;re a beginner or an
                    experienced trader, The Funded Hub is here to support your
                    forex trading aspirations. Join us today and embark on an
                    exciting journey towards financial success in the dynamic
                    world of forex trading.
                  </p>
                </div>`},{link:"blog-6",img:"",title:"The Role of Central Banks in Forex Markets",para:`<span></span> Explore the power of leverage
                  in forex trading and how it can magnify your potential gains
                  and losses. Discover how to use leverage wisely with valuable
                  insights throughout the post. Forex trading offers an
                  incredible opportunity for traders to capitalize on currency
                  price movements. One of the tools that magnifies this
                  potential is leverage. In this comprehensive guide,
                  we&apos;ll delve into the concept of leverage, its advantages
                  and risks, and how you can effectively utilize it to your
                  advantage in the dynamic forex market.`,date:"9 October 2023",alt:"blog-img",data:`<p>
                    Central banks play a pivotal role in the complex world of
                    forex markets, exerting significant influence on global
                    economies and currency values. Understanding the functions
                    and strategies of central banks is crucial for forex traders
                    seeking to navigate this dynamic landscape. In this article,
                    we delve into the key role central banks play in shaping the
                    forex markets and explore their impact on traders and
                    investors.
                  </p>

                <div className="des">
                  <h5>Introduction: Central Banks and Forex Markets</h5>
                  <p>
                    Central banks are the primary authorities responsible for
                    overseeing monetary policy within their respective
                    countries. Their decisions and actions can have far-reaching
                    consequences for economies and, consequently, the forex
                    markets. The strategies employed by central banks, such as
                    interest rate adjustments and currency interventions, are
                    designed to achieve various objectives, including price
                    stability, economic growth, and balance of trade.
                  </p>
                </div>

                <div className="des">
                  <h5>Interest Rates and Their Impact</h5>
                  <p>
                    One of the most potent tools in a central bank's arsenal is
                    its ability to set and adjust interest rates. By raising or
                    lowering interest rates, central banks can influence
                    borrowing costs, consumer spending, and investment levels.
                    Changes in interest rates can cause significant shifts in
                    currency values, as higher interest rates tend to attract
                    foreign capital seeking better returns.
                  </p>
                  <br />

                  <p>
                    For instance, if a central bank decides to increase interest
                    rates, the country's currency might strengthen as investors
                    are drawn by the higher yield. This can lead to increased
                    demand for the currency, driving its value higher in the
                    forex markets. On the other hand, a central bank's decision
                    to lower interest rates can have the opposite effect,
                    weakening the currency's value.
                  </p>
                </div>

                <div className="para">
                  <h4>Conclusion: Navigating the Central Bank Landscape</h4>
                  <p>
                    The actions and decisions of central banks have a profound
                    impact on forex markets, shaping trends and influencing
                    trading strategies. Forex traders need to stay informed
                    about central bank policies, economic data releases, and
                    market sentiment to make well-informed decisions.
                  </p>
                  <br />
                  <p>
                    As central banks continuously adapt their strategies to
                    economic conditions, forex traders must be prepared to
                    adjust their trading strategies accordingly. By
                    understanding the role of central banks and their influence
                    on currency values, traders can better navigate the
                    ever-evolving forex markets and seize opportunities for
                    profitable trades.
                  </p>

                  <br />
                  <b>
                    Disclaimer: This article is for informational purposes only
                    and does not constitute financial advice. Trading in forex
                    markets involves risks and should be undertaken with proper
                    understanding and risk management.
                  </b>

                  <br />
                  <br />
                  <p>
                    Stay informed about central bank actions and economic trends
                    to navigate the forex markets effectively. Learn more at The
                    Funded Hub
                  </p>
            </div>`},{link:"blog-7",img:"",title:"Economic Indicators and Their Impact on Forex",para:`Economic indicators are essential tools for forex traders,
                    offering valuable insights into the health of economies and
                    potential market trends. Understanding the significance of
                    key economic indicators and their influence on currency
                    values is crucial for making informed trading decisions. In
                    this article, we delve into the world of economic indicators
                    and explore how they can impact the forex markets.`,date:"5 October 2023",alt:"blog-img",data:`
              <div className="data">
                  <p>
                    Economic indicators are essential tools for forex traders,
                    offering valuable insights into the health of economies and
                    potential market trends. Understanding the significance of
                    key economic indicators and their influence on currency
                    values is crucial for making informed trading decisions. In
                    this article, we delve into the world of economic indicators
                    and explore how they can impact the forex markets.
                  </p>

                <div className="des">
                  <h5>Introduction: Economic Indicators and Forex Markets</h5>
                  <p>
                    Economic indicators are statistical data points that provide
                    information about various economic factors, such as
                    employment levels, inflation rates, and consumer spending.
                    These indicators offer a snapshot of an economy&apos;s
                    performance and can offer clues about its future direction.
                    For forex traders, economic indicators serve as crucial
                    pieces of information that help assess the health of
                    economies and predict potential market movements.
                  </p>
                </div>

                <div className="des">
                  <h5>Unemployment Rate and Nonfarm Payrolls</h5>
                  <p>
                    The unemployment rate is a key economic indicator that
                    measures the percentage of the workforce that is unemployed
                    and actively seeking employment. A rising unemployment rate
                    can indicate economic weakness, while a declining rate
                    suggests economic growth. Forex traders closely monitor this
                    indicator as it can influence currency values.
                  </p>
                  <br />
                  <p>
                    Additionally, the nonfarm payrolls report provides insights
                    into job creation in the non-agricultural sector. Strong
                    nonfarm payroll numbers often correlate with a robust
                    economy and may lead to currency appreciation. Conversely,
                    weak nonfarm payroll figures could lead to currency
                    depreciation.
                  </p>
                </div>

                <div className="des">
                  <h5>Consumer Price Index (CPI) and Inflation</h5>
                  <p>
                    The Consumer Price Index (CPI) measures changes in the
                    average prices paid by consumers for goods and services.
                    Inflation, which is the rate at which prices rise, can have
                    a significant impact on an economy and its currency. Central
                    banks often use CPI data to determine whether to adjust
                    interest rates.
                  </p>
                  <br />
                  <p>
                    High inflation can erode purchasing power and decrease
                    currency values. Conversely, low inflation may lead to
                    currency appreciation. Forex traders pay close attention to
                    CPI releases to gauge potential shifts in currency values
                    based on inflation trends.
                  </p>
                </div>

                <div className="des">
                  <h5>Gross Domestic Product (GDP)</h5>
                  <p>
                    Gross Domestic Product (GDP) is a comprehensive measure of
                    economic activity within a country. It represents the total
                    value of all goods and services produced in a specific
                    period. Strong GDP growth can lead to currency appreciation,
                    while weak GDP growth may lead to currency depreciation.
                  </p>
                  <br />
                  <p>
                    Forex traders analyze GDP reports to assess the overall
                    health and direction of an economy. Countries with strong
                    GDP growth are often considered more attractive for
                    investment, potentially leading to increased demand for
                    their currency.
                  </p>
                </div>

                <div className="des">
                  <h5>Trade Balance and Current Account</h5>
                  <p>
                    The trade balance measures the difference between a
                    country&apos;s exports and imports. A positive trade balance
                    (surplus) indicates that a country is exporting more than it
                    is importing, which can lead to currency appreciation.
                    Conversely, a negative trade balance (deficit) may lead to
                    currency depreciation.
                  </p>
                  <br />
                  <p>
                    The current account, which includes trade balance as well as
                    other financial transactions, also influences currency
                    values. A strong current account can attract foreign
                    investment and potentially lead to currency appreciation.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Navigating Economic Indicators for Forex Success
                  </h5>

                  <p>
                    Economic indicators provide forex traders with valuable
                    insights into economic trends and potential market
                    movements. By staying informed about key economic releases,
                    traders can make informed decisions and better predict
                    potential shifts in currency values.
                  </p>
                  <br />
                  <p>
                    It&apos;s important for forex traders to have a solid
                    understanding of the impact of economic indicators on the
                    forex markets. By analyzing data releases and considering
                    their potential effects, traders can develop effective
                    trading strategies and seize opportunities for profitable
                    trades.
                  </p>
                </div>

                <b>
                  Disclaimer: This article is for informational purposes only
                  and does not constitute financial advice. Trading in forex
                  markets involves risks and should be undertaken with proper
                  understanding and risk management.
                </b>
           
                <p>
                  Stay ahead in the forex markets by mastering economic
                  indicators and their impact. Learn more at The Funded Hub.
                </p>
            </div>`},{link:"blog-8",img:"",title:"The Art of Technical Analysis in Forex Trading",para:` Technical analysis is a powerful tool that forex traders use
                    to decipher market trends, identify potential entry and exit
                    points, and make informed trading decisions. By analyzing
                    price charts, patterns, and indicators, traders can gain
                    insights into market psychology and anticipate price
                    movements. In this article, we explore the world of
                    technical analysis and its role in forex trading.`,date:"1 October 2023",alt:"blog-img",data:`
              <div className="data">
                  <p>
                    Technical analysis is a powerful tool that forex traders use
                    to decipher market trends, identify potential entry and exit
                    points, and make informed trading decisions. By analyzing
                    price charts, patterns, and indicators, traders can gain
                    insights into market psychology and anticipate price
                    movements. In this article, we explore the world of
                    technical analysis and its role in forex trading.
                  </p>

                <div className="des">
                  <h5>
                    Introduction: Unveiling the Power of Technical Analysis
                  </h5>
                  <p>
                    Technical analysis involves studying historical price data
                    to predict future price movements. Unlike fundamental
                    analysis, which focuses on economic indicators and news
                    events, technical analysis relies on charts, patterns, and
                    mathematical tools to forecast market trends. Traders use
                    technical analysis to recognize patterns, trends, and
                    reversals, helping them make well-informed trading choices.
                  </p>
                </div>

                <div className="des">
                  <h4>Candlestick Patterns and Chart Analysis</h4>
                  <p>
                    Candlestick patterns are a cornerstone of technical
                    analysis. These patterns form on price charts and provide
                    valuable insights into market sentiment. Patterns like Doji,
                    Hammer, and Shooting Star offer clues about potential trend
                    reversals or continuations. By understanding candlestick
                    patterns, traders can better anticipate market shifts and
                    potential price movements.
                  </p>
                  <br />
                  <p>
                    Price charts, such as line, bar, and candlestick charts,
                    visualize historical price data. Traders analyze chart
                    patterns to identify trends, support and resistance levels,
                    and potential breakout points. These visual representations
                    help traders make decisions based on historical price
                    behavior.
                  </p>
                </div>

                <div className="des">
                  <h4>Indicators and Oscillators</h4>
                  <p>
                    Technical indicators and oscillators are mathematical
                    calculations applied to price data to generate trading
                    signals. Moving averages, Relative Strength Index (RSI), and
                    Moving Average Convergence Divergence (MACD) are examples of
                    popular technical indicators. Traders use these tools to
                    confirm trends, identify overbought or oversold conditions,
                    and predict potential reversals.
                  </p>
                  <br />
                  <p>
                    Oscillators, like RSI and Stochastic Oscillator, measure the
                    speed and magnitude of price movements. These indicators
                    help traders identify potential market turning points by
                    highlighting periods of divergence between price and
                    oscillator readings.
                  </p>
                </div>

                <div className="des">
                  <h4>Support and Resistance Levels</h4>
                  <p>
                    Support and resistance levels are crucial concepts in
                    technical analysis. Support is a price level at which a
                    currency pair tends to stop falling and may reverse, while
                    resistance is a level at which a pair tends to stop rising
                    and reverse. Traders use these levels to identify potential
                    entry and exit points and set stop-loss orders.
                  </p>
                  <br />
                  <p>
                    Breakouts occur when a price breaches a support or
                    resistance level, signaling a potential trend continuation
                    or reversal. By identifying these levels, traders can
                    anticipate significant price movements and adapt their
                    strategies accordingly.
                  </p>
                </div>

                <div className="des">
                  <h5>Applying Technical Analysis to Forex Trading</h5>
                  <p>
                    Integrating technical analysis into forex trading involves a
                    combination of chart analysis, pattern recognition, and
                    indicator interpretation. Traders develop a systematic
                    approach to identify opportunities and manage risks. The
                    ability to read charts, spot patterns, and analyze
                    indicators empowers traders to make decisions based on data
                    rather than emotions.
                  </p>
                  <br />
                  <p>
                    It&apos;s important to note that while technical analysis can be
                    a powerful tool, it&apos;s not foolproof. Traders should exercise
                    caution and consider using multiple analysis techniques to
                    confirm their trading decisions.
                  </p>
                </div>

                <div className="des">
                  <h5>Conclusion: The Art and Science of Technical Analysis</h5>
                  <p>
                    Technical analysis is both an art and a science. Mastering
                    the skill of interpreting charts, recognizing patterns, and
                    using indicators requires practice and dedication. By
                    incorporating technical analysis into their trading
                    strategies, forex traders can enhance their decision-making
                    process and increase their chances of success in the dynamic
                    forex markets.
                  </p>
                  <br />
                  <p>
                    Unlock the potential of technical analysis and refine your
                    trading strategies. Join The Funded Hub and gain access to a
                    community dedicated to advancing your forex trading journey.
                  </p>
                </div>
              </div>
            </div>`},{link:"blog-9",img:"",title:"Using Moving Averages to Identify Trends",para:` Moving averages are essential tools in the arsenal of forex
                    traders, helping them navigate the complexities of the
                    market and make informed trading decisions. These versatile
                    indicators provide insights into market trends and can be
                    used to identify potential entry and exit points. In this
                    article, we delve into the world of moving averages and how
                    they play a pivotal role in identifying trends in forex
                    trading.`,date:"28 September 2023",alt:"blog-img",data:`<div className="data">
                  <p>
                    Moving averages are essential tools in the arsenal of forex
                    traders, helping them navigate the complexities of the
                    market and make informed trading decisions. These versatile
                    indicators provide insights into market trends and can be
                    used to identify potential entry and exit points. In this
                    article, we delve into the world of moving averages and how
                    they play a pivotal role in identifying trends in forex
                    trading.
                  </p>

                <div className="des">
                  <h5>Introduction: Unraveling the Power of Moving Averages</h5>
                  <p>
                    Moving averages are statistical calculations that smooth out
                    price data by creating a continuously updated average. They
                    help traders filter out noise and visualize the underlying
                    trend within a currency pair&apos;s price movement. By plotting
                    moving averages on price charts, traders can gain a clearer
                    understanding of market direction and momentum.
                  </p>
                </div>

                <div className="des">
                  <h5>Types of Moving Averages</h5>
                  <p>
                    Two common types of moving averages are the Simple Moving
                    Average (SMA) and the Exponential Moving Average (EMA). The
                    SMA calculates the average price over a specific number of
                    periods, while the EMA gives more weight to recent price
                    data, making it more responsive to recent market
                    developments.
                  </p>
                </div>

                <div className="des">
                  <h5>Identifying Trends with Moving Averages</h5>
                  <p>
                    Moving averages are used primarily to identify trends and
                    potential trend reversals. When the price is above a moving
                    average, it suggests an uptrend, and when the price is below
                    a moving average, it suggests a downtrend. Traders often
                    look for crossovers between short-term and long-term moving
                    averages to confirm trend changes.
                  </p>

                  <br />
                  <p>
                    A golden cross occurs when a short-term moving average
                    crosses above a long-term moving average, indicating a
                    potential uptrend. Conversely, a death cross occurs when a
                    short-term moving average crosses below a long-term moving
                    average, signaling a potential downtrend.
                  </p>
                </div>

                <div className="des">
                  <h5>Support and Resistance Levels</h5>
                  <p>
                    Moving averages also serve as dynamic support and resistance
                    levels. During an uptrend, the moving average can act as a
                    support level, while in a downtrend, it can serve as a
                    resistance level. These levels help traders identify
                    potential entry and exit points and set stop-loss orders.
                  </p>
                </div>
                <div className="des">
                  <h5>Moving Averages and Trading Strategies</h5>
                  <p>
                    Moving averages can be integrated into various trading
                    strategies. For instance, traders may use moving average
                    crossovers as entry or exit signals. Others may use moving
                    averages to identify the overall trend and trade in the
                    direction of that trend.
                  </p>
                  <br />
                  <p>
                    It&apos;s essential to note that while moving averages are
                    powerful tools, they are not foolproof. Traders should
                    consider using them in conjunction with other indicators and
                    analysis techniques to confirm their trading decisions.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Navigating the Forex Market with Moving Averages
                  </h5>
                  <p>
                    Moving averages are versatile indicators that empower forex
                    traders to identify trends, anticipate reversals, and make
                    informed trading choices. By understanding how moving
                    averages work and applying them to price charts, traders can
                    gain a competitive edge in the dynamic forex markets.
                  </p>
                  <br />
                  <p>
                    Elevate your forex trading journey by incorporating moving
                    averages into your strategy. Join The Funded Hub and access
                    a supportive community dedicated to enhancing your trading
                    skills and knowledge.
                  </p>
                </div>
            </div>`},{link:"blog-10",img:"",title:"Diversification in Forex Trading: Balancing Risk and Reward",para:` Diversification is a fundamental concept in forex trading that
                  can significantly impact a trader&apos;s risk exposure and
                  potential for profitability. By spreading investments across
                  different currency pairs and asset classes, traders aim to
                  achieve a balance between risk and reward. In this article, we
                  delve into the importance of diversification in forex trading
                  and how it can enhance your overall trading strategy.`,date:"23 September 2023",alt:"blog-img",data:`<p>
                  Diversification is a fundamental concept in forex trading that
                  can significantly impact a trader&apos;s risk exposure and
                  potential for profitability. By spreading investments across
                  different currency pairs and asset classes, traders aim to
                  achieve a balance between risk and reward. In this article, we
                  delve into the importance of diversification in forex trading
                  and how it can enhance your overall trading strategy.
                </p>

                <div className="des">
                  <h5>Introduction: The Power of Diversification</h5>
                  <p>
                    Diversification is the practice of allocating investments
                    among various assets to reduce the impact of any single
                    asset&apos;s poor performance on the overall portfolio. In
                    the forex market, diversification involves trading multiple
                    currency pairs rather than concentrating all trading
                    activities on a single pair.
                  </p>
                </div>

                
                <div className="para">
                  <h4>Benefits of Diversification</h4>
                  <ol>
                    <li>
                      <span>Risk Mitigation: </span>
                      Diversification helps spread risk across different
                      currency pairs, reducing the potential impact of a
                      significant loss on the entire trading portfolio. When one
                      currency pair underperforms, others may compensate for the
                      loss.
                    </li>
                    <li>
                      <span>Steady Performance: </span>By trading multiple
                      currency pairs with different correlations, traders can
                      achieve more consistent performance over time. This
                      steadiness can help smooth out the impact of market
                      volatility.
                    </li>
                    <li>
                      <span>Reduced Emotional Impact: </span>Diversification
                      minimizes the emotional toll of significant losses on a
                      single trade. Traders are less likely to make impulsive
                      decisions based on emotional reactions when their
                      portfolio is well-diversified.
                    </li>
                    <li>
                      <span>Opportunity for Profit: </span>Different currency
                      pairs offer various opportunities for profit, as market
                      conditions may be favorable for one pair while unfavorable
                      for another. Diversification increases the chances of
                      capitalizing on these opportunities.
                    </li>
                  </ol>
                </div>

                
                <div className="para">
                  <h4>Strategies for Diversification</h4>

                  <ol>
                    <li>
                      <span>Cross-Currency Pairs: </span>Trading pairs that do
                      not include the US dollar can provide diversification.
                      These pairs are influenced by different economic factors
                      and geopolitical events, offering unique trading
                      opportunities.
                    </li>
                    <li>
                      <span>Mix of Timeframes: </span>Combining short-term and
                      long-term trading strategies can offer balance. While
                      short-term trading aims for quick gains, long-term trading
                      takes advantage of broader market trends.
                    </li>
                    <li>
                      <span>Incorporating Other Markets: </span>Diversification
                      can extend beyond forex by including commodities, stocks,
                      or cryptocurrencies. Different markets may exhibit diverse
                      behavior, enhancing portfolio stability.
                    </li>
                  </ol>
                </div>
                
                <div className="para">
                  <h4>Challenges and Considerations</h4>

                  <ol>
                    <li>
                      <span>Research: </span>Diversification requires in-depth
                      research on different currency pairs and market dynamics.
                      Traders must understand the unique factors affecting each
                      pair.
                    </li>
                    <li>
                      <span>Over-Diversification: </span>Too much
                      diversification can lead to diluted returns. Finding the
                      right balance between diversification and focus is
                      crucial.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>Conclusion: Crafting a Balanced Forex Portfolio</h5>
                  <p>
                    Diversification is a key strategy for managing risk and
                    optimizing trading outcomes in the forex market. By
                    spreading investments across various currency pairs and
                    trading strategies, traders can achieve a harmonious balance
                    between risk and reward.
                  </p>
                  <br />
                  <p>
                    Elevate your trading journey by mastering the art of
                    diversification. Join The Funded Hub and gain access to a
                    supportive trading community committed to enhancing your
                    trading skills and knowledge.
                  </p>
            </div>`},{link:"blog-11",img:"",title:"High-Frequency Trading: Pros, Cons, and Risks",para:` High-frequency trading (HFT) has revolutionized the landscape
                  of financial markets, including forex. This lightning-fast
                  trading strategy involves executing a large number of trades
                  within milliseconds. While HFT offers several advantages, it
                  also comes with its share of drawbacks and risks. In this
                  article, we delve into the world of high-frequency trading,
                  exploring its benefits, challenges, and potential risks.`,date:"17 September 2023",alt:"blog-img",data:`<p>
                  High-frequency trading (HFT) has revolutionized the landscape
                  of financial markets, including forex. This lightning-fast
                  trading strategy involves executing a large number of trades
                  within milliseconds. While HFT offers several advantages, it
                  also comes with its share of drawbacks and risks. In this
                  article, we delve into the world of high-frequency trading,
                  exploring its benefits, challenges, and potential risks.
                </p>

                <div className="des">
                  <h5>
                    Introduction: Unveiling the World of High-Frequency Trading
                  </h5>
                  <p>
                    High-frequency trading is a sophisticated trading approach
                    that relies on advanced algorithms and cutting-edge
                    technology to execute a vast number of trades in the
                    shortest possible time frame. It has gained prominence due
                    to its ability to capitalize on minuscule price fluctuations
                    and market inefficiencies.
                  </p>
                </div>

                <div className="para">
                  <h4>Pros of High-Frequency Trading</h4>
                  <ol>
                    <li>
                      <span>Speed Advantage: </span>HFT systems can analyze
                      market data and execute trades within microseconds, giving
                      them a competitive edge in capturing fleeting market
                      opportunities.
                    </li>
                    <li>
                      <span>Market Liquidity: </span>HFT contributes to overall
                      market liquidity by facilitating rapid trade execution.
                      This benefits traders by narrowing bid-ask spreads and
                      reducing slippage.
                    </li>
                    <li>
                      <span>Arbitrage Opportunities: </span>HFT thrives on
                      exploiting price disparities between different markets or
                      assets, known as arbitrage. This strategy helps in
                      eliminating price inefficiencies.
                    </li>
                    <li>
                      <span>Efficient Price Discovery: </span>HFT aids in
                      quickly reflecting new information in asset prices,
                      leading to more accurate price discovery.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Cons of High-Frequency Trading</h4>

                  <ol>
                    <li>
                      <span>Technological Costs: </span>Implementing HFT
                      requires substantial investment in cutting-edge
                      technology, data feeds, and low-latency infrastructure.
                    </li>
                    <li>
                      <span>Market Fragmentation: </span>HFT can contribute to
                      market fragmentation, where trades occur across multiple
                      platforms, potentially causing complexity and reduced
                      transparency.
                    </li>
                    <li>
                      <span>Risk of Glitches: </span>Technical glitches can lead
                      to substantial losses in the blink of an eye, as seen in
                      flash crashes where prices plummet momentarily.
                    </li>
                    <li>
                      <span>Regulatory Scrutiny: </span>HFT practices have drawn
                      regulatory attention due to concerns over market
                      manipulation and unfair advantages.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Risks of High-Frequency Trading</h4>

                  <ol>
                    <li>
                      <span>Over-Optimization: </span>Excessive optimization of
                      algorithms can lead to strategies that perform well
                      historically but fail in changing market conditions.
                    </li>
                    <li>
                      <span>Competition: </span>The competitive nature of HFT
                      means traders must constantly update and refine their
                      strategies to remain profitable.
                    </li>
                    <li>
                      <span>Liquidity Risk: </span>In times of extreme
                      volatility, HFT strategies can contribute to liquidity
                      dry-ups, exacerbating market turbulence.
                    </li>
                  </ol>
                </div>
                <div className="para">
                  <h4>Navigating the World of HFT</h4>

                  <ol>
                    <li>
                      <span>Educational Foundation: </span>Understanding the
                      intricacies of high-frequency trading requires a solid
                      grasp of financial markets, algorithmic trading, and
                      programming.
                    </li>
                    <li>
                      <span>Risk Management: </span>Effective risk management is
                      paramount in HFT, as a single glitch can lead to
                      catastrophic losses. Rigorous testing and monitoring are
                      crucial.
                    </li>
                    <li>
                      <span>Technological Infrastructure: </span>Investing in
                      cutting-edge technology and low-latency connections is
                      essential for successful high-frequency trading.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Harnessing the Potential of High-Frequency
                    Trading
                  </h5>
                  <p>
                    High-frequency trading offers unparalleled speed and the
                    potential for significant profits. However, its complex
                    nature, coupled with regulatory scrutiny and potential
                    risks, demands a comprehensive understanding and approach.
                    As traders explore the realm of high-frequency trading,
                    staying informed about its pros, cons, and risks is key to
                    navigating this dynamic landscape.
                  </p>
                  <br />
                  <i>
                    Ready to explore the exciting world of high-frequency
                    trading? Join The Funded Hub and gain access to cutting-edge
                    technology, expert guidance, and a vibrant community of
                    traders dedicated to mastering the art of HFT.
                  </i>
                </div>

                <h6>
                  Please note that The Funded Hub strictly prohibits the use of
                  High-Frequency Trading (HFT) strategies. Any violation of this
                  policy will result in the deactivation of the trader&apos;s
                  account, and the associated challenge will be marked as
                  unsuccessful. At The Funded Hub, we prioritize ethical and
                  responsible trading practices to ensure a fair and supportive
                  trading environment for all our traders.
                </h6>
          `},{link:"blog-12",img:"",title:"Breakout Trading: Identifying and Riding Trends",para:`In the fast-paced world of forex trading, staying ahead of the
                  curve is essential to success. One strategy that has gained
                  significant attention is breakout trading. This approach
                  allows traders to capitalize on sudden price movements, riding
                  the wave of new trends for potentially substantial profits. In
                  this article, we&apos;ll delve into the world of breakout
                  trading, exploring its principles, strategies, and key
                  considerations.`,date:"11 September 2023",alt:"blog-img",data:`<p>
                  In the fast-paced world of forex trading, staying ahead of the
                  curve is essential to success. One strategy that has gained
                  significant attention is breakout trading. This approach
                  allows traders to capitalize on sudden price movements, riding
                  the wave of new trends for potentially substantial profits. In
                  this article, we&apos;ll delve into the world of breakout
                  trading, exploring its principles, strategies, and key
                  considerations.
                </p>

                <div className="des">
                  <h5>Understanding Breakout Trading</h5>
                  <p>
                    Breakout trading is a strategy that focuses on identifying
                    and capitalizing on significant price movements, often
                    occurring after periods of consolidation or range-bound
                    trading. The idea is to enter the market when prices
                    &quot;break out&quot; from a well-defined range or pattern,
                    signaling the potential start of a new trend.
                  </p>
                </div>

                <div className="para">
                  <h4>Identifying Breakout Opportunities</h4>
                  <p>
                    To effectively identify breakout opportunities, traders need
                    to be skilled at recognizing chart patterns and price levels
                    that indicate potential breakouts. Some commonly used
                    patterns include:
                  </p>
                  <ol>
                    <li>
                      <span>Triangles: </span>Ascending, descending, and
                      symmetrical triangles can indicate impending breakouts as
                      prices near the apex of the triangle.
                    </li>
                    <li>
                      <span>Rectangles: </span>These patterns are characterized
                      by horizontal support and resistance levels, indicating a
                      potential breakout when prices breach these boundaries.
                    </li>
                    <li>
                      <span>Channels: </span>Trading channels consist of
                      parallel lines that define a price range. A breakout
                      occurs when prices breach the channel&apos;s boundaries.
                    </li>
                    <li>
                      <span>Head and Shoulders: </span>This pattern includes a
                      left shoulder, head, and right shoulder, with a breakout
                      occurring when the neckline is breached.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Strategies for Breakout Trading</h4>
                  <p>
                    There are several strategies traders employ to take
                    advantage of breakout opportunities:
                  </p>
                  <ol>
                    <li>
                      <span>Retracement Entries: </span>Traders enter the market
                      on a pullback after the initial breakout, aiming to catch
                      a more favorable entry point.
                    </li>
                    <li>
                      <span>Momentum Breakouts: </span>Traders enter as soon as
                      the breakout occurs, banking on strong momentum to
                      continue driving prices in the breakout direction.
                    </li>
                    <li>
                      <span>False Breakouts: </span>Also known as
                      &quot;fakeouts,&quot; this strategy involves entering the
                      market when a breakout occurs but quickly reverses.
                      Traders aim to catch the subsequent price movement.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>Risk Management and Timing</h5>
                  <p>
                    As with any trading strategy, risk management is crucial in
                    breakout trading. False breakouts can occur, leading to
                    losses if not managed properly. Traders often use stop-loss
                    orders to protect against adverse price movements.
                  </p>
                  <br />
                  <p>
                    Additionally, timing is essential. Breakouts can occur
                    during periods of high volatility, often influenced by
                    economic releases or news events. Traders need to be aware
                    of these factors and consider the timing of their trades.
                  </p>
                </div>

                <div className="des">
                  <h5>Breakout Trading with The Funded Hub</h5>
                  <p>
                    At The Funded Hub, we empower traders to explore various
                    trading strategies, including breakout trading, within a
                    supportive and regulated environment. Our comprehensive
                    approach to risk management and educational resources equips
                    traders with the tools they need to make informed decisions
                    and maximize their trading potential.
                  </p>
                </div>

                <div className="des">
                  <h5>Conclusion: Riding the Wave of Breakout Trading</h5>
                  <p>
                    Breakout trading offers traders the opportunity to capture
                    significant price movements and ride emerging trends. By
                    understanding chart patterns, employing effective
                    strategies, and practicing disciplined risk management,
                    traders can harness the potential of breakout trading in the
                    forex market. Whether you&apos;re a novice or experienced
                    trader, mastering the art of identifying and riding trends
                    can open the door to exciting trading opportunities.
                  </p>
                  <br />
                  <i>
                    Are you ready to dive into the world of breakout trading?
                    Join The Funded Hub and experience the thrill of discovering
                    breakout opportunities and navigating the dynamic forex
                    market with confidence.
                  </i>
            </div>`},{link:"blog-13",img:"",title:"Range Trading: Capitalizing on Sideways Markets",para:`In the world of forex trading, there&apos;s more than one way to
                  capture profitable opportunities. While trends and breakouts
                  often steal the spotlight, another strategy that shouldn&apos;t be
                  overlooked is range trading. This approach allows traders to
                  make gains even when markets are moving sideways or
                  consolidating. In this article, we&apos;ll delve into the concept
                  of range trading, exploring its strategies, benefits, and
                  essential considerations.`,date:"8 September 2023",alt:"blog-img",data:`<p>
                  In the world of forex trading, there&apos;s more than one way to
                  capture profitable opportunities. While trends and breakouts
                  often steal the spotlight, another strategy that shouldn&apos;t be
                  overlooked is range trading. This approach allows traders to
                  make gains even when markets are moving sideways or
                  consolidating. In this article, we&apos;ll delve into the concept
                  of range trading, exploring its strategies, benefits, and
                  essential considerations.
                </p>

                <div className="des">
                  <h5>Understanding Range Trading</h5>
                  <p>
                    Range trading, also known as trading in a sideways or
                    consolidating market, involves identifying specific price
                    ranges where an asset&apos;s price oscillates between defined
                    support and resistance levels. Instead of relying on
                    directional trends, range traders aim to profit from price
                    fluctuations within these boundaries.
                  </p>
                </div>

                <div className="para">
                  <h4>Identifying Range-Bound Markets</h4>
                  <p>
                    Recognizing range-bound markets is crucial for successful
                    range trading. Traders often look for the following
                    characteristics:
                  </p>

                  <ol>
                    <li>
                      <span>Horizontal Boundaries: </span>Prices move within
                      well-defined horizontal levels of support and resistance.
                    </li>
                    <li>
                      <span>Limited Volatility: </span>Market volatility is
                      relatively low, resulting in smaller price movements.
                    </li>
                    <li>
                      <span>Consolidation Patterns: </span>Chart patterns such
                      as rectangles, flags, and pennants indicate a
                      consolidation phase.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Strategies for Range Trading</h4>
                  <p>
                    Range traders employ various strategies to capitalize on
                    sideways markets:
                  </p>
                  <ol>
                    <li>
                      <span>Support and Resistance Trading: </span>Traders buy
                      near support and sell near resistance, taking advantage of
                      price reversals within the range.
                    </li>
                    <li>
                      <span>Swing Trading: </span>Traders enter positions based
                      on price swings within the range, aiming to profit from
                      repetitive price movements.
                    </li>
                    <li>
                      <span>Bollinger Bands Strategy: </span>Bollinger Bands
                      help identify overbought and oversold conditions within a
                      range, guiding traders to enter and exit trades.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>Risk Management and Considerations</h5>
                  <p>
                    While range trading may seem less risky than trend trading,
                    it still requires disciplined risk management. Breakouts
                    from the range can occur suddenly, leading to losses if not
                    anticipated. Traders should set stop-loss orders to protect
                    against unexpected price movements.
                  </p>
                  <br />
                  <p>
                    Moreover, patience is key. Range-bound markets can persist
                    for extended periods, requiring traders to wait for clear
                    signals before entering or exiting positions.
                  </p>
                </div>

                <div className="des">
                  <h5>Range Trading with The Funded Hub</h5>
                  <p>
                    At The Funded Hub, we support traders in exploring diverse
                    trading strategies, including range trading, within a
                    regulated and collaborative environment. Our commitment to
                    education and risk management empowers traders to navigate
                    sideways markets with confidence and make informed
                    decisions.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Navigating Sideways Markets with Range Trading
                  </h5>
                  <p>
                    Range trading offers traders a unique opportunity to profit
                    from price fluctuations within well-defined boundaries, even
                    when markets aren&apos;t experiencing strong trends. By
                    identifying range-bound markets, employing effective
                    strategies, and practicing disciplined risk management,
                    traders can unlock the potential of range trading in the
                    forex market. Whether you&apos;re a beginner or experienced
                    trader, mastering the art of capitalizing on sideways
                    markets can enhance your trading toolkit.
                  </p>

                  <br />
                  <i>
                    Are you ready to excel in range trading? Join The Funded Hub
                    and embark on a journey to navigate sideways markets and
                    make the most of every trading opportunity.
                  </i>
            </div>`},{link:"blog-14",img:"",title:"MetaTrader 5: Advanced Features for Forex Traders",para:` In the world of forex trading, there&apos;s more than one way to
                  capture profitable opportunities. While trends and breakouts
                  often steal the spotlight, another strategy that shouldn&apos;t be
                  overlooked is range trading. This approach allows traders to
                  make gains even when markets are moving sideways or
                  consolidating. In this article, we&apos;ll delve into the concept
                  of range trading, exploring its strategies, benefits, and
                  essential considerations.`,date:"5 September 2023",alt:"blog-img",data:`<p>
                  In the world of forex trading, there&apos;s more than one way to
                  capture profitable opportunities. While trends and breakouts
                  often steal the spotlight, another strategy that shouldn&apos;t be
                  overlooked is range trading. This approach allows traders to
                  make gains even when markets are moving sideways or
                  consolidating. In this article, we&apos;ll delve into the concept
                  of range trading, exploring its strategies, benefits, and
                  essential considerations.
                </p>

                <div className="des">
                  <h5>Understanding Range Trading</h5>
                  <p>
                    Range trading, also known as trading in a sideways or
                    consolidating market, involves identifying specific price
                    ranges where an asset&apos;s price oscillates between defined
                    support and resistance levels. Instead of relying on
                    directional trends, range traders aim to profit from price
                    fluctuations within these boundaries.
                  </p>
                </div>

                <div className="para">
                  <h4>Identifying Range-Bound Markets</h4>
                  <p>
                    Recognizing range-bound markets is crucial for successful
                    range trading. Traders often look for the following
                    characteristics:
                  </p>
                  <ol>
                    <li>
                      <span>Horizontal Boundaries: </span>Prices move within
                      well-defined horizontal levels of support and resistance.
                    </li>
                    <li>
                      <span>Limited Volatility: </span>Market volatility is
                      relatively low, resulting in smaller price movements.
                    </li>
                    <li>
                      <span>Consolidation Patterns: </span>Chart patterns such
                      as rectangles, flags, and pennants indicate a
                      consolidation phase.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Strategies for Range Trading</h4>
                  <p>
                    Range traders employ various strategies to capitalize on
                    sideways markets:
                  </p>
                  <ol>
                    <li>
                      <span>Support and Resistance Trading: </span>Traders buy
                      near support and sell near resistance, taking advantage of
                      price reversals within the range.
                    </li>
                    <li>
                      <span>Swing Trading: </span>Traders enter positions based
                      on price swings within the range, aiming to profit from
                      repetitive price movements.
                    </li>
                    <li>
                      <span>Bollinger Bands Strategy: </span>Bollinger Bands
                      help identify overbought and oversold conditions within a
                      range, guiding traders to enter and exit trades.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>Risk Management and Considerations</h5>
                  <p>
                    While range trading may seem less risky than trend trading,
                    it still requires disciplined risk management. Breakouts
                    from the range can occur suddenly, leading to losses if not
                    anticipated. Traders should set stop-loss orders to protect
                    against unexpected price movements.
                  </p>
                  <br />
                  <p>
                    Moreover, patience is key. Range-bound markets can persist
                    for extended periods, requiring traders to wait for clear
                    signals before entering or exiting positions.
                  </p>
                </div>

                <div className="des">
                  <h5>Range Trading with The Funded Hub</h5>
                  <p>
                    At The Funded Hub, we support traders in exploring diverse
                    trading strategies, including range trading, within a
                    regulated and collaborative environment. Our commitment to
                    education and risk management empowers traders to navigate
                    sideways markets with confidence and make informed
                    decisions.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Navigating Sideways Markets with Range Trading
                  </h5>
                  <p>
                    Range trading offers traders a unique opportunity to profit
                    from price fluctuations within well-defined boundaries, even
                    when markets aren&apos;t experiencing strong trends. By
                    identifying range-bound markets, employing effective
                    strategies, and practicing disciplined risk management,
                    traders can unlock the potential of range trading in the
                    forex market. Whether you&apos;re a beginner or experienced
                    trader, mastering the art of capitalizing on sideways
                    markets can enhance your trading toolkit.
                  </p>
                  <br />
                  <i>
                    Are you ready to excel in range trading? Join The Funded Hub
                    and embark on a journey to navigate sideways markets and
                    make the most of every trading opportunity.
                  </i>
            </div>`}];function Ze(){let[t,i]=a.useState(1);const r=6,o=Math.ceil(D.length/r),s=Xe(D,r),l=(h,p)=>{i(p),s.jump(p)},d=ve({palette:{mode:"dark"}});return e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsxs("section",{className:"blog relative pt-16 pb-28 sm:pb-44 overflow-hidden",children:[e.jsx("div",{className:"container z-10 relative",children:e.jsxs("div",{className:"wrapper max-w-[75rem] m-auto w-full",children:[e.jsx("div",{className:"header flex justify-between w-full",children:e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"Blog"})}),e.jsx("div",{className:"blogs mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 relative",children:s.currentData().map((h,p)=>e.jsxs(c,{to:`/blog/${h.link}`,className:"single-blog p-[0.9rem] bg-light/20 backdrop-blur-3xl rounded-xl !relative global-shadow grid justify-between items-end gap-4",children:[e.jsx("div",{className:"blog-img rounded-md hidden",children:e.jsx("img",{className:"rounded-md w-full h-full leading-none",src:h.img,alt:h.alt})}),e.jsxs("div",{className:"texts fmt-6 grid gap-3 pb-8",children:[e.jsx("h3",{className:"font-semibold",children:h.title}),e.jsx("div",{className:"blog-para-slice",children:e.jsx("p",{dangerouslySetInnerHTML:{__html:h.para.slice(0,140)+"...."}})}),e.jsx("div",{className:"date text-sm absolute bottom-3",children:h.date})]})]},h.title+p))}),e.jsx("div",{className:"pagination mt-10 flex justify-center",children:e.jsx(xe,{theme:d,children:e.jsx(be,{spacing:2,children:e.jsx(we,{count:o,page:t,shape:"rounded",variant:"outlined",color:"secondary",onChange:l})})})})]})}),e.jsx("div",{className:"circle-shadow absolute opacity-[23%] -top-[10%] -left-[50%] w-full h-full min-w-[10rem]",children:e.jsx("img",{src:w,alt:"circle-shadow"})}),e.jsx("div",{className:"circle-shadow absolute opacity-[25%] top-[40%] -right-[20%] w-full h-full min-w-[10rem]",children:e.jsx("img",{src:w,alt:"circle-shadow"})})]}),e.jsx(x,{})]})}function Qe(){const{pathname:t}=j(),i=D.filter(({link:r})=>r===t.slice(6));return e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx("section",{className:"single-blog relative pt-16f pt-24 sm:pt-20 pb-28 sm:pb-44 overflow-hidden",children:e.jsx("div",{className:"container z-10 relative",children:e.jsxs("div",{className:"wrapper max-w-[75rem] m-auto w-full",children:[e.jsx("div",{className:"flex justify-center items-center blog-content",children:e.jsx("div",{className:"blog-img p-[0.03rem] rounded-md",children:e.jsx("img",{className:"rounded-md",src:"",alt:i.alt})})}),e.jsxs("div",{className:"blog-content ",children:[e.jsx("div",{className:"heading",children:e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.9rem] tracking-tight text-wht-gradient",children:i[0].title})}),e.jsxs("div",{className:"blog-wrap-data global-shadow",children:[e.jsx("div",{className:"data ",dangerouslySetInnerHTML:{__html:i[0].data}}),e.jsx("div",{className:"btn mt-10 m-auto max-w-[17rem]",children:e.jsx(c,{link:"/#price-table",className:"uppercase font-Montserrat text-sm font-semibold  transition-all duration-200 glowing-btn",children:"Get Funded Now"})})]})]})]})})}),e.jsx(x,{})]})}function et(){return e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx("section",{className:"relative purple-shadow h-[450px] md:h-[550px] lg:h-[650px]",children:e.jsx("div",{className:"container z-10 relative h-full",children:e.jsxs("div",{className:"wrapper h-full flex flex-col gap-4 justify-center items-center text-center text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl",children:[e.jsx("h1",{children:"Sorry, your payment is unsuccessful :("}),e.jsx("h1",{className:"text-3xl text-primary",children:"Please try again"})]})})}),e.jsx(x,{})]})}function tt({children:t}){const[i,r]=a.useState("UNPAID"),[o,s]=a.useState(!0),[l,d]=a.useState(localStorage.getItem("purchaseUuid")),h=fe();a.useEffect(()=>{d(localStorage.getItem("purchaseUuid"))},[]);const p="https://api.thefundedhub.com",u=window.location.href.split("session=")[1],N=()=>{l&&u?R.put(`${p}/v1/website/purchases/${l}`,{paymentReference:u}).then(k=>{r(k.data.data.status),s(!1),localStorage.removeItem("purchaseUuid")}).catch(()=>{s(!1)}):h("/")};return a.useEffect(()=>{N()}),o?e.jsxs("div",{className:"flex justify-center items-center h-screen flex-col gap-4",children:[e.jsx("div",{className:"loader text-primary text-4xl xs:text-5xl",children:"Loading..."}),e.jsx("div",{className:"flex justify-center items-center mt-4",children:e.jsx(je,{strokeColor:"#C7B3FC",strokeWidth:"5",animationDuration:"0.75",width:"80",visible:!0})})]}):e.jsx(e.Fragment,{children:i==="PAID"?t:e.jsx(ge,{to:"/payment-error"})})}X.initialize("G-0GFK77GQTB");X.send({hitType:"pageview",page:window.location.pathname});const at="ef72a2fc-1672-41b9-acd5-260aac3e06ba";function it(){return e.jsxs("div",{className:"App body-background",children:[e.jsx(de,{children:e.jsxs(ye,{children:[e.jsx(g,{path:"/",element:e.jsx(ze,{})}),e.jsx(g,{path:"contact-us",element:e.jsx(Be,{})}),e.jsx(g,{path:"report-problem",element:e.jsx(Ue,{})}),e.jsx(g,{path:"faq",element:e.jsx(Ge,{})}),e.jsx(g,{path:"cookie-policy",element:e.jsx(Ke,{})}),e.jsx(g,{path:"privacy-policy",element:e.jsx(Ve,{})}),e.jsx(g,{path:"terms-condition",element:e.jsx(_e,{})}),e.jsx(g,{path:"risk-disclosure",element:e.jsx(Je,{})}),e.jsx(g,{path:"payment-error",element:e.jsx(et,{})}),e.jsx(g,{path:"thank-you*",element:e.jsx(_,{})}),e.jsx(g,{path:"thank-you",element:e.jsx(tt,{children:e.jsx(_,{})})}),e.jsx(g,{path:"blog",element:e.jsx(Ze,{})}),e.jsx(g,{path:"blog/:blog",element:e.jsx(Qe,{})})]})}),e.jsx(ee,{defer:!0,zendeskKey:at})]})}le.createRoot(document.getElementById("root")).render(e.jsx(oe.StrictMode,{children:e.jsx(it,{})}));
