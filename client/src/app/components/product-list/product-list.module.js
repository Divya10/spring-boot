"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = require("@angular/common");
var ng_module_1 = require("@angular/core/src/metadata/ng_module");
var shared_1 = require("../../shared");
var micropost_list_component_1 = require("./micropost-list.component");
var micropost_list_service_1 = require("./micropost-list.service");
var MicropostListModule = (function () {
    function MicropostListModule() {
    }
    MicropostListModule = __decorate([
        ng_module_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_1.SharedModule,
            ],
            declarations: [
                micropost_list_component_1.MicropostListComponent,
            ],
            providers: [
                micropost_list_service_1.MicropostListService,
            ],
            exports: [
                micropost_list_component_1.MicropostListComponent,
            ]
        })
    ], MicropostListModule);
    return MicropostListModule;
}());
exports.MicropostListModule = MicropostListModule;
