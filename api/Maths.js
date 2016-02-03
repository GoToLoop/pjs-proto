var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Maths = (function (_super) {
    __extends(Maths, _super);
    function Maths() {
        _super.apply(this, arguments);
    }
    Maths.prototype.random = function () { return Math.random(); };
    Maths.prototype.lerp = function (start, stop, amt) { return amt * (stop - start) + start; };
    Maths.prototype.sq = function (n) { return n * n; };
    Maths.random = Maths.prototype.random;
    Maths.lerp = Maths.prototype.lerp;
    Maths.sq = Maths.prototype.sq;
    return Maths;
}(PConstants));
Object.freeze(Object.freeze(Maths).prototype);
var StrictMath = Maths;
