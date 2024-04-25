basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Confused)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
