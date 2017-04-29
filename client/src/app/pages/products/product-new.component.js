"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var product_new_component_styles_1 = require("./product-new.component.styles");
var forms_1 = require("@angular/forms");
var values_1 = require("lodash/values");
var ProductNewComponent = (function () {
    function ProductNewComponent(productService, errorHandler, toastService) {
        this.productService = productService;
        this.errorHandler = errorHandler;
        this.toastService = toastService;
        this.styles = product_new_component_styles_1.styles;
        this.created = new core_1.EventEmitter();
    }
    ProductNewComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ProductNewComponent.prototype.onSubmit = function (params) {
        var _this = this;
        values_1.default(this.myForm.controls).forEach(function (c) { return c.markAsTouched(); });
        if (!this.myForm.valid)
            return;
        this.productService.create(params)
            .subscribe(function () {
            _this.toastService.success('Product Created!');
            //this.created.emit({});
        }, function (e) { return _this.errorHandler.handle(e); });
    };
    ProductNewComponent.prototype.initForm = function () {
        this.name = new forms_1.FormControl('', forms_1.Validators.compose([
            forms_1.Validators.required
        ]));
        this.category = new forms_1.FormControl('', forms_1.Validators.compose([
            forms_1.Validators.required
        ]));
        this.myForm = new forms_1.FormGroup({
            name: this.name,
            category: this.category
        });
    };
    __decorate([
        core_1.Output()
    ], ProductNewComponent.prototype, "created", void 0);
    ProductNewComponent = __decorate([
        core_1.Component({
            selector: 'product-new',
            templateUrl: 'product-new.component.html',
        })
    ], ProductNewComponent);
    return ProductNewComponent;
}());
exports.ProductNewComponent = ProductNewComponent;
