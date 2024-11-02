
// the game & player spawning
let projectile = null
function doSomething () {
    let player2 = sprites.create(assets.image`player`, SpriteKind.Player)
    scene.setBackgroundImage(assets.image`bg`)
    player2.setPosition(16, 79)
    controller.player1.moveSprite(player2, 50, 0)
    player2.setStayInScreen(true)
    sprites.destroy(textSprite)
    
    let player3 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player3.setPosition(134, 79)
    controller.player2.moveSprite(player3, 50, 0)
    player3.setStayInScreen(true)
}
let player2: Sprite = null
let projectile2: Sprite = null
let Lastpressed = 0
let Cooldown = 0

// start
scene.setBackgroundImage(assets.image`maintitle`)
let textSprite = textsprite.create("TAHNK")
Cooldown = 3000
textSprite.setPosition(74, 22)
game.showLongText("Start", DialogLayout.Bottom)
doSomething()

// when 'A' button is pressed aka gun
//controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - Lastpressed >= Cooldown) {
        projectile2 = sprites.createProjectileFromSprite(assets.image`playershell`, player2, 200, 0)
        Lastpressed = game.runtime()
    }
//})

// animations
characterAnimations.loopFrames(
    player2,
    assets.animation`tank-moveR`,
    200,
    characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
    player2,
    assets.animation`tank-moveL`,
    200,
    characterAnimations.rule(Predicate.MovingLeft)
)


//testing
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function() {
    if (game.runtime() - Lastpressed >= Cooldown) {
        projectile2 = sprites.createProjectileFromSprite(assets.image`playershell`, player2, 200, 0)
        Lastpressed = game.runtime()
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - Lastpressed >= Cooldown) {
        let projectile3 = sprites.createProjectileFromSprite(assets.image`playershell2`, null, -200, 0)
        Lastpressed = game.runtime()
    }
})