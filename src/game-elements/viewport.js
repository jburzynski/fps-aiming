const Viewport = function (elementId, ui) {
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
        let values = style.backgroundPosition.split(' ');
        let backgroundX = parseFloat(values[0]) + translationX;
        this.element.style.backgroundPosition = backgroundX + 'px' + ' ' + parseFloat(values[1]) + 'px';
    };

    this.moveY = translationY => {
        let style = window.getComputedStyle(this.element);
        let values = style.backgroundPosition.split(' ');
        let backgroundY = parseFloat(values[1]) + translationY;
        this.element.style.backgroundPosition = parseFloat(values[0]) + 'px' + ' ' + backgroundY + 'px';
    };

    this.requestFullscreen = () => {
        const func = this.element.requestFullscreen ||
            this.element.webkitRequestFullscreen ||
            this.element.msRequestFullscreen ||
            this.element.mozRequestFullScreen;
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

    this.initialize = () => {
        if (ui.getBackground()) {
            this.element.style.background = "url('./images/background.jpg') repeat";
        } else {
            this.element.style['background-image'] = 'none';
        }
    };
};
