"use strict";
var http_1 = require("@angular/http");
exports.objToSearchParams = function (obj) {
    var params = new http_1.URLSearchParams();
    for (var k in obj) {
        if (obj[k])
            params.append(k, obj[k]);
    }
    return params;
};
