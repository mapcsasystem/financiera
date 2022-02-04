"use strict";(self.webpackChunkfinanciera=self.webpackChunkfinanciera||[]).push([[843],{4843:(L,h,i)=>{i.r(h),i.d(h,{AdminModule:()=>F});var v=i(9808),m=i(1083),f=i(5113),p=i(4004),g=i(7579),C=i(6063);class Z extends g.x{constructor(o=1/0,e=1/0,s=C.l){super(),this._bufferSize=o,this._windowTime=e,this._timestampProvider=s,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,o),this._windowTime=Math.max(1,e)}next(o){const{isStopped:e,_buffer:s,_infiniteTimeWindow:a,_timestampProvider:l,_windowTime:d}=this;e||(s.push(o),!a&&s.push(l.now()+d)),this._trimBuffer(),super.next(o)}_subscribe(o){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(o),{_infiniteTimeWindow:s,_buffer:a}=this,l=a.slice();for(let d=0;d<l.length&&!o.closed;d+=s?1:2)o.next(l[d]);return this._checkFinalizedStatuses(o),e}_trimBuffer(){const{_bufferSize:o,_timestampProvider:e,_buffer:s,_infiniteTimeWindow:a}=this,l=(a?1:2)*o;if(o<1/0&&l<s.length&&s.splice(0,s.length-l),!a){const d=e.now();let u=0;for(let r=1;r<s.length&&s[r]<=d;r+=2)u=r;u&&s.splice(0,u+1)}}}var y=i(3099),t=i(5e3),c=i(2638),T=i(4594),A=i(4623),P=i(7423),H=i(3874);const I=[{path:"",component:(()=>{class n{constructor(e){this.breakpointObserver=e,this.isHandset$=this.breakpointObserver.observe(f.u3.Handset).pipe((0,p.U)(s=>s.matches),function M(n,o,e){var s,a;let l,d=!1;return n&&"object"==typeof n?(l=null!==(s=n.bufferSize)&&void 0!==s?s:1/0,o=null!==(a=n.windowTime)&&void 0!==a?a:1/0,d=!!n.refCount,e=n.scheduler):l=null!=n?n:1/0,(0,y.B)({connector:()=>new Z(l,o,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:d})}())}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.Yg))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin"]],decls:22,vars:9,consts:[[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["drawer",""],["mat-list-item","","routerLink","/admin/customers","routerLinkActive","is-active",3,"click"],["mat-list-item","","routerLink","/admin/saving-accounts","routerLinkActive","is-active",3,"click"],["color","primary"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"]],template:function(e,s){if(1&e){const a=t.EpF();t.TgZ(0,"mat-sidenav-container",0),t.TgZ(1,"mat-sidenav",1,2),t.ALo(3,"async"),t.ALo(4,"async"),t.ALo(5,"async"),t.TgZ(6,"mat-toolbar"),t._uU(7,"Menu"),t.qZA(),t.TgZ(8,"mat-nav-list"),t.TgZ(9,"a",3),t.NdJ("click",function(){return t.CHM(a),t.MAs(2).toggle()}),t._uU(10,"Alta de clientes"),t.qZA(),t.TgZ(11,"a",4),t.NdJ("click",function(){return t.CHM(a),t.MAs(2).toggle()}),t._uU(12,"Alta cuentas de ahorro"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"mat-sidenav-content"),t.TgZ(14,"mat-toolbar",5),t.TgZ(15,"button",6),t.NdJ("click",function(){return t.CHM(a),t.MAs(2).toggle()}),t.TgZ(16,"mat-icon",7),t._uU(17,"menu"),t.qZA(),t.qZA(),t.TgZ(18,"span"),t._uU(19,"Financiera"),t.qZA(),t.qZA(),t.TgZ(20,"div"),t._UZ(21,"router-outlet"),t.qZA(),t.qZA(),t.qZA()}2&e&&(t.xp6(1),t.Q6J("mode",t.lcZ(4,5,s.isHandset$)?"over":"side")("opened",!1===t.lcZ(5,7,s.isHandset$)),t.uIk("role",t.lcZ(3,3,s.isHandset$)?"dialog":"navigation"))},directives:[c.TM,c.JX,T.Ye,A.Hk,A.Tg,m.yS,m.Od,c.Rh,P.lW,H.Hw,m.lC],pipes:[v.Ov],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}.is-active[_ngcontent-%COMP%]{color:#3f51b5}"]}),n})(),children:[{path:"",loadChildren:()=>Promise.all([i.e(592),i.e(545)]).then(i.bind(i,7545)).then(n=>n.CustomersModule)},{path:"customers",loadChildren:()=>Promise.all([i.e(592),i.e(545)]).then(i.bind(i,7545)).then(n=>n.CustomersModule)},{path:"saving-accounts",loadChildren:()=>Promise.all([i.e(592),i.e(122)]).then(i.bind(i,6122)).then(n=>n.SavingAccountsModule)}]}];let x=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.Bz.forChild(I)],m.Bz]}),n})();var J=i(2213),b=i(520);let F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[v.ez,x,J.q,b.JF]]}),n})()}}]);