sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.zapped.play()
    otherSprite.destroy(effects.spray, 500)
})
let babyFish: Sprite = null
scene.setBackgroundColor(9)
let seaCreature = sprites.create(assets.image`SeaCreature`, SpriteKind.Player)
seaCreature.scale = 5
controller.moveSprite(seaCreature)
seaCreature.setStayInScreen(false)
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    babyFish = sprites.createProjectileFromSide(assets.image`babyFish`, 50, 0)
    babyFish.setPosition(0, randint(0, 120))
})
