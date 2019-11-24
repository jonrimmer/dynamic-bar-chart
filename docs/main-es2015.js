(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-charts/app-charts.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-charts/app-charts.component.ts ***!
  \****************************************************/
/*! exports provided: ChartsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsContainerComponent", function() { return ChartsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bar-chart/bar-chart.component */ "./src/app/bar-chart/bar-chart.component.ts");



class ChartsContainerComponent {
    constructor() {
        this.leftSize = null;
        this.topSize = null;
        this.trackingX = false;
        this.trackingY = false;
    }
    onMove(e) {
        if (this.trackingX || this.trackingY) {
            e.preventDefault();
            e.stopPropagation();
            // tslint:disable-next-line: no-bitwise
            if (!(e.buttons & 1)) {
                this.trackingX = this.trackingY = false;
                return;
            }
            if (this.trackingX) {
                this.leftSize = e.pageX - e.currentTarget.offsetLeft;
                return;
            }
            if (this.trackingY) {
                this.topSize = e.pageY - e.currentTarget.offsetTop;
                return;
            }
        }
    }
    onVGrab(e) {
        e.preventDefault();
        e.stopPropagation();
        this.trackingX = true;
    }
    onHGrab(e) {
        e.preventDefault();
        e.stopPropagation();
        this.trackingY = true;
    }
}
ChartsContainerComponent.ɵfac = function ChartsContainerComponent_Factory(t) { return new (t || ChartsContainerComponent)(); };
ChartsContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartsContainerComponent, selectors: [["app-charts-container"]], hostBindings: function ChartsContainerComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵallocHostVars"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function ChartsContainerComponent_mousemove_HostBindingHandler($event) { return ctx.onMove($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--left-size", ctx.leftSize, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--top-size", ctx.topSize, "px");
    } }, inputs: { categories: "categories", series: "series" }, decls: 5, vars: 6, consts: [["id", "c1", 3, "categories", "series"], ["id", "c2", 3, "categories", "series"], ["id", "c3", "xAxisLabel", "GitHub Project", "yAxisLabel", "Count", "title", "GitHub Project Statistics", 3, "categories", "series"], [1, "grab", "v-grab", 3, "mousedown"], [1, "grab", "h-grab", 3, "mousedown"]], template: function ChartsContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-bar-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-bar-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-bar-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ChartsContainerComponent_Template_div_mousedown_3_listener($event) { return ctx.onVGrab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ChartsContainerComponent_Template_div_mousedown_4_listener($event) { return ctx.onHGrab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.categories)("series", ctx.series);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.categories)("series", ctx.series);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.categories)("series", ctx.series);
    } }, directives: [_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(-webkit-min-content, var(--left-size, 30%)) auto minmax(-webkit-min-content, 1fr);\n  grid-template-columns: minmax(min-content, var(--left-size, 30%)) auto minmax(min-content, 1fr);\n  grid-template-rows: minmax(-webkit-min-content, var(--top-size, 40%)) auto minmax(-webkit-min-content, 1fr);\n  grid-template-rows: minmax(min-content, var(--top-size, 40%)) auto minmax(min-content, 1fr);\n  grid-template-areas: \"tleft vgrab cent\" \"hgrab vgrab cent\" \"bleft vgrab cent\";\n  max-height: 100%;\n  overflow: hidden;\n}\n#c1[_ngcontent-%COMP%] {\n  grid-area: tleft;\n  font-size: 10px;\n}\n#c2[_ngcontent-%COMP%] {\n  grid-area: bleft;\n  font-size: 10px;\n}\n#c3[_ngcontent-%COMP%] {\n  grid-area: cent;\n}\n.grab[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.025);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.grab[_ngcontent-%COMP%]::after {\n  content: \"\u22EE\";\n  height: 0;\n}\n.v-grab[_ngcontent-%COMP%] {\n  width: 8px;\n  margin: 0 1em;\n  grid-area: vgrab;\n  cursor: ew-resize;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.h-grab[_ngcontent-%COMP%] {\n  grid-area: hgrab;\n  cursor: ns-resize;\n  height: 8px;\n  margin: 1em 0;\n  background: rgba(0, 0, 0, 0.025);\n  text-align: center;\n}\n.h-grab[_ngcontent-%COMP%]::after {\n  -webkit-transform: rotate(90deg) translateX(4px);\n          transform: rotate(90deg) translateX(4px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNoYXJ0cy9hcHAtY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2pvbi9HaXRIdWIvZHluYW1pYy1iYXItY2hhcnQvc3JjL2FwcC9hcHAtY2hhcnRzL2FwcC1jaGFydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsYUFBQTtFQUNBLCtHQUFBO0VBQUEsK0ZBQUE7RUFJQSwyR0FBQTtFQUFBLDJGQUFBO0VBSUEsNkVBQ0U7RUFHRixnQkFBQTtFQUNBLGdCQUFBO0FEUEY7QUNVQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBRFBGO0FDVUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QURQRjtBQ1VBO0VBQ0UsZUFBQTtBRFBGO0FDVUE7RUFDRSxnQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QURQRjtBQ1NFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QURQSjtBQ1dBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FEUkY7QUNXQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QURSRjtBQ1VFO0VBQ0UsZ0RBQUE7VUFBQSx3Q0FBQTtBRFJKIiwiZmlsZSI6InNyYy9hcHAvYXBwLWNoYXJ0cy9hcHAtY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwgdmFyKC0tbGVmdC1zaXplLCAzMCUpKSBhdXRvIG1pbm1heChtaW4tY29udGVudCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgobWluLWNvbnRlbnQsIHZhcigtLXRvcC1zaXplLCA0MCUpKSBhdXRvIG1pbm1heChtaW4tY29udGVudCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0bGVmdCB2Z3JhYiBjZW50XCIgXCJoZ3JhYiB2Z3JhYiBjZW50XCIgXCJibGVmdCB2Z3JhYiBjZW50XCI7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNjMSB7XG4gIGdyaWQtYXJlYTogdGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuI2MyIHtcbiAgZ3JpZC1hcmVhOiBibGVmdDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4jYzMge1xuICBncmlkLWFyZWE6IGNlbnQ7XG59XG5cbi5ncmFiIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdyYWI6OmFmdGVyIHtcbiAgY29udGVudDogXCLii65cIjtcbiAgaGVpZ2h0OiAwO1xufVxuXG4udi1ncmFiIHtcbiAgd2lkdGg6IDhweDtcbiAgbWFyZ2luOiAwIDFlbTtcbiAgZ3JpZC1hcmVhOiB2Z3JhYjtcbiAgY3Vyc29yOiBldy1yZXNpemU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5oLWdyYWIge1xuICBncmlkLWFyZWE6IGhncmFiO1xuICBjdXJzb3I6IG5zLXJlc2l6ZTtcbiAgaGVpZ2h0OiA4cHg7XG4gIG1hcmdpbjogMWVtIDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaC1ncmFiOjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVYKDRweCk7XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwgdmFyKC0tbGVmdC1zaXplLCAzMCUpKSBhdXRvIG1pbm1heChcbiAgICAgIG1pbi1jb250ZW50LFxuICAgICAgMWZyXG4gICAgKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgobWluLWNvbnRlbnQsIHZhcigtLXRvcC1zaXplLCA0MCUpKSBhdXRvIG1pbm1heChcbiAgICAgIG1pbi1jb250ZW50LFxuICAgICAgMWZyXG4gICAgKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAndGxlZnQgdmdyYWIgY2VudCdcbiAgICAnaGdyYWIgdmdyYWIgY2VudCdcbiAgICAnYmxlZnQgdmdyYWIgY2VudCc7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNjMSB7XG4gIGdyaWQtYXJlYTogdGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuI2MyIHtcbiAgZ3JpZC1hcmVhOiBibGVmdDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4jYzMge1xuICBncmlkLWFyZWE6IGNlbnQ7XG59XG5cbi5ncmFiIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAn4ouuJztcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbn1cblxuLnYtZ3JhYiB7XG4gIHdpZHRoOiA4cHg7XG4gIG1hcmdpbjogMCAxZW07XG4gIGdyaWQtYXJlYTogdmdyYWI7XG4gIGN1cnNvcjogZXctcmVzaXplO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaC1ncmFiIHtcbiAgZ3JpZC1hcmVhOiBoZ3JhYjtcbiAgY3Vyc29yOiBucy1yZXNpemU7XG4gIGhlaWdodDogOHB4O1xuICBtYXJnaW46IDFlbSAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICY6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWCg0cHgpO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-charts-container',
                templateUrl: './app-charts.component.html',
                styleUrls: ['./app-charts.component.scss']
            }]
    }], null, { leftSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.--left-size.px']
        }], topSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.--top-size.px']
        }], categories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], series: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousemove', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_app_charts_app_charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-charts/app-charts.component */ "./src/app/app-charts/app-charts.component.ts");









function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_2_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_2_button_8_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const i_r17 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.removeRepo(i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categories_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", categories_r16.label, " ");
} }
function AppComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AppComponent_ng_container_2_Template_form_submit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.addRepo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Add repo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_2_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.repo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_2_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.fakeData = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Fake data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_ng_container_2_button_8_Template, 2, 1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-charts-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.repo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.fakeData);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.rateLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("categories", ctx_r14.categories)("series", ctx_r14.series);
} }
const DEFAULT_REPOS = ['angular/angular', 'facebook/react', 'vuejs/vue'];
class AppComponent {
    constructor(http, location) {
        this.http = http;
        this.location = location;
        this.fakeData = false;
        this.categories = [];
        this.series = [
            {
                label: 'Subscribers',
                color: '#11C591',
            },
            {
                label: 'Forks',
                color: 'rebeccapurple',
            },
            {
                label: 'Issues',
                color: '#ED4DAF',
            },
        ];
        DEFAULT_REPOS.forEach(repo => this.loadRepo(repo));
    }
    addRepo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.repo && this.repo.length) {
                yield this.loadRepo(this.repo);
                this.repo = '';
            }
        });
    }
    removeRepo(repo) {
        this.categories = this.categories.filter((_, i) => i !== repo);
    }
    loadRepo(repo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield (this.fakeData ? this.fakeRepo(repo) : this.loadGithubRepo(repo));
            if (!result) {
                return;
            }
            this.categories = [
                ...this.categories,
                {
                    label: result.full_name,
                    values: [result.subscribers_count, result.forks_count, result.open_issues],
                },
            ];
        });
    }
    fakeRepo(repo) {
        return Promise.resolve({
            full_name: repo,
            subscribers_count: Math.floor(Math.random() * 5000),
            forks_count: Math.floor(Math.random() * 3000),
            open_issues: Math.floor(Math.random() * 1000),
        });
    }
    loadGithubRepo(repo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const response = yield this.http
                    .get(`https://api.github.com/repos/${repo}`, {
                    observe: 'response',
                })
                    .toPromise();
                this.rateLimit = `GitHub rate limit: ${response.headers.get('X-RateLimit-Remaining')} of ${response.headers.get('X-RateLimit-Limit')} remaining.`;
                return response.body;
            }
            catch (error) {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                    if (error.status === 403) {
                        this.rateLimit = 'GitHub rate limit exceeded';
                        this.fakeData = true;
                        return this.fakeRepo(repo);
                    }
                    return null;
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["id", "repos", 3, "submit"], ["type", "text", "name", "repo", "placeholder", "org/repo", 3, "ngModel", "ngModelChange"], [1, "fake"], ["name", "fake", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["type", "button", 3, "click", 4, "ngFor", "ngForOf"], [1, "rate-limit"], ["id", "charts", 3, "categories", "series"], ["type", "button", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_ng_container_2_Template, 12, 6, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.location.path());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "/dynamic-bar-chart/demo");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _demo_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], src_app_app_charts_app_charts_component__WEBPACK_IMPORTED_MODULE_6__["ChartsContainerComponent"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  height: 100%;\n}\n#repos[_ngcontent-%COMP%] {\n  background-color: rebeccapurple;\n  color: #fff;\n  grid-area: 1/1;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  grid-auto-flow: column;\n  -webkit-box-pack: start;\n          justify-content: start;\n  grid-gap: 8px;\n  padding: 8px;\n  font-size: 0.8em;\n}\n#repos[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  align-self: center;\n}\ninput[type=text][_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 12px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  border: 0;\n}\ninput[type=text][_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\ninput[type=text][_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\ninput[type=text][_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\ninput[type=text][_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.fake[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\nbutton[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  border: 0;\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  border-radius: 3px;\n  padding: 0 12px;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]::after {\n  content: \"\u2715\";\n  display: block;\n  margin-left: 1em;\n}\n#charts[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin: 24px;\n}\n.rate-limit[_ngcontent-%COMP%] {\n  align-self: center;\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2pvbi9HaXRIdWIvZHluYW1pYy1iYXItY2hhcnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMEJBQUE7VUFBQSxvQkFBQTtFQUNBLFlBQUE7QURFRjtBQ0NBO0VBQ0UsK0JBQUE7RUFDQSxXQUFBO0VBRUEsY0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRENGO0FDQ0U7RUFDRSxrQkFBQTtBRENKO0FDR0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FEQUY7QUNFRTtFQUNFLCtCQUFBO0FEQUo7QUNERTtFQUNFLCtCQUFBO0FEQUo7QUNERTtFQUNFLCtCQUFBO0FEQUo7QUNERTtFQUNFLCtCQUFBO0FEQUo7QUNJQTtFQUNFLGtCQUFBO0FEREY7QUNJQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtBRERGO0FDR0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEREo7QUNLQTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLFlBQUE7QURGRjtBQ0tBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBREZGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jcmVwb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xuICBjb2xvcjogI2ZmZjtcbiAgZ3JpZC1hcmVhOiAxLzE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBncmlkLWdhcDogOHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4jcmVwb3MgbGFiZWwge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMDtcbn1cbmlucHV0W3R5cGU9dGV4dF06OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLmZha2Uge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b246OmFmdGVyIHtcbiAgY29udGVudDogXCLinJVcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG5cbiNjaGFydHMge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDI0cHg7XG59XG5cbi5yYXRlLWxpbWl0IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNyZXBvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XG4gIGNvbG9yOiAjZmZmO1xuXG4gIGdyaWQtYXJlYTogMSAvIDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBncmlkLWdhcDogOHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG5cbiAgbGFiZWwge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxufVxuXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMDtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxufVxuXG4uZmFrZSB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJ+KclSc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgfVxufVxuXG4jY2hhcnRzIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAyNHB4O1xufVxuXG4ucmF0ZS1saW1pdCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "./src/app/bar-chart/bar-chart.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_app_charts_app_charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-charts/app-charts.component */ "./src/app/app-charts/app-charts.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["BarChartComponent"],
        src_app_app_charts_app_charts_component__WEBPACK_IMPORTED_MODULE_6__["ChartsContainerComponent"],
        _demo_demo_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["BarChartComponent"],
                    src_app_app_charts_app_charts_component__WEBPACK_IMPORTED_MODULE_6__["ChartsContainerComponent"],
                    _demo_demo_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"]
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bar-chart/bar-chart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bar-chart/bar-chart.component.ts ***!
  \**************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function BarChartComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--color", s_r6.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r6.label, " ");
} }
function BarChartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tick_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, tick_r7), " ");
} }
function BarChartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.title, "\n");
} }
function BarChartComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.xAxisLabel, "\n");
} }
function BarChartComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.yAxisLabel, "\n");
} }
function BarChartComponent_ng_container_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 20);
} if (rf & 2) {
    const value_r11 = ctx.$implicit;
    const di_r12 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--value", value_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--color", ctx_r10.series[di_r12].color);
} }
function BarChartComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BarChartComponent_ng_container_8_div_2_Template, 1, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r8 = ctx.$implicit;
    const ci_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("grid-column", "col-start " + (ci_r9 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r8.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("grid-column", "col-start " + (ci_r9 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r8.label, " ");
} }
const { floor, ceil, log10, pow, min, max } = Math;
/**
 * For a given number, round it up or down to a "nice" value.
 * Where a "nice" value is a power of ten multiple of 1, 2 or 5.
 */
const niceNum = (n, round) => {
    const exp = floor(log10(n));
    const frac = n / pow(10, exp);
    let niceFrac;
    if (round) {
        niceFrac = frac <= 1 ? 1 : frac <= 2 ? 2 : frac <= 5 ? 5 : 10;
    }
    else {
        niceFrac = frac < 1.5 ? 1 : frac < 3 ? 2 : frac < 7 ? 5 : 10;
    }
    return niceFrac * pow(10, exp);
};
function* niceTicks(dataMin, dataMax, tickCount) {
    // Round the range size up to a nice value.
    const range = niceNum(dataMax - dataMin, false);
    // Find a nice tick size for the new range.
    const tickInterval = niceNum(range / (tickCount - 1), true);
    // Round the min and max up and down respectively, based on the tick size.
    const niceMin = floor(dataMin / tickInterval) * tickInterval;
    const niceMax = ceil(dataMax / tickInterval) * tickInterval;
    // Output all ticks between the nice min and max.
    for (let v = niceMin; v <= niceMax + 0.5 * tickInterval; v += tickInterval) {
        yield v;
    }
}
class BarChartComponent {
    constructor() {
        this.categories = [];
        this.maxValue = 1;
        this.yTicks = [];
    }
    get categoryCount() {
        return this.categories.length;
    }
    set categoriesInput(value) {
        if (!value) {
            return;
        }
        this.categories = value;
        const values = value.flatMap(c => c.values);
        const minValue = Math.min(...values);
        const maxValue = Math.max(...values);
        this.yTicks = [...niceTicks(minValue, maxValue, 10)];
        this.maxValue = this.yTicks[this.yTicks.length - 1];
    }
    ngOnInit() { }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(); };
BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], hostBindings: function BarChartComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵallocHostVars"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--category-count", ctx.categoryCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--max-value", ctx.maxValue);
    } }, inputs: { categoriesInput: ["categories", "categoriesInput"], series: "series", title: "title", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel" }, decls: 9, vars: 6, consts: [[1, "legend"], ["class", "legend-item", 3, "--color", 4, "ngFor", "ngForOf"], [1, "x-axis"], [1, "y-axis"], ["class", "y-tick", 4, "ngFor", "ngForOf"], ["class", "title", 4, "ngIf"], ["class", "x-axis-label", 4, "ngIf"], ["class", "y-axis-label", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "legend-item"], [1, "y-tick"], [1, "y-tick-value"], [1, "title"], [1, "x-axis-label"], [1, "y-axis-label"], [1, "category"], ["class", "bar", 3, "--value", "--color", 4, "ngFor", "ngForOf"], [1, "category-label-container"], [1, "category-label"], [1, "label-text"], [1, "bar"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BarChartComponent_li_1_Template, 2, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BarChartComponent_div_4_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BarChartComponent_div_5_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BarChartComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BarChartComponent_div_7_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BarChartComponent_ng_container_8_Template, 7, 4, "ng-container", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.series);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.xAxisLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.yAxisLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], styles: ["[_nghost-%COMP%] {\n  background-color: #f8f8f8;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);\n  border: 1px solid #fff;\n  display: grid;\n  grid-gap: 0.5em;\n  grid-template-rows: [title] auto [legend] auto [data] minmax(10em, 1fr) [x-axis] auto [x-axis-label] auto;\n  grid-template-columns: [y-axis-label] auto [y-axis] auto [cols-start] repeat(var(--category-count), [col-start] minmax(5em, 1fr)) [cols-end] 1em;\n  overflow: hidden;\n}\n\n.y-axis[_ngcontent-%COMP%] {\n  border-right: 1px solid black;\n  grid-area: data/y-axis;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n          flex-direction: column-reverse;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n\n.y-tick[_ngcontent-%COMP%] {\n  height: 0;\n  position: relative;\n}\n\n.y-tick[_ngcontent-%COMP%]::after {\n  position: absolute;\n  display: block;\n  right: -1px;\n  top: 0;\n  content: \"\";\n  border-bottom: 1px solid black;\n  width: 0.5em;\n}\n\n.y-tick-value[_ngcontent-%COMP%] {\n  margin: 0 1em;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.x-axis[_ngcontent-%COMP%] {\n  border-top: 1px solid black;\n  grid-column: cols-start/cols-end;\n  grid-row: x-axis;\n}\n\n.label[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.legend[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  grid-row: legend;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  list-style: none;\n  padding: 12px 0;\n}\n\n.legend-item[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.legend-item[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  content: \"\";\n  width: 1em;\n  height: 1em;\n  border-radius: 3px;\n  background-color: var(--color);\n  margin: 0 0.5em 0 1em;\n}\n\n.legend-item[_ngcontent-%COMP%]:first-child::before {\n  margin-left: 0;\n}\n\n.category-label-container[_ngcontent-%COMP%] {\n  grid-row: x-axis;\n  justify-self: stretch;\n  align-self: start;\n  margin: 0.5em 0;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.category-label-container[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: -0.5em;\n  left: -1px;\n  content: \"\";\n  height: 0.75em;\n  border-left: 1px solid black;\n}\n\n.category-label-container[_ngcontent-%COMP%]:last-child::after {\n  position: absolute;\n  top: -0.5em;\n  right: -1px;\n  content: \"\";\n  height: 0.75em;\n  border-left: 1px solid black;\n}\n\n.category-label-container[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%] {\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n  -webkit-transform: translateX(-50%) rotate(-45deg);\n          transform: translateX(-50%) rotate(-45deg);\n  text-align: right;\n}\n\n.category-label-container[_ngcontent-%COMP%]   .label-text[_ngcontent-%COMP%] {\n  max-width: 10em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-bottom: 70%;\n}\n\n.category[_ngcontent-%COMP%] {\n  grid-row: data;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: center;\n          justify-content: center;\n  justify-self: center;\n  width: 70%;\n}\n\n.bar[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  background-color: var(--color);\n  height: calc(var(--value) / var(--max-value) * 100%);\n  margin: 0 1px;\n}\n\n.x-axis-label[_ngcontent-%COMP%] {\n  grid-row: x-axis-label;\n  grid-column: cols-start/cols-end;\n  justify-self: center;\n  margin-bottom: 1em;\n  font-weight: bold;\n}\n\n.y-axis-label[_ngcontent-%COMP%] {\n  grid-row: data;\n  grid-column: y-axis-label;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  align-self: center;\n  margin-left: 1em;\n  font-weight: bold;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  grid-row: title;\n  grid-column: 1/-1;\n  justify-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb24vR2l0SHViL2R5bmFtaWMtYmFyLWNoYXJ0L3NyYy9hcHAvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUdBQUE7RUFDQSxnSkFDRTtFQUtGLGdCQUFBO0FDSkY7O0FET0E7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw4QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7QUNKRjs7QURPQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDSko7O0FEUUE7RUFDRSxhQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0xGOztBRFFBO0VBQ0UsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtBQ0xGOztBRFFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNMRjs7QURRQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNMRjs7QURPRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDTEo7O0FEUUU7RUFDRSxjQUFBO0FDTko7O0FEVUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDUEY7O0FEU0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ1BKOztBRFVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNSSjs7QURXRTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxrREFBQTtVQUFBLDBDQUFBO0VBQ0EsaUJBQUE7QUNUSjs7QURZRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1ZKOztBRGNBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDWEY7O0FEY0E7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSw4QkFBQTtFQUNBLG9EQUFBO0VBQ0EsYUFBQTtBQ1hGOztBRGNBO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1hGOztBRGNBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7TUFBQSx1QkFBQTtVQUFBLHlCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1hGOztBRGNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDWEYiLCJmaWxlIjoic3JjL2FwcC9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDAuNWVtO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IFt0aXRsZV0gYXV0byBbbGVnZW5kXSBhdXRvIFtkYXRhXSBtaW5tYXgoMTBlbSwgMWZyKSBbeC1heGlzXSBhdXRvIFt4LWF4aXMtbGFiZWxdIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczpcbiAgICBbeS1heGlzLWxhYmVsXSBhdXRvIFt5LWF4aXNdIGF1dG8gW2NvbHMtc3RhcnRdIHJlcGVhdChcbiAgICAgIHZhcigtLWNhdGVnb3J5LWNvdW50KSxcbiAgICAgIFtjb2wtc3RhcnRdIG1pbm1heCg1ZW0sIDFmcilcbiAgICApXG4gICAgW2NvbHMtZW5kXSAxZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi55LWF4aXMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgZ3JpZC1hcmVhOiBkYXRhIC8geS1heGlzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4ueS10aWNrIHtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICByaWdodDogLTFweDtcbiAgICB0b3A6IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAwLjVlbTtcbiAgfVxufVxuXG4ueS10aWNrLXZhbHVlIHtcbiAgbWFyZ2luOiAwIDFlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ueC1heGlzIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICBncmlkLWNvbHVtbjogY29scy1zdGFydCAvIGNvbHMtZW5kO1xuICBncmlkLXJvdzogeC1heGlzO1xufVxuXG4ubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5sZWdlbmQge1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICBncmlkLXJvdzogbGVnZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuXG4ubGVnZW5kLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICBtYXJnaW46IDAgMC41ZW0gMCAxZW07XG4gIH1cblxuICAmOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbi5jYXRlZ29yeS1sYWJlbC1jb250YWluZXIge1xuICBncmlkLXJvdzogeC1heGlzO1xuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBtYXJnaW46IDAuNWVtIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMC41ZW07XG4gICAgbGVmdDogLTFweDtcbiAgICBjb250ZW50OiAnJztcbiAgICBoZWlnaHQ6IDAuNzVlbTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG5cbiAgJjpsYXN0LWNoaWxkOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTAuNWVtO1xuICAgIHJpZ2h0OiAtMXB4O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMC43NWVtO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gIH1cblxuICAuY2F0ZWdvcnktbGFiZWwge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuICAubGFiZWwtdGV4dCB7XG4gICAgbWF4LXdpZHRoOiAxMGVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwYWRkaW5nLWJvdHRvbTogNzAlO1xuICB9XG59XG5cbi5jYXRlZ29yeSB7XG4gIGdyaWQtcm93OiBkYXRhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmJhciB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZhbHVlKSAvIHZhcigtLW1heC12YWx1ZSkgKiAxMDAlKTtcbiAgbWFyZ2luOiAwIDFweDtcbn1cblxuLngtYXhpcy1sYWJlbCB7XG4gIGdyaWQtcm93OiB4LWF4aXMtbGFiZWw7XG4gIGdyaWQtY29sdW1uOiBjb2xzLXN0YXJ0IC8gY29scy1lbmQ7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ueS1heGlzLWxhYmVsIHtcbiAgZ3JpZC1yb3c6IGRhdGE7XG4gIGdyaWQtY29sdW1uOiB5LWF4aXMtbGFiZWw7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgZ3JpZC1yb3c6IHRpdGxlO1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAwLjVlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBbdGl0bGVdIGF1dG8gW2xlZ2VuZF0gYXV0byBbZGF0YV0gbWlubWF4KDEwZW0sIDFmcikgW3gtYXhpc10gYXV0byBbeC1heGlzLWxhYmVsXSBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFt5LWF4aXMtbGFiZWxdIGF1dG8gW3ktYXhpc10gYXV0byBbY29scy1zdGFydF0gcmVwZWF0KHZhcigtLWNhdGVnb3J5LWNvdW50KSwgW2NvbC1zdGFydF0gbWlubWF4KDVlbSwgMWZyKSkgW2NvbHMtZW5kXSAxZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi55LWF4aXMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgZ3JpZC1hcmVhOiBkYXRhL3ktYXhpcztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnktdGljayB7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnktdGljazo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICByaWdodDogLTFweDtcbiAgdG9wOiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAwLjVlbTtcbn1cblxuLnktdGljay12YWx1ZSB7XG4gIG1hcmdpbjogMCAxZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLngtYXhpcyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgZ3JpZC1jb2x1bW46IGNvbHMtc3RhcnQvY29scy1lbmQ7XG4gIGdyaWQtcm93OiB4LWF4aXM7XG59XG5cbi5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmxlZ2VuZCB7XG4gIGdyaWQtY29sdW1uOiAxLy0xO1xuICBncmlkLXJvdzogbGVnZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuXG4ubGVnZW5kLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxlZ2VuZC1pdGVtOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgbWFyZ2luOiAwIDAuNWVtIDAgMWVtO1xufVxuLmxlZ2VuZC1pdGVtOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmNhdGVnb3J5LWxhYmVsLWNvbnRhaW5lciB7XG4gIGdyaWQtcm93OiB4LWF4aXM7XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYXRlZ29yeS1sYWJlbC1jb250YWluZXI6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC41ZW07XG4gIGxlZnQ6IC0xcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMC43NWVtO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xufVxuLmNhdGVnb3J5LWxhYmVsLWNvbnRhaW5lcjpsYXN0LWNoaWxkOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC41ZW07XG4gIHJpZ2h0OiAtMXB4O1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbn1cbi5jYXRlZ29yeS1sYWJlbC1jb250YWluZXIgLmNhdGVnb3J5LWxhYmVsIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhdGVnb3J5LWxhYmVsLWNvbnRhaW5lciAubGFiZWwtdGV4dCB7XG4gIG1heC13aWR0aDogMTBlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBhZGRpbmctYm90dG9tOiA3MCU7XG59XG5cbi5jYXRlZ29yeSB7XG4gIGdyaWQtcm93OiBkYXRhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmJhciB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZhbHVlKSAvIHZhcigtLW1heC12YWx1ZSkgKiAxMDAlKTtcbiAgbWFyZ2luOiAwIDFweDtcbn1cblxuLngtYXhpcy1sYWJlbCB7XG4gIGdyaWQtcm93OiB4LWF4aXMtbGFiZWw7XG4gIGdyaWQtY29sdW1uOiBjb2xzLXN0YXJ0L2NvbHMtZW5kO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnktYXhpcy1sYWJlbCB7XG4gIGdyaWQtcm93OiBkYXRhO1xuICBncmlkLWNvbHVtbjogeS1heGlzLWxhYmVsO1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGdyaWQtcm93OiB0aXRsZTtcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bar-chart',
                templateUrl: './bar-chart.component.html',
                styleUrls: ['./bar-chart.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { categoryCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.--category-count']
        }], categoriesInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['categories']
        }], series: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], xAxisLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], yAxisLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.--max-value']
        }] }); })();


/***/ }),

/***/ "./src/app/demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bar-chart/bar-chart.component */ "./src/app/bar-chart/bar-chart.component.ts");



const _c0 = function () { return [42564, 5682, 304]; };
const _c1 = function (a1) { return { label: "Next.js", values: a1 }; };
const _c2 = function () { return [40166, 6671, 635]; };
const _c3 = function (a1) { return { label: "Gatsby", values: a1 }; };
const _c4 = function () { return [39513, 4467, 422]; };
const _c5 = function (a1) { return { label: "Hugo", values: a1 }; };
const _c6 = function () { return [39153, 8568, 158]; };
const _c7 = function (a1) { return { label: "Jekyll", values: a1 }; };
const _c8 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
const _c9 = function () { return { label: "Stars", color: "#11C591" }; };
const _c10 = function () { return { label: "Forks", color: "rebeccapurple" }; };
const _c11 = function () { return { label: "Issues", color: "#ED4DAF" }; };
const _c12 = function (a0, a1, a2) { return [a0, a1, a2]; };
class DemoComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(); };
DemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["app-demo"]], decls: 1, vars: 26, consts: [["id", "c1", "title", "Static Site Generators", "yAxisLabel", "Count", "xAxisLabel", "Project", 3, "categories", "series"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-bar-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](14, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c6))))("series", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](22, _c12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c11)));
    } }, directives: [_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr;\n  margin: 3%;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9kZW1vLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsbUJBQU87VUFBUCxPQUFPO0FBQ1QiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2RlbW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBtYXJnaW46IDMlO1xuICBmbGV4OiAxO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-demo',
                templateUrl: './demo.component.html',
                styleUrls: ['./demo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jon/GitHub/dynamic-bar-chart/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);