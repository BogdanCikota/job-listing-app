(this["webpackJsonpjob-listing-app"]=this["webpackJsonpjob-listing-app"]||[]).push([[0],{35:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(28),a=s.n(c),o=(s(35),s(12)),l=s.n(o),r=s(15),i=s(2),b=s(16),d=s.n(b),j=s(9),u=s(0);var x=function(e){var t=e.job,s=e.setJobPositionTop;return Object(u.jsxs)(j.b,{onClick:function(e){window.screen.width<640?s(e.target.offsetTop-40):s(e.target.offsetTop-100)},className:" job border-b  hover:bg-gray-50 p-4 block xl:p-4 xl:pl-6 lg:flex justify-between ",to:{pathname:"/JobDescription",state:{job:t}},children:[Object(u.jsxs)("div",{className:"flex gap-4 xl:gap-5",children:[Object(u.jsx)("img",{src:"https://remotive.io/job/".concat(t.id,"/logo"),alt:"logo ".concat(t.company_name),className:"rounded-full w-16 h-16"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"text-blue-400",children:t.company_name}),Object(u.jsx)("h2",{className:"text-blue-900 font-semibold",children:t.title})]})]}),Object(u.jsxs)("div",{className:"hidden text-blue-400 text-right text-sm lg:grid ",children:[Object(u.jsx)("p",{children:t.category}),Object(u.jsx)("div",{children:t.candidate_required_location})]})]})},m=s(30),h=s.n(m);var g=function(e){var t=e.setJobPositionTop,s=e.pages,c=e.lastChunk,a=e.chunkIndex,o=e.numOfResults,l=e.chunk,r=e.setPageNum,b=e.setfromIndex,d=e.settoIndex,j=Object(n.useState)(0),x=Object(i.a)(j,2),m=x[0],h=x[1];return Object(n.useEffect)((function(){h(l.filter((function(e,t){return l.length-1===t})))}),[l]),Object(u.jsxs)("select",{className:"block m-auto border rounded-md",onChange:function(e){var s=e.target.value;r(+s+1),b(s*o),d(s*o+o),e.target.selectedIndex=0,t(0)},children:[s&&s.length>100?Object(u.jsx)("option",{children:"".concat(100*(a+1)-100+1,"-").concat(c===a?+m+1:100*(a+1))}):Object(u.jsx)("option",{children:"1-".concat(+m+1)}),l.map((function(e,t){return Object(u.jsx)("option",{value:e,children:e+1},t)}))]})};var p=function(e){var t=e.setJobPositionTop,s=e.numOfResults,n=e.setPageNum,c=e.pageNumElement,a=e.fromIndex,o=e.setfromIndex,l=e.toIndex,r=e.settoIndex;return Object(u.jsx)("button",{disabled:0===a,className:"font-bold bg-blue-500 xl:bg-blue-400 px-2 pb-0.5 rounded-full text-xl text-white",onClick:function(){n((function(){return c.innerHTML-1})),o(a-s),r(l-s),t(0)},children:"<"})};var O=function(e){var t=e.setJobPositionTop,s=e.jobs,n=e.numOfResults,c=e.setPageNum,a=e.pageNumElement,o=e.fromIndex,l=e.setfromIndex,r=e.toIndex,i=e.settoIndex;return Object(u.jsx)("button",{disabled:r>s.length-1,className:"font-bold bg-blue-500 xl:bg-blue-400 px-2 pb-0.5 rounded-full text-xl text-white",onClick:function(){c((function(){return+a.innerHTML+1})),l(o+n),i(r+n),t(0)},children:">"})};var f=function(e){var t=e.setJobPositionTop,s=e.goToPage,n=e.setgoToPage,c=e.numOfResults,a=e.jobs,o=e.fromIndex,l=e.setPageNum,r=e.setfromIndex,i=e.settoIndex,b=e.toIndex,d=e.pages,j=e.chunkedPages,x=document.querySelector(".pageNum");return Object(u.jsxs)("div",{className:"m-auto my-4 flex gap-6 justify-center mb-1.5 items-center",children:[Object(u.jsx)(p,{setPageNum:l,fromIndex:o,setfromIndex:r,toIndex:b,settoIndex:i,pageNumElement:x,numOfResults:c,setJobPositionTop:t}),d&&d.length>100&&!s&&Object(u.jsx)("button",{onClick:function(e){n(!s),t(e.target.offsetTop)},className:"rounded-lg px-1  bg-blue-500 xl:bg-blue-400 text-white",children:"Go to page..."}),s&&d.length>100&&Object(u.jsx)("div",{className:"grid gap-3 sm:flex",children:j.map((function(e,s){return Object(u.jsx)(g,{pages:d,lastChunk:j.length-1,chunkIndex:s,chunk:e,setPageNum:l,setfromIndex:r,settoIndex:i,numOfResults:c,setJobPositionTop:t},s)}))}),j.length>0&&d.length<100&&Object(u.jsx)(g,{chunk:j[0],setPageNum:l,setfromIndex:r,settoIndex:i,numOfResults:c,setJobPositionTop:t}),Object(u.jsx)(O,{setPageNum:l,fromIndex:o,setfromIndex:r,toIndex:b,settoIndex:i,pageNumElement:x,numOfResults:c,jobs:a,setJobPositionTop:t})]})};var v=function(e){var t=e.setJobPositionTop,s=e.openFilters,c=e.goToPage,a=e.setgoToPage,o=e.pages,l=e.jobs,r=e.fromIndex,i=e.setfromIndex,b=e.toIndex,d=e.settoIndex,j=e.chunkedPages,m=e.setChunkedPages,g=e.pageNum,p=e.setPageNum,O=e.numOfResults;return Object(n.useEffect)((function(){m(h()(o,100))}),[o,m]),Object(u.jsxs)("main",{className:" grid mb-2 xl:mt-16 xl:m-auto xl:w-2/3 xl:items-start",children:[Object(u.jsxs)("div",{className:"".concat(s?"xl:bg-opacity-30 bg-blue-400":"bg-blue-500"," text-center  p-1 text-white mb-4 xl:bg-blue-300 xl:rounded-b-full xl:p-1.5"),children:["Found ",Object(u.jsxs)("span",{children:[l.length," results"]})]}),Object(u.jsxs)("h2",{className:"".concat(l.length<O?"hidden":"inline-block"," font-bold text-center text-blue-900"),children:["Page ",Object(u.jsx)("span",{className:"pageNum",children:g})," "]}),Object(u.jsx)("div",{className:"jobs-container",children:l.map((function(e,s){return s>=r&&s<b&&Object(u.jsx)(x,{job:e,setJobPositionTop:t},s)}))}),Object(u.jsxs)("h2",{className:"".concat(l.length<O?"hidden":"inline-block"," font-bold text-center text-blue-900"),children:["Page ",Object(u.jsx)("span",{className:"pageNum",children:g})," "]}),l.length>O&&Object(u.jsx)(f,{fromIndex:r,setfromIndex:i,toIndex:b,settoIndex:d,chunkedPages:j,setChunkedPages:m,pageNum:g,setPageNum:p,jobs:l,pages:o,numOfResults:O,goToPage:c,setgoToPage:a,setJobPositionTop:t})]})};var N=function(e){var t=e.setOpenFilters,s=e.setgoToPage,c=e.numOfResults,a=e.setfromIndex,o=e.settoIndex,l=e.setPageNum,r=e.categories,b=e.setLimit,d=e.setCategory,j=e.setSearch,x=e.inputSearch,m=e.setInputSearch,h=e.setIsLoading,g=Object(n.useState)(""),p=Object(i.a)(g,2),O=p[0],f=p[1],v=Object(n.useState)(0),N=Object(i.a)(v,2),I=N[0],y=N[1];return Object(u.jsxs)("form",{className:"pb-6 grid gap-3 bg-white xl:p-5 xl:rounded-lg xl:gap-6",onSubmit:function(e){e.preventDefault(),d(O),j(x),b(I),h(!0),a(0),o(c),l(1),s(!1),t(!1)},children:[Object(u.jsxs)("select",{className:"border p-1.5",onChange:function(e){f(e.target.value)},children:[Object(u.jsx)("option",{children:"Choose a job category"}),Object(u.jsx)("option",{children:"All jobs"}),r.map((function(e,t){return Object(u.jsx)("option",{value:e.slug,children:e.name},t)}))]}),Object(u.jsxs)("div",{className:"border p-2",children:[Object(u.jsx)("label",{className:"mb-2 block",htmlFor:"search",children:"Search job listing title and description"}),Object(u.jsx)("input",{className:"pl-2 border",type:"search",id:"search",onChange:function(e){m(e.target.value)}})]}),Object(u.jsxs)("div",{className:"border p-2",children:[Object(u.jsxs)("label",{className:"block",htmlFor:"limit",children:["Limit the number of job listing result ",Object(u.jsx)("span",{className:"text-sm italic",children:"(will not work with search input, API problem)"})]}),Object(u.jsx)("input",{className:"border w-20 my-1.5",type:"number",id:"limit",min:"1",onChange:function(e){y(e.target.value)}})]}),Object(u.jsxs)("div",{className:"flex justify-evenly mt-2 xl:justify-center xl:gap-14 xl:mt-0",children:[Object(u.jsx)("button",{className:" rounded-lg px-4 py-1  bg-blue-400 text-white",type:"submit",children:"Go!"}),Object(u.jsx)("button",{className:" rounded-lg px-4 py-1  bg-blue-400 text-white",onClick:function(){b("all"),d(""),j(""),f("Choose a job category"),m(""),y(""),t(!1),document.querySelector("select").selectedIndex=0,document.querySelector("#search").value="",document.querySelector("#limit").value=""},children:"Reset"})]})]})};var I=function(e){var t=e.setJobPositionTop,s=e.openFilters,n=e.setOpenFilters,c=e.setgoToPage,a=e.numOfResults,o=e.setfromIndex,l=e.settoIndex,r=e.setPageNum,i=e.categories,b=e.setLimit,d=e.setCategory,j=e.setSearch,x=e.inputSearch,m=e.setInputSearch,h=e.setIsLoading;return Object(u.jsxs)("header",{className:"".concat(s?"xl:pb-4 xl:bg-opacity-60":"pb-3"," bg-blue-400 grid grid-cols-3 xl:grid-cols-7 xl:fixed w-full left-0 top-0 xl:px-7  xl:gap-3"),children:[Object(u.jsx)("h1",{className:"col-span-2 m-3 mb-2  text-white text-2xl cursor-pointer",onClick:function(){return window.location.reload()},children:"Remote Jobs"}),Object(u.jsxs)("button",{className:"".concat(s?"bg-opacity-0 mr-6 xl:self-start xl:mt-2":"mt-3"," mr-3  rounded-2xl px-2 py-1 col-start-3 justify-self-end self-center bg-blue-500 text-white  xl:col-start-7 xl:px-3"),onClick:function(){t(0),n((function(e){return!e}))},children:[" ",s?Object(u.jsx)("span",{className:"text-xl xl:text-2xl",children:"x"}):Object(u.jsx)("span",{children:"Filters"})]}),Object(u.jsx)("div",{className:"".concat(s?"col-span-full xl:col-start-3 xl:col-end-6 xl:row-span-full":"hidden"," xl:mt-5 xl:mb-1 "),children:Object(u.jsx)(N,{setLimit:b,setCategory:d,setSearch:j,inputSearch:x,setIsLoading:h,setInputSearch:m,categories:i,setfromIndex:o,settoIndex:l,setPageNum:r,numOfResults:a,setgoToPage:c,setOpenFilters:n})})]})};var y=function(e){var t=e.isLoading;return Object(u.jsxs)("footer",{className:"".concat(t&&"fixed bottom-0 left-0 w-full"," text-white mt-4 text-center"),children:[Object(u.jsxs)("p",{className:"py-2 bg-blue-400  xl:bg-blue-300 xl:rounded-t-full xl:p-1.5",children:["API Source: ",Object(u.jsx)("a",{href:"https://remotive.io/api-documentation",rel:"noreferrer",target:"_blank",children:"https://remotive.io/api-documentation"})]}),Object(u.jsxs)("p",{className:"bg-blue-500 py-2",children:["Made by ",Object(u.jsx)("a",{className:"underline",href:"https://github.com/BogdanCikota",rel:"noreferrer",target:"_blank",children:"Bogdan"})," "]})]})},P=s(3);var w=function(){var e=Object(P.f)().state.job,t=e.publication_date,s=new Date(t+"Z").toUTCString();return s=s.slice(5,16),Object(n.useEffect)((function(){window.scroll(0,0);for(var e=document.querySelector(".job-description"),t=0;t<e.children.length;t++)"&nbsp;"!==e.children[t].innerHTML&&""!==e.children[t].innerHTML&&"<br><br>"!==e.children[t].innerHTML&&"<br>"!==e.children[t].innerHTML||e.children[t].classList.add("hidden")}),[e]),Object(u.jsxs)("div",{className:"xl:mt-16 xl:m-auto xl:max-w-5xl xl:p-4 text-gray-800",children:[Object(u.jsx)(j.b,{to:"/",className:"ml-2 underline font-semibold lg:text-lg",children:" \u2190 back"}),Object(u.jsxs)("div",{className:"xl:flex gap-2 px-4 xl:px-0",children:[Object(u.jsx)("div",{className:"w-20 h-20 m-auto xl:border xl:p-3 xl:m-0 xl:w-auto xl:h-auto self-center",children:Object(u.jsx)("img",{className:"rounded-full xl:rounded-none",src:"https://remotive.io/job/".concat(e.id,"/logo"),alt:"logo ".concat(e.company_name)})}),Object(u.jsxs)("div",{className:"font-semibold p-2 xl:grid gap-2",children:[Object(u.jsxs)("h3",{children:[Object(u.jsx)("span",{className:"font-bold",children:e.company_name})," "]}),Object(u.jsxs)("h2",{children:["Job title: ",e.title]}),Object(u.jsxs)("p",{children:["Category:  ",Object(u.jsx)("span",{className:"font-normal",children:e.category})," "]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"inline",children:[""===e.candidate_required_location?Object(u.jsx)("span",{children:"/"}):Object(u.jsx)("span",{className:"font-normal",children:e.candidate_required_location})," "]})," /",Object(u.jsxs)("div",{className:"inline",children:[" ",e.job_type?Object(u.jsx)("span",{className:"font-normal",children:e.job_type}):Object(u.jsx)("span",{children:"/"})," "]})]}),Object(u.jsxs)("div",{children:["Published: ",Object(u.jsx)("span",{className:"font-normal",children:s})," "]})]})]}),Object(u.jsx)("div",{className:"border job-description py-3 px-5 w-screen overflow-scroll sm:w-full sm:overflow-visible grid gap-4 leading-relaxed",dangerouslySetInnerHTML:{__html:e.description}}),Object(u.jsx)(j.b,{to:"/",className:"ml-2 underline font-semibold lg:text-lg",children:" \u2190 back"})]})};var k=function(e){var t=e.hasData;return Object(u.jsxs)("div",{className:"loading grid gap-0.5 mb-2 xl:mt-16 xl:m-auto xl:w-2/3",children:[Object(u.jsx)("div",{className:"bg-blue-500 text-center  p-1 text-white mb-4 xl:bg-blue-300 xl:rounded-b-full xl:p-1.5",children:t?Object(u.jsx)("span",{children:"Loading..."}):Object(u.jsx)("span",{children:"No data! Try again later!"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"job border-b hover:bg-gray-50 h-24"}),Object(u.jsx)("div",{className:"job border-b hover:bg-gray-50 h-24"}),Object(u.jsx)("div",{className:"job border-b hover:bg-gray-50 h-24"}),Object(u.jsx)("div",{className:"hidden job border-b hover:bg-gray-50 xl:block h-24"}),Object(u.jsx)("div",{className:"hidden job border-b hover:bg-gray-50 xl:block h-24"})]})]})};var S=function(){return Object(u.jsxs)("div",{className:"loading grid gap-0.5 mb-2 xl:mt-16 xl:m-auto xl:w-2/3",children:[Object(u.jsx)("div",{className:"bg-blue-500 text-center  p-1 text-white mb-4 xl:bg-blue-300 xl:rounded-b-full xl:p-1.5",children:"0 results"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"job border-b hover:bg-gray-50 h-24"}),Object(u.jsx)("div",{className:"job border-b hover:bg-gray-50 h-24"}),Object(u.jsx)("div",{className:"job border-b hover:bg-gray-50 h-24"}),Object(u.jsx)("div",{className:"hidden job border-b hover:bg-gray-50 xl:block h-24"}),Object(u.jsx)("div",{className:"hidden job border-b hover:bg-gray-50 xl:block h-24"})]})]})};var T=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(!0),o=Object(i.a)(a,2),b=o[0],x=o[1],m=Object(n.useState)(0),h=Object(i.a)(m,2),g=h[0],p=h[1],O=Object(n.useState)([]),f=Object(i.a)(O,2),N=f[0],T=f[1],C=Object(n.useState)("all"),J=Object(i.a)(C,2),L=J[0],R=J[1],_=Object(n.useState)([]),F=Object(i.a)(_,2),E=F[0],q=F[1],M=Object(n.useState)(""),H=Object(i.a)(M,2),D=H[0],A=H[1],B=Object(n.useState)(""),G=Object(i.a)(B,2),U=G[0],Z=G[1],z=Object(n.useState)(""),K=Object(i.a)(z,2),Q=K[0],V=K[1],W=Object(n.useState)(!1),X=Object(i.a)(W,2),Y=X[0],$=X[1],ee=Object(n.useState)(0),te=Object(i.a)(ee,2),se=te[0],ne=te[1],ce=Object(n.useState)(10),ae=Object(i.a)(ce,2),oe=ae[0],le=ae[1],re=Object(n.useState)([]),ie=Object(i.a)(re,2),be=ie[0],de=ie[1],je=Object(n.useState)(1),ue=Object(i.a)(je,2),xe=ue[0],me=ue[1],he=Object(n.useState)(!1),ge=Object(i.a)(he,2),pe=ge[0],Oe=ge[1],fe=Object(n.useState)(!0),ve=Object(i.a)(fe,2),Ne=ve[0],Ie=ve[1],ye=Object(n.useState)(0),Pe=Object(i.a)(ye,2),we=Pe[0],ke=Pe[1],Se=function(){var e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://remotive.io/api/remote-jobs/categories");case 3:t=e.sent,console.log(t.data.jobs),q(t.data.jobs),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),Ie(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){(function(){var e=Object(r.a)(l.a.mark((function e(){var t,s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://remotive.io/api/remote-jobs?limit=".concat(L,"&category=").concat(D,"&search=").concat(Q));case 3:for(t=e.sent,console.log(t.data.jobs),c(t.data.jobs),x(!1),s=[],n=0;n<t.data.jobs.length/10;n++)s.push(n);p(s.length),T(s),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()(),Se()}),[L,D,Q]),Object(u.jsx)(j.a,{basemname:"/",children:Object(u.jsxs)("div",{className:"App md:mx-40 xl:mx-0 grid",children:[Object(u.jsx)(I,{openFilters:Y,setOpenFilters:$,setLimit:R,setCategory:A,setSearch:V,inputSearch:U,setIsLoading:x,setInputSearch:Z,categories:E,setfromIndex:ne,settoIndex:le,setPageNum:me,numOfResults:10,setgoToPage:Oe,setJobPositionTop:ke}),b?Object(u.jsx)(k,{hasData:Ne}):0===s.length?Object(u.jsx)(S,{}):Object(u.jsxs)(P.c,{onClick:window.scrollTo(0,we),children:[Object(u.jsx)(P.a,{exact:!0,path:"/",children:Object(u.jsx)(v,{jobs:s,pages:N,pagesCounter:g,fromIndex:se,setfromIndex:ne,toIndex:oe,settoIndex:le,chunkedPages:be,setChunkedPages:de,pageNum:xe,setPageNum:me,numOfResults:10,goToPage:pe,setgoToPage:Oe,openFilters:Y,setJobPositionTop:ke})}),Object(u.jsx)(P.a,{exact:!0,path:"/JobDescription",component:w})]}),Object(u.jsx)(y,{isLoading:b})]})})};a.a.render(Object(u.jsx)(T,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.0ef58f7b.chunk.js.map