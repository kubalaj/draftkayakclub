/*!CK:676936506!*//*1385441666,173198623*/

if (self.CavalryLogger) { CavalryLogger.start_js(["hgYDp"]); }

__d("legacy:bookmarks-seeall-js",["BookmarksSeeAll"],function(a,b,c,d){a.BookmarksSeeAll=b('BookmarksSeeAll');},3);
__d("CovercardArrow",["ContextualDialogArrow","CSS","DOMQuery","Locale","Style","csx","cx"],function(a,b,c,d,e,f){var g=b('ContextualDialogArrow'),h=b('CSS'),i=b('DOMQuery'),j=b('Locale'),k=b('Style'),l=b('csx'),m=b('cx'),n=-45,o=45,p=10;if(j.isRTL()){n=-n;o=-o;}function q(s){"use strict";this._layer=s;}q.prototype.enable=function(){"use strict";this._layer.enableBehavior(g);var s=this._layer.getContentRoot();this._arrowWrapper=i.scry(s,"._7lh")[0];if(!this._arrowWrapper)return;this._arrowShadow=i.scry(this._arrowWrapper,"._7li")[0];if(!this._arrowShadow)return;var t=null;if(this._arrowWrapper.style.webkitMaskPosition!==undefined){t=this._renderArrowWithWebkitMask.bind(this);h.addClass(s,"_7ld");}else if(r(this._arrowWrapper)){t=this._renderArrowWithRotate.bind(this);h.addClass(s,"_7le");}if(!t)return;if(j.isRTL())h.addClass(s,"_7lf");this._subscription=this._layer.subscribe('reposition',function(u,v){var w=v.getPosition()=='below';h.conditionClass(s,"_53ih",w);w&&t(v);});};q.prototype.disable=function(){"use strict";this._subscription&&this._subscription.unsubscribe();this._subscription=null;};q.prototype._calculateArrowOffset=function(s){"use strict";var t=g.getOffsetPercent(s),u=g.getOffset(s,t,this._layer),v=k.get(this._layer.getContentRoot(),'width');return parseInt(v,10)*(t/100)+u;};q.prototype._renderArrowWithWebkitMask=function(s){"use strict";var t=g.getOffsetSide(s),u=this._calculateArrowOffset(s);if(j.isRTL()){var v=k.get(this._layer.getContentRoot(),'width');u=parseInt(v,10)-u-this._layer.getArrowDimensions().offset;t=t=='left'?'right':'left';}k.set(this._arrowWrapper,'webkitMaskPositionX',u+'px');k.set(this._arrowShadow,t,u+'px');};q.prototype._renderArrowWithRotate=function(s){"use strict";var t=i.scry(this._arrowWrapper,"._7lj")[0];if(!t)return;var u=r(this._arrowWrapper);if(!u)return;var v=this._calculateArrowOffset(s),w=p+v;if(j.isRTL())w=-w;this._arrowWrapper.style[u]='translate('+w+'px, -'+p+'px) '+'rotate('+o+'deg)';t.style[u]='rotate('+n+'deg) '+'translate('+(-w)+'px, 0px)';};function r(s){if(!s)s=document.body;var t=['transform','WebkitTransform','msTransform','MozTransform','OTransform'],u;while(u=t.shift())if(s.style[u]!==undefined)return u;return null;}e.exports=q;});