const WorldElement = function (elementId) {
    this.element = document.getElementById(elementId);

    this.moveX = translationX => {
        this.setX(this.getX() + translationX);
    };

    this.moveY = translationY => {
        this.setY(this.getY() + translationY);
    };

    this.getX = () => {
        let style = window.getComputedStyle(this.element);
        let left = style.left.substr(0, style.left.length - 2);
        return parseFloat(left);
    };

    this.setX = x => {
        this.element.style.left = x + 'px';
    };

    this.getY = () => {
        let style = window.getComputedStyle(this.element);
        let top = style.top.substr(0, style.top.length - 2);
        return parseFloat(top);
    };

    this.setY = y => {
        this.element.style.top = y + 'px';
    };

    this.getWidth = () => {
        return this.element.offsetWidth;
    };

    this.setWidth = value => {
        this.element.style.width = value + 'px';
    };

    this.getHeight = () => {
        return this.element.offsetHeight;
    };

    this.setHeight = value => {
        this.element.style.height = value + 'px';
    };
};
