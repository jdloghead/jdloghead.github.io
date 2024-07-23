(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[37],{1538:function(e,t,o){(e.exports=o(9)(!1)).push([e.i,'[class*="gui_tabs_"] {\n  /* overridden by other addons */\n  --sa-category-width: 60px;\n  --sa-flyout-width: 250px;\n}\n\n/* The default left-side border does not work properly when a block is being dragged, */\n/* which lets a 1 pixel column of the flyout be visible. */\n/* To fix this we use two elements that are only visible when a block is being dragged. */\n/* The first element is opaque to cover up the contents with the background color. */\n/* The other element is the transparent border color. */\n.sa-flyout-border-1,\n.sa-flyout-border-2 {\n  position: absolute;\n  /* Above flyout but below add extension button */\n  z-index: 40;\n  top: 0;\n  bottom: 8px;\n  left: -1px;\n}\n[dir="rtl"] .sa-flyout-border-1,\n[dir="rtl"] .sa-flyout-border-2 {\n  left: auto;\n  right: -1px;\n}\n.sa-flyout-border-1 {\n  border-left: 1px solid var(--editorDarkMode-page, hsla(215, 100%, 95%, 1));\n}\n.sa-flyout-border-2 {\n  border-left: 1px solid var(--editorDarkMode-border, rgba(0, 0, 0, 0.15));\n}\n\n.blocklyFlyout,\n.blocklyFlyoutScrollbar {\n  transition-property: margin;\n}\n\n[dir="ltr"] .blocklyFlyout.sa-flyoutClose,\n[dir="ltr"] .blocklyFlyoutScrollbar.sa-flyoutClose {\n  margin-left: calc(0px - var(--sa-flyout-width) - 10px);\n}\n\n[dir="rtl"] .blocklyFlyout.sa-flyoutClose,\n[dir="rtl"] .blocklyFlyoutScrollbar.sa-flyoutClose {\n  margin-left: calc(var(--sa-flyout-width) + 10px);\n}\n\n.sa-flyout-placeHolder {\n  display: var(--hideFlyout-placeholderDisplay) !important;\n  position: absolute;\n  height: 100%;\n  width: calc(var(--sa-flyout-width) + 1px);\n  top: 0;\n}\n\n[dir="ltr"] .sa-flyout-placeHolder {\n  left: calc(var(--sa-category-width) + 1px);\n}\n\n[dir="rtl"] .sa-flyout-placeHolder {\n  right: calc(var(--sa-category-width) + 1px);\n}\n\n.sa-lock-object {\n  display: var(--hideFlyout-lockDisplay) !important;\n  transform: translate(calc(var(--sa-flyout-width) - 15px - 32px), 3px);\n  width: 32px;\n  height: 32px;\n}\n[dir="rtl"] .sa-lock-object {\n  transform: translate(15px, 3px);\n}\n\n.sa-lock-button {\n  display: flex;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--editorDarkMode-accent, white);\n  border: 1px solid var(--editorDarkMode-border, rgba(0, 0, 0, 0.15));\n  border-radius: 4px;\n}\n\n.sa-lock-object.locked .sa-lock-button {\n  background-color: var(--editorDarkMode-primary, #855cd6);\n  border-color: var(--editorDarkMode-primary-variant, #714eb6);\n}\n\n.sa-lock-button img {\n  width: 20px;\n  user-select: none;\n  filter: var(--editorDarkMode-accent-filter, none);\n}\n\n.sa-lock-object.locked img {\n  filter: var(--editorDarkMode-primary-filter, none);\n}\n\n.sa-hide-flyout-not-fullscreen .sa-body-editor [class*="gui_stage-and-target-wrapper"] {\n  position: relative;\n  /* We need to be above these to hide the flyout while dragging blocks: */\n  /* .blocklyFlyout (z-index: 20) */\n  /* .blocklyFlyoutScrollbar (z-index: 30) */\n  /* and above these so that dragged sprites aren\'t obscured: */\n  /* .blocklyToolboxDiv (z-index: 40) */\n  /* .gui_extension-button-container_b4rCs (z-index: 42) */\n  z-index: 43;\n  padding-inline: 0.5rem;\n  background-color: var(--editorDarkMode-page, hsl(215, 100%, 95%));\n}\n\n[class*="gui_stage-and-target-wrapper_"] {\n  padding: 0;\n}\n\n/* https://github.com/ScratchAddons/ScratchAddons/issues/4896 */\n.Popover {\n  /* Above stage wrapper and target pane */\n  /* See editor-stage-left */\n  z-index: 51;\n}\n',""])},1618:function(e,t,o){"use strict";o.r(t),o.d(t,"resources",(function(){return l}));var n=o(1538);const l={"userscript.js":async function(e){let{addon:t,console:o,msg:n}=e,l=null,a=null,s=null,r=null,c=null,i=null,d=!1,u=!1,g=!1,y=!0;const b=await t.tab.traps.getBlockly();function p(){return{none:"0",short:"0.2",default:"0.3",long:"0.5"}[t.settings.get("speed")]}function M(){return t.settings.get("toggle")}function m(e){for(let t of[c,i])t.style.transitionDuration="".concat(e,"s")}function h(){for(let e of[c,i])e.style.removeProperty("transition-duration")}function A(){a.classList.toggle("locked",u),s.title=n(u?"unlock":"lock"),r.src=t.self.getResource("/".concat(u?"":"un","lock.svg"))}function f(){const e=t.settings.get("lockLoad");e&&("category"===M()?d=!0:(u=e,A()),c.classList.remove("sa-flyoutClose"),i.classList.remove("sa-flyoutClose"))}function I(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e&&0!==e.buttons&&!document.querySelector(".blocklyToolboxDiv").className.includes("blocklyToolboxDelete")||(o="object"==typeof o?p():o,m(o),c.classList.remove("sa-flyoutClose"),i.classList.remove("sa-flyoutClose"),setTimeout((()=>{var e;null===(e=t.tab.traps.getWorkspace())||void 0===e||e.recordCachedAreas(),h()}),1e3*o)),g=!1}function x(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p();u||(e&&e.buttons?g=!0:(m(o),c.classList.add("sa-flyoutClose"),i.classList.add("sa-flyoutClose"),setTimeout((()=>{var e;null===(e=t.tab.traps.getWorkspace())||void 0===e||e.recordCachedAreas(),h()}),1e3*o)))}const v=()=>{const e=t.tab.redux.state.scratchGui.mode.isFullScreen;document.documentElement.classList.toggle("sa-hide-flyout-not-fullscreen",!e)};v();let D=!1;function k(){if(D)return;D=!0,t.tab.redux.initialize(),t.tab.redux.addEventListener("statechanged",(e=>{switch(e.detail.action.type){case"scratch-gui/navigation/ACTIVATE_TAB":{const o=M();0!==e.detail.action.activeTabIndex||t.self.disabled||"hover"!==o&&"cathover"!==o||(x(null,0),d=!1);break}case"scratch-gui/mode/SET_FULL_SCREEN":v()}})),document.body.addEventListener("mouseup",(()=>{g&&(x(),g=!1)})),t.self.enabledLate&&"category"===M()&&!t.settings.get("lockLoad")&&b.getMainWorkspace().getToolbox().selectedItem_.setSelected(!1),t.self.addEventListener("disabled",(()=>{b.getMainWorkspace().getToolbox().selectedItem_.setSelected(!0)})),t.self.addEventListener("reenabled",(()=>{"category"!==M()||t.settings.get("lockLoad")||(b.getMainWorkspace().getToolbox().selectedItem_.setSelected(!1),x(null,0),d=!1)})),t.settings.addEventListener("change",(()=>{t.self.disabled||("category"===M()?u?(d=!0,u=!1,A()):(b.getMainWorkspace().getToolbox().selectedItem_.setSelected(!1),x(null,0),d=!1):(t.settings.get("lockLoad")?(u=!0,A()):x(),b.getMainWorkspace().getToolbox().selectedItem_.setSelected(!0)))}));const e=b.Toolbox.prototype.setSelectedItem;b.Toolbox.prototype.setSelectedItem=function(o){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const l=this.selectedItem_;e.call(this,o,n),t.self.disabled||"category"!==M()||(n||d?o===l?(d=!d,d?I():(x(),o.setSelected(!1))):d||(y=!1,d=!0,I()):o.setSelected(!1))};const o=b.Toolbox.prototype.selectCategoryById;b.Toolbox.prototype.selectCategoryById=function(){if(t.self.disabled||"category"!==M()||d){for(var e=arguments.length,n=new Array(e),l=0;l<e;l++)n[l]=arguments[l];return o.call(this,...n)}};const n=b.Flyout.prototype.stepScrollAnimation;b.Flyout.prototype.stepScrollAnimation=function(){if(!y)return this.scrollbar_.set(this.scrollTarget),this.scrollTarget=null,void(y=!0);for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.apply(this,t)}}for(;;){c=await t.tab.waitForElement(".blocklyFlyout",{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","scratch-gui/locales/SELECT_LOCALE","scratch-gui/theme/SET_THEME","fontsLoaded/SET_FONTS_LOADED"],reduxCondition:e=>!e.scratchGui.mode.isPlayerOnly}),i=document.querySelector(".blocklyFlyoutScrollbar");const e=document.querySelector('[class*="gui_blocks-wrapper_"]'),o=document.querySelector(".injectionDiv"),n=document.createElement("div");n.className="sa-flyout-border-1",t.tab.displayNoneWhileDisabled(n),o.appendChild(n);const g=document.createElement("div");g.className="sa-flyout-border-2",t.tab.displayNoneWhileDisabled(g),o.appendChild(g),l&&l.remove(),l=document.createElement("div"),e.appendChild(l),l.className="sa-flyout-placeHolder",l.style.display="none",a&&a.remove(),a=document.createElementNS("http://www.w3.org/2000/svg","foreignObject"),a.setAttribute("class","sa-lock-object"),a.style.display="none",s=document.createElement("button"),s.className="sa-lock-button",r=document.createElement("img"),r.alt="",A(),s.onclick=()=>{u=!u,A()},s.appendChild(r),a.appendChild(s),c.appendChild(a),x(null,0),d=!1;const y=document.querySelector(".blocklyToolboxDiv"),p=document.querySelector("[class^=gui_extension-button-container_]");for(let e of[y,p,c,i])e.onmouseenter=e=>{const o=M();t.self.disabled||"hover"!==o&&"cathover"!==o||I(e)},e.onmouseleave=e=>{const o=M();t.self.disabled||"hover"!==o&&"cathover"!==o||x(e)};l.onmouseenter=e=>{t.self.disabled||"hover"!==M()||I(e)},l.onmouseleave=e=>{t.self.disabled||"hover"!==M()||x(e)},k(),f(),b.svgResize(b.getMainWorkspace())}},"style.css":o.n(n).a,"lock.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAxM2ExIDEgMCAwIDAtMSAxdjNhMSAxIDAgMCAwIDIgMHYtM2ExIDEgMCAwIDAtMS0xem01LTRWN0E1IDUgMCAwIDAgNyA3djJhMyAzIDAgMCAwLTMgM3Y3YTMgMyAwIDAgMCAzIDNoMTBhMyAzIDAgMCAwIDMtM3YtN2EzIDMgMCAwIDAtMy0zek05IDdhMyAzIDAgMCAxIDYgMHYySDl6bTkgMTJhMSAxIDAgMCAxLTEgMUg3YTEgMSAwIDAgMS0xLTF2LTdhMSAxIDAgMCAxIDEtMWgxMGExIDEgMCAwIDEgMSAxeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==","unlock.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAxM2ExLjQ5IDEuNDkgMCAwIDAtMSAyLjYxVjE3YTEgMSAwIDAgMCAyIDB2LTEuMzlBMS40OSAxLjQ5IDAgMCAwIDEyIDEzem01LTRIOVY3YTMgMyAwIDAgMSA1LjEyLTIuMTMgMy4wOCAzLjA4IDAgMCAxIC43OCAxLjM4IDEgMSAwIDEgMCAxLjk0LS41IDUuMDkgNS4wOSAwIDAgMC0xLjMxLTIuMjlBNSA1IDAgMCAwIDcgN3YyYTMgMyAwIDAgMC0zIDN2N2EzIDMgMCAwIDAgMyAzaDEwYTMgMyAwIDAgMCAzLTN2LTdhMyAzIDAgMCAwLTMtM3ptMSAxMGExIDEgMCAwIDEtMSAxSDdhMSAxIDAgMCAxLTEtMXYtN2ExIDEgMCAwIDEgMS0xaDEwYTEgMSAwIDAgMSAxIDF6IiBmaWxsPSIjNTc1ZTc1Ii8+PC9zdmc+"}}}]);