(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(t,e,n){"use strict";n.r(e);n(24);var r=n(2),c={name:"NoteView",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("notes",r.slug).fetch();case 3:return c=e.sent,e.abrupt("return",{note:c});case 5:case"end":return e.stop()}}),e)})))()}},o=n(13),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"max-width-3"},[n("h2",{staticClass:"h2 caps"},[t._v("\n    "+t._s(t.note.title)+"\n  ")]),t._v(" "),n("nuxt-content",{staticClass:"mb2",attrs:{document:t.note}}),t._v(" "),n("small",{staticClass:"bold"},[t._v(t._s(t._f("formatDate")(t.note.createdAt)))])],1)}),[],!1,null,null,null);e.default=component.exports}}]);