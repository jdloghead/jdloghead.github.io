(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[24],{1572:function(t,e,o){(t.exports=o(9)(!1)).push([t.i,'.sa-contextmenu-colored .blocklyContextMenu {\n  background-color: var(--sa-contextmenu-bg);\n  border-color: var(--sa-contextmenu-border);\n}\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem-highlight,\n.sa-contextmenu-colored .s3dev-mi:hover {\n  background-color: #0001;\n  border-color: transparent !important;\n}\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem[style*="border-top"] {\n  border-top-color: var(--sa-contextmenu-border) !important;\n}\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem .goog-menuitem-content {\n  color: var(--sa-contextmenu-text);\n}\n',""])},1648:function(t,e,o){"use strict";o.r(e),o.d(e,"resources",(function(){return c}));var n=o(1474),r=o(1572);const c={"userscript.js":async function(t){let{addon:e,console:o}=t;const r=await e.tab.traps.getBlockly(),c=r.Gesture.prototype.handleRightClick;r.Gesture.prototype.handleRightClick=function(){const t=this.targetBlock_;for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];const i=c.call(this,...o);return t&&(t=>{const e=r.WidgetDiv.DIV;if(!e)return;const o=t.svgPath_;if(!o)return;const c=Object(n.g)(o.getAttribute("fill")),s=o.getAttribute("stroke")||"#0003",i=r.Colours.text;e.classList.add("sa-contextmenu-colored"),e.style.setProperty("--sa-contextmenu-bg",c),e.style.setProperty("--sa-contextmenu-border",s),e.style.setProperty("--sa-contextmenu-text",i)})(t),i};const s=r.WidgetDiv.hide;r.WidgetDiv.hide=function(){r.WidgetDiv.DIV&&r.WidgetDiv.DIV.classList.remove("sa-contextmenu-colored");for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return s.call(this,...e)}},"userscript.css":o.n(r).a}}}]);