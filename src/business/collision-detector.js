const CollisionDetector = function (world, viewport) {
    this.world = world;
    this.viewport = viewport;

    this.update = () => {
        const position = new Point(world.enemy.getX(), world.enemy.getY());
        const boundingBox = new BoundingBox(
            position,
            position.add(this.world.enemy.getWidth(), this.world.enemy.getHeight())
        );

        this.world.enemy.state.hit = boundingBox.contains(this.viewport.getCenter());
    };
};
