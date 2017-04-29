"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var micropost_list_service_1 = require("./micropost-list.service");
var micropost_list_component_styles_1 = require("./micropost-list.component.styles");
var MicropostListComponent = (function () {
    function MicropostListComponent(userMicropostService, micropostService, userService, errorHandler) {
        this.userMicropostService = userMicropostService;
        this.micropostService = micropostService;
        this.userService = userService;
        this.errorHandler = errorHandler;
        this.styles = micropost_list_component_styles_1.styles;
        this.posts = [];
        this.noMorePosts = false;
    }
    MicropostListComponent.prototype.ngOnInit = function () {
        this.list();
        this.loadUserStats();
    };
    MicropostListComponent.prototype.delete = function (postId) {
        var _this = this;
        if (!window.confirm('Are you sure?'))
            return;
        this.micropostService.delete(postId)
            .subscribe(function () {
        }, function (e) { return _this.errorHandler.handle(e); }, function () { return _this.posts = _this.posts.filter(function (p) { return p.id !== postId; }); });
    };
    MicropostListComponent.prototype.loadMore = function () {
        var lastPost = this.posts[this.posts.length - 1];
        if (!lastPost)
            return false;
        this.list(lastPost.id);
    };
    MicropostListComponent.prototype.list = function (maxId) {
        var _this = this;
        if (maxId === void 0) { maxId = null; }
        this.userMicropostService.list(this.userId, { maxId: maxId, count: 5 })
            .subscribe(function (posts) {
            _this.posts = _this.posts.concat(posts);
            _this.noMorePosts = posts.length === 0;
        }, function (e) { return _this.errorHandler.handle(e); });
    };
    MicropostListComponent.prototype.loadUserStats = function () {
        var _this = this;
        this.userService.get(this.userId)
            .subscribe(function (user) {
            _this.userStats = user.userStats;
        }, function (e) { return _this.errorHandler.handle(e); });
    };
    __decorate([
        core_1.Input()
    ], MicropostListComponent.prototype, "userId", void 0);
    MicropostListComponent = __decorate([
        core_1.Component({
            selector: 'mpt-micropost-list',
            templateUrl: 'micropost-list.component.html',
            providers: [micropost_list_service_1.MicropostListService],
        })
    ], MicropostListComponent);
    return MicropostListComponent;
}());
exports.MicropostListComponent = MicropostListComponent;
