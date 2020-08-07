webpackJsonp([32],{HTbv:function(t,s,a){var n=a("VU/8")(a("ycWV"),a("Uc5E"),null,null);t.exports=n.exports},Uc5E:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("Context Menu Item")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),a("h3",[t._v("Add a context menu on the map")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(2),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:t.center,zoom:t.zoom}},[a("bm-context-menu",[a("bm-context-menu-item",{attrs:{callback:t.gotoBeijing,text:"Go to Beijing"}}),t._v(" "),a("bm-context-menu-item",{attrs:{callback:t.gotoShanghai,text:"Go to Shanghai",iconUrl:"http://lbsyun.baidu.com/skins/MySkin/resources/img/red.png"}}),t._v(" "),a("bm-context-menu-item",{attrs:{seperator:""}}),t._v(" "),a("bm-context-menu-item",{attrs:{disabled:"",text:"Go to Shenzhen"}})],1)],1)],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmContextMenuItem")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("callback")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("new Function")]),t._v(" "),a("td",[t._v("The callback function of clicking the menu item. The parameter of callback is "),a("code",[t._v("{BMap, map, target, pixel, point}")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("text")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The text of the menu item.")])]),t._v(" "),a("tr",[a("td",[t._v("iconUrl")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The icon of the menu item. (size: 17 * 17)")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Whether or not disable the menu item.")])]),t._v(" "),a("tr",[a("td",[t._v("seperator")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Whether the menu item is a seperator or not.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"center"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"zoom"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":callback")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"gotoBeijing"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"Go to Beijing"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":callback")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"gotoShanghai"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"Go to Shanghai"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("iconUrl")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"http://lbsyun.baidu.com/skins/MySkin/resources/img/red.png"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("seperator")]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"Go to Shenzhen"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("center")]),t._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.404")]),t._v(",\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.915")]),t._v("\n      },\n      "),a("span",{staticClass:"hljs-attr"},[t._v("zoom")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("15")]),t._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    gotoBeijing (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".center = {\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.404")]),t._v(",\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.915")]),t._v("\n      }\n    },\n    gotoShanghai (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".center = {\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("121.473354")]),t._v(",\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("31.238413")]),t._v("\n      }\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},qssk:function(t,s,a){t.exports=a("HTbv")},ycWV:function(t,s,a){var n,e,v;!function(a,_){e=[t,s],n=_,void 0!==(v="function"==typeof n?n.apply(s,e):n)&&(t.exports=v)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{center:{lng:116.404,lat:39.915},zoom:15}},methods:{gotoBeijing:function(t){this.center={lng:116.404,lat:39.915}},gotoShanghai:function(t){this.center={lng:121.473354,lat:31.238413}}}},t.exports=s.default})}});