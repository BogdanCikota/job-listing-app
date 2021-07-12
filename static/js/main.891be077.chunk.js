(this["webpackJsonpjob-listing-app"]=this["webpackJsonpjob-listing-app"]||[]).push([[0],{35:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(28),c=s.n(a),l=(s(35),s(12)),o=s.n(l),r=s(15),i=s(2),u=s(16),b=s.n(u),d=s(9),x=s(0);var j=function(e){var t=e.job;return e.index,Object(x.jsxs)(d.b,{onClick:function(){window.scroll(0,0)},className:"bg-gray-50 hover:bg-gray-100 p-4 block xl:text-lg xl:p-4 xl:pl-6 lg:flex justify-between",to:{pathname:"/JobDescription",state:{description:t.description}},children:[Object(x.jsxs)("div",{className:"flex gap-4 xl:gap-5",children:[Object(x.jsx)("img",{src:"https://remotive.io/job/".concat(t.id,"/logo"),alt:"logo ".concat(t.company_name),className:"rounded-full w-16 h-16"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{className:"text-blue-400",children:t.company_name}),Object(x.jsx)("h2",{className:"text-blue-900 font-semibold",children:t.title})]})]}),Object(x.jsxs)("div",{className:"hidden lg:block text-blue-400 text-right",children:[Object(x.jsx)("p",{children:t.category}),Object(x.jsx)("div",{children:t.candidate_required_location})]})]})},g=s(30),m=s.n(g);var p=function(e){var t=e.goToTop,s=e.numOfResults,n=e.chunk,a=e.setPageNum,c=e.setfromIndex,l=e.settoIndex;return Object(x.jsxs)("select",{className:"block m-auto border rounded-md",onChange:function(e){var n=e.target.value;a(+n+1),c(n*s),l(n*s+s),e.target.selectedIndex=0,t()},children:[Object(x.jsx)("option",{children:"Go to page..."}),n.map((function(e,t){return Object(x.jsx)("option",{value:e,children:e+1},t)}))]})};var h=function(e){var t=e.goToTop,s=e.numOfResults,n=e.setPageNum,a=e.pageNumElement,c=e.fromIndex,l=e.setfromIndex,o=e.toIndex,r=e.settoIndex;return Object(x.jsx)("button",{disabled:0===c,className:"font-bold bg-blue-500 px-2 pb-0.5 rounded-full text-xl text-white",onClick:function(){n((function(){return a.innerHTML-1})),l(c-s),r(o-s),t()},children:"<"})};var O=function(e){var t=e.jobs,s=e.goToTop,n=e.numOfResults,a=e.setPageNum,c=e.pageNumElement,l=e.fromIndex,o=e.setfromIndex,r=e.toIndex,i=e.settoIndex;return Object(x.jsx)("button",{disabled:r>t.length-1,className:"font-bold bg-blue-500 px-2 pb-0.5 rounded-full text-xl text-white",onClick:function(){a((function(){return+c.innerHTML+1})),o(l+n),i(r+n),s()},children:">"})};var f=function(e){var t=e.goToPage,s=e.setgoToPage,a=e.numOfResults,c=e.jobs,l=e.fromIndex,o=e.setPageNum,r=e.setfromIndex,u=e.settoIndex,b=e.toIndex,d=e.pagesCounter,j=e.chunkedPages,g=Object(n.useState)(!1),m=Object(i.a)(g,2),f=m[0],N=m[1],v=Object(n.useState)(!1),I=Object(i.a)(v,2),y=I[0],k=I[1],S=Object(n.useState)(!1),w=Object(i.a)(S,2),P=w[0],T=w[1],C=document.querySelector(".pageNum"),R=function(){window.scroll(0,0)};return Object(x.jsxs)("div",{className:"grid gap-2 m-auto my-4",children:[Object(x.jsxs)("div",{className:"flex gap-3 justify-center mb-1.5",children:[Object(x.jsx)(h,{setPageNum:o,fromIndex:l,setfromIndex:r,toIndex:b,settoIndex:u,pageNumElement:C,numOfResults:a,goToTop:R}),d>100&&!t&&Object(x.jsx)("button",{onClick:function(){return s(!t)},className:"rounded-lg px-1  bg-blue-500 text-white",children:"Go to page..."}),t&&d>100&&Object(x.jsxs)("div",{className:"flex gap-3",children:[Object(x.jsx)("button",{className:"".concat(f&&"bg-blue-600","  rounded-lg px-1  bg-blue-500 text-white"),onClick:function(){N((function(e){return!e})),k(!1),T(!1)},children:"1...100"}),d>100&&Object(x.jsx)("button",{className:"".concat(y&&"bg-blue-600","  rounded-lg px-1  bg-blue-500 text-white"),onClick:function(){k((function(e){return!e})),N(!1),T(!1)},children:"100...200"}),d>200&&Object(x.jsx)("button",{className:"".concat(P&&"bg-blue-600","  rounded-lg px-1  bg-blue-500 text-white"),onClick:function(){T((function(e){return!e})),N(!1),k(!1)},children:"200..."})]}),j.length>0&&d<100&&Object(x.jsx)(p,{chunk:j[0],setPageNum:o,setfromIndex:r,settoIndex:u,numOfResults:a,goToTop:R}),Object(x.jsx)(O,{setPageNum:o,fromIndex:l,setfromIndex:r,toIndex:b,settoIndex:u,pageNumElement:C,numOfResults:a,goToTop:R,jobs:c})]}),f?j.map((function(e,t){return 0===t&&Object(x.jsx)(p,{chunk:e,setPageNum:o,setfromIndex:r,settoIndex:u,numOfResults:a,goToTop:R},t)})):y?j.map((function(e,t){return 1===t&&Object(x.jsx)(p,{chunk:e,setPageNum:o,setfromIndex:r,settoIndex:u,numOfResults:a,goToTop:R},t)})):P&&j.map((function(e,t){return 2===t&&Object(x.jsx)(p,{chunk:e,setPageNum:o,setfromIndex:r,settoIndex:u,numOfResults:a,goToTop:R},t)}))]})};var N=function(e){var t=e.goToPage,s=e.setgoToPage,a=e.pages,c=e.jobs,l=e.pagesCounter,o=e.fromIndex,r=e.setfromIndex,i=e.toIndex,u=e.settoIndex,b=e.chunkedPages,d=e.setChunkedPages,g=e.pageNum,p=e.setPageNum,h=e.numOfResults;return Object(n.useEffect)((function(){d(m()(a,100))}),[a,d]),Object(x.jsxs)("div",{className:"grid gap-0.5 mb-2 xl:mt-16 xl:m-auto xl:max-w-5xl",children:[Object(x.jsxs)("div",{className:"text-center bg-blue-500 p-1 text-white xl:bg-blue-300 xl:rounded-b-full xl:p-1.5 xl:mb-3",children:["Found ",Object(x.jsxs)("span",{children:[c.length," results"]})]}),Object(x.jsxs)("h2",{className:"font-bold text-center p-1 pl-3 xl:rounded-t-3xl px-3 bg-gray-100 inline-block text-blue-900",children:["Page ",Object(x.jsx)("span",{className:"pageNum",children:g})," "]}),Object(x.jsx)("div",{className:"grid gap-0.5",children:c.map((function(e,t){return t>=o&&t<i&&Object(x.jsx)(j,{index:t,job:e},t)}))}),Object(x.jsxs)("h2",{className:"font-bold text-center p-1 pl-3 xl:rounded-b-3xl  px-3 bg-gray-100 inline-block text-blue-900",children:["Page ",Object(x.jsx)("span",{className:"pageNum",children:g})," "]}),c.length>h&&Object(x.jsx)(f,{fromIndex:o,setfromIndex:r,toIndex:i,settoIndex:u,chunkedPages:b,setChunkedPages:d,pageNum:g,setPageNum:p,jobs:c,pagesCounter:l,numOfResults:h,goToPage:t,setgoToPage:s})]})};var v=function(e){var t=e.setgoToPage,s=e.numOfResults,a=e.setfromIndex,c=e.settoIndex,l=e.setPageNum,o=e.categories,r=e.setLimit,u=e.setCategory,b=e.setSearch,d=e.inputSearch,j=e.setInputSearch,g=e.setIsLoading,m=Object(n.useState)(""),p=Object(i.a)(m,2),h=p[0],O=p[1],f=Object(n.useState)(0),N=Object(i.a)(f,2),v=N[0],I=N[1];return Object(x.jsxs)("form",{className:"col-span-full filters grid gap-3 bg-white py-3 xl:bg-gray-50  xl:p-5 xl:rounded-lg xl:mx-3 xl:col-start-2 xl:col-end-7 xl:gap-6",onSubmit:function(e){e.preventDefault(),u(h),b(d),r(v),g(!0),a(0),c(s),l(1),t(!1)},children:[Object(x.jsxs)("select",{className:"border p-1.5",onChange:function(e){O(e.target.value)},children:[Object(x.jsx)("option",{children:"Choose a job category"}),Object(x.jsx)("option",{children:"All jobs"}),o.map((function(e,t){return Object(x.jsx)("option",{value:e.slug,children:e.name},t)}))]}),Object(x.jsxs)("div",{className:"border p-2",children:[Object(x.jsx)("label",{className:"mb-2 block",htmlFor:"search",children:"Search job listing title and description"}),Object(x.jsx)("input",{className:"pl-2 border",type:"search",id:"search",onChange:function(e){j(e.target.value)}})]}),Object(x.jsxs)("div",{className:"border p-2",children:[Object(x.jsxs)("label",{className:"block",htmlFor:"limit",children:["Limit the number of job listing result ",Object(x.jsx)("span",{className:"text-sm italic",children:"(will not work with search input, API problem)"})]}),Object(x.jsx)("input",{className:"border w-20 my-1.5",type:"number",id:"limit",min:"1",onChange:function(e){I(e.target.value)}})]}),Object(x.jsxs)("div",{className:"flex justify-evenly xl:justify-center xl:gap-14",children:[Object(x.jsx)("button",{className:" rounded-lg px-5  bg-blue-500 text-white xl:p-2 xl:px-5 xl:rounded-full",type:"submit",children:"Go!"}),Object(x.jsx)("button",{className:" rounded-lg px-5  bg-blue-500 text-white xl:p-2 xl:px-5 xl:rounded-full",onClick:function(){r("all"),u(""),b(""),O("Choose a job category"),j(""),I(""),document.querySelector("select").selectedIndex=0,document.querySelector("#search").value="",document.querySelector("#limit").value=""},children:"Reset"})]})]})};var I=function(e){var t=e.openFilters,s=e.setOpenFilters,n=e.setgoToPage,a=e.numOfResults,c=e.setfromIndex,l=e.settoIndex,o=e.setPageNum,r=e.categories,i=e.setLimit,u=e.setCategory,b=e.setSearch,d=e.inputSearch,j=e.setInputSearch,g=e.setIsLoading,m=document.querySelector(".filters");return Object(x.jsxs)("header",{className:"".concat(!t&&"pb-3","  bg-blue-400 grid grid-cols-2 xl:grid-cols-7 xl:fixed w-full left-0 top-0 xl:px-7 ").concat(t&&"xl:pb-4"," xl:gap-3"),children:[Object(x.jsx)("h1",{className:"m-3 mb-2  text-white text-2xl cursor-pointer",onClick:function(){return window.location.reload()},children:"Remote Jobs"}),Object(x.jsxs)("button",{className:" col-start-2  m-3 mb-2 block  bg-blue-500 text-white rounded-full  px-3 ml-auto h-6 mt-5 xl:p-1 xl:mt-0 xl:relative top-2 xl:h-auto xl:px-3  xl:col-start-7",onClick:function(){s((function(e){return!e})),m.style=t?"display: none":"display: grid"},children:[" ",t?Object(x.jsx)("span",{children:"Hide"}):Object(x.jsx)("span",{children:"Show"})," filters"]}),Object(x.jsx)(v,{setLimit:i,setCategory:u,setSearch:b,inputSearch:d,setIsLoading:g,setInputSearch:j,categories:r,setfromIndex:c,settoIndex:l,setPageNum:o,numOfResults:a,setgoToPage:n})]})};var y=function(e){var t=e.isLoading,s=e.jobs;return Object(x.jsxs)("footer",{className:"".concat(t&&"fixed bottom-0 w-full"," ").concat(0===s.length&&"fixed bottom-0 w-full"," text-white mt-2 text-center"),children:[Object(x.jsxs)("p",{className:"py-2 bg-blue-400  xl:bg-blue-300 xl:rounded-t-full xl:p-1.5",children:["API Source: ",Object(x.jsx)("a",{href:"https://remotive.io/api-documentation",rel:"noreferrer",target:"_blank",children:"https://remotive.io/api-documentation"})]}),Object(x.jsxs)("p",{className:"bg-blue-500 py-2",children:["Made by ",Object(x.jsx)("a",{className:"underline",href:"https://github.com/BogdanCikota",rel:"noreferrer",target:"_blank",children:"Bogdan"})," "]})]})},k=s(3);var S=function(){var e=Object(k.f)().state.description;return Object(x.jsxs)("div",{className:"bg-gray-50 xl:mt-16 xl:m-auto xl:max-w-5xl xl:p-4",children:[Object(x.jsx)(d.b,{to:"/",className:"underline text-blue-900 font-semibold lg:text-lg",children:" \u2190 back"}),Object(x.jsx)("div",{className:"job-description p-2 text-blue-900 grid gap-2",dangerouslySetInnerHTML:{__html:e}}),Object(x.jsx)(d.b,{to:"/",className:"underline text-blue-900 font-semibold lg:text-lg",children:" \u2190 back"})]})};var w=function(e){var t=e.hasData;return Object(x.jsxs)("div",{className:"grid gap-2 xl:mt-16 xl:m-auto xl:max-w-5xl",children:[Object(x.jsx)("h2",{className:"text-center bg-blue-500 p-1 text-white xl:bg-blue-300 xl:rounded-b-full xl:p-1.5",children:t?Object(x.jsx)("span",{children:"Loading..."}):Object(x.jsx)("span",{children:"No data! Try again later!"})}),Object(x.jsx)("div",{className:"rounded-full bg-gray-100 h-8",children:" "}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"bg-gray-50 p-3 h-32"}),Object(x.jsx)("div",{className:"bg-gray-100 p-3 h-32"}),Object(x.jsx)("div",{className:"bg-gray-50 p-3 h-32"}),Object(x.jsx)("div",{className:"hidden bg-gray-100 p-3 h-32 xl:block"}),Object(x.jsx)("div",{className:"hidden bg-gray-50 p-3 h-32 xl:block"})]})]})};var P=function(){return Object(x.jsxs)("div",{className:"grid gap-2 xl:mt-16 xl:m-auto xl:max-w-5xl",children:[Object(x.jsx)("h2",{className:"text-center bg-blue-500 p-1 text-white xl:bg-blue-300 xl:rounded-b-full xl:p-1.5",children:"0 results"}),Object(x.jsx)("div",{className:"rounded-full bg-gray-100 h-8",children:" "}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"bg-gray-50 p-3 h-32"}),Object(x.jsx)("div",{className:"bg-gray-100 p-3 h-32"}),Object(x.jsx)("div",{className:"bg-gray-50 p-3 h-32"}),Object(x.jsx)("div",{className:"hidden bg-gray-100 p-3 h-32 xl:block"}),Object(x.jsx)("div",{className:"hidden bg-gray-50 p-3 h-32 xl:block"})]})]})};var T=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(!0),l=Object(i.a)(c,2),u=l[0],j=l[1],g=Object(n.useState)(0),m=Object(i.a)(g,2),p=m[0],h=m[1],O=Object(n.useState)([]),f=Object(i.a)(O,2),v=f[0],T=f[1],C=Object(n.useState)("all"),R=Object(i.a)(C,2),L=R[0],_=R[1],E=Object(n.useState)([]),F=Object(i.a)(E,2),q=F[0],D=F[1],J=Object(n.useState)(""),H=Object(i.a)(J,2),M=H[0],A=H[1],B=Object(n.useState)(""),G=Object(i.a)(B,2),z=G[0],K=G[1],Q=Object(n.useState)(""),U=Object(i.a)(Q,2),V=U[0],W=U[1],X=Object(n.useState)(!1),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1],ee=Object(n.useState)(0),te=Object(i.a)(ee,2),se=te[0],ne=te[1],ae=Object(n.useState)(7),ce=Object(i.a)(ae,2),le=ce[0],oe=ce[1],re=Object(n.useState)([]),ie=Object(i.a)(re,2),ue=ie[0],be=ie[1],de=Object(n.useState)(1),xe=Object(i.a)(de,2),je=xe[0],ge=xe[1],me=Object(n.useState)(!1),pe=Object(i.a)(me,2),he=pe[0],Oe=pe[1],fe=Object(n.useState)(!0),Ne=Object(i.a)(fe,2),ve=Ne[0],Ie=Ne[1],ye=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://remotive.io/api/remote-jobs/categories");case 3:t=e.sent,console.log(t.data.jobs),D(t.data.jobs),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),Ie(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){(function(){var e=Object(r.a)(o.a.mark((function e(){var t,s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://remotive.io/api/remote-jobs?limit=".concat(L,"&category=").concat(M,"&search=").concat(V));case 3:for(t=e.sent,console.log(t.data.jobs),a(t.data.jobs),j(!1),s=[],n=0;n<t.data.jobs.length/7;n++)s.push(n);h(s.length),T(s),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()(),ye()}),[L,M,V]),Object(x.jsx)(d.a,{basemname:"/",children:Object(x.jsxs)("div",{className:"md:mx-40 xl:mx-0",children:[Object(x.jsx)(I,{openFilters:Z,setOpenFilters:$,setLimit:_,setCategory:A,setSearch:W,inputSearch:z,setIsLoading:j,setInputSearch:K,categories:q,setfromIndex:ne,settoIndex:oe,setPageNum:ge,numOfResults:7,setgoToPage:Oe}),u?Object(x.jsx)(w,{hasData:ve}):0===s.length?Object(x.jsx)(P,{}):Object(x.jsxs)(k.c,{children:[Object(x.jsx)(k.a,{exact:!0,path:"/",children:Object(x.jsx)(N,{jobs:s,pages:v,pagesCounter:p,fromIndex:se,setfromIndex:ne,toIndex:le,settoIndex:oe,chunkedPages:ue,setChunkedPages:be,pageNum:je,setPageNum:ge,numOfResults:7,goToPage:he,setgoToPage:Oe})}),Object(x.jsx)(k.a,{exact:!0,path:"/JobDescription",component:S})]}),Object(x.jsx)(y,{isLoading:u,jobs:s})]})})};c.a.render(Object(x.jsx)(T,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.891be077.chunk.js.map