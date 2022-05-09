//let level1 = [0, 0, 1, 1, 0, -1, -1, 0, 0, 1, 1, 0, -1, -1, 0, 0, 1, 1, 0, -1, -1, 0, 0, 1, 1, 0, -1, -1]
let level1 = [0, 0, 1, 1, 0]
let xProgression = 0
let yOffset = 0
let deltaYRunner = 0
let lastDirection = 0

led.setDisplayMode(DisplayMode.BlackAndWhite)
basic.clearScreen()

basic.forever(function () {
    // nach hinten gekippt
    if (input.rotation(Rotation.Pitch) < 0) {
    	yOffset--

        if (lastDirection === -1) {
            deltaYRunner -= 2
        } else {
            deltaYRunner -= 1
        }

        lastDirection = -1
    } else {
        yOffset++

        if (lastDirection === 1) {
            deltaYRunner += 2
        } else {
            deltaYRunner += 1
        }

        lastDirection = +1
    }

    paint()
    pause(1000);
    xProgression++;
    level1.push(randint(-1, 1))
})

function paint()
{
    basic.clearScreen()
    paintCave();
    paintRunner();
}

function paintCave()
{
    let brightness = 100

    for (let x = 0; x < 5; x++) {
        let yCave = level1.get(xProgression + x)

        if (typeof yCave === 'number') {
            led.plotBrightness(x, 1 + yCave + yOffset, brightness)
            led.plotBrightness(x, 5 + yCave + yOffset, brightness)
        }
    }
}

function paintRunner()
{
    let brightness = 210
    led.plotBrightness(0, 3 + deltaYRunner, brightness)

}