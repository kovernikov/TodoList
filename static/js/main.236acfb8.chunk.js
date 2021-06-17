(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{57:function(e,t,a){e.exports=a(69)},62:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),o=(a(62),a(39)),l=a(12),u=a(24),s=a(16),d=(a(63),a(112)),m=a(101),f=a(102);var b=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!1),l=Object(s.a)(o,2),u=l[0],b=l[1],v=function(){var t=r.trim();t?e.addItem(t):b(!0),c("")};return i.a.createElement("div",null,i.a.createElement(d.a,{variant:"outlined",size:"small",value:r,onChange:function(e){c(e.currentTarget.value),b(!1)},onKeyPress:function(e){"Enter"===e.key&&v()},label:"Title",error:u,helperText:u&&"Title is required!"}),i.a.createElement(m.a,{onClick:v,color:"primary"},i.a.createElement(f.a,null)))};var v=function(e){var t=Object(n.useState)(e.title),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!1),l=Object(s.a)(o,2),u=l[0],m=l[1],f=function(){m(!1),e.changeTitle(r)};return u?i.a.createElement(d.a,{value:r,autoFocus:!0,onBlur:f,onChange:function(e){return c(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&f()}}):i.a.createElement("span",{onDoubleClick:function(){return m(!0)}},e.title)},j=a(114),O=a(105),E=a(103),p=a(104);var h=function(e){var t=e.filter,a=e.tasks.map((function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("span",{className:t.isDone?"is-done":""},i.a.createElement(j.a,{size:"small",color:"primary",checked:t.isDone,onChange:function(a){return e.changeTaskStatus(t.id,a.currentTarget.checked,e.todoListID)}}),i.a.createElement(v,{title:t.title,changeTitle:function(a){return e.changeTaskTitle(t.id,a,e.todoListID)}})),i.a.createElement(m.a,{onClick:function(){return e.removeTask(t.id,e.todoListID)},color:"secondary"},i.a.createElement(E.a,null)))}));return i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(v,{title:e.title,changeTitle:function(t){return e.changeTodoListTitle(t,e.todoListID)}}),i.a.createElement(m.a,{onClick:function(){return e.removeTodoList(e.todoListID)},color:"secondary"},i.a.createElement(p.a,null))),i.a.createElement(b,{addItem:function(t){return e.addTask(t,e.todoListID)}}),i.a.createElement("div",{style:{listStyle:"none",padding:"0px"}},a),i.a.createElement("div",null,i.a.createElement(O.a,{size:"small",variant:"all"===t?"contained":"outlined",color:"primary",onClick:function(){return e.changeTodoListFilter("all",e.todoListID)}},"All"),i.a.createElement(O.a,{style:{margin:"5px"},size:"small",variant:"active"===t?"contained":"outlined",color:"primary",onClick:function(){return e.changeTodoListFilter("active",e.todoListID)}},"Active"),i.a.createElement(O.a,{size:"small",variant:"completed"===t?"contained":"outlined",color:"primary",onClick:function(){return e.changeTodoListFilter("completed",e.todoListID)}},"Completed")))},T=a(113),g=a(106),k=a(70),y=a(107),D=a(108),L=a(110),I=a(111),C=a(109);var S=function(){var e,t=Object(T.a)(),a=Object(T.a)(),r=Object(n.useState)([{id:t,title:"What to learn",filter:"all"},{id:a,title:"What to buy",filter:"all"}]),c=Object(s.a)(r,2),d=c[0],f=c[1],v=Object(n.useState)((e={},Object(u.a)(e,t,[{id:Object(T.a)(),title:"HTML",isDone:!0},{id:Object(T.a)(),title:"CSS",isDone:!0},{id:Object(T.a)(),title:"React",isDone:!1}]),Object(u.a)(e,a,[{id:Object(T.a)(),title:"Milk",isDone:!0},{id:Object(T.a)(),title:"Bread",isDone:!1},{id:Object(T.a)(),title:"Meat",isDone:!1}]),e)),j=Object(s.a)(v,2),E=j[0],p=j[1];function S(e,t){E[t]=E[t].filter((function(t){return t.id!==e})),p(Object(l.a)({},E))}function w(e,t){var a={id:Object(T.a)(),title:e,isDone:!1},n=Object(l.a)({},E);n[t]=[a].concat(Object(o.a)(E[t])),p(n)}function x(e,t,a){var n=Object(l.a)({},E);n[a]=E[a].map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},{isDone:t}):a})),p(n)}function z(e,t,a){var n=Object(l.a)({},E);n[a]=E[a].map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},{title:t}):a})),p(n)}function F(e,t){f(d.map((function(a){return a.id===t?Object(l.a)(Object(l.a)({},a),{},{filter:e}):a})))}function B(e,t){f(d.map((function(a){return a.id===t?Object(l.a)(Object(l.a)({},a),{},{title:e}):a})))}function W(e){f(d.filter((function(t){return t.id!==e})));var t=Object(l.a)({},E);delete t[e],p(t)}var A=d.map((function(e){var t=function(e){switch(e.filter){case"active":return E[e.id].filter((function(e){return!e.isDone}));case"completed":return E[e.id].filter((function(e){return e.isDone}));default:return E[e.id]}}(e);return i.a.createElement(g.a,{item:!0,key:e.id},i.a.createElement(k.a,{elevation:5,style:{padding:"20px"}},i.a.createElement(h,{todoListID:e.id,title:e.title,tasks:t,filter:e.filter,addTask:w,removeTask:S,removeTodoList:W,changeTaskStatus:x,changeTaskTitle:z,changeTodoListFilter:F,changeTodoListTitle:B})))}));return i.a.createElement("div",{className:"App"},i.a.createElement(y.a,{position:"static"},i.a.createElement(D.a,{style:{justifyContent:"space-between"}},i.a.createElement(m.a,{color:"inherit"},i.a.createElement(C.a,null)),i.a.createElement(L.a,{variant:"h6"},"Todolists"),i.a.createElement(O.a,{color:"inherit",variant:"outlined"},"Login"))),i.a.createElement(I.a,{fixed:!0},i.a.createElement(g.a,{container:!0,style:{padding:"20px 10px"}},i.a.createElement(b,{addItem:function(e){var t=Object(T.a)(),a={id:t,title:e,filter:"all"};f([].concat(Object(o.a)(d),[a])),p(Object(l.a)(Object(l.a)({},E),{},Object(u.a)({},t,[])))}})),i.a.createElement(g.a,{container:!0,spacing:5},A)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.236acfb8.chunk.js.map