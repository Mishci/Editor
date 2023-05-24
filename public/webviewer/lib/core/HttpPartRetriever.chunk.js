/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[0],{479:function(ya,ua,n){n.r(ua);n.d(ua,"ByteRangeRequest",function(){return w});var pa=n(0),na=n(1);n.n(na);var ma=n(3),ka=n(170);ya=n(105);var ja=n(278),ha=n(83),aa=n(79),y=n(277),r=n(187);n=n(417);var f=[],a=[],b=window,h=function(){return function(){this.Dn=1}}(),e;(function(z){z[z.UNSENT=0]="UNSENT";z[z.DONE=4]="DONE"})(e||(e={}));var w=function(){function z(ca,ba,fa,ea){var oa=this;this.url=ca;this.range=ba;this.Lf=fa;this.withCredentials=
ea;this.L9=e;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);b.Uint8Array&&(this.request.responseType="arraybuffer");ea&&(this.request.withCredentials=ea);x.DISABLE_RANGE_HEADER||(Object(na.isUndefined)(ba.stop)?this.request.setRequestHeader("Range","bytes="+ba.start):this.request.setRequestHeader("Range",["bytes=",ba.start,"-",ba.stop-1].join("")));fa&&Object.keys(fa).forEach(function(ia){oa.request.setRequestHeader(ia,fa[ia])});this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):
this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=y.a.NOT_STARTED}z.prototype.start=function(ca){var ba=this,fa=this.request;fa.onreadystatechange=function(){if(ba.aborted)return ba.status=y.a.ABORTED,ca({code:y.a.ABORTED});if(this.readyState===ba.L9.DONE){ba.fF();var ea=0===window.document.URL.indexOf("file:///");200===fa.status||206===fa.status||ea&&0===fa.status?(ea=b.yZ(this),ba.lR(ea,ca)):(ba.status=y.a.ERROR,ca({code:ba.status,status:ba.status}))}};this.request.send(null);
this.status=y.a.STARTED};z.prototype.lR=function(ca,ba){this.status=y.a.SUCCESS;if(ba)return ba(!1,ca)};z.prototype.abort=function(){this.fF();this.aborted=!0;this.request.abort()};z.prototype.fF=function(){var ca=Object(r.c)(this.url,this.range,a);-1!==ca&&a.splice(ca,1);if(0<f.length){ca=f.shift();var ba=new z(ca.url,ca.range,this.Lf,this.withCredentials);ca.request=ba;a.push(ca);ba.start(Object(r.d)(ca))}};z.prototype.extend=function(ca){var ba=Object.assign({},this,ca.prototype);ba.constructor=
ca;return ba};return z}(),x=function(z){function ca(ba,fa,ea,oa,ia){ea=z.call(this,ba,ea,oa)||this;ea.Vj={};ea.DD=fa;ea.url=ba;ea.DISABLE_RANGE_HEADER=!1;ea.sA=w;ea.mS=3;ea.Lf=ia||{};return ea}Object(pa.c)(ca,z);ca.prototype.Ux=function(ba,fa,ea){var oa=-1===ba.indexOf("?")?"?":"&";switch(ea){case !1:case aa.a.NEVER_CACHE:ba=ba+oa+"_="+Object(na.uniqueId)();break;case !0:case aa.a.CACHE:ba=ba+oa+"_="+fa.start+","+(Object(na.isUndefined)(fa.stop)?"":fa.stop)}return ba};ca.prototype.YW=function(ba,
fa,ea,oa){void 0===ea&&(ea={});return new this.sA(ba,fa,ea,oa)};ca.prototype.Bha=function(ba,fa,ea,oa,ia){for(var la=0;la<f.length;la++)if(Object(na.isEqual)(f[la].range,fa)&&Object(na.isEqual)(f[la].url,ba))return f[la].xh.push(oa),f[la].uG++,null;for(la=0;la<a.length;la++)if(Object(na.isEqual)(a[la].range,fa)&&Object(na.isEqual)(a[la].url,ba))return a[la].xh.push(oa),a[la].uG++,null;ea={url:ba,range:fa,DD:ea,xh:[oa],uG:1};if(0===f.length&&a.length<this.mS)return a.push(ea),ea.request=this.YW(ba,
fa,ia,this.withCredentials),ea;f.push(ea);return null};ca.prototype.vp=function(ba,fa,ea){var oa=this.Ux(ba,fa,this.DD);(ba=this.Bha(oa,fa,this.DD,ea,this.Lf))&&ba.request.start(Object(r.d)(ba));return function(){var ia=Object(r.c)(oa,fa,a);if(-1!==ia){var la=--a[ia].uG;0===la&&a[ia].request&&a[ia].request.abort()}else ia=Object(r.c)(oa,fa,f),-1!==ia&&(la=--f[ia].uG,0===la&&f.splice(ia,1))}};ca.prototype.XY=function(){return{start:-ka.a}};ca.prototype.yla=function(){var ba=-(ka.a+ka.e);return{start:ba-
ka.d,end:ba}};ca.prototype.kv=function(ba){var fa=this;this.JD=!0;var ea=ka.a;this.vp(this.url,this.XY(),function(oa,ia,la){function ra(){var qa=fa.Ud.UY();fa.vp(fa.url,qa,function(sa,wa){if(sa)return Object(ma.j)("Error loading central directory: "+sa),ba(sa);wa=Object(ha.a)(wa);if(wa.length!==qa.stop-qa.start)return ba("Invalid XOD file: Zip central directory data is wrong size! Should be "+(qa.stop-qa.start)+" but is "+wa.length);fa.Ud.M2(wa);fa.XK=!0;fa.JD=!1;return ba(!1)})}if(oa)return Object(ma.j)("Error loading end header: "+
oa),ba(oa,ia,la);ia=Object(ha.a)(ia);if(ia.length!==ea)return ba("Invalid XOD file: Zip end header data is wrong size!");try{fa.Ud=new ja.a(ia)}catch(qa){return ba(qa)}fa.Ud.ona?fa.vp(fa.url,fa.yla(),function(qa,sa){if(qa)return Object(ma.j)("Error loading zip64 header: "+qa),ba(qa);sa=Object(ha.a)(sa);fa.Ud.Kna(sa);ra()}):ra()})};ca.prototype.uZ=function(ba){ba(Object.keys(this.Ud.Xo))};ca.prototype.CP=function(ba,fa){var ea=this;if(this.Ud.MW(ba)){var oa=this.Ud.Jy(ba);if(oa in this.Vj){var ia=
this.Qh[ba];ia.Tt=this.Vj[oa];ia.Tt.Dn++;ia.cancel=ia.Tt.cancel}else{var la=this.Ud.Hja(ba),ra=this.vp(this.url,la,function(sa,wa){sa?(Object(ma.j)('Error loading part "'+ba+'": '+sa),ea.vp(ea.url,la,function(za,Ha){if(za)return fa(za,ba);ea.Q2(Ha,la,oa,ba,fa)})):ea.Q2(wa,la,oa,ba,fa)}),qa=this.Qh[ba];qa&&(qa.w5=!0,qa.cancel=function(){qa.Tt.Dn--;0===qa.Tt.Dn&&(ra(),delete ea.Vj[oa])},this.Vj[oa]=new h(oa),qa.Tt=this.Vj[oa],qa.Tt.cancel=qa.cancel)}}else delete this.Qh[ba],fa(Error('File not found: "'+
ba+'"'),ba)};ca.prototype.Q2=function(ba,fa,ea,oa,ia){if(ba.length!==fa.stop-fa.start)ia(Error("Part data is wrong size!"),oa);else{do{if(!this.Vj[ea])return;oa=this.Vj[ea].Dn;for(var la=fa.ns.length,ra=0;ra<la;++ra){var qa=fa.ns[ra];ia(!1,qa.gs,ba["string"===typeof ba?"substring":"subarray"](qa.start,qa.stop),this.Ud.C_(qa.gs));qa.gs in this.Qh&&delete this.Qh[qa.gs]}}while(oa!==this.Vj[ea].Dn);delete this.Vj[ea]}};ca.DISABLE_RANGE_HEADER=!1;ca.mS=3;return ca}(ya.a);(function(z){function ca(ba,fa,
ea){var oa=z.call(this)||this,ia;for(ia in ba)oa[ia]=ba[ia];oa.tAa=ba;oa.startOffset=fa;oa.endOffset=ea;oa.YW=function(la,ra,qa,sa){Object(na.isUndefined)(ra.stop)?(ra.start+=oa.endOffset,ra.stop=oa.endOffset):(ra.start+=oa.startOffset,ra.stop+=oa.startOffset);la=oa.Ux(oa.url,ra,oa.DD);return new ba.sA(la,ra,qa,sa)};return oa}Object(pa.c)(ca,z);return ca})(x);Object(n.a)(x);Object(n.b)(x);ua["default"]=x}}]);}).call(this || window)