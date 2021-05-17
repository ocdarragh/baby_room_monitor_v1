basic.showString("Baby Monitor")
basic.forever(function () {
    if (input.temperature() < 18) {
        basic.showIcon(IconNames.Confused)
    } else if (input.temperature() > 22) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
