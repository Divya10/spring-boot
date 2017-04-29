"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var gravatar_component_styles_1 = require("./gravatar.component.styles");
var GravatarComponent = (function () {
    function GravatarComponent() {
        this.styles = gravatar_component_styles_1.styles;
        this.isLoading = true;
    }
    GravatarComponent.prototype.ngOnChanges = function (changes) {
        if (this.hash) {
            this.imageUrl = "https://secure.gravatar.com/avatar/" + this.hash + "?s=" + this.size;
        }
    };
    GravatarComponent.prototype.stopLoading = function () {
        this.isLoading = false;
    };
    __decorate([
        core_1.Input()
    ], GravatarComponent.prototype, "hash", void 0);
    __decorate([
        core_1.Input()
    ], GravatarComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input()
    ], GravatarComponent.prototype, "alt", void 0);
    GravatarComponent = __decorate([
        core_1.Component({
            selector: 'mpt-gravatar',
            templateUrl: './gravatar.component.html',
        })
    ], GravatarComponent);
    return GravatarComponent;
}());
exports.GravatarComponent = GravatarComponent;
