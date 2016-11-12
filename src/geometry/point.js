const Point = function (x, y) {
    this.x = x;
    this.y = y;

    this.add = (addX, addY) => {
        return new Point(this.x + addX, this.y + addY);
    };
};
