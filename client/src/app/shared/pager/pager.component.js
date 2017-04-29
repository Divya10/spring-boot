"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PagerComponent = (function () {
    function PagerComponent() {
        this.currentPage = 1;
        this.pageChanged = new core_1.EventEmitter();
    }
    PagerComponent.prototype.showPrev = function () {
        if (this.currentPage === 1)
            return;
        this.currentPage -= 1;
        this.pageChanged.emit({ page: this.currentPage });
    };
    PagerComponent.prototype.showNext = function () {
        if (this.totalPages && this.totalPages === this.currentPage)
            return;
        this.currentPage += 1;
        this.pageChanged.emit({ page: this.currentPage });
    };
    __decorate([
        core_1.Input()
    ], PagerComponent.prototype, "currentPage", void 0);
    __decorate([
        core_1.Input()
    ], PagerComponent.prototype, "totalPages", void 0);
    __decorate([
        core_1.Output()
    ], PagerComponent.prototype, "pageChanged", void 0);
    PagerComponent = __decorate([
        core_1.Component({
            selector: 'mpt-pager',
            templateUrl: './pager.component.html',
        })
    ], PagerComponent);
    return PagerComponent;
}());
exports.PagerComponent = PagerComponent;
