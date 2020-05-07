/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{Nsh5:function(e,t,n){"use strict";n.d(t,"h",function(){return S}),n.d(t,"a",function(){return y}),n.d(t,"d",function(){return O}),n.d(t,"b",function(){return w}),n.d(t,"c",function(){return v}),n.d(t,"g",function(){return j}),n.d(t,"e",function(){return C}),n.d(t,"f",function(){return E}),n("ihYY");var i=n("mrSG"),o=n("n6gG"),r=n("YSh2"),s=n("qAlS"),a=n("CcnG"),c=n("K9Ia"),u=n("bne5"),h=n("p0ib"),p=n("VnD/"),d=n("ny24"),_=n("ad02"),f=n("67Y/"),l=n("t9fZ"),b=n("p0Sj"),g=n("Gi3i");function m(e){throw Error("A drawer was already declared for 'position=\""+e+"\"'")}var y=new a.InjectionToken("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:function(){return!1}}),O=function(e){function t(t,n,i,o,r){var s=e.call(this,i,o,r)||this;return s._changeDetectorRef=t,s._container=n,s}return Object(i.__extends)(t,e),t.prototype.ngAfterContentInit=function(){var e=this;this._container._contentMarginChanges.subscribe(function(){e._changeDetectorRef.markForCheck()})},t}(s.a),w=function(){function e(e,t,n,i,o,s){var h=this;this._elementRef=e,this._focusTrapFactory=t,this._focusMonitor=n,this._platform=i,this._ngZone=o,this._doc=s,this._elementFocusedBeforeDrawerWasOpened=null,this._enableAnimations=!1,this._position="start",this._mode="over",this._disableClose=!1,this._autoFocus=!0,this._animationStarted=new c.a,this._animationEnd=new c.a,this._animationState="void",this.openedChange=new a.EventEmitter(!0),this._destroyed=new c.a,this.onPositionChanged=new a.EventEmitter,this._modeChanged=new c.a,this._opened=!1,this.openedChange.subscribe(function(e){e?(h._doc&&(h._elementFocusedBeforeDrawerWasOpened=h._doc.activeElement),h._isFocusTrapEnabled&&h._focusTrap&&h._trapFocus()):h._restoreFocus()}),this._ngZone.runOutsideAngular(function(){Object(u.a)(h._elementRef.nativeElement,"keydown").pipe(Object(p.a)(function(e){return e.keyCode===r.h&&!h.disableClose}),Object(d.a)(h._destroyed)).subscribe(function(e){return h._ngZone.run(function(){h.close(),e.stopPropagation()})})}),this._animationEnd.pipe(Object(_.a)(function(e,t){return e.fromState===t.fromState&&e.toState===t.toState})).subscribe(function(e){var t=e.fromState,n=e.toState;(0===n.indexOf("open")&&"void"===t||"void"===n&&0===t.indexOf("open"))&&h.openedChange.emit(h._opened)})}return Object.defineProperty(e.prototype,"position",{get:function(){return this._position},set:function(e){(e="end"===e?"end":"start")!=this._position&&(this._position=e,this.onPositionChanged.emit())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"mode",{get:function(){return this._mode},set:function(e){this._mode=e,this._modeChanged.next()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disableClose",{get:function(){return this._disableClose},set:function(e){this._disableClose=Object(o.c)(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoFocus",{get:function(){return this._autoFocus},set:function(e){this._autoFocus=Object(o.c)(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_openedStream",{get:function(){return this.openedChange.pipe(Object(p.a)(function(e){return e}),Object(f.a)(function(){}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"openedStart",{get:function(){return this._animationStarted.pipe(Object(p.a)(function(e){return e.fromState!==e.toState&&0===e.toState.indexOf("open")}),Object(f.a)(function(){}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_closedStream",{get:function(){return this.openedChange.pipe(Object(p.a)(function(e){return!e}),Object(f.a)(function(){}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"closedStart",{get:function(){return this._animationStarted.pipe(Object(p.a)(function(e){return e.fromState!==e.toState&&"void"===e.toState}),Object(f.a)(function(){}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_isFocusTrapEnabled",{get:function(){return this.opened&&"side"!==this.mode},enumerable:!0,configurable:!0}),e.prototype._trapFocus=function(){var e=this;this.autoFocus&&this._focusTrap.focusInitialElementWhenReady().then(function(t){t||"function"!=typeof e._elementRef.nativeElement.focus||e._elementRef.nativeElement.focus()})},e.prototype._restoreFocus=function(){if(this.autoFocus){var e=this._doc&&this._doc.activeElement;e&&this._elementRef.nativeElement.contains(e)&&(this._elementFocusedBeforeDrawerWasOpened instanceof HTMLElement?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,this._openedVia):this._elementRef.nativeElement.blur()),this._elementFocusedBeforeDrawerWasOpened=null,this._openedVia=null}},e.prototype.ngAfterContentInit=function(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._focusTrap.enabled=this._isFocusTrapEnabled},e.prototype.ngAfterContentChecked=function(){this._platform.isBrowser&&(this._enableAnimations=!0)},e.prototype.ngOnDestroy=function(){this._focusTrap&&this._focusTrap.destroy(),this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()},Object.defineProperty(e.prototype,"opened",{get:function(){return this._opened},set:function(e){this.toggle(Object(o.c)(e))},enumerable:!0,configurable:!0}),e.prototype.open=function(e){return this.toggle(!0,e)},e.prototype.close=function(){return this.toggle(!1)},e.prototype.toggle=function(e,t){var n=this;return void 0===e&&(e=!this.opened),void 0===t&&(t="program"),this._opened=e,e?(this._animationState=this._enableAnimations?"open":"open-instant",this._openedVia=t):(this._animationState="void",this._restoreFocus()),this._focusTrap&&(this._focusTrap.enabled=this._isFocusTrapEnabled),new Promise(function(e){n.openedChange.pipe(Object(l.a)(1)).subscribe(function(t){return e(t?"open":"close")})})},Object.defineProperty(e.prototype,"_width",{get:function(){return this._elementRef.nativeElement&&this._elementRef.nativeElement.offsetWidth||0},enumerable:!0,configurable:!0}),e}(),v=function(){function e(e,t,n,i,o,r,s){void 0===o&&(o=!1);var u=this;this._dir=e,this._element=t,this._ngZone=n,this._changeDetectorRef=i,this._animationMode=r,this.backdropClick=new a.EventEmitter,this._destroyed=new c.a,this._doCheckSubject=new c.a,this._contentMargins={left:null,right:null},this._contentMarginChanges=new c.a,e&&e.change.pipe(Object(d.a)(this._destroyed)).subscribe(function(){u._validateDrawers(),u._updateContentMargins()}),s&&s.change().pipe(Object(d.a)(this._destroyed)).subscribe(function(){return u._updateContentMargins()}),this._autosize=o}return Object.defineProperty(e.prototype,"start",{get:function(){return this._start},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this._end},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autosize",{get:function(){return this._autosize},set:function(e){this._autosize=Object(o.c)(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasBackdrop",{get:function(){return null==this._backdropOverride?!this._start||"side"!==this._start.mode||!this._end||"side"!==this._end.mode:this._backdropOverride},set:function(e){this._backdropOverride=null==e?null:Object(o.c)(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scrollable",{get:function(){return this._userContent||this._content},enumerable:!0,configurable:!0}),e.prototype.ngAfterContentInit=function(){var e=this;this._drawers.changes.pipe(Object(b.a)(null)).subscribe(function(){e._validateDrawers(),e._drawers.forEach(function(t){e._watchDrawerToggle(t),e._watchDrawerPosition(t),e._watchDrawerMode(t)}),(!e._drawers.length||e._isDrawerOpen(e._start)||e._isDrawerOpen(e._end))&&e._updateContentMargins(),e._changeDetectorRef.markForCheck()}),this._doCheckSubject.pipe(Object(g.a)(10),Object(d.a)(this._destroyed)).subscribe(function(){return e._updateContentMargins()})},e.prototype.ngOnDestroy=function(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._destroyed.next(),this._destroyed.complete()},e.prototype.open=function(){this._drawers.forEach(function(e){return e.open()})},e.prototype.close=function(){this._drawers.forEach(function(e){return e.close()})},e.prototype.ngDoCheck=function(){var e=this;this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(function(){return e._doCheckSubject.next()})},e.prototype._watchDrawerToggle=function(e){var t=this;e._animationStarted.pipe(Object(p.a)(function(e){return e.fromState!==e.toState}),Object(d.a)(this._drawers.changes)).subscribe(function(e){"open-instant"!==e.toState&&"NoopAnimations"!==t._animationMode&&t._element.nativeElement.classList.add("mat-drawer-transition"),t._updateContentMargins(),t._changeDetectorRef.markForCheck()}),"side"!==e.mode&&e.openedChange.pipe(Object(d.a)(this._drawers.changes)).subscribe(function(){return t._setContainerClass(e.opened)})},e.prototype._watchDrawerPosition=function(e){var t=this;e&&e.onPositionChanged.pipe(Object(d.a)(this._drawers.changes)).subscribe(function(){t._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(l.a)(1)).subscribe(function(){t._validateDrawers()})})},e.prototype._watchDrawerMode=function(e){var t=this;e&&e._modeChanged.pipe(Object(d.a)(Object(h.a)(this._drawers.changes,this._destroyed))).subscribe(function(){t._updateContentMargins(),t._changeDetectorRef.markForCheck()})},e.prototype._setContainerClass=function(e){e?this._element.nativeElement.classList.add("mat-drawer-opened"):this._element.nativeElement.classList.remove("mat-drawer-opened")},e.prototype._validateDrawers=function(){var e=this;this._start=this._end=null,this._drawers.forEach(function(t){"end"==t.position?(null!=e._end&&m("end"),e._end=t):(null!=e._start&&m("start"),e._start=t)}),this._right=this._left=null,this._dir&&"rtl"===this._dir.value?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)},e.prototype._isPushed=function(){return this._isDrawerOpen(this._start)&&"over"!=this._start.mode||this._isDrawerOpen(this._end)&&"over"!=this._end.mode},e.prototype._onBackdropClicked=function(){this.backdropClick.emit(),this._closeModalDrawer()},e.prototype._closeModalDrawer=function(){var e=this;[this._start,this._end].filter(function(t){return t&&!t.disableClose&&e._canHaveBackdrop(t)}).forEach(function(e){return e.close()})},e.prototype._isShowingBackdrop=function(){return this._isDrawerOpen(this._start)&&this._canHaveBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._canHaveBackdrop(this._end)},e.prototype._canHaveBackdrop=function(e){return"side"!==e.mode||!!this._backdropOverride},e.prototype._isDrawerOpen=function(e){return null!=e&&e.opened},e.prototype._updateContentMargins=function(){var e=this,t=0,n=0;if(this._left&&this._left.opened&&("side"==this._left.mode?t+=this._left._width:"push"==this._left.mode&&(t+=i=this._left._width,n-=i)),this._right&&this._right.opened)if("side"==this._right.mode)n+=this._right._width;else if("push"==this._right.mode){var i;n+=i=this._right._width,t-=i}n=n||null,(t=t||null)===this._contentMargins.left&&n===this._contentMargins.right||(this._contentMargins={left:t,right:n},this._ngZone.run(function(){return e._contentMarginChanges.next(e._contentMargins)}))},e}(),j=function(e){function t(t,n,i,o,r){return e.call(this,t,n,i,o,r)||this}return Object(i.__extends)(t,e),t}(O),C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._fixedInViewport=!1,t._fixedTopGap=0,t._fixedBottomGap=0,t}return Object(i.__extends)(t,e),Object.defineProperty(t.prototype,"fixedInViewport",{get:function(){return this._fixedInViewport},set:function(e){this._fixedInViewport=Object(o.c)(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fixedTopGap",{get:function(){return this._fixedTopGap},set:function(e){this._fixedTopGap=Object(o.f)(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fixedBottomGap",{get:function(){return this._fixedBottomGap},set:function(e){this._fixedBottomGap=Object(o.f)(e)},enumerable:!0,configurable:!0}),t}(w),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(i.__extends)(t,e),t}(v),S=function(){return function(){}}()}}]);