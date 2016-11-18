(function () {
    let fps = 60;
    let delayBase = 1000;
    let initialDirectionChangeProbability = 0.5;

    let direction = 1;
    let directionChangeProbability = initialDirectionChangeProbability;
    let framesElapsed = 0;
    let framesHit = 0;

    let ui = new Ui();
    let viewport = new Viewport('viewport', ui);
    let hud = new Hud(viewport);
    let world = new World(viewport, ui);
    let userInputController = new UserInputController(ui, world, hud, viewport);
    let collisionDetector = new CollisionDetector(world, viewport);

    let updateEnemyPosition = () => {
        let translationX = ui.getSpeed() * direction;
        if (!world.state.enemyFrozen) world.enemy.moveX(translationX);

        if (world.enemy.getX() > 2 * viewport.getWidth()) {
            world.enemy.setX(world.enemy.getX() - 2 * viewport.getWidth());
        } else if (world.enemy.getX() < -viewport.getWidth()) {
            world.enemy.setX(world.enemy.getX() + 2 * viewport.getWidth());
        }
    };

    let updateHitState = () => {
        if (world.enemy.state.hit) {
            hud.setCrosshairHit();
            ++framesHit;
        } else {
            hud.setCrosshairRest();
        }
    };

    let mainLoop = () => {
        if (!userInputController.state.pause) {
            updateEnemyPosition();
            userInputController.update();
            collisionDetector.update();
            updateHitState();

            ++framesElapsed;

            hud.setAccuracy(Math.round(framesHit / framesElapsed * 100));
        } else {
            framesElapsed = 0;
            framesHit = 0;
        }

        setTimeout(mainLoop, 1000 / fps);
    };

    let directionChangeLoop = () => {
        let delay = 100;
        if (!userInputController.state.pause) {
            if (Math.random() < directionChangeProbability) {
                direction *= -1;
                directionChangeProbability = initialDirectionChangeProbability;
            } else {
                directionChangeProbability += (1 - directionChangeProbability) / 2;
            }

            let jitter = ui.getJitter();
            let entropy = ui.getEntropy();

            delay = delayBase / jitter;
            let delta = entropy * delayBase * (2 * Math.random() - 1);
            delay += delta;
        }

        setTimeout(directionChangeLoop, delay);
    };

    mainLoop();
    directionChangeLoop();
})();
