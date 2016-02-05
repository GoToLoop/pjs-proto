var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    __decorate([
        Frozen, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Maths.prototype, "random", null);
    __decorate([
        Frozen, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number, Number, Number]), 
        __metadata('design:returntype', void 0)
    ], Maths.prototype, "lerp", null);
    __decorate([
        Frozen, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number]), 
        __metadata('design:returntype', void 0)
    ], Maths.prototype, "sq", null);
    Maths = __decorate([
        Frozen, 
        __metadata('design:paramtypes', [])
    ], Maths);
    return Maths;
}(PConstants));
var StrictMath = Maths;
