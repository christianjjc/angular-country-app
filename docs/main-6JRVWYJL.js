import{D as r,Q as h,R as M,S as A,U as x,W as P,X as N,Y as y,Z as D,i as m,s as a,t as c,w as o,x as n,y as s}from"./chunk-E22NHYTV.js";var l=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["shared-sidebar"]],standalone:!1,decls:10,vars:0,consts:[[1,"list-group"],["routerLink","countries/by-capital","routerLinkActive","active",1,"list-group-item","active"],["routerLink","countries/by-country","routerLinkActive","active",1,"list-group-item","active"],["routerLink","countries/by-region","routerLinkActive","active",1,"list-group-item","active"]],template:function(t,b){t&1&&(o(0,"h2"),r(1,"Pa\xEDses"),n(),s(2,"hr"),o(3,"ol",0)(4,"li",1),r(5," By Capital "),n(),o(6,"li",2),r(7," By Country "),n(),o(8,"li",3),r(9," By Region "),n()())},dependencies:[P,N],styles:["[_nghost-%COMP%]{display:block}"]})};var d=class e{title="countryApp";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-root"]],standalone:!1,decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(t,b){t&1&&(o(0,"div",0)(1,"div",1),s(2,"shared-sidebar"),n(),o(3,"div",2),s(4,"router-outlet"),n()())},dependencies:[l,x],encapsulation:2})};var u=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["shared-about-page"]],standalone:!1,decls:2,vars:0,template:function(t,b){t&1&&(o(0,"h2"),r(1,"ABOUT"),n())},styles:["[_nghost-%COMP%]{display:block}"]})};var f=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["shared-contact-page"]],standalone:!1,decls:2,vars:0,template:function(t,b){t&1&&(o(0,"h2"),r(1,"CONTACT"),n())},styles:["[_nghost-%COMP%]{display:block}"]})};var E=[{path:"about",component:u},{path:"contact",component:f},{path:"countries",loadChildren:()=>import("./chunk-RXA6BDKU.js").then(e=>e.CountriesModule)},{path:"**",redirectTo:"countries"}],g=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=c({type:e});static \u0275inj=m({imports:[y.forRoot(E),y]})};var C=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=c({type:e,bootstrap:[d]});static \u0275inj=m({providers:[h()],imports:[A,D,g]})};M().bootstrapModule(C,{ngZoneEventCoalescing:!0}).catch(e=>console.error(e));