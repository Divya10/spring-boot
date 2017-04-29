"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = require("@angular/common");
var ng_module_1 = require("@angular/core/src/metadata/ng_module");
var pipes_1 = require("./pipes");
var gravatar_component_1 = require("./gravatar/gravatar.component");
var pager_component_1 = require("./pager/pager.component");
var follow_btn_module_1 = require("./follow-btn/follow-btn.module");
var follow_btn_component_1 = require("./follow-btn/follow-btn.component");
var styles_directive_1 = require("./directives/styles.directive");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        ng_module_1.NgModule({
            imports: [
                common_1.CommonModule,
                follow_btn_module_1.FollowBtnModule,
            ],
            declarations: [
                pager_component_1.PagerComponent,
                gravatar_component_1.GravatarComponent,
                styles_directive_1.StylesDirective,
                pipes_1.PluralizePipe,
                pipes_1.TimeAgoPipe,
            ],
            exports: [
                gravatar_component_1.GravatarComponent,
                pager_component_1.PagerComponent,
                follow_btn_component_1.FollowBtnComponent,
                styles_directive_1.StylesDirective,
                pipes_1.PluralizePipe,
                pipes_1.TimeAgoPipe,
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
