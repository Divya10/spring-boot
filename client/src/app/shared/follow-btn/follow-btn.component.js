"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FollowBtnComponent = (function () {
    function FollowBtnComponent(followBtnService, userService, authService, errorHandler) {
        this.followBtnService = followBtnService;
        this.userService = userService;
        this.authService = authService;
        this.errorHandler = errorHandler;
        this.updated = new core_1.EventEmitter();
        this.busy = false;
    }
    FollowBtnComponent.prototype.ngOnChanges = function (changes) {
        if (this.followerId) {
            this.loadCurrentStatus();
        }
    };
    FollowBtnComponent.prototype.follow = function () {
        var _this = this;
        this.busy = true;
        this.followBtnService.follow(this.followerId)
            .finally(function () { return _this.busy = false; })
            .subscribe(function () {
            _this.canShowFollowBtn = !_this.canShowFollowBtn;
            _this.canShowUnfollowBtn = !_this.canShowUnfollowBtn;
            _this.updated.emit({});
        }, function (e) { return _this.errorHandler.handle(e); });
    };
    FollowBtnComponent.prototype.unfollow = function () {
        var _this = this;
        this.busy = true;
        this.followBtnService.unfollow(this.followerId)
            .finally(function () { return _this.busy = false; })
            .subscribe(function () {
            _this.canShowFollowBtn = !_this.canShowFollowBtn;
            _this.canShowUnfollowBtn = !_this.canShowUnfollowBtn;
            _this.updated.emit({});
        }, function (e) { return _this.errorHandler.handle(e); });
    };
    FollowBtnComponent.prototype.loadCurrentStatus = function () {
        var _this = this;
        this.busy = true;
        this.userService.get(this.followerId)
            .finally(function () { return _this.busy = false; })
            .subscribe(function (user) {
            _this.canShowFollowBtn = _this._canShowFollowBtn(user);
            _this.canShowUnfollowBtn = _this._canShowUnfollowBtn(user);
        }, function (e) { return _this.errorHandler.handle(e); });
    };
    FollowBtnComponent.prototype._canShowFollowBtn = function (user) {
        if (this.authService.isMyself(user) === null)
            return false; // not signed in
        if (this.authService.isMyself(user) === true)
            return false; // myself
        if (user.isFollowedByMe === true)
            return false; // already followed
        return true;
    };
    FollowBtnComponent.prototype._canShowUnfollowBtn = function (user) {
        if (this.authService.isMyself(user) === null)
            return false; // not signed in
        if (this.authService.isMyself(user) === true)
            return false; // myself
        if (user.isFollowedByMe === false)
            return false; // not followed yet
        return true;
    };
    __decorate([
        core_1.Input()
    ], FollowBtnComponent.prototype, "followerId", void 0);
    __decorate([
        core_1.Output()
    ], FollowBtnComponent.prototype, "updated", void 0);
    FollowBtnComponent = __decorate([
        core_1.Component({
            selector: 'mpt-follow-btn',
            templateUrl: './follow-btn.component.html',
        })
    ], FollowBtnComponent);
    return FollowBtnComponent;
}());
exports.FollowBtnComponent = FollowBtnComponent;
