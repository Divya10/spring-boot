"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Subject_1 = require("rxjs/Subject");
var core_1 = require("@angular/core");
var jwtDecode = require('jwt-decode');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.authEvents = new Subject_1.Subject();
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var body = {
            username: email,
            password: password,
        };
        return this.http.post('http://localhost:8080/auth', body).do(function (resp) {
            localStorage.setItem('jwt', resp.json().token);
            _this.authEvents.next(new DidLogin());
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('jwt');
        this.authEvents.next(new DidLogout());
    };
    AuthService.prototype.isSignedIn = function () {
        return localStorage.getItem('jwt') !== null;
    };
    AuthService.prototype.isMyself = function (user) {
        if (!this.isSignedIn())
            return null; // It means unknown.
        var decoded = jwtDecode(localStorage.getItem('jwt'));
        return user.id + '' === decoded.sub;
    };
    Object.defineProperty(AuthService.prototype, "events", {
        get: function () {
            return this.authEvents;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
var DidLogin = (function () {
    function DidLogin() {
    }
    return DidLogin;
}());
exports.DidLogin = DidLogin;
var DidLogout = (function () {
    function DidLogout() {
    }
    return DidLogout;
}());
exports.DidLogout = DidLogout;
