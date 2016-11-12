const HudElement = function (elementId) {
    this.element = document.getElementById(elementId);

    this.setX = x => {
        this.element.style.left = x + 'px';
    };

    this.setY = y => {
        this.element.style.top = y + 'px';
    };

    this.getWidth = () => {
        return this.element.offsetWidth;
    };

    this.getHeight = () => {
        return this.element.offsetHeight;
    };
};
