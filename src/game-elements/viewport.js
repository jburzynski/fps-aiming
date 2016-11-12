const Viewport = function (elementId) {
    this.element = document.getElementById(elementId);

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

    this.moveX = translationX => {
        let style = window.getComputedStyle(this.element);
        let backgroundX = parseInt(style['background-position-x']) + translationX;
        this.element.style['background-position-x'] = backgroundX + 'px';
    };

    this.moveY = translationY => {
        let style = window.getComputedStyle(this.element);
        let backgroundY = parseInt(style['background-position-y']) + translationY;
        this.element.style['background-position-y'] = backgroundY + 'px';
    };

    this.requestFullscreen = () => {
        const func = this.element.webkitRequestFullscreen
            || this.element.msRequestFullscreen
            || this.element.mozRequestFullscreen
            || this.element.requestFullscreen;
        func.call(this.element);
    };

    this.show = () => {
        this.setWidth(screen.availWidth);
        this.setHeight(screen.availHeight);
    };

    this.hide = () => {
        this.setWidth(window.innerWidth);
        this.setHeight(100);
    };

    this.getCenter = () => {
        return new Point(
            this.getWidth() / 2,
            this.getHeight() / 2
        );
    };
};
