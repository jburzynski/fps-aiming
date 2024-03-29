const UserInputController = function (ui, world, hud, viewport) {
    this.ui = ui;
    this.world = world;
    this.hud = hud;
    this.viewport = viewport;

    this.state = {
        'pause': true,
        'keydown': null
    };

    let mouseMovementXInFrame = 0;
    let mouseMovementYInFrame = 0;

    document.addEventListener('mousemove', event => {
        mouseMovementXInFrame += event.movementX;
        mouseMovementYInFrame += event.movementY;
    });

    document.addEventListenerExperimental('pointerlockchange', event => {
        this.state.pause = !this.state.pause;

        if (!this.state.pause) {
            this.viewport.show();
            this.hud.initialize();
            this.world.initialize();
            this.viewport.initialize();
        } else {
            this.viewport.hide();
        }
    });
    document.addEventListenerExperimental('pointerlockerror', event => this.state.pause = true);

    document.addEventListener('keydown', event => {
        this.state.keydown = event.char || event.key;

        if (this.state.keydown === 'p' && this.state.pause) {
            mouseMovementXInFrame = 0;
            mouseMovementYInFrame = 0;
            window.requestPointerLock(document.getElementById('body'));
            this.viewport.requestFullscreen();
        } else if (this.state.keydown === 'o') {
            this.world.state.enemyFrozen = !this.world.state.enemyFrozen;
        }
    });
    document.addEventListener('keyup', event => this.state.keydown = null);

    const updateKeyDown = () => {
        if (!this.state.keydown) return;

        const speed = this.ui.getSpeed();

        switch (this.state.keydown) {
            case 's':
                this.world.moveX(speed);
                break;
            case 'f':
                this.world.moveX(-speed);
                break;
        }
    };

    const updateMouseMove = () => {
        let translationX = mouseMovementXInFrame * this.ui.getSensitivity() * -1;
        let translationY = mouseMovementYInFrame * this.ui.getSensitivity() * -1;

        this.world.moveX(translationX);
        this.world.moveY(translationY);

        if (ui.getBackground()) {
            this.viewport.moveX(translationX);
            this.viewport.moveY(translationY);
        }

        mouseMovementXInFrame = 0;
        mouseMovementYInFrame = 0;
    };

    this.update = () => {
        updateKeyDown();
        updateMouseMove();
    };
};
