(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[13],{1585:function(t,e,o){(t.exports=o(9)(!1)).push([t.i,".sa-copy-reporter-icon {\n  cursor: pointer;\n  float: right;\n  display: block;\n  user-select: none;\n  filter: var(--editorDarkMode-accent-filter, none);\n  width: 14px;\n  height: 14px;\n}\n\n.valueReportBox {\n  user-select: text;\n}\n",""])},1629:function(t,e,o){"use strict";o.r(e),o.d(e,"resources",(function(){return n}));var s=o(1585);const n={"userscript.js":async function(t){let{addon:e,console:o,msg:s}=t;e.tab.createEditorContextMenu((t=>{const e="monitor_large"===t.type?"monitor_large-value":"monitor_value",o=t.target.querySelector("[class*='".concat(e,"_']"));0!==o.innerText.length&&navigator.clipboard.writeText(o.innerText)}),{className:"copy",types:["monitor_default","monitor_large","monitor_slider"],position:"monitor",order:0,label:s("copy-value")});const n=await e.tab.traps.getBlockly();n.WorkspaceSvg.prototype.reportValue=function(t,o){let r=this.getBlockById(t);if(!r)throw"Tried to report value on block that does not exist.";n.DropDownDiv.hideWithoutAnimation(),n.DropDownDiv.clearContent();let i=n.DropDownDiv.getContentDiv(),w=document.createElement("div");if(w.setAttribute("class","valueReportBox"),w.innerText=o,!e.self.disabled&&(w.setAttribute("tabindex","0"),w.onkeydown=t=>{(t.altKey||t.ctrlKey||t.metaKey)&&"KeyC"===t.code&&t.stopPropagation()},0!==o.length)){const t=document.createElement("img");t.setAttribute("role","button"),t.setAttribute("tabindex","0"),t.setAttribute("alt",s("copy-to-clipboard")),t.setAttribute("src",e.self.getResource("/copy.svg")),t.classList.add("sa-copy-reporter-icon"),e.tab.displayNoneWhileDisabled(t),t.onclick=()=>navigator.clipboard.writeText(o),w.appendChild(t)}i.appendChild(w),n.DropDownDiv.setColour(n.Colours.valueReportBackground,n.Colours.valueReportBorder),n.DropDownDiv.showPositionedByBlock(this,r)}},"style.css":o.n(s).a,"copy.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDguOTRhMS4zMSwxLjMxLDAsMCwwLS4wNi0uMjdsMC0uMDlhMS4wNywxLjA3LDAsMCwwLS4xOS0uMjhoMGwtNi02aDBhMS4wNywxLjA3LDAsMCwwLS4yOC0uMTkuMzIuMzIsMCwwLDAtLjA5LDBBLjg4Ljg4LDAsMCwwLDE0LjA1LDJIMTBBMywzLDAsMCwwLDcsNVY2SDZBMywzLDAsMCwwLDMsOVYxOWEzLDMsMCwwLDAsMywzaDhhMywzLDAsMCwwLDMtM1YxOGgxYTMsMywwLDAsMCwzLTNWOVMyMSw5LDIxLDguOTRaTTE1LDUuNDEsMTcuNTksOEgxNmExLDEsMCwwLDEtMS0xWk0xNSwxOWExLDEsMCwwLDEtMSwxSDZhMSwxLDAsMCwxLTEtMVY5QTEsMSwwLDAsMSw2LDhIN3Y3YTMsMywwLDAsMCwzLDNoNVptNC00YTEsMSwwLDAsMS0xLDFIMTBhMSwxLDAsMCwxLTEtMVY1YTEsMSwwLDAsMSwxLTFoM1Y3YTMsMywwLDAsMCwzLDNoM1oiIGZpbGw9IiM1NzVlNzUiLz48L3N2Zz4K"}}}]);