const BoundingBox = function (p1, p2) {
    /*

     p1-------
     |       |
     |       |
     |       |
     -------p2

     */

    this.p1 = p1;
    this.p2 = p2;

    this.contains = point => {
        return point.x >= p1.x &&
            point.x <= p2.x &&
            point.y >= p1.y &&
            point.y <= p2.y;
    };
};
