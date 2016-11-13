const World = function (viewport, ui) {
    this.enemy = new WorldElement('enemy');
    this.enemy.state = { hit: false };

    this.viewport = viewport;
    this.ui = ui;

    this.worldElements = [this.enemy];

    this.state = {
        enemyFrozen: false
    };

    this.moveX = translationX => {
        for (let worldElement of this.worldElements) {
            worldElement.moveX(translationX);
        }
    };

    this.moveY = translationY => {
        for (let worldElement of this.worldElements) {
            worldElement.moveY(translationY);
        }
    };

    this.initialize = () => {
        this.enemy.setWidth(this.ui.getEnemyWidth());
        this.enemy.setHeight(this.ui.getEnemyHeight());

        this.enemy.setX((this.viewport.getWidth() - this.enemy.getWidth()) / 2);
        this.enemy.setY((this.viewport.getHeight() - this.enemy.getHeight()) / 2);
    };
    this.initialize();
};
