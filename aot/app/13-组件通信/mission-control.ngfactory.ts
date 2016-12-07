/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/13-组件通信/mission-control';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../app/13-组件通信/mission.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '../../../app/13-组件通信/mission-astronaut';
import * as import15 from './mission-astronaut.ngfactory';
export class Wrapper_MissionControlComponent {
  /*private*/ _eventHandler:Function;
  context:import0.MissionControlComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.MissionControlComponent(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_MissionControlComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_MissionControlComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.MissionControlComponent>;
  _MissionService_0_3:import5.MissionService;
  _MissionControlComponent_0_4:Wrapper_MissionControlComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_MissionControlComponent_Host0,renderType_MissionControlComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'mission-control',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_MissionControlComponent0(this.viewUtils,this,0,this._el_0);
    this._MissionService_0_3 = new import5.MissionService();
    this._MissionControlComponent_0_4 = new Wrapper_MissionControlComponent(this._MissionService_0_3);
    this.compView_0.create(this._MissionControlComponent_0_4.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._MissionControlComponent_0_4.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import5.MissionService) && (0 === requestNodeIndex))) { return this._MissionService_0_3; }
    if (((token === import0.MissionControlComponent) && (0 === requestNodeIndex))) { return this._MissionControlComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MissionControlComponent_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const MissionControlComponentNgFactory:import8.ComponentFactory<import0.MissionControlComponent> = new import8.ComponentFactory<import0.MissionControlComponent>('mission-control',View_MissionControlComponent_Host0,import0.MissionControlComponent);
const styles_MissionControlComponent:any[] = ([] as any[]);
var renderType_MissionControlComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_MissionControlComponent,{});
export class View_MissionControlComponent0 extends import1.AppView<import0.MissionControlComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import9.ViewContainer;
  _TemplateRef_7_5:any;
  _NgFor_7_6:import10.Wrapper_NgFor;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _anchor_14:any;
  /*private*/ _vc_14:import9.ViewContainer;
  _TemplateRef_14_5:any;
  _NgFor_14_6:import10.Wrapper_NgFor;
  _text_15:any;
  _text_16:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_MissionControlComponent0,renderType_MissionControlComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'h2',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'Mission Control',(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,parentRenderNode,'button',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'Announce mission',(null as any));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_7 = new import9.ViewContainer(7,(null as any),this,this._anchor_7);
    this._TemplateRef_7_5 = new import11.TemplateRef_(this,7,this._anchor_7);
    this._NgFor_7_6 = new import10.Wrapper_NgFor(this._vc_7.vcRef,this._TemplateRef_7_5,this.parentView.injectorGet(import12.IterableDiffers,this.parentIndex),this.ref);
    this._text_8 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,parentRenderNode,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'History',(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,parentRenderNode,'ul',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'\n      ',(null as any));
    this._anchor_14 = this.renderer.createTemplateAnchor(this._el_12,(null as any));
    this._vc_14 = new import9.ViewContainer(14,12,this,this._anchor_14);
    this._TemplateRef_14_5 = new import11.TemplateRef_(this,14,this._anchor_14);
    this._NgFor_14_6 = new import10.Wrapper_NgFor(this._vc_14.vcRef,this._TemplateRef_14_5,this.parentView.injectorGet(import12.IterableDiffers,this.parentIndex),this.ref);
    this._text_15 = this.renderer.createText(this._el_12,'\n    ',(null as any));
    this._text_16 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_4,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_4));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._anchor_14,
      this._text_15,
      this._text_16
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import13.NgFor) && (7 === requestNodeIndex))) { return this._NgFor_7_6.context; }
    if (((token === import11.TemplateRef) && (14 === requestNodeIndex))) { return this._TemplateRef_14_5; }
    if (((token === import13.NgFor) && (14 === requestNodeIndex))) { return this._NgFor_14_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7_0_0:any = this.context.astronauts;
    this._NgFor_7_6.check_ngForOf(currVal_7_0_0,throwOnChange,false);
    this._NgFor_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    const currVal_14_0_0:any = this.context.history;
    this._NgFor_14_6.check_ngForOf(currVal_14_0_0,throwOnChange,false);
    this._NgFor_14_6.ngDoCheck(this,this._anchor_14,throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._vc_14.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_7.destroyNestedViews();
    this._vc_14.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 7)) { return new View_MissionControlComponent1(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    if ((nodeIndex == 14)) { return new View_MissionControlComponent2(this.viewUtils,this,14,this._anchor_14,this._vc_14); }
    return (null as any);
  }
  handleEvent_4(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.announce()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_MissionControlComponent1 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import14.MissionAstronautComponent>;
  _MissionAstronautComponent_0_3:import15.Wrapper_MissionAstronautComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_MissionControlComponent1,renderType_MissionControlComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'my-astronaut',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import15.View_MissionAstronautComponent0(this.viewUtils,this,0,this._el_0);
    this._MissionAstronautComponent_0_3 = new import15.Wrapper_MissionAstronautComponent(this.parentView.injectorGet(import5.MissionService,this.parentIndex));
    this._text_1 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_0.create(this._MissionAstronautComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.MissionAstronautComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MissionAstronautComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit;
    this._MissionAstronautComponent_0_3.check_astronaut(currVal_0_0_0,throwOnChange,false);
    this._MissionAstronautComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._MissionAstronautComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_MissionControlComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_MissionControlComponent2,renderType_MissionControlComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'',this.context.$implicit,'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}