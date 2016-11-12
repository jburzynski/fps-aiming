var Hud = function (viewport) {
    this.viewport = viewport;
    this.crosshair = new HudElement('crosshair');
    this.statsBox = new HudElement('stats-box');
    this.accuracy = new HudElement('accuracy');

    const crosshairRestColor = '#ff0';
    const crosshairHitColor = '#f00';

    this.setCrosshairHit = () => {
        let style = window.getComputedStyle(this.crosshair.element);
        this.crosshair.element.style['border-color'] = crosshairHitColor;
    };

    this.setCrosshairRest = () => {
        let style = window.getComputedStyle(this.crosshair.element);
        this.crosshair.element.style['border-color'] = crosshairRestColor;
    };

    this.setAccuracy = value => {
        this.accuracy.element.innerHTML = value + '%';
    };

    this.initialize = () => {
        this.crosshair.setX((this.viewport.getWidth() - this.crosshair.getWidth()) / 2);
        this.crosshair.setY((this.viewport.getHeight() - this.crosshair.getHeight()) / 2);

        this.statsBox.setX(this.viewport.getWidth() - this.statsBox.getWidth());
        this.statsBox.setY(0);
    };
    this.initialize();
};
