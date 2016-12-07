/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../app/02-内置指令/ngIf');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/change_detection');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('@angular/core/src/linker/view_container');
var import9 = require('../../node_modules/@angular/common/src/directives/ng_if.ngfactory');
var import10 = require('@angular/core/src/linker/template_ref');
var import11 = require('@angular/common/src/directives/ng_if');
var Wrapper_ngIfComponent = (function () {
    function Wrapper_ngIfComponent() {
        this._changed = false;
        this.context = new import0.ngIfComponent();
    }
    Wrapper_ngIfComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ngIfComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ngIfComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_ngIfComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ngIfComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ngIfComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ngIfComponent;
}());
exports.Wrapper_ngIfComponent = Wrapper_ngIfComponent;
var renderType_ngIfComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ngIfComponent_Host0 = (function (_super) {
    __extends(View_ngIfComponent_Host0, _super);
    function View_ngIfComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ngIfComponent_Host0, renderType_ngIfComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_ngIfComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ngIf', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ngIfComponent0(this.viewUtils, this, 0, this._el_0);
        this._ngIfComponent_0_3 = new Wrapper_ngIfComponent();
        this.compView_0.create(this._ngIfComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ngIfComponent_0_3.context);
    };
    View_ngIfComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ngIfComponent) && (0 === requestNodeIndex))) {
            return this._ngIfComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ngIfComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ngIfComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_ngIfComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ngIfComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ngIfComponent_Host0;
}(import1.AppView));
exports.ngIfComponentNgFactory = new import7.ComponentFactory('ngIf', View_ngIfComponent_Host0, import0.ngIfComponent);
var styles_ngIfComponent = ['textarea[_ngcontent-%COMP%] {\n            width: 100%;\n            border:1px solid #ccc;\n            overflow: hidden;\n        }\n        .content[_ngcontent-%COMP%] {\n            margin: 10px 0;\n        }'];
var renderType_ngIfComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_ngIfComponent, {});
var View_ngIfComponent0 = (function (_super) {
    __extends(View_ngIfComponent0, _super);
    function View_ngIfComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ngIfComponent0, renderType_ngIfComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_ngIfComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'h2', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, 'ngIf', null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_4 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'content'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._vc_6 = new import8.ViewContainer(6, 4, this, this._anchor_6);
        this._TemplateRef_6_5 = new import10.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import9.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_4, '\n    ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._vc_8 = new import8.ViewContainer(8, 4, this, this._anchor_8);
        this._TemplateRef_8_5 = new import10.TemplateRef_(this, 8, this._anchor_8);
        this._NgIf_8_6 = new import9.Wrapper_NgIf(this._vc_8.vcRef, this._TemplateRef_8_5);
        this._text_9 = this.renderer.createText(this._el_4, '\n', null);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_11 = import3.createRenderElement(this.renderer, parentRenderNode, 'textarea', new import3.InlineArray4(4, 'disabled', '', 'rows', '2'), null);
        this._text_12 = this.renderer.createText(this._el_11, '<div *ngIf="flag">显示</div>\n<div *ngIf="!flag">不显示</div>\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n\n    ', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._anchor_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13
        ]), null);
        return null;
    };
    View_ngIfComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import11.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        if (((token === import10.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import11.NgIf) && (8 === requestNodeIndex))) {
            return this._NgIf_8_6.context;
        }
        return notFoundResult;
    };
    View_ngIfComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6_0_0 = this.context.flag;
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        var currVal_8_0_0 = !this.context.flag;
        this._NgIf_8_6.check_ngIf(currVal_8_0_0, throwOnChange, false);
        this._NgIf_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
    };
    View_ngIfComponent0.prototype.destroyInternal = function () {
        this._vc_6.destroyNestedViews();
        this._vc_8.destroyNestedViews();
    };
    View_ngIfComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_ngIfComponent1(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        if ((nodeIndex == 8)) {
            return new View_ngIfComponent2(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        return null;
    };
    return View_ngIfComponent0;
}(import1.AppView));
exports.View_ngIfComponent0 = View_ngIfComponent0;
var View_ngIfComponent1 = (function (_super) {
    __extends(View_ngIfComponent1, _super);
    function View_ngIfComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_ngIfComponent1, renderType_ngIfComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_ngIfComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '显示', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_ngIfComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ngIfComponent1;
}(import1.AppView));
var View_ngIfComponent2 = (function (_super) {
    __extends(View_ngIfComponent2, _super);
    function View_ngIfComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_ngIfComponent2, renderType_ngIfComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_ngIfComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '不显示', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_ngIfComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ngIfComponent2;
}(import1.AppView));
//# sourceMappingURL=ngIf.ngfactory.js.map