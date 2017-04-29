"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = require("@angular/common");
var ng_module_1 = require("@angular/core/src/metadata/ng_module");
var follow_btn_component_1 = require("./follow-btn.component");
var follow_btn_service_1 = require("./follow-btn.service");
var FollowBtnModule = (function () {
    function FollowBtnModule() {
    }
    FollowBtnModule = __decorate([
        ng_module_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                follow_btn_component_1.FollowBtnComponent,
            ],
            providers: [
                follow_btn_service_1.FollowBtnService,
            ],
            exports: [
                follow_btn_component_1.FollowBtnComponent,
            ]
        })
    ], FollowBtnModule);
    return FollowBtnModule;
}());
exports.FollowBtnModule = FollowBtnModule;
