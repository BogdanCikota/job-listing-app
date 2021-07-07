(this["webpackJsonpjob-listing-app"]=this["webpackJsonpjob-listing-app"]||[]).push([[0],{35:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(28),a=n.n(c),o=(n(35),n(12)),r=n.n(o),l=n(15),i=n(2),u=n(16),b=n.n(u),j=n(9),d=n(0);var x=function(e){var t=e.job,n=e.index;return Object(d.jsxs)("div",{className:n%2!==0?"bg-gray-100 p-3":"bg-gray-50 p-3",children:[Object(d.jsxs)("h3",{className:"text-blue-900 font-semibold",children:["Company: ",Object(d.jsx)("span",{className:"font-bold",children:t.company_name})," "]}),Object(d.jsxs)("p",{className:"text-blue-900 font-semibold",children:["Category: ",Object(d.jsx)("span",{className:"font-normal",children:t.category})," "]}),Object(d.jsxs)("div",{className:"text-blue-900 font-semibold",children:["Required location: ",""===t.candidate_required_location?Object(d.jsx)("span",{children:"/"}):Object(d.jsx)("span",{className:"font-normal",children:t.candidate_required_location})," "]}),Object(d.jsxs)("div",{className:"text-blue-900 font-semibold",children:["Job Type: ",t.job_type?Object(d.jsx)("span",{className:"font-normal",children:t.job_type}):Object(d.jsx)("span",{children:"/"})," "]}),Object(d.jsxs)("div",{className:"text-blue-900 font-semibold",children:["Published: ",Object(d.jsx)("span",{className:"font-normal",children:t.publication_date})," "]}),Object(d.jsx)(j.b,{onClick:function(){window.scroll(0,0)},className:"text-blue-900 font-semibold",to:{pathname:"/JobDescription",state:{description:t.description}},children:"Read more..."})]})},m=n(30),g=n.n(m);var p=function(e){var t=e.goToTop,n=e.numOfResults,s=e.chunk,c=e.setPageNum,a=e.setfromIndex,o=e.settoIndex;return Object(d.jsx)("div",{className:"p-2 grid grid-cols-7 gap-2",children:s.map((function(e,s){return Object(d.jsx)("button",{className:"rounded-lg px-1  bg-blue-400 text-white",onClick:function(){c(e+1),a(e*n),o(e*n+n),t()},children:e+1},s)}))})};var h=function(e){var t=e.goToTop,n=e.numOfResults,s=e.setPageNum,c=e.pageNumElement,a=e.fromIndex,o=e.setfromIndex,r=e.toIndex,l=e.settoIndex;return Object(d.jsx)("button",{disabled:0===a,className:"font-bold bg-blue-500 px-2 rounded-full text-xl text-white",onClick:function(){s((function(){return c.innerHTML-1})),o(a-n),l(r-n),t()},children:"<"})};var O=function(e){var t=e.jobs,n=e.goToTop,s=e.numOfResults,c=e.setPageNum,a=e.pageNumElement,o=e.fromIndex,r=e.setfromIndex,l=e.toIndex,i=e.settoIndex;return Object(d.jsx)("button",{disabled:l>t.length-1,className:"font-bold bg-blue-500 px-2 rounded-full text-xl text-white",onClick:function(){c((function(){return+a.innerHTML+1})),r(o+s),i(l+s),n()},children:">"})};var f=function(e){var t=e.goToPage,n=e.setgoToPage,c=e.numOfResults,a=e.jobs,o=e.fromIndex,r=e.setPageNum,l=e.setfromIndex,u=e.settoIndex,b=e.toIndex,j=e.pagesCounter,x=e.chunkedPages,m=Object(s.useState)(!1),g=Object(i.a)(m,2),f=g[0],N=g[1],v=Object(s.useState)(!1),I=Object(i.a)(v,2),k=I[0],y=I[1],P=Object(s.useState)(!1),S=Object(i.a)(P,2),T=S[0],w=S[1],C=document.querySelector(".pageNum"),R=function(){window.scroll(0,0)};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"flex gap-3 justify-center mb-1.5",children:[Object(d.jsx)(h,{setPageNum:r,fromIndex:o,setfromIndex:l,toIndex:b,settoIndex:u,pageNumElement:C,numOfResults:c,goToTop:R}),j>100&&!t&&Object(d.jsx)("button",{onClick:function(){return n(!t)},className:"rounded-lg px-1  bg-blue-500 text-white",children:"go to page..."}),t&&j>100&&Object(d.jsxs)("div",{className:"flex gap-2",children:[Object(d.jsx)("button",{className:"rounded-lg px-1  bg-blue-500 text-white",onClick:function(){N((function(e){return!e})),y(!1),w(!1)},children:"1...100"}),j>100&&Object(d.jsx)("button",{className:"rounded-lg px-1  bg-blue-500 text-white",onClick:function(){y((function(e){return!e})),N(!1)},children:"100...200"}),j>200&&Object(d.jsx)("button",{className:"rounded-lg px-1  bg-blue-500 text-white",onClick:function(){w((function(e){return!e})),N(!1),y(!1)},children:"200..."})]}),j<100&&Object(d.jsx)("button",{onClick:function(){return n(!t)},className:"rounded-lg px-1  bg-blue-500 text-white",children:"go to page..."}),Object(d.jsx)(O,{setPageNum:r,fromIndex:o,setfromIndex:l,toIndex:b,settoIndex:u,pageNumElement:C,numOfResults:c,goToTop:R,jobs:a})]}),t&&j<100&&x.map((function(e,t){return Object(d.jsx)(p,{chunk:e,setPageNum:r,setfromIndex:l,settoIndex:u,numOfResults:c,goToTop:R},t)})),Object(d.jsx)("hr",{}),f?x.map((function(e,t){return 0===t&&Object(d.jsx)(p,{chunk:e,setPageNum:r,setfromIndex:l,settoIndex:u,numOfResults:c,goToTop:R},t)})):k?x.map((function(e,t){return 1===t&&Object(d.jsx)(p,{chunk:e,setPageNum:r,setfromIndex:l,settoIndex:u,numOfResults:c,goToTop:R},t)})):T&&x.map((function(e,t){return 2===t&&Object(d.jsx)(p,{chunk:e,setPageNum:r,setfromIndex:l,settoIndex:u,numOfResults:c,goToTop:R},t)}))]})};var N=function(e){var t=e.goToPage,n=e.setgoToPage,c=e.pages,a=e.jobs,o=e.pagesCounter,r=e.fromIndex,l=e.setfromIndex,i=e.toIndex,u=e.settoIndex,b=e.chunkedPages,j=e.setChunkedPages,m=e.pageNum,p=e.setPageNum,h=e.numOfResults;return Object(s.useEffect)((function(){j(g()(c,100))}),[c,j]),Object(d.jsxs)("div",{className:"grid gap-2",children:[Object(d.jsxs)("div",{className:"text-center bg-blue-500 p-1 text-white",children:["Found ",Object(d.jsxs)("span",{children:[a.length," results"]})]}),Object(d.jsxs)("h2",{className:"font-bold text-center p-1 pl-3 rounded-full  px-3 bg-gray-100 inline-block text-blue-900",children:["Page ",Object(d.jsx)("span",{className:"pageNum",children:m})," "]}),Object(d.jsx)("div",{children:a.map((function(e,t){return t>=r&&t<i&&Object(d.jsx)(x,{index:t,job:e},t)}))}),Object(d.jsx)("hr",{}),a.length>h&&Object(d.jsx)(f,{fromIndex:r,setfromIndex:l,toIndex:i,settoIndex:u,chunkedPages:b,setChunkedPages:j,pageNum:m,setPageNum:p,jobs:a,pagesCounter:o,numOfResults:h,goToPage:t,setgoToPage:n})]})};var v=function(e){e.goToPage;var t=e.setgoToPage,n=e.numOfResults,c=e.setfromIndex,a=e.settoIndex,o=e.setPageNum,r=e.categories,l=e.setLimit,u=e.setCategory,b=e.setSearch,j=e.inputSearch,x=e.setInputSearch,m=e.setIsLoading,g=Object(s.useState)(0),p=Object(i.a)(g,2),h=p[0],O=p[1],f=function(){c(0),a(n),o(1),t(!1)};return Object(d.jsxs)("div",{className:"filters grid gap-3",children:[Object(d.jsxs)("select",{className:"border p-1.5",onChange:function(e){u(e.target.value),m(!0),f()},children:[Object(d.jsx)("option",{children:"Choose a job category"}),Object(d.jsx)("option",{children:"All jobs"}),r.map((function(e,t){return Object(d.jsx)("option",{value:e.slug,children:e.name},t)}))]}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b(j),m(!0),f()},className:"border p-2",children:[Object(d.jsx)("label",{className:"mb-2 block",htmlFor:"search",children:"Search job listing title and description"}),Object(d.jsx)("input",{className:"pl-2 border",type:"search",id:"search",onChange:function(e){x(e.target.value)}}),Object(d.jsx)("button",{className:"ml-2 rounded-lg px-1  bg-blue-500 text-white",type:"submit",children:"Go!"})]}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(h),m(!0),O(0),f(),document.querySelector("#limit").value=""},className:"border p-2 ",children:[Object(d.jsxs)("label",{className:"block",htmlFor:"limit",children:["Limit the number of job listing result ",Object(d.jsx)("span",{className:"text-sm italic",children:"(will not work with search input, API problem)"})]}),Object(d.jsx)("input",{className:"border w-20 my-1.5",type:"number",id:"limit",min:"1",onChange:function(e){O(e.target.value)}}),Object(d.jsx)("button",{className:"ml-2 rounded-lg px-1  bg-blue-500 text-white",type:"submit",children:"Go!"})]})]})};var I=function(e){var t=e.openFilters,n=e.setOpenFilters,s=document.querySelector(".filters");return Object(d.jsxs)("header",{className:"flex bg-blue-400 p-3 pb-5",children:[Object(d.jsx)("h1",{className:" text-white text-2xl text-center",children:"Remote Jobs"}),Object(d.jsxs)("button",{className:"block  mt-2 bg-blue-500 text-white rounded-full  px-3 ml-auto",onClick:function(){n((function(e){return!e})),s.style=t?"display: none":"display: grid"},children:[" ",t?Object(d.jsx)("span",{children:"Hide"}):Object(d.jsx)("span",{children:"Show"})," filters"]})]})};var k=function(){return Object(d.jsxs)("footer",{className:"bg-blue-400 grid gap-2 text-white mt-2 text-center",children:[Object(d.jsxs)("p",{className:"py-2",children:["API Source: ",Object(d.jsx)("a",{href:"https://remotive.io/",rel:"noreferrer",target:"_blank",children:"https://remotive.io/api-documentation"})]}),Object(d.jsxs)("p",{className:"bg-blue-500 py-2",children:["Made by ",Object(d.jsx)("a",{className:"underline",href:"https://github.com/BogdanCikota",rel:"noreferrer",target:"_blank",children:"Bogdan"})," "]})]})},y=n(3);var P=function(){var e=Object(y.f)().state.description;return Object(d.jsxs)("div",{className:"bg-gray-50",children:[Object(d.jsx)(j.b,{to:"/",className:"underline text-blue-900 font-semibold",children:" \u2190 back"}),Object(d.jsx)("div",{className:"job-description p-2 text-blue-900 grid gap-2",dangerouslySetInnerHTML:{__html:e}}),Object(d.jsx)(j.b,{to:"/",className:"underline text-blue-900 font-semibold",children:" \u2190 back"})]})};var S=function(e){var t=e.hasData;return Object(d.jsxs)("div",{className:"grid gap-2",children:[Object(d.jsx)("h2",{className:"text-center bg-blue-500 p-1 text-white",children:t?Object(d.jsx)("span",{children:"Loading..."}):Object(d.jsx)("span",{children:"No data! Try again later!"})}),Object(d.jsx)("div",{className:"rounded-full bg-gray-100 h-8",children:" "}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"bg-gray-50 p-3 h-32"}),Object(d.jsx)("div",{className:"bg-gray-100 p-3 h-32"})]})]})};var T=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!0),o=Object(i.a)(a,2),u=o[0],x=o[1],m=Object(s.useState)(0),g=Object(i.a)(m,2),p=g[0],h=g[1],O=Object(s.useState)([]),f=Object(i.a)(O,2),T=f[0],w=f[1],C=Object(s.useState)("all"),R=Object(i.a)(C,2),_=R[0],L=R[1],E=Object(s.useState)([]),F=Object(i.a)(E,2),q=F[0],D=F[1],J=Object(s.useState)(""),H=Object(i.a)(J,2),M=H[0],A=H[1],B=Object(s.useState)(""),G=Object(i.a)(B,2),z=G[0],K=G[1],Q=Object(s.useState)(""),U=Object(i.a)(Q,2),V=U[0],W=U[1],X=Object(s.useState)(!1),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1],ee=Object(s.useState)(0),te=Object(i.a)(ee,2),ne=te[0],se=te[1],ce=Object(s.useState)(7),ae=Object(i.a)(ce,2),oe=ae[0],re=ae[1],le=Object(s.useState)([]),ie=Object(i.a)(le,2),ue=ie[0],be=ie[1],je=Object(s.useState)(1),de=Object(i.a)(je,2),xe=de[0],me=de[1],ge=Object(s.useState)(!1),pe=Object(i.a)(ge,2),he=pe[0],Oe=pe[1],fe=Object(s.useState)(!0),Ne=Object(i.a)(fe,2),ve=Ne[0],Ie=Ne[1],ke=function(){var e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://remotive.io/api/remote-jobs/categories");case 3:t=e.sent,console.log(t.data.jobs),D(t.data.jobs),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),Ie(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){(function(){var e=Object(l.a)(r.a.mark((function e(){var t,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://remotive.io/api/remote-jobs?limit=".concat(_,"&category=").concat(M,"&search=").concat(V));case 3:for(t=e.sent,console.log(t.data.jobs),c(t.data.jobs),x(!1),n=[],s=0;s<t.data.jobs.length/7;s++)n.push(s);h(n.length),w(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()(),ke()}),[_,M,V]),Object(d.jsx)(j.a,{basemname:"/",children:Object(d.jsxs)("div",{className:"max-w-sm m-auto",children:[Object(d.jsx)(I,{openFilters:Z,setOpenFilters:$}),Object(d.jsx)(v,{setLimit:L,setCategory:A,setSearch:W,inputSearch:z,setIsLoading:x,setInputSearch:K,categories:q,setfromIndex:se,settoIndex:re,setPageNum:me,numOfResults:7,goToPage:he,setgoToPage:Oe}),u?Object(d.jsx)(S,{hasData:ve}):Object(d.jsxs)(y.c,{children:[Object(d.jsx)(y.a,{exact:!0,path:"/",children:Object(d.jsx)(N,{jobs:n,pages:T,pagesCounter:p,fromIndex:ne,setfromIndex:se,toIndex:oe,settoIndex:re,chunkedPages:ue,setChunkedPages:be,pageNum:xe,setPageNum:me,numOfResults:7,goToPage:he,setgoToPage:Oe})}),Object(d.jsx)(y.a,{exact:!0,path:"/JobDescription",component:P})]}),Object(d.jsx)("hr",{}),Object(d.jsx)(k,{})]})})};a.a.render(Object(d.jsx)(T,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.8c2abb9a.chunk.js.map