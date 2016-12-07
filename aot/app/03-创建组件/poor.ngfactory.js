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
var import0 = require('../../../app/03-创建组件/poor');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/change_detection');
var import7 = require('@angular/core/src/linker/component_factory');
var Wrapper_PoorComponent = (function () {
    function Wrapper_PoorComponent() {
        this._changed = false;
        this.context = new import0.PoorComponent();
    }
    Wrapper_PoorComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PoorComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_PoorComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_PoorComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PoorComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PoorComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PoorComponent;
}());
exports.Wrapper_PoorComponent = Wrapper_PoorComponent;
var renderType_PoorComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_PoorComponent_Host0 = (function (_super) {
    __extends(View_PoorComponent_Host0, _super);
    function View_PoorComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_PoorComponent_Host0, renderType_PoorComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_PoorComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'poor', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_PoorComponent0(this.viewUtils, this, 0, this._el_0);
        this._PoorComponent_0_3 = new Wrapper_PoorComponent();
        this.compView_0.create(this._PoorComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._PoorComponent_0_3.context);
    };
    View_PoorComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.PoorComponent) && (0 === requestNodeIndex))) {
            return this._PoorComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_PoorComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._PoorComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_PoorComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_PoorComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PoorComponent_Host0;
}(import1.AppView));
exports.PoorComponentNgFactory = new import7.ComponentFactory('poor', View_PoorComponent_Host0, import0.PoorComponent);
var styles_PoorComponent = [];
var renderType_PoorComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_PoorComponent, {});
var View_PoorComponent0 = (function (_super) {
    __extends(View_PoorComponent0, _super);
    function View_PoorComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_PoorComponent0, renderType_PoorComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_PoorComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '这里是poor content', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    return View_PoorComponent0;
}(import1.AppView));
exports.View_PoorComponent0 = View_PoorComponent0;
//# sourceMappingURL=poor.ngfactory.js.map