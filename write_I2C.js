basic.forever(function () {
    pins.i2cWriteNumber(0x17, 11, NumberFormat.Int8LE)
})
