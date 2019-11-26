basic.forever(function () {
    for (let i = 9; i <= 1020; i += 10) {
        pins.servoWritePin(AnalogPin.P1, 180);
        basic.pause(1000)
        pins.servoSetPulse(AnalogPin.P1, i);
        basic.pause(1000);
    }
})
