(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1068:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return a});var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function r(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function i(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(t){i(t)}}function s(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})}function a(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}},1069:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return r}),n.d(t,"e",function(){return a});var o=n(1068);function r(e,t){return null!==t.closest(e)}function i(e){var t;return"string"==typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0}function a(e,t){var n;return(n={})[t]=!0,n[t+"-"+e]=void 0!==e,n}function s(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(function(e){return null!=e}).map(function(e){return e.trim()}).filter(function(e){return""!==e}):[]}(e).forEach(function(e){return t[e]=!0}),t}var c=/^[a-z][a-z0-9+\-.]*:/;function u(e,t,n,r){return o.a(this,void 0,void 0,function(){var i;return o.c(this,function(o){switch(o.label){case 0:return null==t||"#"===t[0]||c.test(t)?[3,2]:(i=e.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return o.sent(),[2,i.push(t,r)];case 2:return[2,!1]}})})}},1071:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return f}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return p}),n.d(t,"f",function(){return i}),n.d(t,"g",function(){return a}),n.d(t,"h",function(){return s});var o=n(1068),r=0;function i(e,t){var n=e.ownerDocument;(function(e){0===r&&(r=1,e.addEventListener("focusin",function(t){var n=s(e);if(n&&n.backdropDismiss&&!function(e,t){for(;t;){if(t===e)return!0;t=t.parentElement}return!1}(n,t.target)){var o=n.querySelector("input,button");o&&o.focus()}}),e.addEventListener("ionBackButton",function(t){var n=s(e);n&&n.backdropDismiss&&t.detail.register(100,function(){return n.dismiss(void 0,m)})}),e.addEventListener("keyup",function(t){if("Escape"===t.key){var n=s(e);n&&n.backdropDismiss&&n.dismiss(void 0,m)}}))})(n),Object.assign(e,t),e.classList.add("overlay-hidden");var o=r++;return e.overlayIndex=o,e.hasAttribute("id")||(e.id="ion-overlay-"+o),l(n).appendChild(e),e.componentOnReady()}function a(e,t,n,o,r){var i=s(e,o,r);return i?i.dismiss(t,n):Promise.reject("overlay does not exist")}function s(e,t,n){var o=function(e,t){var n=Array.from(l(e).children).filter(function(e){return e.overlayIndex>0});return void 0===t?n:(t=t.toUpperCase(),n.filter(function(e){return e.tagName===t}))}(e,t);return void 0===n?o[o.length-1]:o.find(function(e){return e.id===n})}function c(e,t,n,r,i){return o.a(this,void 0,void 0,function(){var a;return o.c(this,function(o){switch(o.label){case 0:return e.presented?[2]:(e.presented=!0,e.willPresent.emit(),a=e.enterAnimation?e.enterAnimation:e.config.get(t,"ios"===e.mode?n:r),[4,d(e,a,e.el,i)]);case 1:return o.sent()&&e.didPresent.emit(),[2]}})})}function u(e,t,n,r,i,a,s){return o.a(this,void 0,void 0,function(){var c,u;return o.c(this,function(o){switch(o.label){case 0:if(!e.presented)return[2,!1];e.presented=!1,o.label=1;case 1:return o.trys.push([1,3,,4]),e.willDismiss.emit({data:t,role:n}),c=e.leaveAnimation?e.leaveAnimation:e.config.get(r,"ios"===e.mode?i:a),[4,d(e,c,e.el,s)];case 2:return o.sent(),e.didDismiss.emit({data:t,role:n}),[3,4];case 3:return u=o.sent(),console.error(u),[3,4];case 4:return e.el.remove(),[2,!0]}})})}function l(e){return e.querySelector("ion-app")||e.body}function d(e,t,r,i){return o.a(this,void 0,void 0,function(){var a,s,c,u;return o.c(this,function(o){switch(o.label){case 0:return e.animation?(e.animation.destroy(),e.animation=void 0,[2,!1]):(r.classList.remove("overlay-hidden"),a=r.shadowRoot||e.el,c=e,[4,n.e(1).then(n.bind(null,1073)).then(function(e){return e.create(t,a,i)})]);case 1:return s=c.animation=o.sent(),e.animation=s,e.animated&&e.config.getBoolean("animated",!0)||s.duration(0),e.keyboardClose&&s.beforeAddWrite(function(){var e=r.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()}),[4,s.playAsync()];case 2:return o.sent(),u=s.hasCompleted,s.destroy(),e.animation=void 0,[2,u]}})})}function p(e,t){var n,o=new Promise(function(e){return n=e});return function(e,t,n){e.addEventListener(t,function o(r){e.removeEventListener(t,o),n(r)})}(e,t,function(e){n(e.detail)}),o}function f(e){return"cancel"===e||e===m}var m="backdrop"},1074:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var o=n(1068);function r(e,t,n,r,i){return o.a(this,void 0,void 0,function(){var a;return o.c(this,function(o){switch(o.label){case 0:if(e)return[2,e.attachViewToDom(t,n,i,r)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,r&&r.forEach(function(e){return a.classList.add(e)}),i&&Object.assign(a,i),t.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2,a]}})})}function i(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},1075:function(e,t,n){"use strict";n.d(t,"a",function(){return g}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return w});var o=n(1068),r=n(42),i=function(){return n.e(162).then(n.bind(null,1077))},a=function(){return n.e(163).then(n.bind(null,1078))};function s(e){return new Promise(function(t,n){e.queue.write(function(){(function(e){var t=e.enteringEl,n=e.leavingEl;(function(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")})(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),w(t,!1),n&&w(n,!1)})(e),function(e){return o.a(this,void 0,void 0,function(){var t;return o.c(this,function(n){switch(n.label){case 0:return[4,u(e)];case 1:return[2,(t=n.sent())?l(t,e):d(e)]}})})}(e).then(function(n){n.animation&&n.animation.destroy(),c(e),t(n)},function(t){c(e),n(t)})})})}function c(e){var t=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")}function u(e){return o.a(this,void 0,void 0,function(){var t;return o.c(this,function(n){switch(n.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,i()]:[2,void 0];case 1:return t=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,a()];case 3:t=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,t]}})})}function l(e,t){return o.a(this,void 0,void 0,function(){var r;return o.c(this,function(o){switch(o.label){case 0:return[4,p(t,!0)];case 1:return o.sent(),[4,n.e(1).then(n.bind(null,1073)).then(function(n){return n.create(e,t.baseEl,t)})];case 2:return r=o.sent(),v(t.enteringEl,t.leavingEl),[4,m(r,t)];case 3:return o.sent(),t.progressCallback&&t.progressCallback(void 0),r.hasCompleted&&h(t.enteringEl,t.leavingEl),[2,{hasCompleted:r.hasCompleted,animation:r}]}})})}function d(e){return o.a(this,void 0,void 0,function(){var t,n;return o.c(this,function(o){switch(o.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,p(e,!1)];case 1:return o.sent(),v(t,n),h(t,n),[2,{hasCompleted:!0}]}})})}function p(e,t){return o.a(this,void 0,void 0,function(){var n;return o.c(this,function(o){switch(o.label){case 0:return n=(void 0!==e.deepWait?e.deepWait:t)?[g(e.enteringEl),g(e.leavingEl)]:[y(e.enteringEl),y(e.leavingEl)],[4,Promise.all(n)];case 1:return o.sent(),[4,f(e.viewIsReady,e.enteringEl)];case 2:return o.sent(),[2]}})})}function f(e,t){return o.a(this,void 0,void 0,function(){return o.c(this,function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function m(e,t){var n=t.progressCallback,o=new Promise(function(t){return e.onFinish(t)});return n?(e.progressStart(),n(e)):e.play(),o}function v(e,t){b(t,r.a),b(e,r.b)}function h(e,t){b(e,r.c),b(t,r.d)}function b(e,t){if(e){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}}function y(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()}function g(e){return o.a(this,void 0,void 0,function(){var t;return o.c(this,function(n){switch(n.label){case 0:return(t=e)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(g))];case 3:n.sent(),n.label=4;case 4:return[2]}})})}function w(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))}},983:function(e,t,n){"use strict";n.r(t),n.d(t,"IonPopover",function(){return v}),n.d(t,"IonPopoverController",function(){return b});var o=n(1068),r=n(771),i=n(1071),a=n(1069),s=n(1074),c=(n(42),n(1075));function u(e,t,n){var o="top",r="left",i=t.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,c=a.height,u=t.ownerDocument.defaultView.innerWidth,d=t.ownerDocument.defaultView.innerHeight,p=n&&n.target&&n.target.getBoundingClientRect(),f=null!=p&&"top"in p?p.top:d/2-c/2,m=null!=p&&"left"in p?p.left:u/2,v=p&&p.width||0,h=p&&p.height||0,b=t.querySelector(".popover-arrow"),y=b.getBoundingClientRect(),g=y.width,w=y.height;null==p&&(b.style.display="none");var x={top:f+h,left:m+v/2-g/2},E={top:f+h+(w-1),left:m+v/2-s/2},P=!1,k=!1;E.left<l+25?(P=!0,E.left=l):s+l+E.left+25>u&&(k=!0,E.left=u-s-l,r="right"),f+h+c>d&&f-c>0?(x.top=f-(w+1),E.top=f-c-(w-1),t.className=t.className+" popover-bottom",o="bottom"):f+h+c>d&&(i.style.bottom=l+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",i.style.top=E.top+"px",i.style.left=E.left+"px",P&&(i.style.left="calc("+E.left+"px + var(--ion-safe-area-left, 0px))"),k&&(i.style.left="calc("+E.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=o+" "+r;var D=new e,O=new e;O.addElement(t.querySelector("ion-backdrop")),O.fromTo("opacity",.01,.08);var j=new e;return j.addElement(t.querySelector(".popover-wrapper")),j.fromTo("opacity",.01,1),Promise.resolve(D.addElement(t).easing("ease").duration(100).add(O).add(j))}var l=5;function d(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),o.fromTo("opacity",.08,0),Promise.resolve(n.addElement(t).easing("ease").duration(500).add(o).add(r))}function p(e,t,n){var o=t.ownerDocument,r="rtl"===o.dir,i="top",a=r?"right":"left",s=t.querySelector(".popover-content"),c=s.getBoundingClientRect(),u=c.width,l=c.height,d=o.defaultView.innerWidth,p=o.defaultView.innerHeight,m=n&&n.target&&n.target.getBoundingClientRect(),v=null!=m&&"bottom"in m?m.bottom:p/2-l/2,h=m&&m.height||0,b={top:v,left:null!=m&&"left"in m?r?m.left-u+m.width:m.left:d/2-u/2};b.left<f?(b.left=f,a="left"):u+f+b.left>d&&(b.left=d-u-f,a="right"),v+h+l>p&&v-l>0?(b.top=v-l-h,t.className=t.className+" popover-bottom",i="bottom"):v+h+l>p&&(s.style.bottom=f+"px"),s.style.top=b.top+"px",s.style.left=b.left+"px",s.style.transformOrigin=i+" "+a;var y=new e,g=new e;g.addElement(t.querySelector("ion-backdrop")),g.fromTo("opacity",.01,.32);var w=new e;w.addElement(t.querySelector(".popover-wrapper")),w.fromTo("opacity",.01,1);var x=new e;x.addElement(t.querySelector(".popover-content")),x.fromTo("scale",.001,1);var E=new e;return E.addElement(t.querySelector(".popover-viewport")),E.fromTo("opacity",.01,1),Promise.resolve(y.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(g).add(w).add(x).add(E))}var f=12;function m(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),o.fromTo("opacity",.32,0),Promise.resolve(n.addElement(t).easing("ease").duration(500).add(o).add(r))}var v=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,i.a)},e.prototype.lifecycle=function(e){var t=this.usersElement,n=h[e.type];if(t&&n){var o=new CustomEvent(n,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(o)}},e.prototype.present=function(){return o.a(this,void 0,void 0,function(){var e,t,n;return o.c(this,function(o){switch(o.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign({},this.componentProps,{popover:this.el}),n=this,[4,Object(s.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return n.usersElement=o.sent(),[4,Object(c.a)(this.usersElement)];case 2:return o.sent(),[2,Object(i.c)(this,"popoverEnter",u,p,this.event)]}})})},e.prototype.dismiss=function(e,t){return o.a(this,void 0,void 0,function(){var n;return o.c(this,function(o){switch(o.label){case 0:return[4,Object(i.d)(this,e,t,"popoverLeave",d,m,this.event)];case 1:return(n=o.sent())?[4,Object(s.b)(this.delegate,this.usersElement)]:[3,3];case 2:o.sent(),o.label=3;case 3:return[2,n]}})})},e.prototype.onDidDismiss=function(){return Object(i.e)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(i.e)(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){return{"aria-modal":"true","no-router":!0,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(a.a)(this.cssClass),{"popover-translucent":this.translucent})}},e.prototype.render=function(){return[Object(r.b)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.b)("div",{class:"popover-wrapper"},Object(r.b)("div",{class:"popover-arrow"}),Object(r.b)("div",{class:"popover-content"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},event:{type:"Any",attr:"event"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h   .popover-content.sc-ion-popover-md, [dir=rtl]   .sc-ion-popover-md-h   .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),h={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},b=function(){function e(){}return e.prototype.create=function(e){return Object(i.f)(this.doc.createElement("ion-popover"),e)},e.prototype.dismiss=function(e,t,n){return Object(i.g)(this.doc,e,t,"ion-popover",n)},e.prototype.getTop=function(){return o.a(this,void 0,void 0,function(){return o.c(this,function(e){return[2,Object(i.h)(this.doc,"ion-popover")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-popover-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}()}}]);
//# sourceMappingURL=19.bd860b5b.chunk.js.map