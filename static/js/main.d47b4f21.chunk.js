(this["webpackJsonpjob-listing-app"]=this["webpackJsonpjob-listing-app"]||[]).push([[0],{35:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(28),a=n.n(c),o=(n(35),n(12)),r=n.n(o),l=n(15),i=n(2),u=n(16),b=n.n(u),d=n(9),j=n(0);var m=function(e){var t=e.job,n=e.index;return Object(j.jsxs)("div",{className:n%2!==0?"bg-gray-100 p-3":"bg-gray-50 p-3",children:[Object(j.jsxs)("h3",{className:"text-blue-900 font-semibold",children:["Company: ",Object(j.jsx)("span",{className:"font-bold",children:t.company_name})," "]}),Object(j.jsxs)("p",{className:"text-blue-900 font-semibold",children:["Category: ",Object(j.jsx)("span",{className:"font-normal",children:t.category})," "]}),Object(j.jsxs)("div",{className:"text-blue-900 font-semibold",children:["Required location: ",""===t.candidate_required_location?Object(j.jsx)("span",{children:"/"}):Object(j.jsx)("span",{className:"font-normal",children:t.candidate_required_location})," "]}),Object(j.jsxs)("div",{className:"text-blue-900 font-semibold",children:["Job Type: ",t.job_type?Object(j.jsx)("span",{className:"font-normal",children:t.job_type}):Object(j.jsx)("span",{children:"/"})," "]}),Object(j.jsxs)("div",{className:"text-blue-900 font-semibold",children:["Published: ",Object(j.jsx)("span",{className:"font-normal",children:t.publication_date})," "]}),Object(j.jsx)(d.b,{onClick:function(){window.scroll(0,0)},className:"text-blue-900 font-semibold",to:{pathname:"/JobDescription",state:{description:t.description}},children:"Read more..."})]})},x=n(30),g=n.n(x);var p=function(e){var t=e.goToTop,n=e.numOfResults,s=e.chunk,c=e.setPageNum,a=e.setfromIndex,o=e.settoIndex;return Object(j.jsxs)("select",{className:"block m-auto border rounded-md",onChange:function(e){var s=e.target.value;c(+s+1),a(s*n),o(s*n+n),e.target.selectedIndex=0,t()},children:[Object(j.jsx)("option",{children:"Go to page..."}),s.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e+1},t)}))]})};var h=function(e){var t=e.goToTop,n=e.numOfResults,s=e.setPageNum,c=e.pageNumElement,a=e.fromIndex,o=e.setfromIndex,r=e.toIndex,l=e.settoIndex;return Object(j.jsx)("button",{disabled:0===a,className:"font-bold bg-blue-500 px-2 pb-0.5 rounded-full text-xl text-white",onClick:function(){s((function(){return c.innerHTML-1})),o(a-n),l(r-n),t()},children:"<"})};var O=function(e){var t=e.jobs,n=e.goToTop,s=e.numOfResults,c=e.setPageNum,a=e.pageNumElement,o=e.fromIndex,r=e.setfromIndex,l=e.toIndex,i=e.settoIndex;return Object(j.jsx)("button",{disabled:l>t.length-1,className:"font-bold bg-blue-500 px-2 pb-0.5 rounded-full text-xl text-white",onClick:function(){c((function(){return+a.innerHTML+1})),r(o+s),i(l+s),n()},children:">"})};var f=function(e){var t=e.goToPage,n=e.setgoToPage,c=e.numOfResults,a=e.jobs,o=e.fromIndex,r=e.setPageNum,l=e.setfromIndex,u=e.settoIndex,b=e.toIndex,d=e.pagesCounter,m=e.chunkedPages,x=Object(s.useState)(!1),g=Object(i.a)(x,2),f=g[0],N=g[1],v=Object(s.useState)(!1),I=Object(i.a)(v,2),y=I[0],k=I[1],S=Object(s.useState)(!1),P=Object(i.a)(S,2),T=P[0],w=P[1],C=document.querySelector(".pageNum"),R=function(){window.scroll(0,0)};return Object(j.jsxs)("div",{className:"grid gap-2 m-auto my-4",children:[Object(j.jsxs)("div",{className:"flex gap-3 justify-center mb-1.5",children:[Object(j.jsx)(h,{setPageNum:r,fromIndex:o,setfromIndex:l,toIndex:b,settoIndex:u,pageNumElement:C,numOfResults:c,goToTop:R}),d>100&&!t&&Object(j.jsx)("button",{onClick:function(){return n(!t)},className:"rounded-lg px-1  bg-blue-500 text-white",children:"Go to page..."}),t&&d>100&&Object(j.jsxs)("div",{className:"flex gap-3",children:[Object(j.jsx)("button",{className:"".concat(f&&"bg-blue-600","  rounded-lg px-1  bg-blue-500 text-white"),onClick:function(){N((function(e){return!e})),k(!1),w(!1)},children:"1...100"}),d>100&&Object(j.jsx)("button",{className:"".concat(y&&"bg-blue-600","  rounded-lg px-1  bg-blue-500 text-white"),onClick:function(){k((function(e){return!e})),N(!1),w(!1)},children:"100...200"}),d>200&&Object(j.jsx)("button",{className:"".concat(T&&"bg-blue-600","  rounded-lg px-1  bg-blue-500 text-white"),onClick:function(){w((function(e){return!e})),N(!1),k(!1)},children:"200..."})]}),m.length>0&&d<100&&Object(j.jsx)(p,{chunk:m[0],setPageNum:r,setfromIndex:l,settoIndex:u,numOfResults:c,goToTop:R}),Object(j.jsx)(O,{setPageNum:r,fromIndex:o,setfromIndex:l,toIndex:b,settoIndex:u,pageNumElement:C,numOfResults:c,goToTop:R,jobs:a})]}),f?m.map((function(e,t){return 0===t&&Object(j.jsx)(p,{chunk:e,setPageNum:r,setfromIndex:l,settoIndex:u,numOfResults:c,goToTop:R},t)})):y?m.map((function(e,t){return 1===t&&Object(j.jsx)(p,{chunk:e,setPageNum:r,setfromIndex:l,settoIndex:u,numOfResults:c,goToTop:R},t)})):T&&m.map((function(e,t){return 2===t&&Object(j.jsx)(p,{chunk:e,setPageNum:r,setfromIndex:l,settoIndex:u,numOfResults:c,goToTop:R},t)}))]})};var N=function(e){var t=e.goToPage,n=e.setgoToPage,c=e.pages,a=e.jobs,o=e.pagesCounter,r=e.fromIndex,l=e.setfromIndex,i=e.toIndex,u=e.settoIndex,b=e.chunkedPages,d=e.setChunkedPages,x=e.pageNum,p=e.setPageNum,h=e.numOfResults;return Object(s.useEffect)((function(){d(g()(c,100))}),[c,d]),Object(j.jsxs)("div",{className:"grid gap-2",children:[Object(j.jsxs)("div",{className:"text-center bg-blue-500 p-1 text-white",children:["Found ",Object(j.jsxs)("span",{children:[a.length," results"]})]}),Object(j.jsxs)("h2",{className:"font-bold text-center p-1 pl-3 rounded-full  px-3 bg-gray-100 inline-block text-blue-900",children:["Page ",Object(j.jsx)("span",{className:"pageNum",children:x})," "]}),Object(j.jsx)("div",{children:a.map((function(e,t){return t>=r&&t<i&&Object(j.jsx)(m,{index:t,job:e},t)}))}),Object(j.jsx)("hr",{}),a.length>h&&Object(j.jsx)(f,{fromIndex:r,setfromIndex:l,toIndex:i,settoIndex:u,chunkedPages:b,setChunkedPages:d,pageNum:x,setPageNum:p,jobs:a,pagesCounter:o,numOfResults:h,goToPage:t,setgoToPage:n})]})};var v=function(e){var t=e.setgoToPage,n=e.numOfResults,c=e.setfromIndex,a=e.settoIndex,o=e.setPageNum,r=e.categories,l=e.setLimit,u=e.setCategory,b=e.setSearch,d=e.inputSearch,m=e.setInputSearch,x=e.setIsLoading,g=Object(s.useState)(""),p=Object(i.a)(g,2),h=p[0],O=p[1],f=Object(s.useState)(0),N=Object(i.a)(f,2),v=N[0],I=N[1];return Object(j.jsxs)("form",{className:"filters grid gap-3 mb-3",onSubmit:function(e){e.preventDefault(),u(h),b(d),l(v),x(!0),c(0),a(n),o(1),t(!1)},children:[Object(j.jsxs)("select",{className:"border p-1.5",onChange:function(e){O(e.target.value)},children:[Object(j.jsx)("option",{children:"Choose a job category"}),Object(j.jsx)("option",{children:"All jobs"}),r.map((function(e,t){return Object(j.jsx)("option",{value:e.slug,children:e.name},t)}))]}),Object(j.jsxs)("div",{className:"border p-2",children:[Object(j.jsx)("label",{className:"mb-2 block",htmlFor:"search",children:"Search job listing title and description"}),Object(j.jsx)("input",{className:"pl-2 border",type:"search",id:"search",onChange:function(e){m(e.target.value)}})]}),Object(j.jsxs)("div",{className:"border p-2",children:[Object(j.jsxs)("label",{className:"block",htmlFor:"limit",children:["Limit the number of job listing result ",Object(j.jsx)("span",{className:"text-sm italic",children:"(will not work with search input, API problem)"})]}),Object(j.jsx)("input",{className:"border w-20 my-1.5",type:"number",id:"limit",min:"1",onChange:function(e){I(e.target.value)}})]}),Object(j.jsxs)("div",{className:"flex justify-evenly",children:[Object(j.jsx)("button",{className:" rounded-lg px-5  bg-blue-600 text-white",type:"submit",children:"Go!"}),Object(j.jsx)("button",{className:" rounded-lg px-5  bg-blue-600 text-white",onClick:function(){l("all"),u(""),b(""),O("Choose a job category"),m(""),I(""),document.querySelector("select").selectedIndex=0,document.querySelector("#search").value="",document.querySelector("#limit").value=""},children:"Reset"})]})]})};var I=function(e){var t=e.openFilters,n=e.setOpenFilters,s=document.querySelector(".filters");return Object(j.jsxs)("header",{className:"flex bg-blue-400 p-3 pb-5",children:[Object(j.jsx)("h1",{className:" text-white text-2xl text-center cursor-pointer",onClick:function(){return window.location.reload()},children:"Remote Jobs"}),Object(j.jsxs)("button",{className:"block  mt-2 bg-blue-500 text-white rounded-full  px-3 ml-auto",onClick:function(){n((function(e){return!e})),s.style=t?"display: none":"display: grid"},children:[" ",t?Object(j.jsx)("span",{children:"Hide"}):Object(j.jsx)("span",{children:"Show"})," filters"]})]})};var y=function(){return Object(j.jsxs)("footer",{className:"bg-blue-400 grid gap-2 text-white mt-2 text-center",children:[Object(j.jsxs)("p",{className:"py-2",children:["API Source: ",Object(j.jsx)("a",{href:"https://remotive.io/",rel:"noreferrer",target:"_blank",children:"https://remotive.io/api-documentation"})]}),Object(j.jsxs)("p",{className:"bg-blue-500 py-2",children:["Made by ",Object(j.jsx)("a",{className:"underline",href:"https://github.com/BogdanCikota",rel:"noreferrer",target:"_blank",children:"Bogdan"})," "]})]})},k=n(3);var S=function(){var e=Object(k.f)().state.description;return Object(j.jsxs)("div",{className:"bg-gray-50",children:[Object(j.jsx)(d.b,{to:"/",className:"underline text-blue-900 font-semibold",children:" \u2190 back"}),Object(j.jsx)("div",{className:"job-description p-2 text-blue-900 grid gap-2",dangerouslySetInnerHTML:{__html:e}}),Object(j.jsx)(d.b,{to:"/",className:"underline text-blue-900 font-semibold",children:" \u2190 back"})]})};var P=function(e){var t=e.hasData;return Object(j.jsxs)("div",{className:"grid gap-2",children:[Object(j.jsx)("h2",{className:"text-center bg-blue-500 p-1 text-white",children:t?Object(j.jsx)("span",{children:"Loading..."}):Object(j.jsx)("span",{children:"No data! Try again later!"})}),Object(j.jsx)("div",{className:"rounded-full bg-gray-100 h-8",children:" "}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"bg-gray-50 p-3 h-32"}),Object(j.jsx)("div",{className:"bg-gray-100 p-3 h-32"})]})]})};var T=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!0),o=Object(i.a)(a,2),u=o[0],m=o[1],x=Object(s.useState)(0),g=Object(i.a)(x,2),p=g[0],h=g[1],O=Object(s.useState)([]),f=Object(i.a)(O,2),T=f[0],w=f[1],C=Object(s.useState)("all"),R=Object(i.a)(C,2),_=R[0],L=R[1],q=Object(s.useState)([]),E=Object(i.a)(q,2),F=E[0],J=E[1],D=Object(s.useState)(""),H=Object(i.a)(D,2),M=H[0],A=H[1],B=Object(s.useState)(""),G=Object(i.a)(B,2),z=G[0],K=G[1],Q=Object(s.useState)(""),U=Object(i.a)(Q,2),V=U[0],W=U[1],X=Object(s.useState)(!1),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1],ee=Object(s.useState)(0),te=Object(i.a)(ee,2),ne=te[0],se=te[1],ce=Object(s.useState)(7),ae=Object(i.a)(ce,2),oe=ae[0],re=ae[1],le=Object(s.useState)([]),ie=Object(i.a)(le,2),ue=ie[0],be=ie[1],de=Object(s.useState)(1),je=Object(i.a)(de,2),me=je[0],xe=je[1],ge=Object(s.useState)(!1),pe=Object(i.a)(ge,2),he=pe[0],Oe=pe[1],fe=Object(s.useState)(!0),Ne=Object(i.a)(fe,2),ve=Ne[0],Ie=Ne[1],ye=function(){var e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://remotive.io/api/remote-jobs/categories");case 3:t=e.sent,console.log(t.data.jobs),J(t.data.jobs),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),Ie(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){(function(){var e=Object(l.a)(r.a.mark((function e(){var t,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://remotive.io/api/remote-jobs?limit=".concat(_,"&category=").concat(M,"&search=").concat(V));case 3:for(t=e.sent,console.log(t.data.jobs),c(t.data.jobs),m(!1),n=[],s=0;s<t.data.jobs.length/7;s++)n.push(s);h(n.length),w(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()(),ye()}),[_,M,V]),Object(j.jsx)(d.a,{basemname:"/",children:Object(j.jsxs)("div",{className:"max-w-sm m-auto",children:[Object(j.jsx)(I,{openFilters:Z,setOpenFilters:$}),Object(j.jsx)(v,{setLimit:L,setCategory:A,setSearch:W,inputSearch:z,setIsLoading:m,setInputSearch:K,categories:F,setfromIndex:se,settoIndex:re,setPageNum:xe,numOfResults:7,setgoToPage:Oe}),u?Object(j.jsx)(P,{hasData:ve}):Object(j.jsxs)(k.c,{children:[Object(j.jsx)(k.a,{exact:!0,path:"/",children:Object(j.jsx)(N,{jobs:n,pages:T,pagesCounter:p,fromIndex:ne,setfromIndex:se,toIndex:oe,settoIndex:re,chunkedPages:ue,setChunkedPages:be,pageNum:me,setPageNum:xe,numOfResults:7,goToPage:he,setgoToPage:Oe})}),Object(j.jsx)(k.a,{exact:!0,path:"/JobDescription",component:S})]}),Object(j.jsx)("hr",{}),Object(j.jsx)(y,{})]})})};a.a.render(Object(j.jsx)(T,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.d47b4f21.chunk.js.map