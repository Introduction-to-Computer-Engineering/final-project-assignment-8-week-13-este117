basic.forever(function () {
    let value = pins.i2cReadNumber(0x19, NumberFormat.Int8LE, false)
    basic.showNumber(value)
    basic.pause(300)
})
