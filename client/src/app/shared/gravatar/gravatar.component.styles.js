"use strict";
var aphrodite_1 = require("aphrodite");
var mixin_styles_1 = require("../../styles/mixin.styles");
exports.styles = aphrodite_1.StyleSheet.create({
    wrapper: {
        position: 'relative',
    },
    loading: mixin_styles_1.spinner(24),
});
