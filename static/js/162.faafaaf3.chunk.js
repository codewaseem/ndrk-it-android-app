(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{1077:function(e,o,r){"use strict";r.r(o),r.d(o,"shadow",function(){return c}),r.d(o,"iosTransitionAnimation",function(){return f});var n=500,t="cubic-bezier(0.36,0.66,0.04,1)",a="opacity",l="transform",d="translateX",i="0%",m=.8;function c(e){return e.shadowRoot||e}function f(e,o,r){var f="rtl"===o.ownerDocument.dir,u=f?"-99.5%":"99.5%",s=f?"33%":"-33%",T=r.enteringEl,b=r.leavingEl,y=new e;if(y.addElement(T).duration(r.duration||n).easing(r.easing||t).beforeRemoveClass("ion-page-invisible"),b&&o){var S=new e;S.addElement(o),y.add(S)}var w="back"===r.direction,p=T.querySelector(":scope > ion-content"),E=T.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),v=T.querySelectorAll(":scope > ion-header > ion-toolbar"),g=new e;if(p||0!==v.length||0!==E.length?(g.addElement(p),g.addElement(E)):g.addElement(T.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),y.add(g),w?g.beforeClearStyles([a]).fromTo(d,s,i,!0).fromTo(a,m,1,!0):g.beforeClearStyles([a]).fromTo(d,u,i,!0),v.forEach(function(o){var r=new e;r.addElement(o),y.add(r);var n=new e;n.addElement(o.querySelector("ion-title"));var t=new e;t.addElement(o.querySelectorAll("ion-buttons,[menuToggle]"));var l=new e;l.addElement(o.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var m=new e;m.addElement(c(o).querySelector(".toolbar-background"));var T=new e,b=o.querySelector("ion-back-button");if(b&&T.addElement(b),r.add(n).add(t).add(l).add(m).add(T),n.fromTo(a,.01,1,!0),t.fromTo(a,.01,1,!0),l.fromTo(a,.01,1,!0),w)n.fromTo(d,s,i,!0),l.fromTo(d,s,i,!0),T.fromTo(a,.01,1,!0);else if(n.fromTo(d,u,i,!0),l.fromTo(d,u,i,!0),m.beforeClearStyles([a]).fromTo(a,.01,1,!0),T.fromTo(a,.01,1,!0),b){var S=new e;S.addElement(c(b).querySelector(".button-text")).fromTo(d,f?"-100px":"100px","0px"),r.add(S)}}),b){var q=new e;q.addElement(b.querySelector(":scope > ion-content")),q.addElement(b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),y.add(q),w?q.beforeClearStyles([a]).fromTo(d,i,f?"-100%":"100%"):q.fromTo(d,i,s,!0).fromTo(a,1,m,!0),b.querySelectorAll(":scope > ion-header > ion-toolbar").forEach(function(o){var r=new e;r.addElement(o);var n=new e;n.addElement(o.querySelector("ion-title"));var t=new e;t.addElement(o.querySelectorAll("ion-buttons,[menuToggle]"));var m=new e,u=o.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");u.length>0&&m.addElement(u);var T=new e;T.addElement(c(o).querySelector(".toolbar-background"));var b=new e,S=o.querySelector("ion-back-button");if(S&&b.addElement(S),r.add(n).add(t).add(m).add(b).add(T),y.add(r),b.fromTo(a,.99,0),n.fromTo(a,.99,0),t.fromTo(a,.99,0,0),m.fromTo(a,.99,0),w){if(n.fromTo(d,i,f?"-100%":"100%"),m.fromTo(d,i,f?"-100%":"100%"),T.beforeClearStyles([a]).fromTo(a,1,.01),S){var p=new e;p.addElement(c(S).querySelector(".button-text")),p.fromTo(d,i,(f?-124:124)+"px"),r.add(p)}}else n.fromTo(d,i,s).afterClearStyles([l]),m.fromTo(d,i,s).afterClearStyles([l,a]),b.afterClearStyles([a]),n.afterClearStyles([a]),t.afterClearStyles([a])})}return Promise.resolve(y)}}}]);
//# sourceMappingURL=162.faafaaf3.chunk.js.map