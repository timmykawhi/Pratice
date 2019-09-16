var Extend = function() {

};
Extend.extend = function(prototype, static) {
    var sub = {};
    sub.prototype.constructor = this.prototype.constructor;
    sub.prototype = this.prototype();
    return sub;
};