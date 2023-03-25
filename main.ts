controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    if (true) {
        game.gameOver(true)
        game.reset()
    } else {
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Obstacle`, SpriteKind.Player))
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Plane`, SpriteKind.Player))
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`Plane2`, SpriteKind.Player))
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`Plane3`, SpriteKind.Player))
    }
})
let Plane: Sprite = null
controller.moveSprite(Plane)
Plane = sprites.create(assets.image`Plane`, SpriteKind.Player)
