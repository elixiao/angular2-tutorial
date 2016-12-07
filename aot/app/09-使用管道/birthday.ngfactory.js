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
var import0 = require('../../../app/09-使用管道/birthday');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/change_detection');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('@angular/common/src/pipes/date_pipe');
var import9 = require('@angular/core/src/i18n/tokens');
var Wrapper_BirthdayComponent = (function () {
    function Wrapper_BirthdayComponent() {
        this._changed = false;
        this.context = new import0.BirthdayComponent();
    }
    Wrapper_BirthdayComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_BirthdayComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_BirthdayComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_BirthdayComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_BirthdayComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_BirthdayComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_BirthdayComponent;
}());
exports.Wrapper_BirthdayComponent = Wrapper_BirthdayComponent;
var renderType_BirthdayComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_BirthdayComponent_Host0 = (function (_super) {
    __extends(View_BirthdayComponent_Host0, _super);
    function View_BirthdayComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_BirthdayComponent_Host0, renderType_BirthdayComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_BirthdayComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'birthday', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_BirthdayComponent0(this.viewUtils, this, 0, this._el_0);
        this._BirthdayComponent_0_3 = new Wrapper_BirthdayComponent();
        this.compView_0.create(this._BirthdayComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._BirthdayComponent_0_3.context);
    };
    View_BirthdayComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.BirthdayComponent) && (0 === requestNodeIndex))) {
            return this._BirthdayComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_BirthdayComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._BirthdayComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_BirthdayComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_BirthdayComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BirthdayComponent_Host0;
}(import1.AppView));
exports.BirthdayComponentNgFactory = new import7.ComponentFactory('birthday', View_BirthdayComponent_Host0, import0.BirthdayComponent);
var styles_BirthdayComponent = [];
var renderType_BirthdayComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_BirthdayComponent, {});
var View_BirthdayComponent0 = (function (_super) {
    __extends(View_BirthdayComponent0, _super);
    function View_BirthdayComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_BirthdayComponent0, renderType_BirthdayComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_1 = import6.UNINITIALIZED;
    }
    View_BirthdayComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '', null);
        this._pipe_date_0 = new import8.DatePipe(this.parentView.injectorGet(import9.LOCALE_ID, this.parentIndex));
        this._pipe_date_0_0 = import3.pureProxy1(this._pipe_date_0.transform.bind(this._pipe_date_0));
        this.init(null, (this.renderer.directRenderer ? null : [this._text_0]), null);
        return null;
    };
    View_BirthdayComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import6.ValueUnwrapper();
        valUnwrapper.reset();
        var currVal_1 = import3.inlineInterpolate(1, '', valUnwrapper.unwrap(import3.castByValue(this._pipe_date_0_0, this._pipe_date_0.transform)(this.context.birthday)), '');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_1, currVal_1))) {
            this.renderer.setText(this._text_0, currVal_1);
            this._expr_1 = currVal_1;
        }
    };
    return View_BirthdayComponent0;
}(import1.AppView));
exports.View_BirthdayComponent0 = View_BirthdayComponent0;
//# sourceMappingURL=birthday.ngfactory.js.map