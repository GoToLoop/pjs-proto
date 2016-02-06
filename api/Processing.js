var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Processing = (function (_super) {
    __extends(Processing, _super);
    function Processing() {
        _super.call(this);
    }
    Processing.PVector = typeof pjs !== 'undefined' && pjs.classes.PVector;
    return Processing;
}(Maths));
